import { Perceptor, MutableStream, Serializable, SerializableConstructor } from "./vocabulary";
import * as jspb from "google-protobuf";

import { ZoneOpDescriptor } from '../descriptor/ZoneOpDescriptor_pb';
import CloudStream from './stream/CloudStream';
import ConstantStream from './stream/ConstantStream';
import PulseStream from './stream/PulseStream';
import SineDoubleStream from './stream/SineDoubleStream';
import SineSingleStream from './stream/SineSingleStream';
import SelectionZone from './zone/SelectionZone';

export default class ZoneOp implements Serializable {
  descriptor(): ZoneOpDescriptor {
    return new ZoneOpDescriptor();
  }
  data(): Uint8Array {
    return this.descriptor().serializeBinary();
  }
}

export class Add extends ZoneOp {
  descriptor(): ZoneOpDescriptor {
    const descriptor = super.descriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ADD);
    return descriptor;
  }
}

export class Multiply extends ZoneOp {
  descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.MULT);
    return descriptor;
  }
}


export class EnterStream extends ZoneOp {
  stream: MutableStream
  descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERSTREAM);
    // create a Stream descriptor from the StreamOp's instace's stream property.
    return descriptor;
  }
  constructor(stream: MutableStream) {
    super();
    this.stream = stream;
  }
}

export class EnterZone extends ZoneOp {
  zone: SelectionZone
  descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERSTREAM);
    // create a Stream descriptor from the StreamOp's instace's stream property.
    return descriptor;
  }
  constructor(zone: SelectionZone) {
    super();
    this.zone = zone;
  }
}