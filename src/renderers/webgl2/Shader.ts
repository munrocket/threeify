//
// basic shader
//
// Authors:
// * @bhouston
//

import { Context } from "./Context.js";
import { IDisposable } from "../../interfaces/Standard.js";
import { ShaderType } from "../../materials/ShaderType.js";

export class Shader implements IDisposable {
  disposed: boolean = false;
  context: Context;
  sourceCode: string;
  shaderType: ShaderType;
  glShader: WebGLShader;

  constructor(context: Context, sourceCode: string, shaderType: ShaderType) {
    this.context = context;
    this.sourceCode = sourceCode;
    this.shaderType = shaderType;

    let gl = this.context.gl;

    // Create the shader object
    {
      let glShader = gl.createShader(shaderType);
      if (!glShader)
        throw new Error("createShader failed");
      
      this.glShader = glShader;
    }

    // Set the shader source code.
    gl.shaderSource(this.glShader, sourceCode);

    // Compile the shader
    gl.compileShader(this.glShader);

    // Check if it compiled
    let success = gl.getShaderParameter(this.glShader, gl.COMPILE_STATUS);
    if (!success) {
      // Something went wrong during compilation; get the error
      var infoLog = gl.getShaderInfoLog(this.glShader);
      throw new Error(`could not compile shader: ${infoLog}`);
    }
  }

  dispose() {
    if (!this.disposed) {
      this.context.gl.deleteShader(this.glShader);
      this.disposed = true;
    }
  }
}
