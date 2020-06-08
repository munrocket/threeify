//
// basic PBR material
//
// Authors:
// * @bhouston
//

import { ICloneable, ICopyable, IVersionable } from "../../types/types";
import { Blending } from "../Blending";
import { Color } from "../../math/Color";
import { TextureAccessor } from "../../textures/TextureAccessor";
import { Material } from "../Material";

export class PhysicalMaterial extends Material implements ICloneable<PhysicalMaterial>, ICopyable<PhysicalMaterial> {
  version = 0;
  albedo: Color = new Color(1, 1, 1);
  albedoMap: TextureAccessor = new TextureAccessor();
  roughness = 0.5;
  roughnessMap: TextureAccessor = new TextureAccessor();
  metalness = 0.0;
  metalnessMap: TextureAccessor = new TextureAccessor();
  emissive: Color = new Color(1, 1, 1);
  emissiveMap: TextureAccessor = new TextureAccessor();
  normalFactor = 1.0;
  normalMap: TextureAccessor = new TextureAccessor();
  blendMode: Blending = Blending.Over;

  clone(): PhysicalMaterial {
    return new PhysicalMaterial().copy(this);
  }

  copy(m: PhysicalMaterial): this {
    this.name = m.name;
    this.albedo.copy(m.albedo);
    this.albedoMap.copy(m.albedoMap);
    this.roughness = m.roughness;
    this.roughnessMap.copy(m.roughnessMap);
    this.metalness = m.metalness;
    this.metalnessMap.copy(m.metalnessMap);
    this.emissive.copy(m.emissive);
    this.emissiveMap.copy(m.emissiveMap);
    this.normalFactor = m.normalFactor;
    this.normalMap.copy(m.normalMap);
    this.blendMode = m.blendMode;
    return this;
  }

  dirty(): void {
    this.version++;
  }
}
