import { MutableStream } from '../vocabulary';
import * as uuid from 'uuid';
import { SineDoubleDescriptor } from '../../descriptor/SineDoubleDescriptor_pb';

export default class SineDoubleStream implements MutableStream {

  descriptor: SineDoubleDescriptor

  get name(): string { return this.descriptor.getName() }
  set name(new_value: string) { this.descriptor.setName(new_value) }
  
  get amplitude(): number { return this.descriptor.getAmplitude() }
  set amplitude(new_value: number) { this.descriptor.setAmplitude(new_value) }

  get timeOffset(): number { return this.descriptor.getPhase() }
  set timeOffset(new_value: number) { this.descriptor.setPhase(new_value) }

  get amplitudeOffset(): number { return this.descriptor.getOffset() }
  set amplitudeOffset(new_value: number) { this.descriptor.setOffset(new_value) }

  get timeScale(): number { return this.descriptor.getTimescale() }
  set timeScale(new_value: number) { this.descriptor.setTimescale(new_value) }

  get wavelength(): number { return this.descriptor.getWavelength() }
  set wavelength(new_value: number) { this.descriptor.setWavelength(new_value) }

  private axis_time_value = (elapsed: number, cycle: number) => {
    const local_time = elapsed * this.timeScale;
    return Math.sin((cycle / this.wavelength) + local_time + this.timeOffset);
  }

  valueAt = (elapsed: number, x_cycle: number, y_cycle: number) => {
    const x = this.axis_time_value(elapsed, x_cycle);
    const y = this.axis_time_value(elapsed, y_cycle);
    return Math.max(
      (x + y) * this.amplitude
      +
      this.amplitudeOffset
      +
      this.amplitudeOffset * this.amplitude
    , 0.00001);
  }

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor?: SineDoubleDescriptor) {
    if (!descriptor) {
      descriptor = new SineDoubleDescriptor();
      descriptor.setName(uuid.v1());
    }
    this.descriptor = descriptor;
  }
}