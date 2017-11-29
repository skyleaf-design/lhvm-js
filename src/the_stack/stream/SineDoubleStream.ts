import GenericStream from './GenericStream';

class SineDoubleStream extends GenericStream {
  amplitude: number = 1.0
  offset: number = 1.0
  phase: number = 1.0
  timeScale: number = 1.0
  wavelength: number = 1.0

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