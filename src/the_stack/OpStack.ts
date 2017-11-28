import ZoneOp from './ZoneOp';
import { StreamFunction, DefaultStreamFunction, Serializable, SerializableConstructor } from './vocabulary';

export class OpStack {
  ops: [ZoneOp]

  //@TODO: implement serialization.
  reduced(at: number): StreamFunction {
    return DefaultStreamFunction
  }

  // @TODO: implement value calculation.
  constructor(ops: [ZoneOp]) {
    this.ops = ops
  }
}