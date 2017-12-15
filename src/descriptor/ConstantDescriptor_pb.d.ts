// package: 
// file: ConstantDescriptor.proto

import * as jspb from "google-protobuf";

export class ConstantDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConstant(): number;
  setConstant(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConstantDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ConstantDescriptor): ConstantDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConstantDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConstantDescriptor;
  static deserializeBinaryFromReader(message: ConstantDescriptor, reader: jspb.BinaryReader): ConstantDescriptor;
}

export namespace ConstantDescriptor {
  export type AsObject = {
    name: string,
    constant: number,
  }
}

