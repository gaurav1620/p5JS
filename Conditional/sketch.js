var x = 0;
var speed = 20;
function setup() {
  createCanvas(1350, 650);
}


function draw() {
  background(0);

  if(x > width){
    speed *= -1;
  }else if (x < 0){
    speed *= -1;
  }
  x = x + speed;

  stroke(255,0,100);
  strokeWeight(5);
  noFill();
  ellipse(x,height/2,100,100);


}
