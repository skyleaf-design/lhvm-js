import { ZoneOp, ZoneOpDescriptor } from './index';
import SelectionZone from '../zone/SelectionZone';

type ZoneEntryOpState = SelectionZone;


export default class EnterZone implements ZoneOp {

  private _zone: SelectionZone;
  get zone(): SelectionZone { return this._zone }
  set zone(new_value: SelectionZone) { this._zone = new_value}

  get descriptor(): ZoneOpDescriptor {
    const descriptor = new ZoneOpDescriptor();
    descriptor.setOp(ZoneOpDescriptor.ZoneOp.ENTERZONE);
    descriptor.setSelectionzone(this._zone.descriptor);
    return descriptor;
  }
  data(): Uint8Array { return this.descriptor.serializeBinary() }

  constructor(values: ZoneEntryOpState | ZoneOpDescriptor) {
    switch (values.constructor) {
      case ZoneOpDescriptor:
        const descriptor = values as ZoneOpDescriptor;
        if (!descriptor.hasSelectionzone()) { throw new Error("Selection zone is not present.") }
        const zone_descriptor = descriptor.getSelectionzone();
        if (zone_descriptor === undefined) { throw new Error("Selection zone is undefined.")}
        const width = zone_descriptor.getWidth();
        const height = zone_descriptor.getHeight();
        const zone_values = zone_descriptor.getValuesList();
        this._zone= new SelectionZone(width, height, zone_values);
        return;
      default:
        const state = values as ZoneEntryOpState;
        this._zone = state;
    }
  }
}