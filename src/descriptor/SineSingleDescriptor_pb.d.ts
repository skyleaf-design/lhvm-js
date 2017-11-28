// package: 
// file: SineSingleDescriptor.proto

import * as jspb from "google-protobuf";

export class SineSingleDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDirection(): SineSingleDescriptor.AxisDirection;
  setDirection(value: SineSingleDescriptor.AxisDirection): void;

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
  toObject(includeInstance?: boolean): SineSingleDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SineSingleDescriptor): SineSingleDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SineSingleDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SineSingleDescriptor;
  static deserializeBinaryFromReader(message: SineSingleDescriptor, reader: jspb.BinaryReader): SineSingleDescriptor;
}

export namespace SineSingleDescriptor {
  export type AsObject = {
    name: string,
    direction: SineSingleDescriptor.AxisDirection,
    amplitude: number,
    wavelength: number,
    phase: number,
    offset: number,
    timescale: number,
  }

  export enum AxisDirection {
    X = 0,
    Y = 1,
  }
}

