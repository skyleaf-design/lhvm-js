import { MutableStream } from '../vocabulary';
import * as uuid from 'uuid';
import { ConstantDescriptor } from '../../descriptor/ConstantDescriptor_pb';

export default class ConstantStream implements MutableStream {
  descriptor: ConstantDescriptor;

  get name(): string { return this.descriptor.getName() }
  set name(new_value: string) { this.descriptor.setName(new_value) }

  get constant(): number { return this.descriptor.getConstant() }
  set constant(new_value: number) { this.descriptor.setConstant(new_value) }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return this.descriptor.getConstant();
  }

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor = new ConstantDescriptor()) {
    descriptor.setName(descriptor.getName() || uuid.v1());
    descriptor.setConstant(descriptor.getConstant() || 1.0);
    this.descriptor = descriptor;
  }
}