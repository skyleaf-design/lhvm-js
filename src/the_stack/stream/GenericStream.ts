import { MutableStream } from '../vocabulary';

export default class GenericStream implements MutableStream {
  name: string

  valueAt(elapsed: number, x_cycle: number, y_cycle: number) {
    return 1.0;
  }

  constructor(name: string) {
    this.name = name;
  }
}