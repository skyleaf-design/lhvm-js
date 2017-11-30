import ZoneOp from './ZoneOp';
import { Perceptor, DefaultPerceptor, Serializable, SerializableConstructor } from './vocabulary';

import { Add, Multiply, EnterStream, EnterZone } from './ZoneOp';

interface NumberOperation {
  (x: number, y: number): number
}

let add: NumberOperation;
add = function(x: number, y: number) {
  return x + y;
}
let mult: NumberOperation;
mult = function(x: number, y: number) {
  return x * y;
}

function combine_perceptors(operation: NumberOperation, p1: Perceptor, p2: Perceptor) : Perceptor {
  return (elapsed, x_cycle, y_cycle): number => {
    return operation(p1(elapsed, x_cycle, y_cycle), p2(elapsed, x_cycle, y_cycle));
  }
}

export class OpStack {
  ops: [ZoneOp]

  // Recursive version of reduced().
  // If the perceptor composition fails, returns the default perceptor, due to 
  // limitations in TypeScript.
  private reduce_stream(atIndex: number): [Perceptor | null, number] {
    if (this.ops[atIndex] === undefined) return [null, 0];
    const op = this.ops[atIndex];
    const next_index = atIndex - 1;

    switch (op.constructor) {
      case Add:
        const [firstPerceptorX, branch1_indexX] = this.reduce_stream(next_index);
        if (firstPerceptorX === null) { return [ null, branch1_indexX ] }
        const [secondPerceptorX, branch2_indexX] = this.reduce_stream(branch1_indexX);
        if (secondPerceptorX === null) { return [ null, branch2_indexX ] }
        return [ combine_perceptors(add, firstPerceptorX, secondPerceptorX), branch2_indexX];
      case Multiply:
        const [firstPerceptorY, branch1_indexY] = this.reduce_stream(next_index);
        if (firstPerceptorY === null) { return [ null, branch1_indexY ] }
        const [secondPerceptorY, branch2_indexY] = this.reduce_stream(branch1_indexY);
        if (secondPerceptorY === null) { return [ null, branch2_indexY ] }
        return [ combine_perceptors(add, firstPerceptorY, secondPerceptorY), branch2_indexY];
      case EnterStream:
        const stream_op = <EnterStream> op;
        return [stream_op.stream.valueAt, next_index];
      case EnterZone:
        const zone_op = <EnterZone> op;
        return [zone_op.zone.valueAt, next_index];
      default: return this.reduce_stream(next_index);
    }
  }

  //@TODO: implement serialization.
  reduced(atIndex: number): Perceptor | null {
    const target_index = atIndex !== undefined ? this.ops.length - 1 : atIndex;
    const composed_perceptor = this.reduce_stream(target_index)[0];
    return composed_perceptor;
  }

  // @TODO: implement value calculation.
  constructor(ops: [ZoneOp]) {
    this.ops = ops
  }
}