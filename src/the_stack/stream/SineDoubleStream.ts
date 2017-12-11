import { MutableStream } from '../vocabulary';
import * as uuid from 'uuid';
import { SineDoubleDescriptor } from '../../descriptor/SineDoubleDescriptor_pb';


interface SineDoubleState {
  name: string;
  amplitude: number;
  amplitudeOffset: number;
  timeOffset: number;
  timeScale: number;
  wavelength: number;
}

export default class SineDoubleStream implements MutableStream, SineDoubleState {

  scale: number = 30.0

  private _name: string;
  get name(): string { return this._name }
  set name(new_value: string) { this._name = new_value }
  
  private _amplitude: number;
  get amplitude(): number { return this._amplitude * this.scale }
  set amplitude(new_value: number) { this._amplitude = new_value }

  private _time_offset: number;
  get timeOffset(): number { return this._time_offset }
  set timeOffset(new_value: number) { this._time_offset = new_value }

  private _amplitude_offset: number;
  get amplitudeOffset(): number { return this._amplitude_offset }
  set amplitudeOffset(new_value: number) { this._amplitude_offset = new_value }

  private _time_scale: number;
  get timeScale(): number { return this._time_scale }
  set timeScale(new_value: number) { this._time_scale = new_value }

  private _wavelength: number;
  get wavelength(): number { return this._wavelength / this.scale * 3.0 }
  set wavelength(new_value: number) { this._wavelength = new_value }

  private axis_time_value = (elapsed: number, cycle: number) => {
    const local_time = elapsed * this._time_scale;
    return Math.sin((cycle / this._wavelength) + local_time + this._time_offset);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    const x = this.axis_time_value(elapsed, x_cycle);
    const y = this.axis_time_value(elapsed, y_cycle);
    return Math.max(
      (x + y) * this.amplitude
      +
      this._amplitude_offset
      +
      this._amplitude_offset * this._amplitude
    , 0.00001);
  }

  get descriptor(): SineDoubleDescriptor {
    const descriptor = new SineDoubleDescriptor();
    descriptor.setName(this._name);
    descriptor.setAmplitude(this._amplitude);
    descriptor.setOffset(this._amplitude_offset);
    descriptor.setPhase(this._time_offset);
    descriptor.setTimescale(this._time_scale);
    descriptor.setWavelength(this._wavelength);
    return descriptor;
  }
  set descriptor(descriptor: SineDoubleDescriptor) {
    this._name = descriptor.getName();
    this._amplitude = descriptor.getAmplitude();
    this._amplitude_offset = descriptor.getOffset();
    this._time_offset = descriptor.getPhase();
    this._time_scale = descriptor.getTimescale();
    this._wavelength = descriptor.getWavelength();
  }
  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(values?: Partial<SineDoubleState> | SineDoubleDescriptor) {
    values = values || {};

    if (values.constructor === SineDoubleDescriptor) {
      const descriptor = values as SineDoubleDescriptor;
      this._name = descriptor.getName();
      this._amplitude = descriptor.getAmplitude();
      this._amplitude_offset = descriptor.getOffset();
      this._time_offset = descriptor.getPhase();
      this._time_scale = descriptor.getTimescale();
      this._wavelength = descriptor.getWavelength();
    }
    else {
      const state = values as Partial<SineDoubleState>;
      this._name = state.name || uuid.v1();
      this._amplitude = state.amplitude !== undefined ? state.amplitude : 1.0;
      this._amplitude_offset = state.amplitudeOffset !== undefined ? state.amplitudeOffset : 1.0;
      this._time_offset = state.timeOffset !== undefined ? state.timeOffset : 1.0;
      this._time_scale = state.timeScale !== undefined ? state.timeScale : 1.0;
      this._wavelength = state.wavelength !== undefined ? state.wavelength : 1.0;
    }
  }
}