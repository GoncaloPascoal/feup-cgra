
function normalize(vec) {
    var norm = 0;

    for (elem of vec) {
        norm += Math.pow(elem, 2);
    }

    norm = Math.sqrt(norm);

    var normalized = [];

    for (elem of vec) {
        normalized.push(elem / norm);
    }

    return normalized;
}

class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        // BOTTOM AND TOP FACES
        for (var z of [-0.5, 0.5]) {
            for (var x of [-0.5, 0.5]) {
                for (var y of [-0.5, 0.5]) {
                    this.vertices.push(x, y, z);
                    this.normals.push(...normalize([0, 0, z]));
                }
            }

            var s = 4 * (Math.floor(this.vertices.length / (3 * 4)) - 1);
            var ind = [s, 1 + s, 2 + s, 2 + s, 1 + s, 3 + s];

            if (z == -0.5)
                this.indices.push(...ind);
            else
                this.indices.push(...ind.reverse());
        }

        // BACK AND FRONT FACES
        for (var x of [-0.5, 0.5]) {
            for (var y of [-0.5, 0.5]) {
                for (var z of [-0.5, 0.5]) {
                    this.vertices.push(x, y, z);
                    this.normals.push(...normalize([x, 0, 0]));
                }
            }

            var s = 4 * (Math.floor(this.vertices.length / (3 * 4)) - 1);
            var ind = [s, 1 + s, 2 + s, 2 + s, 1 + s, 3 + s];

            if (x == -0.5)
                this.indices.push(...ind);
            else
                this.indices.push(...ind.reverse());
        }

        // LEFT AND RIGHT FACES
        for (var y of [-0.5, 0.5]) {
            for (var z of [-0.5, 0.5]) {
                for (var x of [-0.5, 0.5]) {
                    this.vertices.push(x, y, z);
                    this.normals.push(...normalize([0, y, 0]));
                }
            }

            var s = 4 * (Math.floor(this.vertices.length / (3 * 4)) - 1);
            var ind = [s, 1 + s, 2 + s, 2 + s, 1 + s, 3 + s];

            if (y == -0.5)
                this.indices.push(...ind);
            else
                this.indices.push(...ind.reverse());
        }

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

    updateBuffers(complexity) {

    }
}