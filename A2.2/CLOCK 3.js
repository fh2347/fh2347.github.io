function setup() {
  createCanvas(1000, 1000);
}
function draw() {
	background('black') ;

	fill('white')

push(); 
translate(map(second(), 0, 60, 0, 900), 20);
rect(0, 0, 55, 55); // Draw rect at new 0,0
pop();

	fill('pink')
push();
translate(map(minute(), 0, 60, 0, 900), 20);
rect(0, 0, 55, 55); // Draw rect at new 0,0
pop();

	fill('grey')
push();
translate(map(hour(), 0, 60, 0, 900), 20);
rect(0, 0, 55, 55); // Draw rect at new 0,0
pop();

	
}