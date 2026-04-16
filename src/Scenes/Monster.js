class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 50;

        this.leftArmX = this.bodyX - 110;
        this.leftArmY = this.bodyY + 20;

        this.rightArmX = this.bodyX + 110;
        this.rightArmY = this.bodyY + 20;
        
        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 145;
        
        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 145;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 5;

        this.antennaX = this.bodyX + 15;
        this.antennaY = this.bodyY - 110;

        this.counter = 0;
        this.smileType = 'Smile';
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthA.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm.flipX = true;   // flip sprite to have hand on correct side
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg.flipX = true;   // flip sprite to have foot on correct side
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueA.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_angry_blue.png");
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_red.png");
        my.sprite.antenna = this.add.sprite(this.antennaX, this.antennaY, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.fangs = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;   // hide fangs initially

        my.keys = {
            S: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            F: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
            A: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            D: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };


        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        // Polling input: smile
        if (my.keys.S.isDown) {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        }
        // Polling input: fangs
        else if (my.keys.F.isDown) {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }

        // Polling input: move left
        if (my.keys.A.isDown) {
            my.sprite.body.x -= 2;
            my.sprite.smile.x -= 2;
            my.sprite.leftArm.x -= 2;
            my.sprite.rightArm.x -= 2;
            my.sprite.leftLeg.x -= 2;
            my.sprite.rightLeg.x -= 2;
            my.sprite.eye.x -= 2;
            my.sprite.nose.x -= 2;
            my.sprite.antenna.x -= 2;
            my.sprite.fangs.x -= 2;
        }
        // Polling input: move right    
        if (my.keys.D.isDown) {
            my.sprite.body.x += 2;
            my.sprite.smile.x += 2;
            my.sprite.leftArm.x += 2;
            my.sprite.rightArm.x += 2;
            my.sprite.leftLeg.x += 2;
            my.sprite.rightLeg.x += 2;
            my.sprite.eye.x += 2;
            my.sprite.nose.x += 2;
            my.sprite.antenna.x += 2;
            my.sprite.fangs.x += 2;
        }

       
    }

}