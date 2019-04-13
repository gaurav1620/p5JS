var r = 0;
var b = 0;
var g = 0;

function setup() {
  createCanvas(600, 400);
}
function draw() {

  r = map(mouseX,0,600,0,255);
  b = map(mouseY,0,400,0,255);
  //g = map(mouseX,0,600,0,255);

  background(r, b, 0);
  fill(255,255,0);
  ellipse(mouseX,mouseY,30,30);



}
