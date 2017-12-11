import { ZoneOp, ZoneOpDescriptor } from './index';



export default class Add implements ZoneOp {
  get descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ADD);
    return descriptor;
  }
  data(): Uint8Array { return this.descriptor.serializeBinary() }
}