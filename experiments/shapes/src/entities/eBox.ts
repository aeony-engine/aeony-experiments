import { CBoxShape, Color, CTransform, Entity, inject, View } from '@aeony/aeony';
import { CVelocity } from 'src/components/cVelocity';

export class EBox extends Entity {
  private transform: CTransform;

  private boxShape: CBoxShape;

  private velocity: CVelocity;

  private view = inject(View);

  constructor(x: number, y: number) {
    super();

    this.transform = new CTransform({ x, y });

    const boxColor = new Color(0.0, 0.4, 0.1);
    this.boxShape = new CBoxShape({ size: { width: 60, height: 60 }, color: boxColor });
    this.velocity = new CVelocity();
  }

  override update(dt: number): void {
    const position = this.transform.position;
    const velocity = this.velocity.velocity;

    position.x += velocity.x * dt;
    position.y += velocity.y * dt;

    const [viewWidth, viewHeight] = this.view.getViewSize();
    const halfWidth = this.boxShape.size.width * 0.5;
    const halfHeight = this.boxShape.size.height * 0.5;

    if (position.x < 0 + halfWidth || position.x > viewWidth - halfWidth) {
      velocity.x *= -1;
    }
    if (position.y < 0 + halfHeight || position.y > viewHeight - halfHeight) {
      velocity.y *= -1;
    }
  }

  override draw(): void {
    const [x, y, angle, scaleX, scaleY] = this.transform.getValues();
    this.boxShape.draw(x, y, angle, scaleX, scaleY);
  }
}
