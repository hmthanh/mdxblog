<script>
  import { onMount } from "svelte"
  //   import from "./webutils"
  import { createProgramFromSources, resizeCanvasToDisplaySize } from "./utilsweb"

  let gl
  let canvas

  let vertexShaderSource = `#version 300 es
    // an attribute is an input (in) to a vertex shader.
    // It will receive data from a buffer
    in vec4 a_position;
    in vec4 a_color;

    // A matrix to transform the positions by
    uniform mat4 u_matrix;

    // a varying the color to the fragment shader
    out vec4 v_color;

    // all shaders have a main function
    void main() {
    // Multiply the position by the matrix.
    gl_Position = u_matrix * a_position;

    // Pass the color to the fragment shader.
    v_color = a_color;
    }`

  var fragmentShaderSource = `#version 300 es
    precision highp float;

    // the varied color passed from the vertex shader
    in vec4 v_color;

    // we need to declare an output for the fragment shader
    out vec4 outColor;

    void main() {
    outColor = v_color;
    }`

  onMount(() => {
    canvas = document.getElementById("webgl-canvas")
    gl = canvas.getContext("webgl2")

    if (!gl) {
      console.error("WebGL not supported, falling back on experimental-webgl")
      gl = canvas.getContext("experimental-webgl")
    }

    if (!gl) {
      alert("Your browser does not support WebGL")
      return
    }

    // window.addEventListener("resize", handleResize)
    // handleResize()
    drawCircle()
  })

  function handleResize() {
    const { clientWidth, clientHeight } = canvas.parentNode
    console.log(canvas.parentNode)
    canvas.width = clientWidth
    canvas.height = clientHeight
    gl.viewport(0, 0, clientWidth, clientHeight)
    // Additional code for handling aspect ratio or other WebGL setup
  }

  function createShader(gl, type, source) {
    var shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (success) {
      return shader
    }

    console.log(gl.getShaderInfoLog(shader)) // eslint-disable-line
    gl.deleteShader(shader)
    return undefined
  }

  function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    var success = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (success) {
      return program
    }

    console.log(gl.getProgramInfoLog(program)) // eslint-disable-line
    gl.deleteProgram(program)
    return undefined
  }

  function drawCircle() {
    // create GLSL shaders, upload the GLSL source, compile the shaders
    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    // Link the two shaders into a program
    var program = createProgram(gl, vertexShader, fragmentShader)

    // look up where the vertex data needs to go.
    var positionAttributeLocation = gl.getAttribLocation(program, "a_position")

    // Create a buffer and put three 2d clip space points in it
    var positionBuffer = gl.createBuffer()

    // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

    var positions = [0, 0, 0, 0.5, 0.7, 0]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

    // Create a vertex array object (attribute state)
    var vao = gl.createVertexArray()

    // and make it the one we're currently working with
    gl.bindVertexArray(vao)

    // Turn on the attribute
    gl.enableVertexAttribArray(positionAttributeLocation)

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2 // 2 components per iteration
    var type = gl.FLOAT // the data is 32bit floats
    var normalize = false // don't normalize the data
    var stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0 // start at the beginning of the buffer
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

    resizeCanvasToDisplaySize(gl.canvas)

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    // Clear the canvas
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program)

    // Bind the attribute/buffer set we want.
    gl.bindVertexArray(vao)

    // draw
    var primitiveType = gl.TRIANGLES
    var offset = 0
    var count = 3
    gl.drawArrays(primitiveType, offset, count)
  }
</script>

<div class="w-full">
  <canvas id="webgl-canvas" class="w-full"></canvas>
</div>

<style>
  canvas {
    border: 1px solid black;
  }
</style>
