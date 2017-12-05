import { MutableStream } from '../vocabulary';

export default class PulseStream implements MutableStream {
  readonly name: string = "";

  private _amplitude: number = 1.0;
  get amplitude(): number { return this._amplitude }
  set amplitude(new_value: number) { this._amplitude = new_value }

  _time_offset: number = 1.0;
  get timeOffset(): number { return this._time_offset }
  set timeOffset(new_value: number) { this._time_offset = new_value }

  _amplitude_offset: number = 1.0;
  get amplitudeOffset(): number { return this._amplitude_offset }
  set amplitudeOffset(new_value: number) { this._amplitude_offset = new_value }

  _time_scale: number = 1.0;
  get timeScale(): number { return this._time_scale }
  set timeScale(new_value: number) { this._time_scale = new_value }

  private _time_value = (elapsed: number) => {
    const local_time = elapsed * this.timeScale;
    return Math.sin(local_time + this.timeOffset);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return Math.max(
      (this._time_value(elapsed) * this.amplitude)
      +
      this.amplitudeOffset
      +
      (this.amplitudeOffset * this.amplitude)
    , 0.00001);
  }

  constructor(name: string) {
    this.name = name;
  }
}