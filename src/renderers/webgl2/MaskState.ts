//
// OpenGL-compatible mask state
//
// Authors:
// * @bhouston
//

import { ICloneable, IEquatable } from "../../types/types";

export class MaskState implements ICloneable<MaskState>, IEquatable<MaskState> {
  red: boolean;
  green: boolean;
  blue: boolean;
  alpha: boolean;
  depth: boolean;
  stencil: number; // bitmask

  constructor(red = true, green = true, blue = true, alpha = true, depth = true, stencil = 0) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
    this.depth = depth;
    this.stencil = stencil;
  }

  clone(): MaskState {
    return new MaskState(this.red, this.green, this.blue, this.alpha, this.depth, this.stencil);
  }

  copy(ms: MaskState): void {
    this.red = ms.red;
    this.green = ms.green;
    this.blue = ms.blue;
    this.alpha = ms.alpha;
    this.depth = ms.depth;
    this.stencil = ms.stencil;
  }

  equals(ms: MaskState): boolean {
    return (
      this.red === ms.red &&
      this.green === ms.green &&
      this.blue === ms.blue &&
      this.alpha === ms.alpha &&
      this.depth === ms.depth &&
      this.stencil === ms.stencil
    );
  }
}
