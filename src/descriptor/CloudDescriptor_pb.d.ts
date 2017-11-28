// package: 
// file: CloudDescriptor.proto

import * as jspb from "google-protobuf";

export class CloudDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getOctavecount(): number;
  setOctavecount(value: number): void;

  getPersistance(): number;
  setPersistance(value: number): void;

  getLacunarity(): number;
  setLacunarity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: CloudDescriptor): CloudDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloudDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudDescriptor;
  static deserializeBinaryFromReader(message: CloudDescriptor, reader: jspb.BinaryReader): CloudDescriptor;
}

export namespace CloudDescriptor {
  export type AsObject = {
    name: string,
    frequency: number,
    octavecount: number,
    persistance: number,
    lacunarity: number,
  }
}

