/**
 * MyTriangleBig
 */

var MyTriangleBigColors = {
    RED: 0,
    PINK: 1
};

class MyTriangleBig extends CGFobject {
    
    constructor(scene, color) {
        super(scene);
        this.initBuffers(color);
    }

    initBuffers(color) {
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

        this.texCoords = [];

        if (color == MyTriangleBigColors.RED) {
            this.texCoords.push(
                1, 0,
                0, 0,
                0.5, 0.5,
                1, 0,
                0, 0,
                0.5, 0.5
            );
        }
        else if (color == MyTriangleBigColors.PINK) {
            this.texCoords.push(
                1, 0,
                1, 1,
                0.5, 0.5,
                1, 0,
                1, 1,
                0.5, 0.5
            );
        }

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
