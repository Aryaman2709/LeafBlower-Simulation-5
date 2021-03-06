//Create variables here
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var edges;
var leaf, leaf1, leaf2, leaf3, leaf4, leaf5;
var gameState = "play"
var leaves
var fruit;

var score = 0


function preload()
{
  //load images here
  backgroundImage = loadImage("garden.jpg");
  leafBlowerImage = loadImage("leafblower.png");
  leafImage = loadImage("leaf.png")
  fruit1 = loadImage("cherry.gif");
  fruit2 = loadImage("blackberry.png");
  fruit3 = loadImage("orange.png");
  fruit4 = loadImage("apple.png");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  leafBlower = createSprite(175,150,50,50)
  leafBlower.addImage(leafBlowerImage);
  leafBlower.scale = 0.35

 // invisible = createSprite(leafBlower.x, leafBlower.y, 175,150)
  //invisible.visible = false

  //invisible = new Invisible(leafBlower.x + 50, leafBlower.y, 175,150)

  leaves = new Group();
  leaves1 = new Group();
  leaves2 = new Group();
  leaves3 = new Group();
  leaves4 = new Group();
  leaves5 = new Group();
  fruits = new Group();


  
}


function draw() {
  background(backgroundImage);
  Engine.update(engine);

  if(gameState==="play"){
  if(keyDown(DOWN_ARROW)){
    leafBlower.y = leafBlower.y + 5;

  }

  if(keyDown(UP_ARROW)){
    leafBlower.y = leafBlower.y - 5;
    
  }

  if(keyDown(RIGHT_ARROW)){
    leafBlower.x = leafBlower.x + 5;
    
  }

  if(keyDown(LEFT_ARROW)){

    leafBlower.x = leafBlower.x - 5;
    
  }
 
  //leafBlower.debug = true;
  //leafBlower.setCollider(20,20);


 
  drawSprites();
  //add styles here

  fill("black")
  textSize(25)
  text("Score:"+ score, 500, 100);

  edges =  createEdgeSprites();
  leafBlower.collide(edges[0]);
  leafBlower.collide(edges[1]);
  leafBlower.collide(edges[2]);
  leafBlower.collide(edges[3]);

  if(fruits.isTouching(leafBlower)){
    fruits.destroyEach();
    score = score + 50;
  }

  if (frameCount%20===0){
    leaf = createSprite(random(100,400), random(100,300), 50,50);
    leaf.addImage(leafImage);


    leaves.add(leaf)

   if( leaves.isTouching(leafBlower)){
      leaves.setVelocityXEach(random(1,10));
      leaves.setVelocityYEach(random(1,10));
      score++
      }
  }
  }

if(frameCount%20===0){
  leaf1 = createSprite(random(400,700), random(100,300), 50,50);
  leaf1.addImage(leafImage);

  leaves1.add(leaf1)

  if(leaves1.isTouching(leafBlower)){
    leaves1.setVelocityXEach(random(1,10));
    leaves1.setVelocityYEach(random(1,10));
    score++;
  }


  
}

if(frameCount%20===0){
  leaf2 = createSprite(random(100,400), random(300,500), 50,50);
  leaf2.addImage(leafImage)

  leaves2.add(leaf2);

  if(leaves2.isTouching(leafBlower)){
    leaves2.setVelocityXEach(random(1,10));
    leaves2.setVelocityYEach(random(1,10));
    score++;
  }

}

if(frameCount%20===0){
  leaf3 = createSprite(random(400,700), random(300,500), 50,50);
  leaf3.addImage(leafImage);

  leaves3.add(leaf3);

  if(leaves3.isTouching(leafBlower)){
    leaves3.setVelocityXEach(random(1,10));
    leaves3.setVelocityYEach(random(1,10));
    score++;
  }
}

if(frameCount%20===0){

  leaf4 = createSprite(random(100,400), random(500,700), 50, 50);
  leaf4.addImage(leafImage);

  leaves4.add(leaf4);

  if(leaves4.isTouching(leafBlower)){
    leaves4.setVelocityXEach(random(1,10));
    leaves4.setVelocityYEach(random(1,10));
    score++;
  }
}

if(frameCount%20===0){

  leaf5 = createSprite(random(400,700), random(500, 700), 50,50);
  leaf5.addImage(leafImage);

  leaves5.add(leaf5);

  if(leaves5.isTouching(leafBlower)){
    leaves5.setVelocityXEach(random(1,10));
    leaves5.setVelocityYEach(random(1,10));
    score++;
  }
}
 
if(frameCount%400===0){
  var fruit = createSprite(random(100,700), random(100,700), 50, 50);


  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              fruit.scale = 0.5
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      default: break;
    }

    fruits.add(fruit);
   
    //assign scale and lifetime to the fruit           
    //fruit.scale = 0.75;
    fruit.lifetime = 100;

    
}
  
}





