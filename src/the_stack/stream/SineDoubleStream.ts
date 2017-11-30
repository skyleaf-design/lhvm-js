import GenericStream from './GenericStream';

export default class SineDoubleStream extends GenericStream {
  amplitude: number = 10.0;
  offset: number = 1.0;
  phase: number = 0.000001;
  timeScale: number = 2.0;
  wavelength: number = 2.0;

  private axis_time_value = (elapsed: number, cycle: number) => {
    const local_time = elapsed * this.timeScale;
    return Math.sin((cycle / this.wavelength) + local_time + this.phase);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    const x = this.axis_time_value(elapsed, x_cycle);
    const y = this.axis_time_value(elapsed, y_cycle);
    return Math.max(
      (x + y) * this.amplitude
      +
      this.offset
      +
      this.offset * this.amplitude
    , 0.00001);
  }
}