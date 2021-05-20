var tom, jerry, bg;
var tomIM1, tomIM2, tomIM3, jerryIMa, jerryIMb, jerryIMc, bgIM;

function preload() {
    //load the images here
    tomIM = loadImage("cat1.png");
    tomIM2 = loadAnimation("cat2.png", "cat3.png");
    tomIM3 = loadImage("cat4.png");
    bgIM = loadImage("garden.png");
    jerryIMa = loadImage("mouse2.png");
    jerryIMb = loadImage("mouse3.png");
    jerryIMc = loadImage("mouse1.png");

}

function setup(){
    createCanvas(800,500);

    // -create tom and jerry sprites here-
    tom = createSprite(700, 400, 20, 20);
    tom.addImage("1", tomIM);
    tom.scale = 0.1;
//    tom.debug = true;

    jerry = createSprite(100, 400, 20, 20);
    jerry.addImage("a", jerryIMa);
    jerry.scale = 0.09;
//    jerry.debug = true;

}

function draw() {

    background(bgIM);

    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < (tom.width - jerry.width)/2) {
        jerry.addImage("b", jerryIMc);
        jerry.changeImage("b");

        tom.addImage("2", tomIM3);
        tom.changeImage("2");

        tom.x = 200;
        tom.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === RIGHT_ARROW) {
        jerry.addImage("c", jerryIMb);
        jerry.changeImage("c");
    }

    if (keyCode === LEFT_ARROW) {
        tom.addAnimation("3", tomIM2);
        tom.changeImage("3");

        tom.velocityX = -1.5;
    }

}
