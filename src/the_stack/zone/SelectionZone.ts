import { Perceptible } from "../vocabulary";

enum Dimension { width, height }

class SelectionZone extends Grid<boolean> implements Perceptible {
  
  private getIndex(fromCycle: number, forDimension: Dimension): number {
    // Converts radians to 0 -> 1 vector.
    const ratio = fromCycle / 2 / Math.PI;

    // Get the final index of the dimension.
    const max_index_value = forDimension == Dimension.height ? this.height - 1 : this.width - 1;

    // Apply the ratio to the range of indices, round it to the nearest index,
    // and convert it to a 1-indexed Grid index.
    return Math.round(max_index_value * ratio) + 1
  }

  // Convert x/y cyle into an index, and then convert the boolean value
  // at that index into a scalar number, used for addition + multiplication.

  // This is kind of sad, because in the OpStack calculation function, it 
  // converts its integer x/y index into a cycle, which we covert back into
  // an integer index, which is used to look up a boolean value, which is 
  // converted bac into a number.
  valueAt(elapsed: number, x_cycle: number, y_cycle: number) {
    const at_column = this.getIndex(x_cycle, Dimension.width);
    const at_row = this.getIndex(y_cycle, Dimension.height);
    return this.getValue(at_column, at_row) ? 1.0 : 0.0 
  }
}