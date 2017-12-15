// package: 
// file: ZoneDescriptor.proto

import * as jspb from "google-protobuf";

export class ZoneDescriptor extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  clearValuesList(): void;
  getValuesList(): Array<boolean>;
  setValuesList(value: Array<boolean>): void;
  addValues(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneDescriptor): ZoneDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoneDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneDescriptor;
  static deserializeBinaryFromReader(message: ZoneDescriptor, reader: jspb.BinaryReader): ZoneDescriptor;
}

export namespace ZoneDescriptor {
  export type AsObject = {
    width: number,
    height: number,
    valuesList: Array<boolean>,
  }
}

