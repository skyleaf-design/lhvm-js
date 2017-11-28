// package: 
// file: PulseDescriptor.proto

import * as jspb from "google-protobuf";

export class PulseDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAmplitude(): number;
  setAmplitude(value: number): void;

  getPhase(): number;
  setPhase(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getTimescale(): number;
  setTimescale(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PulseDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: PulseDescriptor): PulseDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PulseDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PulseDescriptor;
  static deserializeBinaryFromReader(message: PulseDescriptor, reader: jspb.BinaryReader): PulseDescriptor;
}

export namespace PulseDescriptor {
  export type AsObject = {
    name: string,
    amplitude: number,
    phase: number,
    offset: number,
    timescale: number,
  }
}

