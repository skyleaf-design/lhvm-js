import { MutableStream } from '../vocabulary';
import * as uuid from 'uuid';
import { PulseDescriptor } from '../../descriptor/PulseDescriptor_pb';
import { CloudStreamState } from './CloudStream';


export interface PulseState {
  name: string;
  amplitude: number;
  amplitudeOffset: number;
  timeOffset: number;
  timeScale: number;
}

export default class PulseStream implements MutableStream, PulseState {
  private _name: string;
  get name(): string { return this._name }
  set name(new_value: string) { this._name = new_value }

  private _amplitude: number;
  get amplitude(): number { return this._amplitude }
  set amplitude(new_value: number) { this._amplitude = new_value}

  // Also called "phase".
  private _time_offset: number;
  get timeOffset(): number { return this._time_offset }
  set timeOffset(new_value: number) { this._time_offset = new_value }

  // Also called "offset".
  private _amplitude_offset: number;
  get amplitudeOffset(): number { return this._amplitude_offset }
  set amplitudeOffset(new_value: number) { this._amplitude_offset = new_value }

  private _time_scale: number;
  get timeScale(): number { return this._time_scale }
  set timeScale(new_value: number) { this._time_scale = new_value }

  private _time_value = (elapsed: number) => {
    const local_time = elapsed * this._time_scale;
    return Math.sin(local_time + this._time_offset);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return Math.max(
      (this._time_value(elapsed) * this._amplitude)
      +
      this._amplitude_offset
      +
      (this._amplitude_offset * this._amplitude)
    , 0.00001);
  }

  get descriptor(): PulseDescriptor {
    const descriptor = new PulseDescriptor();
    descriptor.setName(this._name);
    descriptor.setAmplitude(this._amplitude);
    descriptor.setOffset(this._amplitude_offset);
    descriptor.setPhase(this._time_offset);
    descriptor.setTimescale(this._time_scale);
    return descriptor;
  }
  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(values?: Partial<PulseState> | PulseDescriptor) {
    values = values || {};
    
    if (values.constructor === PulseDescriptor) {
      const descriptor = values as PulseDescriptor;
      this._name = descriptor.getName();
      this._amplitude = descriptor.getAmplitude();
      this._amplitude_offset = descriptor.getOffset();
      this._time_offset = descriptor.getPhase();
      this._time_scale = descriptor.getTimescale();
    }
    else {
      const state = values as Partial<PulseState>;
      this._name = state.name || uuid.v1();
      this._amplitude = state.amplitude !== undefined ? state.amplitude : 1.0;
      this._amplitude_offset = state.amplitudeOffset !== undefined ? state.amplitudeOffset : 1.0;
      this._time_offset = state.timeOffset !== undefined ? state.timeOffset : 1.0;
      this._time_scale = state.timeScale !== undefined ? state.timeScale : 1.0;
    }
  }
}