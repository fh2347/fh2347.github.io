function setup() {
  createCanvas(1000, 1000);
}
function draw() {
	background('white') ;

push();
	fill(0,0,0);
	ellipse(50, 50, map(second(), 0, 60, 0, 600), map(hour(), 0, 24, 0, 400));  
pop();

	fill('grey')
push();
translate(map(minute(), 0, 60, 0, 900), 20);
rect(0, 0, 55, 55); // Draw rect at new 0,0
pop();

}