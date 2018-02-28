var borough = ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island"];
var people = [5000000, 3800000, 3300000, 3100000, 1500000];
var lengthMultiplier = 50; 

function setup(){
  createCanvas(500,500);
  noLoop();
}

function draw(){
  draw bars of chart//
  for (var i =0; i < borough.length; i++){
    fill(0);
    rect(120, 50 + 20 * i, borough[i] * lengthMultiplier, 10);
  }
for (var i = 0; i < people.length; i++){
  text(people[i], 100, 45 + 20 * i);
}
insert borough//
for
  (var i = 0; i < people.length; i++){
  text(borough[i], 650, 45 + 20 * i); //
  }
}