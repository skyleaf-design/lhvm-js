import GenericStream from './GenericStream';
import { SineSingleDescriptor } from '../../descriptor/SineSingleDescriptor_pb';

export default class SineSingleStream extends GenericStream {
  direction = SineSingleDescriptor.AxisDirection.X;
  amplitude = 10.0;
  offset = 1.0;
  phase = 0.001;
  timeScale = 3.0;
  wavelength = 5.0;

  private axis_time_value = (elapsed: number, cycle: number) => {
    const local_time = elapsed * this.timeScale;
    return Math.sin((cycle / this.wavelength) + local_time + this.phase);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    const x = this.direction === SineSingleDescriptor.AxisDirection.X ? this.axis_time_value(elapsed, x_cycle) : 0.00;
    const y = this.direction === SineSingleDescriptor.AxisDirection.Y ? this.axis_time_value(elapsed, y_cycle) : 0.00;
    return Math.max(
      (x + y) * this.amplitude
      +
      this.offset
      +
      this.offset * this.amplitude
    , 0.00001);
  }
}