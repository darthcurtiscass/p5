let e1, e2, e3, e4, e5, e6, e7, e8;

function setup() {
  createCanvas(300, 300);
  noStroke();
  e1 = new Eye(25, 90, 10);
  e2 = new Eye(7, 30, 25);
  e3 = new Eye(40, 20, 20);
  e4 = new Eye(64, 10, 25);
  e5 = new Eye(25, 90, 10);
  e6 = new Eye(16, 40, 15);
  e7 = new Eye(90, 90, 10);
  e8 = new Eye(200, 395, 18);
}

function draw() {
  background(102);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e4.update(mouseX, mouseY);
  e5.update(mouseX, mouseY);
  e6.update(mouseX, mouseY);
  e7.update(mouseX, mouseY);
  e8.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
  e4.display();
  e5.display();
  e6.display();
  e7.display();
  e8.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(0);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(300, 36, 300);
    ellipse(this.size / 5, 0, this.size / 2, this.size / 2);
    pop();
  };
}