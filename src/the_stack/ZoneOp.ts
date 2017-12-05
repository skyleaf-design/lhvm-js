import { Perceptor, MutableStream, Serializable, SerializableConstructor } from "./vocabulary";
import * as jspb from "google-protobuf";

import CloudStream from './stream/CloudStream';
import ConstantStream from './stream/ConstantStream';
import PulseStream from './stream/PulseStream';
import SineDoubleStream from './stream/SineDoubleStream';
import SineSingleStream from './stream/SineSingleStream';
import SelectionZone from './zone/SelectionZone';
import { ZoneOpDescriptor } from '../descriptor/ZoneOpDescriptor_pb';
import { ZoneDescriptor } from "../descriptor/ZoneDescriptor_pb";

export interface ZoneOp extends Serializable {}

export class Add implements ZoneOp {
  descriptor: ZoneOpDescriptor;

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor?: ZoneOpDescriptor) {
    if (!descriptor) {
      // Notice we are not setting a "name" property.  The index of a 
      // zone op in the stack is used as its identity.
      descriptor = new ZoneOpDescriptor();
      descriptor.setOp(ZoneOpDescriptor.ZoneOp.ADD);
    }
    this.descriptor = descriptor;
  }
}

export class Multiply implements ZoneOp {
  descriptor: ZoneOpDescriptor;

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor?: ZoneOpDescriptor) {
    if (!descriptor) {
      descriptor = new ZoneOpDescriptor();
      descriptor.setOp(ZoneOpDescriptor.ZoneOp.MULT);
    }
    this.descriptor = descriptor;
  }
}


export class EnterStream implements ZoneOp {
  descriptor: ZoneOpDescriptor;
  
  get stream(): MutableStream {
    switch (this.descriptor.getDescriptorCase()) {
      case ZoneOpDescriptor.DescriptorCase.CLOUDSTREAM:
        return new CloudStream(this.descriptor.getCloudstream());
      case ZoneOpDescriptor.DescriptorCase.CONSTANTSTREAM:
        return new ConstantStream(this.descriptor.getConstantstream());
      case ZoneOpDescriptor.DescriptorCase.PULSESTREAM:
        return new PulseStream(this.descriptor.getPulsestream());
      case ZoneOpDescriptor.DescriptorCase.SINEDOUBLESTREAM:
        return new SineDoubleStream(this.descriptor.getSinedoublestream());
      case ZoneOpDescriptor.DescriptorCase.SINESINGLESTREAM:
        return new SineSingleStream(this.descriptor.getSinesinglestream());
      default:
        return new ConstantStream();
    }
  }
  set stream(new_value: MutableStream) {
    switch (new_value.constructor) {
      case CloudStream:
        const clouds = new_value as CloudStream;
        this.descriptor.setCloudstream(clouds.descriptor);
      case ConstantStream:
        const constant = new_value as ConstantStream;
        this.descriptor.setConstantstream(constant.descriptor);
      case PulseStream:
        const pulse = new_value as PulseStream;
        this.descriptor.setPulsestream(pulse.descriptor);
      case SineDoubleStream:
        const sine_double = new_value as SineDoubleStream;
        this.descriptor.setSinedoublestream(sine_double.descriptor);
      case SineSingleStream:
        const sine_single = new_value as SineSingleStream;
        this.descriptor.setSinesinglestream(sine_single.descriptor);
      default:
        throw new Error('Unknown mutable stream!');
    }
  }

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor?: ZoneOpDescriptor) {
    // @TODO: we need a descriptor for .NOp instructions.
    if (!descriptor) {
      // Notice we are not setting a "name" property.  The index of a 
      // zone op in the stack is used as its identity.
      descriptor = new ZoneOpDescriptor();
      descriptor.setOp(ZoneOpDescriptor.ZoneOp.ADD);
    }
    this.descriptor = descriptor;
  }
}

export class EnterZone implements ZoneOp {
  descriptor: ZoneOpDescriptor;

  get zone(): SelectionZone {
    const zone_descriptor = this.descriptor.getSelectionzone();
    if (!zone_descriptor) { return new SelectionZone(0,0,[]) }

    // @TODO: we need the width/height to be saved in the zone descriptor.
    return new SelectionZone(24, 24, zone_descriptor.getValuesList())
  }
  set zone(new_value: SelectionZone) {
    const descriptor = new ZoneDescriptor();
    descriptor.setValuesList(new_value.getArray())
  }

  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(descriptor?: ZoneOpDescriptor) {
    if (!descriptor) {
      descriptor = new ZoneOpDescriptor();
      descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERZONE);
      const zone_descriptor = new ZoneDescriptor();
      zone_descriptor.setValuesList([]);
      descriptor.setSelectionzone(zone_descriptor);
    }
    this.descriptor = descriptor;
  }
}