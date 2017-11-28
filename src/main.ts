import { CloudDescriptor } from "./descriptor/CloudDescriptor_pb";
import { ConstantDescriptor } from './descriptor/ConstantDescriptor_pb';
import { OpStackDescriptor } from './descriptor/OpStackDescriptor_pb';
import { PulseDescriptor } from './descriptor/PulseDescriptor_pb';
import { SineSingleDescriptor } from './descriptor/SineSingleDescriptor_pb';
import { SineDoubleDescriptor } from './descriptor/SineDoubleDescriptor_pb';
import { ZoneDescriptor } from './descriptor/ZoneDescriptor_pb';
import { ZoneOpDescriptor } from './descriptor/ZoneOpDescriptor_pb';

import { OpStack } from './the_stack/OpStack';

const stack = new OpStack("blah blah");
//console.log(stack.something);

const descriptor = new CloudDescriptor();
descriptor.setName("something");
descriptor.setFrequency(2.0);
descriptor.setLacunarity(3.0);
descriptor.setOctavecount(1);
descriptor.setPersistance(4.0);
const binary = descriptor.serializeBinary();

const element = document.getElementById("greeting");
if (element) element.innerHTML = Array(binary).join(", ")
