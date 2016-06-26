// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

function setup() {
  createCanvas(windowWidth,windowHeight);
  walker = new Walker();
  background(255);
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
    var choice = random(1);
    if (choice < 0.4) {
      this.x++;
    } else if (choice < 0.6) {
      this.x--;
    } else if (choice < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  };
}
