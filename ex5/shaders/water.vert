attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
	const float SCALE_FACTOR = 20.0;

	vec4 filter = texture2D(uSampler2, fract(aTextureCoord + timeFactor / 60.0));

    vec3 offset = vec3(0.0, 0.0, filter.b - 0.5) / SCALE_FACTOR;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	vTextureCoord = aTextureCoord;
}
