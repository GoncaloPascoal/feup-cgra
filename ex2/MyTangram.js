
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.diamond = new MyDiamond(scene);
        this.pinkTriangle = new MyTriangle(scene);
        this.blueTriangle = new MyTriangleBig(scene);
        this.orangeTriangle = new MyTriangleBig(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.redTriangle = new MyTriangleSmall(scene);
        this.purpleTriangle = new MyTriangleSmall(scene);
    }

    display() {
        // DIAMOND
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(degToRad(15), 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.diamond.display();
        this.scene.popMatrix();

        // PINK TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-3, 1, 0);
        this.scene.rotate(degToRad(180), 0, 0, 1);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        // BLUE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(degToRad(-90), 0, 0, 1);
        this.blueTriangle.display();
        this.scene.popMatrix();

        // ORANGE TRIANGLE
        this.scene.pushMatrix();
        this.scene.rotate(degToRad(-45), 0, 0, 1);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        // PARALLELOGRAM
        this.scene.pushMatrix();
        this.scene.translate(2 * Math.SQRT2, -Math.SQRT2, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(degToRad(45), 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        // RED TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(1.7, -1.7, 0);
        this.scene.rotate(degToRad(135), 0, 0, 1);
        this.redTriangle.display();
        this.scene.popMatrix();

        // PURPLE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(2.5 * Math.SQRT2, -Math.SQRT2, 0);
        this.scene.rotate(degToRad(135), 0, 0, 1);
        this.purpleTriangle.display();
        this.scene.popMatrix();
    }
}