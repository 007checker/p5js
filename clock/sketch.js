var sizeOfArc = 680;
var distToArc = 40;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  clear();
  background(0);
  noStroke();
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(-90);
  var secondsNow = second();
  var minutesNow = minute();
  var hoursNow = hour();
  noFill();

  //handling hours
  stroke(150, 255, 200);
  strokeWeight(16);
  var end1 = map(hoursNow % 12, 0, 12, 0, 360);
  arc(0, 0, sizeOfArc, sizeOfArc, 0, end1);
  push();
  rotate(end1 - 90);
  rect(0, 0, 1, 120, 1);
  pop();

  //handling minutes
  stroke(255, 150, 200);
  strokeWeight(16);
  var end2 = map(minutesNow, 0, 60, 0, 360);
  arc(0, 0, sizeOfArc - distToArc, sizeOfArc - distToArc, 0, end2);
  push();
  rotate(end2 - 90);
  rect(0, 0, 1, 160, 1);
  pop();

  //handling seconds
  stroke(255, 200, 150);
  strokeWeight(16);
  var end3 = map(secondsNow, 0, 60, 0, 360);
  arc(0, 0, sizeOfArc - distToArc * 2, sizeOfArc - distToArc * 2, 0, end3);
  push();
  rotate(end3 - 90);
  rect(0, 0, 1, 200, 1);
  pop();

  stroke(255);
  strokeWeight(32);
  point(0, 0);
}
