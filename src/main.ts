import { CloudDescriptor } from "./descriptor/CloudDescriptor_pb";
import { ConstantDescriptor } from './descriptor/ConstantDescriptor_pb';
import { OpStackDescriptor } from './descriptor/OpStackDescriptor_pb';
import { PulseDescriptor } from './descriptor/PulseDescriptor_pb';
import { SineSingleDescriptor } from './descriptor/SineSingleDescriptor_pb';
import { SineDoubleDescriptor } from './descriptor/SineDoubleDescriptor_pb';
import { ZoneDescriptor } from './descriptor/ZoneDescriptor_pb';
import { ZoneOpDescriptor } from './descriptor/ZoneOpDescriptor_pb';

import { OpStack } from './the_stack/OpStack';


const element = document.getElementById("greeting");

const oReq = new XMLHttpRequest();
oReq.open("GET", "./asset/cloudy_wave.lhso", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  const arrayBuffer = oReq.response;
  if (!arrayBuffer) { return }
  if (!element) { return }
  const byteArray = new Uint8Array(arrayBuffer);
  element.innerHTML = Array(byteArray).join(", ");

  // @TODO: unserialize this into ZoneOp, which, in turn, unserialize
  // the Streams they may contain.
};

oReq.send(null);