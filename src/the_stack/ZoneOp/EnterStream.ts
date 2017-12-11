import { ZoneOp, ZoneOpDescriptor } from './index';
import { Perceptor, MutableStream } from "../vocabulary";
import CloudStream from '../stream/CloudStream';
import ConstantStream from '../stream/ConstantStream';
import PulseStream from '../stream/PulseStream';
import SineDoubleStream from '../stream/SineDoubleStream';
import SineSingleStream from '../stream/SineSingleStream';


type StreamEntryOpState = MutableStream;



export default class EnterStream implements ZoneOp {

  private _stream: MutableStream;
  get stream(): MutableStream { return this._stream }
  set stream(new_value: MutableStream) { this._stream = new_value }

  get descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERSTREAM);

    switch (this._stream.constructor) {
      case CloudStream:
        const clouds = this._stream as CloudStream;
        descriptor.setCloudstream(clouds.descriptor);
        return descriptor;

      case ConstantStream:
        const constant = this._stream as ConstantStream;
        descriptor.setConstantstream(constant.descriptor);
        return descriptor;

      case PulseStream:
        const pulse = this._stream as PulseStream;
        descriptor.setPulsestream(pulse.descriptor);
        return descriptor;

      case SineDoubleStream:
        const sine_double = this._stream as SineDoubleStream;
        descriptor.setSinedoublestream(sine_double.descriptor);
        return descriptor;

      case SineSingleStream:
        const sine_single = this._stream as SineSingleStream;
        descriptor.setSinesinglestream(sine_single.descriptor);
        return descriptor;

      default:
        throw new Error('Unknown mutable stream!');
    }
  }
  data(): Uint8Array { return this.descriptor.serializeBinary() }


  // @TODO: construct a ZoneOp by being passed a Stream object directly.
  // via state.stream.
  constructor(values: StreamEntryOpState | ZoneOpDescriptor) {

    switch(values.constructor) {
      case ZoneOpDescriptor:
        const descriptor = values as ZoneOpDescriptor;
        switch (descriptor.getDescriptorCase()) {
          
          case ZoneOpDescriptor.DescriptorCase.CLOUDSTREAM:
            this._stream = new CloudStream(descriptor.getCloudstream() as any);
            return;

          case ZoneOpDescriptor.DescriptorCase.CONSTANTSTREAM:
            this._stream = new ConstantStream(descriptor.getConstantstream() as any);
            return;

          case ZoneOpDescriptor.DescriptorCase.PULSESTREAM:
            this._stream = new PulseStream(descriptor.getPulsestream() as any);
            return;

          case ZoneOpDescriptor.DescriptorCase.SINEDOUBLESTREAM:
            this._stream = new SineDoubleStream(descriptor.getSinedoublestream() as any);
            return;

          case ZoneOpDescriptor.DescriptorCase.SINESINGLESTREAM:
            this._stream = new SineSingleStream(descriptor.getSinesinglestream() as any);
            return;

          default:
            throw new Error("Unknown stream type.");
        }
      default:
        const state = values as StreamEntryOpState;
        this._stream = state;
        return;
    }
  }
}