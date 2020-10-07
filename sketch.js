var f, m, edges

function setup() {
  createCanvas(800,400);
f = createSprite(200, 200, 50, 80)
f.shapeColor = ("lime");
//f.velocityY = 5;
//f.velocityX = -5;
m = createSprite(40, 200, 80, 30)
m.shapeColor = ("cyan");
//m.velocityY = -5;
g1 = createSprite(200, 200, 30, 30)
g1.shapeColor = ("red");
g2 = createSprite(300, 200, 30, 30)
g2.shapeColor = ("orange");
g3 = createSprite(400, 200, 30, 30)
g3.shapeColor = ("teal");
g4 = createSprite(500, 200, 30, 30)
g4.shapeColor = ("magenta");
}

function draw() {
  background(0);  

m.x = World.mouseX
m.y = World.mouseY

/*edges = createEdgeSprites();

f.bounceOff(edges);

if(m.x - f.x < f.width / 2 + m.width / 2
  && f.x - m.x < f.width / 2 + m.width / 2){

    m.velocityX = m.velocityX * (-1);
    f.velocityX = f.velocityX * (-1);

  }

  if(m.y - f.y < f.height / 2 + m.height / 2
    && f.y - m.y < f.height / 2 + m.height / 2){
  
      m.velocityY = m.velocityY * (-1);
      f.velocityY = f.velocityY * (-1);
  
    } */

    if (isTouching(m, g2)){

      m.shapeColor = ("yellow");
      g2.shapeColor = ("yellow");
  
    }
    else {
  
      m.shapeColor = ("cyan");
      g2.shapeColor = ("magenta");
  
    }

    

  drawSprites();
}

function isTouching(ob1, ob2){

  if(ob1.x - ob2.x < ob2.width / 2 + ob1.width / 2
    && ob2.x - ob1.x < ob2.width / 2 + ob1.width / 2
    && ob1.y - ob2.y < ob2.height / 2 + ob1.height / 2
    && ob2.y - ob1.y < ob2.height / 2 + ob1.height / 2 ){
   return true;
    }

    else {

   return false;

    }
}