
var box; 

function setup() {
  createCanvas(400, 400); 
  background (51)
  box = createSprite(200, 200, 30, 30) 


}

function draw() {

  if (keyIsDown(RIGHT_ARROW))
  {
    background ("purple");
  }

  if (keyIsDown(LEFT_ARROW))
  {
    background ("teal");
  }

  if(keyIsDown (DOWN_ARROW))
  {
    background ("pink");
  }
  
  if (keyIsDown(UP_ARROW))
  {
    background ("yellow");
  }

  drawSprites();
}

