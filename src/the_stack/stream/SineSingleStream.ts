import { MutableStream } from '../vocabulary';
import { SineSingleDescriptor } from '../../descriptor/SineSingleDescriptor_pb';

export default class SineSingleStream implements MutableStream {
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

  _wavelength: number = 1.0;
  get wavelength(): number { return this._wavelength }
  set wavelength(new_value: number) { this._wavelength = new_value }

  _direction: SineSingleDescriptor.AxisDirection = SineSingleDescriptor.AxisDirection.X;
  get direction(): number { return this._direction }
  set direction(new_value: number) { this._direction = new_value }

  private axis_time_value = (elapsed: number, cycle: number) => {
    const local_time = elapsed * this.timeScale;
    return Math.sin((cycle / this.wavelength) + local_time + this.timeOffset);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    const x = this.direction === SineSingleDescriptor.AxisDirection.X ? this.axis_time_value(elapsed, x_cycle) : 0.00;
    const y = this.direction === SineSingleDescriptor.AxisDirection.Y ? this.axis_time_value(elapsed, y_cycle) : 0.00;
    return Math.max(
      (x + y) * this.amplitude
      +
      this.amplitudeOffset
      +
      this.amplitudeOffset * this.amplitude
    , 0.00001);
  }
}