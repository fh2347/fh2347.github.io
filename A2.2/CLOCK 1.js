function setup() {
  createCanvas(1000, 1000);
}
function draw() {
	background('orange') ;

	fill('pink')

	rect(20,20,map(second(), 0, 60, 0, width), 60);
	rect(20,80,map(minute(), 0, 60, 0, width), 60);

	fill(0,0,0);
	ellipse(250, 300, map(minute(), 0, 60, 0, 600), map(hour(), 0, 24, 0, 400));  



}