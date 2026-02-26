let speedx = 10
let speedy = 10
let gravity = 1
let x = 300
let y = 300
let hue = 0
const canvasSize = 600
const ballSize = 25

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB)
  speedx = random(5, 15)
  speedy = random(5, 15)
}

function draw() {
  // Semi-transparent background for trail effect
  background(0, 0, 0);  // Adding opacity to create fade effect
  fill(hue, 100, 100)
  hue = (hue + 1) % 360
  noStroke()  // Remove stroke from the ball
  ellipse(x, y, ballSize, ballSize)
  
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
        gravity = 1  // Keep gravity constant instead of increasing it
    } else {
        gravity = 1
        if (y > canvasSize - ballSize) {
            y = canvasSize - ballSize
            
        };
         if (x > canvasSize - ballSize) {
            x = canvasSize - ballSize
            
        };
         if (x < 0 - ballSize) {
            x = 0 - ballSize
            
        };
        
    }
}

function keyPressed() {
  if (key === ' ') {  // Check if spacebar is pressed
    speedy = -20;     // Large negative value to make the ball jump up
  }
}
