function setup() {
  createCanvas(1000, 1000);
}
function draw() {
	background('white') ;

	fill('green')

push();
angleMode(DEGREES);
rotate(30);
rect(500, 200, map(second(), 0, 60, 0, 700), 60);
pop();

push();
fill('yellow')
angleMode(DEGREES);
rotate(0);
rect(500, 200, map(minute(), 0, 60, 0, 700), 60);
pop();

push();
fill('red')
angleMode(DEGREES);
rotate(15);
rect(500, 200, map(second(), 0, 60, 0, 700), 60);
pop();

}