import GenericStream from './GenericStream';
import { SineSingleDescriptor } from '../../descriptor/SineSingleDescriptor_pb';

class SineSingleStream extends GenericStream {
  direction = SineSingleDescriptor.AxisDirection.X;
  amplitude = 1.0;
  offset = 1.0;
  phase = 1.0;
  timeScale = 1.0;
  wavelength = 1.0;

  private _time_value(elapsed: number): number {
    const local_time = elapsed * this.timeScale;
    return Math.sin(local_time + this.phase);
  }

  valueAt(elapsed: number, x_cycle: number, y_cycle: number) {
    return Math.max(
      this._time_value(elapsed) * this.amplitude
      +
      this.offset
      +
      this.offset * this.amplitude
    , 0.00001);
  }
}