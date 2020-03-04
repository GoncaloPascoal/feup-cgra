
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.face = new MyQuad(scene);
    }

    display() {
        // FACE 0
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(degToRad(180), 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        // FACE 1
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.face.display();
        this.scene.popMatrix();

        // FACE 2
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(degToRad(90), 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        // FACE 3
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(degToRad(-90), 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        // FACE 4
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(degToRad(90), 0, 0, 1);
        this.scene.rotate(degToRad(90), 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        // FACE 5
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(degToRad(-90), 0, 0, 1);
        this.scene.rotate(degToRad(90), 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();
    }
}