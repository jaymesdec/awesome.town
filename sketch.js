var angle = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220, 50);
  translate(windowWidth/2, windowHeight/2);
  rotate(angle);
  fill(mouseX/2, mouseY/2, frameCount)
  line(0, mouseY, 0, -mouseY);
  ellipse(0, mouseY, 14, 14);
  ellipse(0, -mouseY, 14, 14);
  angle += 0.1;
}
