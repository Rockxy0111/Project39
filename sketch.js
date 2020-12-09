var canvas, backgroundImage;
var bgImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var Monkey,Mg;
var form, player, game;
var Monkeys;
var formBg,formBg2;
var PImage;
var coinImg;
var Coin,CoinGroup;
var runway,runwayImage,CoinScore=0;

var bomb, explosionImg,explosion, obstacle3;
var obstaclesGroup,DashSound;
;
function preload() {
  formBg=loadImage("fev.jpg")
  PImage=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
  
  coinImg=loadImage("Coin1.png");
  runwayImage=loadImage("runway.png")
  bomb = loadImage("bomb.png");
  explosionImg = loadImage("explosion.png");
  DashSound= loadSound("grenade-launcher-daniel_simon.wav");


}




function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-40);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  CoinGroup=createGroup()
  CoinGroup2=createGroup()
  CoinGroup3=createGroup()
  obstaclesGroup=createGroup()
  
 
}


function draw(){
  
  

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    if (Monkey.isTouching(CoinGroup)) { 
      CoinGroup.destroyEach();
      CoinScore++;
    
   }
   
   if (Monkey.isTouching(CoinGroup2)) { 
    CoinGroup2.destroyEach();
    CoinScore++;
 
 }
 if (Monkey.isTouching(CoinGroup3)) { 
  CoinGroup3.destroyEach();
  CoinScore++;
 
}

if (Monkey.isTouching(obstaclesGroup)) { 
  
  obstaclesGroup.destroyEach()
  DashSound.play()
  Monkey.destroy()
  explosion= createSprite(1500,460,10,40);
  explosion.addImage(explosionImg) 
  explosion.scale=3 
  CoinGroup.destroyEach();
  CoinGroup2.destroyEach();
  CoinGroup3.destroyEach();
  
}



  }
  
 
 

 
 
}
