import { MutableStream } from '../vocabulary';
import * as uuid from 'uuid';
import { ConstantDescriptor } from '../../descriptor/ConstantDescriptor_pb';

export interface ConstantState {
  name: string;
  constant: number;
}



export default class ConstantStream implements MutableStream, ConstantState {

  private _name: string;
  get name(): string { return this._name }
  set name(new_value: string) { this._name = new_value }

  private _constant: number;
  get constant(): number { return this._constant }
  set constant(new_value: number) { this._constant = new_value }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return this._constant;
  }

  get descriptor(): ConstantDescriptor {
    const descriptor = new ConstantDescriptor();
    descriptor.setName(this._name);
    descriptor.setConstant(this._constant);
    return descriptor;
  }
  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(values?: Partial<ConstantState> | ConstantDescriptor) {
    values = values || {};
    if (values.constructor === ConstantDescriptor) {
      const descriptor = values as ConstantDescriptor;
      this._name = descriptor.getName();
      this._constant = descriptor.getConstant();
    }
    else {
      const state = values as Partial<ConstantState>;
      this._name = state.name || uuid.v1();
      this._constant = state.constant !== undefined ? state.constant : 1.0;
    }
  }
}