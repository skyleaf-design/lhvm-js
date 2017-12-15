// package: 
// file: SineDoubleDescriptor.proto

import * as jspb from "google-protobuf";

export class SineDoubleDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAmplitude(): number;
  setAmplitude(value: number): void;

  getWavelength(): number;
  setWavelength(value: number): void;

  getPhase(): number;
  setPhase(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getTimescale(): number;
  setTimescale(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SineDoubleDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SineDoubleDescriptor): SineDoubleDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SineDoubleDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SineDoubleDescriptor;
  static deserializeBinaryFromReader(message: SineDoubleDescriptor, reader: jspb.BinaryReader): SineDoubleDescriptor;
}

export namespace SineDoubleDescriptor {
  export type AsObject = {
    name: string,
    amplitude: number,
    wavelength: number,
    phase: number,
    offset: number,
    timescale: number,
  }
}

