// package: 
// file: OpStackDescriptor.proto

import * as jspb from "google-protobuf";
import * as ZoneOpDescriptor_pb from "./ZoneOpDescriptor_pb";

export class OpStackDescriptor extends jspb.Message {
  getDimensionX(): number;
  setDimensionX(value: number): void;

  getDimensionY(): number;
  setDimensionY(value: number): void;

  getFocusIndex(): number;
  setFocusIndex(value: number): void;

  clearOpsList(): void;
  getOpsList(): Array<ZoneOpDescriptor_pb.ZoneOpDescriptor>;
  setOpsList(value: Array<ZoneOpDescriptor_pb.ZoneOpDescriptor>): void;
  addOps(value?: ZoneOpDescriptor_pb.ZoneOpDescriptor, index?: number): ZoneOpDescriptor_pb.ZoneOpDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpStackDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: OpStackDescriptor): OpStackDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpStackDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpStackDescriptor;
  static deserializeBinaryFromReader(message: OpStackDescriptor, reader: jspb.BinaryReader): OpStackDescriptor;
}

export namespace OpStackDescriptor {
  export type AsObject = {
    dimensionX: number,
    dimensionY: number,
    focusIndex: number,
    opsList: Array<ZoneOpDescriptor_pb.ZoneOpDescriptor.AsObject>,
  }
}

