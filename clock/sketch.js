function setup(){
  createCanvas(800, 800);
  background(0);
}

function draw(){
  stroke(255);
  ranX = random(width);
  ranY = random(height);
  point(ranX, ranY);
}
