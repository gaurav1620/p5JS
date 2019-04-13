var pipes = [];
var score = 0;
function preload(){
  img = loadImage('image1.jpeg');
}
function setup() {
  createCanvas(700, 500);
  bird = new Bird();
  pipes.push(new Pipes());
}
function Bird(){
  this.y = height/2;
  this.x = 40;
  this.upspeed = 2.5;
  this.gravity = 0.7;
  this.velocity = 0;

  this.show = function(){
  	// fill(255,180,255);
   //  rect(this.x,this.y,30,30,5);
   image(img ,this.x,this.y,30,30);
  }
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y >= height-30){
      this.velocity = 0;
      this.y = height-30;
    }else if (this.y < 0 ) {
      this.velocity = 0;
      this.y = 0;
    }

    if (keyIsPressed === true){
      this.velocity -= this.upspeed;
    }
  }
}
function Pipes(){
  this.a = width-30;
  this.b = 0;
  this.p = random(100,200);
  this.q = random(100,200);
  this.speed = 4;
  this.show = function(){
    fill(100,255,255);
    rect(this.a,this.b,20,500);  //the long white rect
    fill(0);

    rect(this.a,this.q,20,this.p); //the black rect
  }
  this.update = function (){

    this.a -= this.speed;
  }
  this.offscreen = function(){
    if(this.a < -10){
      return true;
    }else{
      return false;
    }
  }
  this.hit = function(bird){
    if(bird.y < this.q || bird.y+30 > this.q+this.p){
      if(this.a <70 && this.a > 20){
        return true;
      }else if(bird.y <1 || bird.y > 460){
        return true;
      }
    }
  }
}
function draw() {
  background(0);


  if(frameCount % 90 == 0){
    pipes.push(new Pipes());

    score += 10;            // points for every pass thorough a pipe
  }

  if(frameCount % 90 == 0){
    this.speed++;
  }
  for (var i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }
    if(pipes[i].hit(bird)){
      background(255,22,25,150);
      score -= 1;                  //Score educes if the bird touches
    }else{
      console.log(score);
    }
  }
  if(frameCount %5 == 0){
    console.clear();
  }
  bird.update();
  bird.show();
}
