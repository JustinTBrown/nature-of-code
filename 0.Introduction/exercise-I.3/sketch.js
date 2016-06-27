// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

function setup() {
  createCanvas(windowWidth,windowHeight);
  walker = new Walker();
  background(255);
  // frameRate(2);
}

function draw() {
  walker.step();
  walker.render();
}

function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.render = function() {
    stroke(90);
    strokeWeight(2);
    point(this.x,this.y);
  };

  this.step = function() {
    var mean = 1;

    var x_leader;
    if (mouseX > this.x) {
      x_leader = mean;
    } else if (mouseX = this.x) {
      x_leader = 0;
    } else {
      x_leader = -1 * mean;
    };

    var y_leader;
    if (mouseY > this.y) {
      y_leader = mean;
    } else if (mouseY = this.y) {
      y_leader = 0;
    } else {
      y_leader = -1 * mean;
    };

    var stepx = floor(randomGaussian(x_leader,2));
    var stepy = floor(randomGaussian(y_leader,2));
    this.x += stepx;
    this.y += stepy;
 
  };
}
