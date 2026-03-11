let ball
ballvy = 4;
let speedx = 10
let speedy = 10
let gravity = 1
let x = 300
let y = 300
let hue = 0
const canvasSize = 600
const ballSize = 25

function setup() {
  canvas.style.position = "absolute";
canvas.style.top = "50%";
canvas.style.left = "50%";
canvas.style.transform = "translate(-50%, -50%)";

  createCanvas(canvasSize, canvasSize);
  speedx = random(5, 15)
  speedy = random(5, 15)
}

function draw() {
   colorMode(RGB)
  background(225,225,225,50 );
  colorMode(HSB)
  fill(hue, 255, 100) 
  hue = (hue + 1) % 360
  noStroke()  // Remove stroke from the ball
  ellipse(x, y, ballSize, ballSize)
  text("space to bounce", 200, 50 )
  
  x += speedx
  y += speedy
  speedy += gravity  // Add this line to apply gravity to vertical speed
  
    if (x > canvasSize-ballSize || x < ballSize) {
      speedx = -speedx
    }
     if (y > canvasSize-ballSize || y < ballSize) {
      speedy = -speedy * 0.8  // Added dampening factor
    }
    if (y < ballSize) {
        gravity = 1 // Keep gravity constant instead of increasing it
      speedy=speedy-(speedy*2)
      y=y+ballSize
    } else {
        gravity = 1
        if (y > canvasSize - ballSize) {
            y = (canvasSize - (ballSize * 1.5))
            
        };
         if (x > canvasSize - ballSize) {
            x = canvasSize - ballSize
            
        };
         if (x < 0 - (ballSize*1.5)) {
            x = 0 - ballSize
            
        };
    }   
}

function keyPressed() {
  if (key === ' ') {  // Check if spacebar is pressed
    speedy = -20;     // Large negative value to make the ball jump up
  }
}
