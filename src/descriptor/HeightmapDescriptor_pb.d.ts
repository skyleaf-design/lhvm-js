// package: 
// file: HeightmapDescriptor.proto

import * as jspb from "google-protobuf";

export class HeightmapDescriptor extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeightmapDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: HeightmapDescriptor): HeightmapDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeightmapDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeightmapDescriptor;
  static deserializeBinaryFromReader(message: HeightmapDescriptor, reader: jspb.BinaryReader): HeightmapDescriptor;
}

export namespace HeightmapDescriptor {
  export type AsObject = {
    width: number,
    height: number,
    valuesList: Array<number>,
  }
}

