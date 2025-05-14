import { Scene } from '@aeony/aeony';
import { EBox } from 'src/entities/eBox';

export class GameScene extends Scene {
  constructor() {
    super();

    this.addEntity(new EBox(100, 100));
    //
  }
}
