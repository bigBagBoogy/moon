let moon = [];

function preload() {
  moonPic = loadImage("bitcoinMoon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 60);
    let b = new Moon(x, y, r);
    moon.push(b);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < moon.length; i++) {
    moon[i].move();
    moon[i].show();
  }
}
class Moon {
  constructor(x, y, diameter, speed) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.speed = speed;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  show() {
    Image(moonPic, this.x, this.y);
  }
}

// click "go live" below in the task-bar to start up a canvas at
// http://127.0.0.1:5500/
