import GenericStream from './GenericStream';
import noise from 'fast-simplex-noise';

class CloudStream extends GenericStream {
  frequency: number = 1.0;
  octaves: number = 1;
  persistence: number = 1.0;
  valueAt(elapsed: number, x_cycle: number, y_cycle: number) {
    return 1.0;
  }
}