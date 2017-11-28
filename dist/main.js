"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CloudDescriptor_pb_1 = require("./descriptor/CloudDescriptor_pb");
var OpStack = /** @class */ (function () {
    function OpStack(something) {
        this.something = something;
    }
    return OpStack;
}());
var stack = new OpStack("blah blah");
//console.log(stack.something);
var descriptor = new CloudDescriptor_pb_1.CloudDescriptor();
descriptor.setName("something");
descriptor.setFrequency(2.0);
descriptor.setLacunarity(3.0);
descriptor.setOctavecount(1);
descriptor.setPersistance(4.0);
var binary = descriptor.serializeBinary();
var element = document.getElementById("greeting");
