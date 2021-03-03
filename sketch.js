var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  translate(windowWidth/2, windowHeight/2);
  rotate(angle);
  line(0, 100, 0, -100);
  ellipse(0, 100, 14, 14);
  ellipse(0, -100, 14, 14);
  angle += 0.1;
}
