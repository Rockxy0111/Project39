class Game {
  constructor(){



  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
    


    runway=createSprite(1100,80,10,10)
  runway.addImage(runwayImage)
  runway.scale=4;
  
  
  
  Coin = createSprite(1800,80,10,40);
  Coin.addImage(coinImg)  
  Coin.scale = 0.06;
 

    Monkey=createSprite(300,530)
    Monkey.addAnimation("running",PImage)
    Monkey.scale=0.3;
    Monkeys=[Monkey]
  }

  play(){
   
    form.hide();
    textSize(30);
    text("Game Start", 320, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     
     // var display_position = 130;
     var index=0;
     var x=0;
     var y=0;
      for(var plr in allPlayers){
        index=index+1;
        y=y+530;
       x=displayWidth-allPlayers[plr].distance
       Monkeys[index-1].x=x
       Monkeys[index-1].y=y

        if (index === player.index){

          Monkeys[index-1].shapeColor="red";
          camera.position.x=Monkeys[index-1].x;
          camera.position.y=displayHeight/2;

        }
     
      }
    }
    

      if (frameCount % 170 === 20&&keyIsDown(UP_ARROW)){
        Coin = createSprite(2000,200,10,40);
         Coin.addImage(coinImg)  
         Coin.scale = 0.06;
        Coin.velocityX = -6;
        Coin.y = Math.round(random(300,360));
         Coin.lifetime =450;
         CoinGroup.add(Coin)
      }

      if (frameCount % 270 === 20&&keyIsDown(UP_ARROW)){
        Coin = createSprite(2000,200,10,40);
         Coin.addImage(coinImg)  
         Coin.scale = 0.06;
        Coin.velocityX = -6;
     
        Coin.y = Math.round(random(300,360));
         Coin.lifetime =450;
         CoinGroup2.add(Coin)
      }

      if (frameCount % 370 === 20&&keyIsDown(UP_ARROW)){
        Coin = createSprite(2000,200,10,40);
         Coin.addImage(coinImg)  
         Coin.scale = 0.06;
        Coin.velocityX = -6;
     
        Coin.y = Math.round(random(300,360));
         Coin.lifetime =450;
         CoinGroup3.add(Coin)
      }

        if (frameCount % 250 === 20&&keyIsDown(UP_ARROW)){
          var obstacle = createSprite(2200,580,10,40);
          obstacle.velocityX = -30 ;
          
             obstacle.addImage(bomb);
                     
           obstacle.lifetime = 100;
  
           obstacle.scale = 0.02;
           obstaclesGroup.add(obstacle);
        }




      if (runway.x<1110) { 
        runway.x=runway.width*2
      }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance =-10
      player.update();
      runway.velocityX = -5;
      
    }

    if(keyWentUp(UP_ARROW) && player.index !== null){
      player.distance =-10
      player.update();
      runway.velocityX =0;
     

    }
    

    




    if(keyIsDown(32) && player.index !== null){

      Monkeys[index-1].y=y-250
      player.update();
    }

    if(keyWentDown(32) && player.index !== null){

      Monkeys[index-1].y=y-200
      player.update();
    }


    drawSprites()
    textSize(14)

    stroke(255)
    
    text("Press and hold up arrow key to move the monkey",900,80)
    textSize(14)

    stroke(255)
    text("Press Space bar to jump",1300,80)
    textSize(14)

    stroke(255)
    text(":"+CoinScore,1820,80)
  }
}
