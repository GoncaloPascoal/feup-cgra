
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.face = new MyQuad(scene);
        
        this.initMaterials();
    }

    initMaterials() {
        this.materialBottom = new CGFappearance(this.scene);
        this.materialBottom.loadTexture("images/mineBottom.png");
        this.materialBottom.setAmbient(...hexToRGBA("#994c2b"));
        this.materialBottom.setDiffuse(...hexToRGBA("#994c2b"));
        this.materialBottom.setSpecular(...hexToRGBA("#1f1411"));

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.loadTexture("images/mineTop.png");
        this.materialTop.setAmbient(...hexToRGBA("#6adb23"));
        this.materialTop.setDiffuse(...hexToRGBA("#6adb23"));
        this.materialTop.setSpecular(...hexToRGBA("#3a591c"));

        this.materialSide = new CGFappearance(this.scene);
        this.materialSide.loadTexture("images/mineSide.png");
        this.materialSide.setAmbient(...hexToRGBA("#c47937"));
        this.materialSide.setDiffuse(...hexToRGBA("#c47937"));
        this.materialSide.setSpecular(...hexToRGBA("#1f1411"));

        for (var material of [this.materialBottom, this.materialTop, this.materialSide]) {
            material.setTextureWrap('REPEAT', 'REPEAT');
            material.setShininess(5.0);
        }
    }
    
    display() {
        // FACE 0
        this.materialBottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(degToRad(180), 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        // FACE 1
        this.materialTop.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.face.display();
        this.scene.popMatrix();

        // FACE 2
        this.materialSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(degToRad(90), 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        // FACE 3
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(degToRad(180), 0, 0, 1);
        this.scene.rotate(degToRad(90), 0, 1, 0);
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