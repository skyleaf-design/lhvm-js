import { MutableStream } from '../vocabulary';
import FastSimplexNoise from 'fast-simplex-noise';
import { CloudDescriptor } from '../../descriptor/CloudDescriptor_pb';
import * as uuid from 'uuid';

export default class CloudStream implements MutableStream {
  descriptor: CloudDescriptor;

  get name(): string { return this.descriptor.getName(); }
  set name(new_value: string) { this.descriptor.setName(new_value); }

  // @TODO: storing the amplitude here, until the differences with the Swift 
  // version have been sorted out.
  private _amplitude: number = 1.0;
  get amplitude(): number { return this._amplitude }
  set amplitude(new_value: number) {
    this._amplitude = new_value;
    this._build_noise();
  }

  get frequency(): number { return this.descriptor.getFrequency() }
  set frequency(new_value: number) {
    this.descriptor.setFrequency(new_value);
    this._build_noise();
  }

  get octaves(): number { return this.descriptor.getOctavecount() }
  set octaves(new_value: number) {
    this.descriptor.setOctavecount(new_value);
    this._build_noise();
  }

  get persistence(): number { return this.descriptor.getPersistance() }
  set persistence(new_value: number) {
    this.descriptor.setPersistance(new_value);
    this._build_noise();
  }

  private noise: FastSimplexNoise
  
  private _build_noise = () => {
    this.noise = new FastSimplexNoise({
      amplitude: this.amplitude,
      frequency: this.descriptor.getFrequency(),
      max: 255,
      min: 0,
      octaves: this.descriptor.getOctavecount(),
      persistence: this.descriptor.getPersistance()
    })
  }
  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return this.noise.raw2D(x_cycle, y_cycle);
  }

  data(): Uint8Array  { return this.descriptor.serializeBinary() }

  constructor(descriptor = new CloudDescriptor()) {
    descriptor.setName(descriptor.getName() || uuid.v1());
    descriptor.setFrequency(descriptor.getFrequency() || 1.0);
    descriptor.setLacunarity(descriptor.getLacunarity() || 1.0);
    descriptor.setOctavecount(descriptor.getOctavecount() || 1);
    descriptor.setPersistance(descriptor.getPersistance() || 1.0);
    this.descriptor = descriptor;
    this._build_noise();
  }
}