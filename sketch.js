var path,boy,cash,diamonds,jwellery,sword,Gameover;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,GameOverImg;
var Score = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY=1
var END=0;
var gameState=PLAY;
function preload()
{
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup()
{
  
      createCanvas(windowWidth,windowHeight);
    // Moving background
    path=createSprite(width/2,200);
    path.addImage(pathImg);
    

    //creating boy running
    boy = createSprite(width/2,height-20,20,20);
    boy.addAnimation("SahilRunning",boyImg);
    boy.scale=0.08;
  
  
    cashG=new Group();
    diamondsG=new Group();
    jwelleryG=new Group();
    swordGroup=new Group();

     boy.setCollider("circle",0,0,500);
    
}

function draw() 
{

  background(0);
  boy.x = World.mouseX ;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(gameState===PLAY)
{
     path.velocityY = 4;
      
     if (cashG.isTouching(boy))
    {
      cashG.destroyEach();
      Score=Score+50;
      
    }
    else if (diamondsG.isTouching(boy))
    {
      diamondsG.destroyEach();
       Score=Score+200;
      
    }
    else if(jwelleryG.isTouching(boy)) 
    {
      jwelleryG.destroyEach();
       Score=Score+150
    }
      if(path.y > height )
    {
    path.y = height/2;
    }
   boy.x = World.mouseX ;
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

  if(swordGroup.isTouching(boy))
    {
     gameState=END;
     boy.addAnimation("SahilRunning",endImg)
     boy.x = 200;
     boy.y = 200;
     boy.scale = 0.4;
      
     path.velocityY=0;
     boy.velocityY=0;
      boy.velocityX=0;
  
     cashG.destroyEach();
     diamondsG.destroyEach();
     jwelleryG.destroyEach();
     swordGroup.destroyEach();
        
     cashG.setVelocityYEach(0);
     diamondsG.setVelocityYEach(0);
     jwelleryG.setVelocityYEach(0);
     swordGroup.setVelocityYEach(0);
    }
}
 
 
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ Score,150,30);

}

function createCash() 
{
  if (World.frameCount % 150 == 0) 
  {
    var cash = createSprite(Math.round(random(50, width-50),50, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cashG.add(cash);
  }
}

function createDiamonds() 
{
  if (World.frameCount % 180 == 0) 
  {
      var diamonds = createSprite(Math.round(random(50, width-50),50, 10, 10));
      diamonds.addImage(diamondsImg);
      diamonds.scale=0.03;
      diamonds.velocityY = 3;
      diamonds.lifetime = 150;
      diamondsG.add(diamonds);
  }
}

function createJwellery() 
{
  if (World.frameCount % 60 == 0)
  {
    var jwellery = createSprite(Math.round(random(50, width-50),50, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale=0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jwelleryG.add(jwellery);
  }
}

function createSword()
{
  if (World.frameCount % 100 == 0) 
  {
    var sword = createSprite(Math.round(random(50, width-50),50, 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
  }
}