import GenericStream from './GenericStream';

class ConstantStream extends GenericStream {
  constant: number = 1.0;

  valueAt(elapsed: number, x_cycle: number, y_cycle: number) {
    return this.constant;
  }

  constructor(name: string, constant: number) {
    super(name);
    this.constant = constant;
  }
}