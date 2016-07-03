var spot;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  spot = new Spot();
  frameRate(10);
}

function draw() {
  spot.render();
  spot.randomSpot();
  spot.randomColour();
  // ellipse(200,200,50,50);
}

function Spot() {
  this.x = width/2;
  this.y = height/2;
  this.r = 127.5;
  this.g = 127.5;
  this.b = 127.5;

  this.render = function() {
    stroke(90);
    // fill(150);
    fill(this.r,this.g,this.b);
    // smooth();
    ellipse(this.x,this.y,30,30);
    // ellipse(200,200,10);
  };

  this.randomSpot = function() {
    var sd = 120;
    var centerx = width/2;
    var centery = height/2;
    var newx = floor(randomGaussian(centerx,sd));
    var newy = floor(randomGaussian(centery,sd));
    this.x = newx;
    this.y = newy;
  };

  this.randomColour = function() {
    var sd = 60;
    var newr = floor(randomGaussian(127.5,sd));
    var newg = floor(randomGaussian(127.5,sd));
    var newb = floor(randomGaussian(127.5,sd));
    this.r = newr;
    this.g = newg;
    this.b = newb;
  }
}