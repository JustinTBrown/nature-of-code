var position;
var velocity;
var box;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  box = new Box(width/2,height/2,600,600);
  position = createVector(box.x,box.y);
  velocity = createVector(6,5);
}

function draw() {
  background(255);
  box.display();

  position.add(velocity);

  if ((position.x > box.right ) || (position.x < box.left)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > box.bottom) || (position.y < box.top)) {
    velocity.y = velocity.y * -1;
  }

  fill(110);
  stroke(5);
  ellipse(position.x, position.y, 100, 100);
}

function Box(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.top = y - h/2;
  this.right = x + w/2;
  this.bottom = y + h/2;
  this.left = x - w/2;
  this.display = function() {
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }
}