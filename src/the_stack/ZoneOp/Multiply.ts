import { ZoneOp, ZoneOpDescriptor } from './index';



export default class Multiply implements ZoneOp {
  get descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.MULT);
    return descriptor;
  }
  data(): Uint8Array { return this.descriptor.serializeBinary() }
}