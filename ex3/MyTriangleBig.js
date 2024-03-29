/**
 * MyTriangle
 */
class MyTriangleBig extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -2, 0, 0,       // 0
            2, 0, 0,        // 1
            0, 2, 0,        // 2
            -2, 0, 0,       // 3
            2, 0, 0,        // 4
            0, 2, 0         // 5
        ]

        this.indices = [
            0, 1, 2,
            5, 4, 3
        ]

        this.normals = [];

        for (var i = 0; i < 3; ++i) this.normals.push(0, 0, 1);
        for (var i = 0; i < 3; ++i) this.normals.push(0, 0, -1);

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
