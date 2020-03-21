/**
 * MyTriangleSmall
 */

var MyTriangleSmallColors = {
    RED: 0,
    PURPLE: 1
};

class MyTriangleSmall extends CGFobject {
    constructor(scene, color) {
        super(scene);
        this.initBuffers(color);
    }

    initBuffers(color) {
        this.vertices = [
            -1, 0, 0,       // 0
            1, 0, 0,        // 1
            0, 1, 0,        // 2
            -1, 0, 0,       // 3
            1, 0, 0,        // 4
            0, 1, 0         // 5
        ]

        this.indices = [
            0, 1, 2,
            5, 4, 3
        ]

        this.normals = [];

        for (var i = 0; i < 3; ++i) this.normals.push(0, 0, 1);
        for (var i = 0; i < 3; ++i) this.normals.push(0, 0, -1);

        this.texCoords = [];

        if (color == MyTriangleSmallColors.RED) {
            this.texCoords.push(
                0.25, 0.75,
                0.75, 0.75,
                0.5, 0.5,
                0.25, 0.75,
                0.75, 0.75,
                0.5, 0.5
            );
        }
        else if (color == MyTriangleSmallColors.PURPLE) {
            this.texCoords.push(
                0, 0,
                0, 0.5,
                0.25, 0.25,
                0, 0,
                0, 0.5,
                0.25, 0.25,
            );
        }

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
