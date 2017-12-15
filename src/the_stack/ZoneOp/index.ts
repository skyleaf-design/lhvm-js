import { Serializable } from '../vocabulary';

// This is only here as a convenience: I'm sure that other interfaces
// will be required for ZoneOp in the future.
export interface ZoneOp extends Serializable {}

export { ZoneOpDescriptor } from '../../descriptor/ZoneOpDescriptor_pb';
export { default as Add } from './Add';
export { default as Multiply } from './Multiply';
export { default as EnterStream } from './EnterStream';
export { default as EnterZone } from './EnterZone';

// @TODO: create a generic initializer from a descriptor, that checks which fields
// are present, and calls the appropriate constructor.