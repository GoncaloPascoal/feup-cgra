
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);

        this.initMaterials();
    }

    initMaterials() {
        this.materialGreen = new CGFappearance(this.scene);
        this.materialGreen.setAmbient(...this.scene.hexToRgbA("#164d0c"));
        this.materialGreen.setDiffuse(...this.scene.hexToRgbA("#2e961b"));
        this.materialGreen.setSpecular(...this.scene.hexToRgbA("#60eb46"));
        this.materialGreen.setShininess(10.0);

        this.materialPink = new CGFappearance(this.scene);
        this.materialPink.setAmbient(...this.scene.hexToRgbA("#75134e"));
        this.materialPink.setDiffuse(...this.scene.hexToRgbA("#c43b8d"));
        this.materialPink.setSpecular(...this.scene.hexToRgbA("#ff85ce"));
        this.materialPink.setShininess(10.0);

        this.materialBlue = new CGFappearance(this.scene);
        this.materialBlue.setAmbient(...this.scene.hexToRgbA("#094769"));
        this.materialBlue.setDiffuse(...this.scene.hexToRgbA("#167db5"));
        this.materialBlue.setSpecular(...this.scene.hexToRgbA("#3db4f5"));
        this.materialBlue.setShininess(10.0);

        this.materialOrange = new CGFappearance(this.scene);
        this.materialOrange.setAmbient(...this.scene.hexToRgbA("#592d12"));
        this.materialOrange.setDiffuse(...this.scene.hexToRgbA("#b55318"));
        this.materialOrange.setSpecular(...this.scene.hexToRgbA("#f2823d"));
        this.materialOrange.setShininess(10.0);

        this.materialYellow = new CGFappearance(this.scene);
        this.materialYellow.setAmbient(...this.scene.hexToRgbA("#876f1a"));
        this.materialYellow.setDiffuse(...this.scene.hexToRgbA("#d6ad1c"));
        this.materialYellow.setSpecular(...this.scene.hexToRgbA("#ffe159"));
        this.materialYellow.setShininess(10.0);

        this.materialRed = new CGFappearance(this.scene);
        this.materialRed.setAmbient(...this.scene.hexToRgbA("#3d0d0d"));
        this.materialRed.setDiffuse(...this.scene.hexToRgbA("#962020"));
        this.materialRed.setSpecular(...this.scene.hexToRgbA("#e84f4f"));
        this.materialRed.setShininess(10.0);

        this.materialPurple = new CGFappearance(this.scene);
        this.materialPurple.setAmbient(...this.scene.hexToRgbA("#320c4d"));
        this.materialPurple.setDiffuse(...this.scene.hexToRgbA("#501878"));
        this.materialPurple.setSpecular(...this.scene.hexToRgbA("#af5fe8"));
        this.materialPurple.setShininess(10.0);
    }

    display() {
        // DIAMOND
        //this.materialGreen.apply();       // commented to use custom material
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(degToRad(15), 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.diamond.display();
        this.scene.popMatrix();

        // PINK TRIANGLE
        this.materialPink.apply();
        this.scene.pushMatrix();
        this.scene.translate(-3, 1, 0);
        this.scene.rotate(degToRad(180), 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        // BLUE TRIANGLE
        this.materialBlue.apply();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(degToRad(-90), 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        // ORANGE TRIANGLE
        this.materialOrange.apply();
        this.scene.pushMatrix();
        this.scene.rotate(degToRad(-45), 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        // PARALLELOGRAM
        this.materialYellow.apply();
        this.scene.pushMatrix();
        this.scene.translate(Math.SQRT2, Math.SQRT2, 0);
        this.scene.rotate(degToRad(-45), 0, 0, 1);
        this.scene.rotate(degToRad(180), 1, 0, 0);
        this.parallelogram.display();
        this.scene.popMatrix();

        // RED TRIANGLE
        this.materialRed.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.7, -1.7, 0);
        this.scene.rotate(degToRad(135), 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        // PURPLE TRIANGLE
        this.materialPurple.apply();
        this.scene.pushMatrix();
        this.scene.translate(2.5 * Math.SQRT2, -Math.SQRT2, 0);
        this.scene.rotate(degToRad(135), 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
        
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.parallelogram.disableNormalViz();
    }
}