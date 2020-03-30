#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D uSampler;

varying vec2 vTextureCoord;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler, fract(vTextureCoord + timeFactor / 60.0));
	
	gl_FragColor = color;
}