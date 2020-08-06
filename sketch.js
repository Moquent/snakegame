var snake;
var food;
var w, h;
var scl = 15;
var a, b, c, d;

function setup() {
  createCanvas(400, 400);


  w = floor(width / scl);
  h = floor(width / scl);

  snake = new Snake();

  foodLocation();

  frameRate(5);
}

function draw() {
  background("yellow");
  textSize(20);
  fill("blue")
  text("Score:"+snake.len, 5, 20);
  scale(scl);

  if (snake.eat(food)) {
    foodLocation();
  }

  snake.update();
  snake.display();

  if (snake.endGame()) {
    background("black");
    console.log("GAME OVER");
    noLoop();
  }

  fill("red");
  rect(food.x, food.y, 1, 1);
}

function keyPressed() {
  if (keyCode == UP_ARROW && snake.ydir != 1) {
    snake.setDir(0, -1);
  } else if (keyCode == DOWN_ARROW && snake.ydir != -1) {
    snake.setDir(0, 1);
  } else if (keyCode == RIGHT_ARROW && snake.xdir != -1) {
    snake.setDir(1, 0);
  } else if (keyCode == LEFT_ARROW && snake.xdir != 1) {
    snake.setDir(-1, 0);
  }
}

function foodLocation() {
  var x = floor(random(h));
  var y = floor(random(w));
  food = createVector(x, y);
}