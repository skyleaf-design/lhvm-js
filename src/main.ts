import { CloudDescriptor } from "./descriptor/CloudDescriptor_pb";
import { ConstantDescriptor } from './descriptor/ConstantDescriptor_pb';
import { OpStackDescriptor } from './descriptor/OpStackDescriptor_pb';
import { PulseDescriptor } from './descriptor/PulseDescriptor_pb';
import { SineSingleDescriptor } from './descriptor/SineSingleDescriptor_pb';
import { SineDoubleDescriptor } from './descriptor/SineDoubleDescriptor_pb';
import { ZoneDescriptor } from './descriptor/ZoneDescriptor_pb';
import { ZoneOpDescriptor } from './descriptor/ZoneOpDescriptor_pb';

import { OpStack } from './the_stack/OpStack';
import CloudStream from "./the_stack/stream/CloudStream";
import SineDoubleStream from "./the_stack/stream/SineDoubleStream";

import Grid from './the_stack/zone/Grid';

import { Add, Multiply, EnterStream, EnterZone } from './the_stack/ZoneOp';

interface LiquidHexGlobal { values: number[] }
declare global {
  interface Window { LiquidHex: LiquidHexGlobal; }
}

const op_stack = new OpStack([
  new EnterStream(new CloudStream("my_clouds")),
  new EnterStream(new SineDoubleStream("my_sine")),
  new Add
]);

const master = op_stack.reduced();
window.LiquidHex = { values: new Array<number>(24 * 24) }

function updateValues() {
  if (master === null) { console.log("Master function is invalid!"); return }
  const elapsed = new Date().getTime() / 1000;
  window.LiquidHex.values = op_stack.calculateGrid(elapsed, 24, 24).getArray();
  window.requestAnimationFrame(updateValues);
}

window.requestAnimationFrame(updateValues);