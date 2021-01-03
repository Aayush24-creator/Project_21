var  wall, thickness;
var bullet,speed, weight;

thickness=random(22,83);

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100,200,30,30);
  bullet.shapeColor="white";
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=80,80,80;
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
  drawSprites();
  hasCollided();
  bullet.velocityX=speed;
  
  if(hasCollided(bullet,wall)){
    
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness );
  
    if (damage >10) {
      wall.shapeColor=color(225,0,0);
    }
    
    }
    if (damage < 10){
      wall.shapeColor(0,255,0);
    }
}


function hasCollided(){

bullet.velocityX=0;

  bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
  return false
}





