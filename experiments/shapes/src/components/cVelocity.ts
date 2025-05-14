import { Point } from '@aeony/aeony';
import { random } from 'love.math';

export class CVelocity {
  velocity: Point;

  constructor() {
    this.velocity = new Point(random(-100, 100), random(-100, 100));
  }
}
