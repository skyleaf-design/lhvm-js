import * as jspb from "google-protobuf";
import { ZoneOpDescriptor } from '../descriptor/ZoneOpDescriptor_pb';

export interface Perceptor {
  (elapsed: number, x_cycle: number, y_cycle: number): number;
}

export interface Perceptible {
  valueAt: Perceptor
}

export interface Serializable {
  data(): Uint8Array
}

export interface SerializableConstructor {
  new(data: Uint8Array): Serializable
}

export interface MutableStream extends Perceptible, Serializable {
  readonly name: string
}

export const DefaultPerceptor: Perceptor = (a: number, b: number, c: number) => 1.0;