import GenericStream from './GenericStream';
import FastSimplexNoise from 'fast-simplex-noise';

class CloudStream extends GenericStream {
  private amplitude: number = 1.0;
  private frequency: number = 1.0;
  private octaves: number = 1;
  private persistence: number = 1.0;

  private noise: FastSimplexNoise

  getFrequency(): number { return this.frequency }
  setFrequency(value: number): void {
    this.frequency = value;
    this.noise = this.buildNoise();
  }

  getOctaves(): number { return this.octaves }
  setOctaves(value: number): void {
    this.octaves = value;
    this.noise = this.buildNoise();
  }

  getPersistence(): number { return this.persistence }
  setPersistence(value: number): void {
    this.persistence = value;
    this.noise = this.buildNoise();
  }
  
  buildNoise(): FastSimplexNoise {
    return new FastSimplexNoise({
      amplitude: this.amplitude,
      frequency: this.frequency,
      max: 255,
      min: 0,
      octaves: this.octaves,
      persistence: this.persistence
    })
  }
  valueAt(elapsed: number, x_cycle: number, y_cycle: number) {
    return this.noise.raw2D(x_cycle, y_cycle);
  }

  constructor(name: string) {
    super(name);
    this.noise = this.buildNoise();
  }
}