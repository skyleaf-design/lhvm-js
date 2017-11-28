import { StreamFunction } from '../vocabulary';
import { Serializable, SerializableConstructor } from '../vocabulary';

export default interface MutableStream {
  name: string
  valueAt: StreamFunction

  // @TODO: implement serialization to get an opstack imported.
}