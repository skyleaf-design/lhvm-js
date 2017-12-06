import { ZoneOp } from './ZoneOp';
import { Perceptor, DefaultPerceptor, Serializable, SerializableConstructor } from './vocabulary';

import { ZoneOpDescriptor } from '../descriptor/ZoneOpDescriptor_pb';
import { Add, Multiply, EnterStream, EnterZone } from './ZoneOp';

import { ConstantDescriptor } from '../descriptor/ConstantDescriptor_pb';
import ConstantStream from './stream/ConstantStream';

import Grid from './zone/Grid';
import { OpStackDescriptor } from '../descriptor/OpStackDescriptor_pb';

interface NumberOperation { (x: number, y: number): number }

let add: NumberOperation;
add = function(x: number, y: number) { return x + y; }

let mult: NumberOperation;
mult = function(x: number, y: number) {
  return x * y;
}

function combine_perceptors(operation: NumberOperation, p1: Perceptor, p2: Perceptor) : Perceptor {
  return (elapsed, x_cycle, y_cycle): number => {
    const p1_result = p1(elapsed, x_cycle, y_cycle);
    const p2_result = p2(elapsed, x_cycle, y_cycle);
    const result = operation(p1_result, p2_result);
    return result;
  }
}

export default class OpStack implements Serializable {
  descriptor: OpStackDescriptor

  // Re-inflate the opstack from the opstack descriptor, which will,
  // in turn, re-inflate the ops from their descriptors, which will,
  // in turn, re-inflate the streams or zones they contain (if present)
  // from their descriptors.

  // Note that this re-renders O(n!) when we are processing the stack.
  get ops(): Array<ZoneOp> {
    return this.descriptor.getOpsList().map((zone_op_descriptor) => {
      switch (zone_op_descriptor.getOp()) {
        case ZoneOpDescriptor.ZoneOp.ADD:
          return new Add();
        case ZoneOpDescriptor.ZoneOp.MULT:
          return new Multiply();
        case ZoneOpDescriptor.ZoneOp.ENTERSTREAM:
          return new EnterStream(zone_op_descriptor);
        case ZoneOpDescriptor.ZoneOp.ENTERZONE:
          return new EnterZone(zone_op_descriptor);
        default:
          // @TODO: we should return a NOp here.
          return new Multiply();
      }
    });
  }
  // set ops(new_value: Array<ZoneOp> ) {
  //   this.descriptor.setOpsList(new_value.map((op) => {
  //     // @TODO: find out which constructor created the zone op
  //     // create a descriptor from each op.
  //     // return the descriptor.
  //   }));
  // }

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
        return [ combine_perceptors(mult, firstPerceptorY, secondPerceptorY), branch2_indexY];

      case EnterStream:
        const stream_op = <EnterStream> op;
        return [stream_op.stream.valueAt.bind(stream_op.stream), next_index];

      case EnterZone:
        const zone_op = <EnterZone> op;
        return [zone_op.zone.valueAt.bind(zone_op.zone), next_index];

      default: return this.reduce_stream(next_index);
    }
  }

  reduced(atIndex?: number): Perceptor | null {
    const target_index = atIndex === undefined ? this.ops.length - 1 : atIndex;
    const composed_perceptor = this.reduce_stream(target_index)[0];
    return composed_perceptor;
  }

  calculateGrid(elapsed: number, dimension_x: number, dimension_y: number): Grid<number> {
    if (dimension_x === 0 || dimension_y === 0) { return new Grid(0, 0, []) }
    const master = this.reduced();
    if (master === null) { return new Grid(0,0,[]) }
    const results = Array<number>();


    // @TODO: master returns null!


    for (let row_offset = 0; row_offset < dimension_y; row_offset ++) {
      for (let column_offset = 0; column_offset < dimension_x; column_offset++) {
        const x_cycle = column_offset + 1 / dimension_x;
        const y_cycle = row_offset + 1 / dimension_y;
        results.push(master(elapsed, x_cycle, y_cycle));
      }
    }
    return new Grid(dimension_x, dimension_y, results);
  }

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor?: OpStackDescriptor) {
    if (!descriptor) {
      descriptor = new OpStackDescriptor();
      descriptor.setDimensionX(24);
      descriptor.setDimensionY(24);
      descriptor.setFocusIndex(0);

      // In order to make an opstack, we need an op.
      // In order to make an op, we need a stream.
      const constant_descriptor = new ConstantDescriptor();
      constant_descriptor.setConstant(4.0);

      const op_descriptor = new ZoneOpDescriptor();
      op_descriptor.setConstantstream(constant_descriptor);
      op_descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERSTREAM);

      descriptor.setOpsList([op_descriptor]);
    }
    this.descriptor = descriptor;
  }
}