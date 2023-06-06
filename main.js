class AlignAnimations extends Phaser.Scene {

    

   
preload () {

    
    this.load.spritesheet('animation', 'assets/sprites/p1_spritesheet.png', {frameWidth: 72.5, frameHeight: 96, endFrame: 18}); //sotb-64x112x11
};


create () {

    const config = {
        key: 'move',
        frames: this.anims.generateFrameNumbers('animation', {start:1, end: 16, first: 16}),
        frameRate: 2,
        repeat: -1
    };

    this.anims.create(config) ;   
    this.add.sprite(400, 300, 'animation').play('move');  

};

};


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    //backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: AlignAnimations

 };

 // creación del juego 
 const game = new Phaser.Game(config);
