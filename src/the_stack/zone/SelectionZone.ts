import { Perceptible, Serializable } from "../vocabulary";
import { ZoneDescriptor } from "../../descriptor/ZoneDescriptor_pb";
import Grid from './Grid';

enum Dimension { width, height }

export default class SelectionZone extends Grid<boolean> implements Perceptible, Serializable {
  
  private _get_index(fromCycle: number, forDimension: Dimension): number {
    // Get the final index of the dimension.
    const max_index_value = forDimension == Dimension.height ? this.height - 1 : this.width - 1;

    // Apply the ratio to the range of indices, round it to the nearest index,
    // and convert it to a 1-indexed Grid index.
    return Math.round(max_index_value * fromCycle) + 1
  }

  get descriptor(): ZoneDescriptor {
    const descriptor = new ZoneDescriptor();
    descriptor.setValuesList(this.getArray());
    return descriptor;
  }
  data(): Uint8Array {
    return this.descriptor.serializeBinary();
  }

  // This is kind of sad, because in the OpStack calculation function, it 
  // converts its integer x/y index into a cycle, which we covert back into
  // an integer index, which is used to look up a boolean value, which is 
  // converted bac into a number.
  valueAt(elapsed: number, x_cycle: number, y_cycle: number) {
    const at_column = this._get_index(x_cycle, Dimension.width);
    const at_row = this._get_index(y_cycle, Dimension.height);
    return this.getValue(at_column, at_row) ? 1.0 : 0.0 
  }
}