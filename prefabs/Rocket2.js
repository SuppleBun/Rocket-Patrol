// Rocket prefab
class Rocket2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        
        // track if rocket is firing
        this.isFiring = false;

        // explosion sfx
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyA.isDown && this.x >= 47) {
                this.x -= 2;
            } else if(keyD.isDown && this.x <= 578) {
                this.x += 2;
            }
        }

        // fiya button
        if(Phaser.Input.Keyboard.JustDown(keyL) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // play the sfx
        }

        // if fiyad, move up
        if(this.isFiring && this.y >= 108) {
            this.y -= 2;
        }

        // reset rocket if miss
        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}