#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {
    const float RED_FACTOR = 0.299, GREEN_FACTOR = 0.587, BLUE_FACTOR = 0.114;

    vec4 color = texture2D(uSampler, vTextureCoord);

	vec4 colorGrayscale = color;

	colorGrayscale.r = color.r * RED_FACTOR + color.g * GREEN_FACTOR + color.b * BLUE_FACTOR;
	colorGrayscale.g = color.r * RED_FACTOR + color.g * GREEN_FACTOR + color.b * BLUE_FACTOR;
	colorGrayscale.b = color.r * RED_FACTOR + color.g * GREEN_FACTOR + color.b * BLUE_FACTOR;

	gl_FragColor = colorGrayscale;
}