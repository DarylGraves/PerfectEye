// Vertex Shader
attribute vec3 color;     // 'color' attribute (vertex color) is expected in your GLB model

varying vec3 vColor;  // Pass to fragment shader

void main(void) {
    vColor = color;  // Pass color to fragment shader
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
