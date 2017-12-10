import OpStack from './the_stack/OpStack';
import { OpStackDescriptor } from './descriptor/OpStackDescriptor_pb';

export default class ExternalOpStack extends OpStack {
  constructor(data: Uint8Array) {
    const descriptor = OpStackDescriptor.deserializeBinary(data);
    super(descriptor);
  }
}