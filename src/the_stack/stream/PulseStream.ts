import { MutableStream } from '../vocabulary';
import * as uuid from 'uuid';
import { PulseDescriptor } from '../../descriptor/PulseDescriptor_pb';

export default class PulseStream implements MutableStream {
  descriptor: PulseDescriptor;

  get name(): string { return this.descriptor.getName() }
  set name(new_value: string) { this.descriptor.setName(new_value) }

  private _amplitude: number = 1.0;
  get amplitude(): number { return this.descriptor.getAmplitude() }
  set amplitude(new_value: number) { this.descriptor.setAmplitude(new_value) }

  get timeOffset(): number { return this.descriptor.getOffset() }
  set timeOffset(new_value: number) { this.descriptor.setOffset(new_value) }

  get amplitudeOffset(): number { return this.descriptor.getAmplitude() }
  set amplitudeOffset(new_value: number) { this.descriptor.setAmplitude(new_value) }

  get timeScale(): number { return this.descriptor.getTimescale() }
  set timeScale(new_value: number) { this.descriptor.setTimescale(new_value) }

  private _time_value = (elapsed: number) => {
    const local_time = elapsed * this.timeScale;
    return Math.sin(local_time + this.timeOffset);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    return Math.max(
      (this._time_value(elapsed) * this.amplitude)
      +
      this.amplitudeOffset
      +
      (this.amplitudeOffset * this.amplitude)
    , 0.00001);
  }

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor?: PulseDescriptor) {
    if (!descriptor) {
      descriptor = new PulseDescriptor();
      descriptor.setName(uuid.v1());
    }
    this.descriptor = descriptor;
  }
}