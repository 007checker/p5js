var sizeOfArc = 680;
var distToArc = 60;

function setup(){
  createCanvas(800, 800);
  background(0);
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
  
  push();
  stroke(150, 255, 200);
  strokeWeight(16);
  var end1 = map(hoursNow % 12, 0, 12, 0, 360);
  arc(0, 0, sizeOfArc, sizeOfArc, 0, end1);
  pop();

  push();
  stroke(255, 150, 200);
  strokeWeight(16);
  var end2 = map(minutesNow, 0, 60, 0, 360);
  arc(0, 0, sizeOfArc - distToArc, sizeOfArc - distToArc, 0, end2);
  pop();

  push();
  stroke(255, 200, 150);
  strokeWeight(16);
  var end3 = map(secondsNow, 0, 60, 0, 360);
  arc(0, 0, sizeOfArc - distToArc * 2, sizeOfArc - distToArc * 2, 0, end3);
  pop();
}
