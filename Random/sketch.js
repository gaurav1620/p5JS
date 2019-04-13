var x , y , a, b, c = 0;
function setup() {
  createCanvas(1350, 650);
  background(255,200,200);
}

function draw() {

  x = random(0,width);
  y = random(0,height);

  a = random(0,255);
  b = random(0,255);
  c = random(0,255);
  fill(a,b,c,100);
  noStroke();
  ellipse(x,y, 50, 50);
}
