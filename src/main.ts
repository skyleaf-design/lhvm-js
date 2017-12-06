import { CloudDescriptor } from "./descriptor/CloudDescriptor_pb";
import { ConstantDescriptor } from './descriptor/ConstantDescriptor_pb';
import { OpStackDescriptor } from './descriptor/OpStackDescriptor_pb';
import { PulseDescriptor } from './descriptor/PulseDescriptor_pb';
import { SineSingleDescriptor } from './descriptor/SineSingleDescriptor_pb';
import { SineDoubleDescriptor } from './descriptor/SineDoubleDescriptor_pb';
import { ZoneDescriptor } from './descriptor/ZoneDescriptor_pb';
import { ZoneOpDescriptor } from './descriptor/ZoneOpDescriptor_pb';

import OpStack from './the_stack/OpStack';
import CloudStream from "./the_stack/stream/CloudStream";
import ConstantStream from "./the_stack/stream/ConstantStream";
import SineDoubleStream from "./the_stack/stream/SineDoubleStream";
import SineSingleStream from "./the_stack/stream/SineSingleStream";


import Grid from './the_stack/zone/Grid';

import { Add, Multiply, EnterStream, EnterZone } from './the_stack/ZoneOp';

interface LiquidHexGlobal { values: number[] }
declare global {
  interface Window { LiquidHex: LiquidHexGlobal; }
}



const constant_descriptor = new ConstantDescriptor();
const sine_descriptor = new SineSingleDescriptor();
sine_descriptor.setTimescale(2.5);
sine_descriptor.setAmplitude(15.0);
sine_descriptor.setWavelength(2.0);

const op1_descriptor = new ZoneOpDescriptor();
op1_descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERSTREAM);
op1_descriptor.setSinesinglestream(sine_descriptor);

const op2_descriptor = new ZoneOpDescriptor();
op2_descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERSTREAM);
op2_descriptor.setConstantstream(constant_descriptor);

const op3_descriptor = new ZoneOpDescriptor();
op3_descriptor.setOp(ZoneOpDescriptor.ZoneOp.MULT);

const opstack_descriptor = new OpStackDescriptor();
opstack_descriptor.setDimensionX(50);
opstack_descriptor.setDimensionY(50);
opstack_descriptor.setOpsList([op1_descriptor, op2_descriptor, op3_descriptor]);

const op_stack = new OpStack(opstack_descriptor);



const master = op_stack.reduced();
window.LiquidHex = { values: new Array<number>(50 * 50) }

function updateValues() {
  if (master === null) { console.log("Master function is invalid!"); return }
  const elapsed = new Date().getTime() / 1000;
  window.LiquidHex.values = op_stack.calculateGrid(elapsed, 50, 50).getArray();
  window.requestAnimationFrame(updateValues);
}

window.requestAnimationFrame(updateValues);