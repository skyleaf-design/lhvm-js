import { MutableStream } from '../vocabulary';
import FastSimplexNoise from 'fast-simplex-noise';

export default class CloudStream implements MutableStream {
  readonly name: string = "";

  private _amplitude: number = 1.0;
  get amplitude(): number { return this._amplitude }
  set amplitude(new_value: number) {
    this._amplitude = new_value;
    this._build_noise();
  }

  private _frequency: number = 1.0;
  get frequency(): number { return this._frequency }
  set frequency(new_value: number) {
    this._frequency = new_value;
    this._build_noise;
  }

  private _octaves: number = 1;
  get octaves(): number { return this._octaves }
  set octaves(new_value: number) {
    this._octaves = new_value;
    this._build_noise();
  }

  private _persistence: number = 1.0;
  get persistence(): number { return this._persistence }
  set persistence(new_value: number) {
    this._persistence = new_value;
    this._build_noise;
  }

  private noise: FastSimplexNoise
  
  private _build_noise = () => {
    this.noise = new FastSimplexNoise({
      amplitude: this.amplitude,
      frequency: this.frequency,
      max: 255,
      min: 0,
      octaves: this.octaves,
      persistence: this.persistence
    })
  }
  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return this.noise.raw2D(x_cycle, y_cycle);
  }

  constructor(name: string) {
    this.name = name;
    this._build_noise();
  }
}