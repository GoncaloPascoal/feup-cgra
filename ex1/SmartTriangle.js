
class SmartTriangle extends CGFobject {
    constructor(scene, vertices) {
        super(scene);
        this.initBuffers(vertices);
    }

    initBuffers(vertices) {
        this.vertices = vertices;
        
        this.indices = [
            0, 1, 2
        ]

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}