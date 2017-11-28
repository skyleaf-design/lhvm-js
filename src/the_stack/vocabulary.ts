import * as jspb from "google-protobuf";
import { ZoneOpDescriptor } from '../descriptor/ZoneOpDescriptor_pb';

export interface StreamFunction {
  (elapsed: number, x_cycle: number, y_cycle: number): number;
}

export interface Serializable {
  descriptor(): ZoneOpDescriptor
  data(): Uint8Array
}

export interface SerializableConstructor {
  new(data: Uint8Array): Serializable
}

export const DefaultStreamFunction: StreamFunction = (a: number, b: number, c: number) => 1.0;