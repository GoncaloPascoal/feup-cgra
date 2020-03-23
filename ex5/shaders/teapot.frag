#ifdef GL_ES
precision highp float;
#endif

varying vec4 vertexPosition;

void main() {
    const vec4 YELLOW = vec4(1.0, 1.0, 0.0, 1.0);
    const vec4 BLUE = vec4(0.435, 0.513, 0.682, 1.0);

    if (vertexPosition.y > 0.5) {
        gl_FragColor = YELLOW;
    }
    else {
        gl_FragColor = BLUE;
    }
}
