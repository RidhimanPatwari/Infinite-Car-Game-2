var red_car_player, red_carImage, blue_car, blue_carImage, green_car, green_carImage, yellow_car, yellow_carImage, purple_car, purple_carImage;
var roadBg, roadBgImage;
var gameState = "play";
var carGroup;
var gameOver;
var score;

function preload() {
  roadBgImage = loadImage("road_for_game.png");
  
  red_carImage = loadImage("red_race_car.svg");
  blue_carImage = loadImage("blue_race_car.png");
  green_carImage = loadImage("green_race_car.png");
  yellow_carImage = loadImage("yellow_race_car.png");
  purple_carImage = loadImage("purple_race_car.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  roadBg = createSprite(displayWidth, displayHeight/2)
  roadBg.addImage("road", roadBgImage);
  roadBg.velocityX = -10;
  roadBg.scale = 2.7
  
  red_car_player = createSprite(75, 150, 20, 20);
  red_car_player.addImage("red car", red_carImage);
  red_car_player.scale = displayHeight/4000;
  
  carGroup = new Group();

}

function draw() {
  background("white");
  
  camera.position.x = red_car_player.x + 500;
  camera.position.y = displayHeight/2;

  if (gameState === "play") {
    score = frameCount;
    
    

    gameOver = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    gameOver.shapeColor = "black";
    gameOver.visible = false;
    
    
    if (roadBg.x === 0) {
      roadBg.x = displayWidth/2;
    }
    
    if (keyDown("up") && red_car_player.y > 25) {
      red_car_player.y -= displayHeight/80;;
    }
    if (keyDown("down") && red_car_player.y < displayHeight-25) {
      red_car_player.y += displayHeight/80;
    }
    
    spawnCars();
    
    
    if (red_car_player.isTouching(carGroup)) {
      gameState = "end";
    }
    
  }
  
  
  
  drawSprites();
  
  
  if (gameState === "end") {
    roadBg.velocityX = 0;
    carGroup.destroyEach();
    
    gameOver.visible = true;
    
    textSize((3/40)*displayHeight);
    fill("white");
    text("Game Over!", displayWidth/2, displayHeight/2);
    textSize((3/80)*displayHeight);
    text("Press R to restart!", displayWidth/2, displayHeight/2 + displayHeight/20);
    
    if (keyDown("r")) {
      gameOver.visible = false;
      roadBg.velocityX = -10;
      frameCount = 0;
      red_car_player.y = 150;
      
      gameState = "play";
    }
    
  }
  
  textSize((3/80)*displayHeight);
  fill("white");
  text("Score: " + score, 170, 50)
  
}


function spawnCars() {
  if (frameCount % 200 === 0) {
    var selectColor = Math.round(random(1, 4));
    
    if (selectColor === 1) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        blue_car = createSprite((9/8)*displayWidth, (1/8)*displayHeight);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = displayHeight/3333.33333333;
        blue_car.velocityX = -10;
        blue_car.lifetime = 0.25*displayWidth;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
      
      if (selectPosition === 2) {
        blue_car = createSprite((9/8)*displayWidth, 0.375*displayHeight);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = displayHeight/3333.33333333;
        blue_car.velocityX = -10;
        blue_car.lifetime = 0.25*displayWidth;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
      
      if (selectPosition === 3) {
        blue_car = createSprite((9/8)*displayWidth, 0.625*displayHeight);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = displayHeight/3333.33333333;
        blue_car.velocityX = -10;
        blue_car.lifetime = 0.25*displayWidth;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
      
      if (selectPosition === 4) {
        blue_car = createSprite((9/8)*displayWidth, 0.875*displayHeight);
        blue_car.addImage("blue car", blue_carImage);
        blue_car.scale = displayHeight/3333.33333333;
        blue_car.velocityX = -10;
        blue_car.lifetime = 0.25*displayWidth;
        blue_car.mirrorX(-1);
        carGroup.add(blue_car);
      }
    }
    
    if (selectColor === 2) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        green_car = createSprite((9/8)*displayWidth, (1/8)*displayHeight);
        green_car.addImage("green car", green_carImage);
        green_car.scale = displayHeight/3333.33333333;
        green_car.velocityX = -10;
        green_car.lifetime = 0.25*displayWidth;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
      
      if (selectPosition === 2) {
        green_car = createSprite((9/8)*displayWidth, 0.375*displayHeight);
        green_car.addImage("green car", green_carImage);
        green_car.scale = displayHeight/3333.33333333;
        green_car.velocityX = -10;
        green_car.lifetime = 0.25*displayWidth;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
      
      if (selectPosition === 3) {
        green_car = createSprite((9/8)*displayWidth, 0.625*displayHeight);
        green_car.addImage("green car", green_carImage);
        green_car.scale = displayHeight/3333.33333333;
        green_car.velocityX = -10;
        green_car.lifetime = 0.25*displayWidth;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
      
      if (selectPosition === 4) {
        green_car = createSprite((9/8)*displayWidth, 0.875*displayHeight);
        green_car.addImage("green car", green_carImage);
        green_car.scale = displayHeight/3333.33333333;
        green_car.velocityX = -10;
        green_car.lifetime = 0.25*displayWidth;
        green_car.mirrorX(-1);
        carGroup.add(green_car);
      }
    }
    
    if (selectColor === 3) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        yellow_car = createSprite((9/8)*displayWidth, (1/8)*displayHeight);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = displayHeight/2500;
        yellow_car.velocityX = -10;
        yellow_car.lifetime = 0.25*displayWidth;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
      
      if (selectPosition === 2) {
        yellow_car = createSprite((9/8)*displayWidth, 0.375*displayHeight);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = displayHeight/2500;
        yellow_car.velocityX = -10;
        yellow_car.lifetime = 0.25*displayWidth;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
      
      if (selectPosition === 3) {
        yellow_car = createSprite((9/8)*displayWidth, 0.625*displayHeight);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = displayHeight/2500;
        yellow_car.velocityX = -10;
        yellow_car.lifetime = 0.25*displayWidth;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
      
      if (selectPosition === 4) {
        yellow_car = createSprite((9/8)*displayWidth, 0.875*displayHeight);
        yellow_car.addImage("yellow car", yellow_carImage);
        yellow_car.scale = displayHeight/2500;
        yellow_car.velocityX = -10;
        yellow_car.lifetime = 0.25*displayWidth;
        yellow_car.mirrorX(-1);
        carGroup.add(yellow_car);
      }
    }
    
    if (selectColor === 4) {
      var selectPosition =  Math.round(random(1, 4));
      
      if (selectPosition === 1) {
        purple_car = createSprite((9/8)*displayWidth, (1/8)*displayHeight);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = displayHeight/2500;
        purple_car.velocityX = -10;
        purple_car.lifetime = 0.25*displayWidth;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
      
      if (selectPosition === 2) {
        purple_car = createSprite((9/8)*displayWidth, 0.375*displayHeight);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = displayHeight/2500;
        purple_car.velocityX = -10;
        purple_car.lifetime = 0.25*displayWidth;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
      
      if (selectPosition === 3) {
        purple_car = createSprite((9/8)*displayWidth, 0.625*displayHeight);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = displayHeight/2500;
        purple_car.velocityX = -10;
        purple_car.lifetime = 0.25*displayWidth;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
      
      if (selectPosition === 4) {
        purple_car = createSprite((9/8)*displayWidth, 0.875*displayHeight);
        purple_car.addImage("purple car", purple_carImage);
        purple_car.scale = displayHeight/2500;
        purple_car.velocityX = -10;
        purple_car.lifetime = 0.25*displayWidth;
        purple_car.mirrorX(-1);
        carGroup.add(purple_car);
      }
    }
    
  }
}