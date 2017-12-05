import { MutableStream } from '../vocabulary';

export default class ConstantStream implements MutableStream {
  readonly name: string = "";

  private _constant: number = 1.0;
  get constant(): number { return this._constant }
  set constant(new_value: number) { this._constant = new_value }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return this._constant;
  }

  constructor(name: string, constant: number) {
    this.name = name;
    this._constant = constant;
  }
}