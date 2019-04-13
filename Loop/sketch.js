var x = 0;

function setup() {
  createCanvas(1350, 650);
    background(0);
}
function draw() {
   fill(150,255,200);
   stroke(100,255,250);
   strokeWeight(3);


  while(x <= width){

    ellipse(x,100,40,40);
    x += 50;
  }

}
