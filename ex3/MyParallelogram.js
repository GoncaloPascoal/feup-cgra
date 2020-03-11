

class MyParallelogram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0, 0, 0,        // 0
            1, 1, 0,        // 1
            3, 1, 0,        // 2
            2, 0, 0,        // 3
            0, 0, 0,        // 4
            1, 1, 0,        // 5
            3, 1, 0,        // 6
            2, 0, 0         // 7
        ]

        this.indices = [
            0, 3, 1,
            1, 3, 2,
            5, 7, 4,
            6, 7, 5
        ]

        this.normals = [];

        for (var i = 0; i < 4; ++i) this.normals.push(0, 0, 1);
        for (var i = 0; i < 4; ++i) this.normals.push(0, 0, -1);

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}