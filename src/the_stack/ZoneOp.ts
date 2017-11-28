import { StreamFunction, Serializable, SerializableConstructor } from "./vocabulary";
import * as jspb from "google-protobuf";

import { ZoneOpDescriptor } from '../descriptor/ZoneOpDescriptor_pb';

export default class ZoneOp implements Serializable {
  descriptor(): ZoneOpDescriptor {
    return new ZoneOpDescriptor();
  }
  data(): Uint8Array {
    return this.descriptor().serializeBinary();
  }
}

export class AddOp extends ZoneOp {
  descriptor(): ZoneOpDescriptor {
    const descriptor = super.descriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ADD);
    return descriptor;
  }
}

export class MultiplyOp extends ZoneOp {
  descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.MULT);
    return descriptor;
  }
}


export class StreamOp extends ZoneOp {
  stream: StreamFunction
  descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERSTREAM);
    // create a Stream descriptor from the StreamOp's instace's stream property.
    return descriptor;
  }
  constructor(stream: StreamFunction) {
    super();
    this.stream = stream;
  }
}