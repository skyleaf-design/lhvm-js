export default class Grid<T> {
  // Store the grid elements in a one-dimensional array.
  // Items are stored by column, then by row:
  //
  // [ c1r1 c2r1 c3r1 c1r2 c2r2 c3r2 c1r3 c2r3 c3r3 ]
  protected array: Array<T>;
  protected width: number;
  protected height: number;

  getWidth(): number { return this.width; }
  getHeight(): number { return this.height; }
  getArray(): Array<T> { return this.array; }

  // Converts the 1-indexed rows and columns into an index in the backing 
  // array.  The row * width acts as an offset to find the column value
  // within that row.
  protected indexFor(column: number, row: number): number {
    return (row - 1) * this.width + column - 1;
  }

  getValue(atColumn: number, atRow: number): T {
    const backing_index = this.indexFor(atColumn, atRow);
    return this.array[backing_index];
  }
  setValue(value: T, atColumn: number, atRow: number): T {
    const backing_index = this.indexFor(atColumn, atRow);
    this.array[backing_index] = value;
  }

  // If you supply a list of elements that is too small to store the grid,
  // we place that at the beginning of the grid, and fill the rest of it 
  // with empty values.
  constructor(width: number, height: number, elements?: Array<T>) {
    this.width = width;
    this.height = height;
    this.array = elements ?
    elements.concat(Array<T>(width * height - elements.length))
    :
    new Array<T>(width * height);
  }
}