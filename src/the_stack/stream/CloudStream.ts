import { MutableStream } from '../vocabulary';
import FastSimplexNoise from 'fast-simplex-noise';
import { CloudDescriptor } from '../../descriptor/CloudDescriptor_pb';
import * as uuid from 'uuid';


export interface CloudStreamState {
  name: string;
  amplitude: number;
  frequency: number;
  octave_count: number;
  persistence: number;
}

export default class CloudStream implements MutableStream, CloudStreamState {

  private _name: string
  get name(): string { return this._name }
  set name(new_value: string) { this._name = new_value }

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
    this._build_noise();
  }

  private _octave_count: number;
  get octave_count(): number { return this._octave_count }
  set octave_count(new_value: number) {
    this._octave_count = new_value;
    this._build_noise();
  }

  private _persistence: number;
  get persistence(): number { return this._persistence}
  set persistence(new_value: number) {
    this._persistence = new_value;
    this._build_noise();
  }

  private noise: FastSimplexNoise
  
  private _build_noise = () => {
    this.noise = new FastSimplexNoise({
      amplitude: this._amplitude,
      frequency: this._frequency,
      max: 255,
      min: 0,
      octaves: this._octave_count,
      persistence: this._persistence
    })
  }
  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return this.noise.raw2D(x_cycle, y_cycle);
  }

  get descriptor(): CloudDescriptor {
    const descriptor = new CloudDescriptor;
    descriptor.setName(this._name);
    descriptor.setFrequency(this._frequency);
    descriptor.setLacunarity(1.0); // not implemented.
    descriptor.setOctavecount(this._octave_count);
    descriptor.setPersistance(this._persistence);
    return descriptor;
  }
  data(): Uint8Array  { return this.descriptor.serializeBinary() }

  constructor(values?: Partial<CloudStreamState> | CloudDescriptor) {
    values = values || {};
    if (values.constructor === CloudDescriptor) {
      const descriptor = values as CloudDescriptor;
      this._name = descriptor.getName();
      this._amplitude = 1.0; // not implemented yet.
      this._frequency = descriptor.getFrequency();
      this._octave_count = descriptor.getOctavecount();
      this._persistence = descriptor.getPersistance();
    }
    else {
      const state = values as Partial<CloudStreamState>;
      this._name = state.name || uuid.v1();
      this._amplitude = state.amplitude !== undefined ? state.amplitude : 1.0;
      this._frequency = state.frequency !== undefined ? state.frequency : 1.0;
      this._octave_count = state.octave_count !== undefined ? state.octave_count : 1.0;
      this._persistence = state.persistence !== undefined ? state.persistence : 1.0;
    }
  
    this._build_noise();
  }
}