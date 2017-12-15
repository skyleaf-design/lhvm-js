import { MutableStream } from '../vocabulary';
import { SineSingleDescriptor } from '../../descriptor/SineSingleDescriptor_pb';
import * as uuid from 'uuid';



interface SineSingleState {
  name: string;
  amplitude: number;
  amplitudeOffset: number;
  direction: SineSingleDescriptor.AxisDirection;
  timeOffset: number;
  timeScale: number;
  wavelength: number;
}

export default class SineSingleStream implements MutableStream {

  private _name: string;
  get name(): string { return this._name }
  set name(new_value: string) { this._name = new_value }
  
  private _amplitude: number;
  get amplitude(): number { return this._amplitude }
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
  get wavelength(): number { return this._wavelength }
  set wavelength(new_value: number) { this._wavelength = new_value }

  private _direction: SineSingleDescriptor.AxisDirection;
  get direction(): SineSingleDescriptor.AxisDirection { return this._direction }
  set direction(new_value: SineSingleDescriptor.AxisDirection ) { this._direction = new_value }

  private axis_time_value = (elapsed: number, cycle: number) => {
    const local_time = elapsed * this._time_scale;
    return Math.sin(cycle / this._wavelength + local_time + this._time_offset);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    const x = this._direction === SineSingleDescriptor.AxisDirection.X ? this.axis_time_value(elapsed, x_cycle) : 0.00;
    const y = this._direction === SineSingleDescriptor.AxisDirection.Y ? this.axis_time_value(elapsed, y_cycle) : 0.00;
    return Math.max(
      (x + y) * this._amplitude
      +
      this._amplitude_offset
      +
      this._amplitude_offset * this._amplitude
    , 0.00001);
  }

  get descriptor(): SineSingleDescriptor {
    const descriptor = new SineSingleDescriptor();
    descriptor.setName(this._name);
    descriptor.setDirection(this._direction);
    descriptor.setAmplitude(this._amplitude);
    descriptor.setOffset(this._amplitude_offset);
    descriptor.setPhase(this._time_offset);
    descriptor.setTimescale(this._time_scale);
    descriptor.setWavelength(this._wavelength);
    return descriptor;
  }
  set descriptor(descriptor: SineSingleDescriptor) {
    this._name = descriptor.getName();
    this._amplitude = descriptor.getAmplitude();
    this._amplitude_offset = descriptor.getOffset();
    this._direction = descriptor.getDirection();
    this._time_offset = descriptor.getPhase();
    this._time_scale = descriptor.getTimescale();
    this._wavelength = descriptor.getWavelength();
  }

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(values?: Partial<SineSingleState> | SineSingleDescriptor) {
    values = values || {};

    if (values.constructor === SineSingleDescriptor) {
      const descriptor = values as SineSingleDescriptor;
      this._name = descriptor.getName();
      this._amplitude = descriptor.getAmplitude();
      this._amplitude_offset = descriptor.getOffset();
      this._direction = descriptor.getDirection();
      this._time_offset = descriptor.getPhase();
      this._time_scale = descriptor.getTimescale();
      this._wavelength = descriptor.getWavelength();
    }
    else {
      const state = values as Partial<SineSingleState>;
      this._name = state.name || uuid.v1();
      this._amplitude = state.amplitude !== undefined ? state.amplitude : 1.0;
      this._amplitude_offset = state.amplitudeOffset !== undefined ? state.amplitudeOffset : 0.0;
      this._direction = state.direction !== undefined ? state.direction : SineSingleDescriptor.AxisDirection.X;
      this._time_offset = state.timeOffset !== undefined ? state.timeOffset : 0.0;
      this._time_scale = state.timeScale !== undefined ? state.timeScale : 1.0;
      this._wavelength = state.wavelength !== undefined ? state.wavelength : 0.1;
    }
  }
}