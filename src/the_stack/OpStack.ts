import ZoneOp from './ZoneOp';
import { Perceptor, DefaultPerceptor, Serializable, SerializableConstructor } from './vocabulary';

export class OpStack {
  ops: [ZoneOp]

  //@TODO: implement serialization.
  reduced(at: number): Perceptor {
    return DefaultPerceptor
  }

  // @TODO: implement value calculation.
  constructor(ops: [ZoneOp]) {
    this.ops = ops
  }
}