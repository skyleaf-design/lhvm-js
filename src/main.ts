import OpStack from './the_stack/OpStack';
import CloudStream from "./the_stack/stream/CloudStream";
import ConstantStream from "./the_stack/stream/ConstantStream";
import SineDoubleStream from "./the_stack/stream/SineDoubleStream";
import SineSingleStream from "./the_stack/stream/SineSingleStream";
import { Multiply, EnterStream } from './the_stack/ZoneOp/index';


import Grid from './the_stack/zone/Grid';

interface LiquidHexGlobal {
  values: Array<number>
  stack: OpStack;
  stack_data: Uint8Array;
}
declare global {
  interface Window { LiquidHex: LiquidHexGlobal; }
}


window.LiquidHex.stack = new OpStack([
  new EnterStream(new CloudStream()),
  new EnterStream(new SineDoubleStream({ wavelength: 0.1 })),
  new Multiply(),
  new EnterStream(new SineSingleStream({ wavelength: 0.3 })),
  new Multiply(),
  new EnterStream(new ConstantStream({ constant: 300 })),
  new Multiply()
]);

let last_stack_data = window.LiquidHex.stack.data();
let start_time = new Date().getTime()


function updateValues() {
  const elapsed = (new Date().getTime() - start_time) / 1000;
  // if (window.LiquidHex.stack_data !== last_stack_data) {
  //   const descriptor = OpStackDescriptor.deserializeBinary(window.LiquidHex.stack_data);
  //   window.LiquidHex.stack = new OpStack(descriptor);
  //   last_stack_data = window.LiquidHex.stack_data;
  // }
  // The opstack used to calculated grid has no ops!
  window.LiquidHex.values = window.LiquidHex.stack.calculateGrid(elapsed, 50, 50).getArray();
  window.requestAnimationFrame(updateValues);
}

window.requestAnimationFrame(updateValues);