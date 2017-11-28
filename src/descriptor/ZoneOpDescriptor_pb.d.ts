// package: 
// file: ZoneOpDescriptor.proto

import * as jspb from "google-protobuf";
import * as ZoneDescriptor_pb from "./ZoneDescriptor_pb";
import * as CloudDescriptor_pb from "./CloudDescriptor_pb";
import * as ConstantDescriptor_pb from "./ConstantDescriptor_pb";
import * as PulseDescriptor_pb from "./PulseDescriptor_pb";
import * as SineSingleDescriptor_pb from "./SineSingleDescriptor_pb";
import * as SineDoubleDescriptor_pb from "./SineDoubleDescriptor_pb";

export class ZoneOpDescriptor extends jspb.Message {
  getOp(): ZoneOpDescriptor.ZoneOp;
  setOp(value: ZoneOpDescriptor.ZoneOp): void;

  hasSelectionzone(): boolean;
  clearSelectionzone(): void;
  getSelectionzone(): ZoneDescriptor_pb.ZoneDescriptor | undefined;
  setSelectionzone(value?: ZoneDescriptor_pb.ZoneDescriptor): void;

  hasCloudstream(): boolean;
  clearCloudstream(): void;
  getCloudstream(): CloudDescriptor_pb.CloudDescriptor | undefined;
  setCloudstream(value?: CloudDescriptor_pb.CloudDescriptor): void;

  hasConstantstream(): boolean;
  clearConstantstream(): void;
  getConstantstream(): ConstantDescriptor_pb.ConstantDescriptor | undefined;
  setConstantstream(value?: ConstantDescriptor_pb.ConstantDescriptor): void;

  hasPulsestream(): boolean;
  clearPulsestream(): void;
  getPulsestream(): PulseDescriptor_pb.PulseDescriptor | undefined;
  setPulsestream(value?: PulseDescriptor_pb.PulseDescriptor): void;

  hasSinesinglestream(): boolean;
  clearSinesinglestream(): void;
  getSinesinglestream(): SineSingleDescriptor_pb.SineSingleDescriptor | undefined;
  setSinesinglestream(value?: SineSingleDescriptor_pb.SineSingleDescriptor): void;

  hasSinedoublestream(): boolean;
  clearSinedoublestream(): void;
  getSinedoublestream(): SineDoubleDescriptor_pb.SineDoubleDescriptor | undefined;
  setSinedoublestream(value?: SineDoubleDescriptor_pb.SineDoubleDescriptor): void;

  getDescriptorCase(): ZoneOpDescriptor.DescriptorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneOpDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneOpDescriptor): ZoneOpDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoneOpDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneOpDescriptor;
  static deserializeBinaryFromReader(message: ZoneOpDescriptor, reader: jspb.BinaryReader): ZoneOpDescriptor;
}

export namespace ZoneOpDescriptor {
  export type AsObject = {
    op: ZoneOpDescriptor.ZoneOp,
    selectionzone?: ZoneDescriptor_pb.ZoneDescriptor.AsObject,
    cloudstream?: CloudDescriptor_pb.CloudDescriptor.AsObject,
    constantstream?: ConstantDescriptor_pb.ConstantDescriptor.AsObject,
    pulsestream?: PulseDescriptor_pb.PulseDescriptor.AsObject,
    sinesinglestream?: SineSingleDescriptor_pb.SineSingleDescriptor.AsObject,
    sinedoublestream?: SineDoubleDescriptor_pb.SineDoubleDescriptor.AsObject,
  }

  export enum ZoneOp {
    ADD = 0,
    MULT = 1,
    ENTERSTREAM = 3,
    ENTERZONE = 4,
  }

  export enum DescriptorCase {
    DESCRIPTOR_NOT_SET = 0,
    SELECTIONZONE = 2,
    CLOUDSTREAM = 3,
    CONSTANTSTREAM = 4,
    PULSESTREAM = 5,
    SINESINGLESTREAM = 6,
    SINEDOUBLESTREAM = 7,
  }
}

