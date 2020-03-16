
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.diamond = new MyDiamond(scene);
        this.greenTriangle = new MyTriangle(scene);
        this.redTriangle = new MyTriangleBig(scene, MyTriangleBigColors.RED);
        this.pinkTriangle = new MyTriangleBig(scene, MyTriangleBigColors.PINK);
        this.parallelogram = new MyParallelogram(scene);
        this.lightBlueTriangle = new MyTriangleSmall(scene, MyTriangleSmallColors.LIGHT_BLUE);
        this.blueTriangle = new MyTriangleSmall(scene, MyTriangleSmallColors.BLUE);

        this.texture = new CGFtexture(scene, 'images/tangram.png');

        this.initMaterials();
    }

    initMaterials() {
        this.materialOrange = new CGFappearance(this.scene);
        this.materialOrange.loadTexture('images/tangram.png');
        this.materialOrange.setTextureWrap('REPEAT', 'REPEAT');

        this.materialGreen = new CGFappearance(this.scene);
        this.materialGreen.loadTexture('images/tangram.png');
        this.materialGreen.setTextureWrap('REPEAT', 'REPEAT');

        this.materialRed = new CGFappearance(this.scene);
        this.materialRed.loadTexture('images/tangram.png');
        this.materialRed.setTextureWrap('REPEAT', 'REPEAT');

        this.materialPink = new CGFappearance(this.scene);
        this.materialPink.loadTexture('images/tangram.png');
        this.materialPink.setTextureWrap('REPEAT', 'REPEAT');

        this.materialYellow = new CGFappearance(this.scene);
        this.materialYellow.loadTexture('images/tangram.png');
        this.materialYellow.setTextureWrap('REPEAT', 'REPEAT');

        this.materialLightBlue = new CGFappearance(this.scene);
        this.materialLightBlue.loadTexture('images/tangram.png');
        this.materialLightBlue.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBlue = new CGFappearance(this.scene);
        this.materialBlue.loadTexture('images/tangram.png');
        this.materialBlue.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        // DIAMOND
        this.materialOrange.apply();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(degToRad(15), 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.diamond.display();
        this.scene.popMatrix();

        // GREEN TRIANGLE
        this.materialGreen.apply();
        this.scene.pushMatrix();
        this.scene.translate(-3, 1, 0);
        this.scene.rotate(degToRad(180), 0, 0, 1);
        this.greenTriangle.display();
        this.scene.popMatrix();

        // RED TRIANGLE
        this.materialRed.apply();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(degToRad(-90), 0, 0, 1);
        this.redTriangle.display();
        this.scene.popMatrix();

        // PINK TRIANGLE
        this.materialPink.apply();
        this.scene.pushMatrix();
        this.scene.rotate(degToRad(-45), 0, 0, 1);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        // PARALLELOGRAM
        this.materialYellow.apply();
        this.scene.pushMatrix();
        this.scene.translate(Math.SQRT2, Math.SQRT2, 0);
        this.scene.rotate(degToRad(-45), 0, 0, 1);
        this.scene.rotate(degToRad(180), 1, 0, 0);
        this.parallelogram.display();
        this.scene.popMatrix();

        // LIGHT BLUE TRIANGLE
        this.materialLightBlue.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.7, -1.7, 0);
        this.scene.rotate(degToRad(135), 0, 0, 1);
        this.lightBlueTriangle.display();
        this.scene.popMatrix();

        // BLUE TRIANGLE
        this.materialBlue.apply();
        this.scene.pushMatrix();
        this.scene.translate(2.5 * Math.SQRT2, -Math.SQRT2, 0);
        this.scene.rotate(degToRad(135), 0, 0, 1);
        this.blueTriangle.display();
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