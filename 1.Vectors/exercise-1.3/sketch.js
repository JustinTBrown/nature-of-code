var position;
var velocity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  position = createVector(100,100);
  velocity = createVector(6,5);
}

function draw() {
  background(255);
  position.add(velocity);

  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  fill(110);
  stroke(2);
  ellipse(position.x, position.y, 100, 100);
  // ellipse(50, 50, 80, 80);
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}