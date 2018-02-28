var borough = ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island"];
var people = [5, 3.8, 3.3, 3.1, 1.5];
var lengthMultiplier = 5; 

function setup(){
  createCanvas(1000,1000);
  noLoop();
}

function draw(){
  //draw bars of chart//
  for (var i =0; i < borough.length; i++){
    fill(0);
    rect(45 + 100 * i, 100, 20, people[i] * lengthMultiplier);
  }
  for (var i = 0; i < people.length; i++){
   text(people[i], 45 + 100 * i, 90);
}
//insert borough//
for
    (var i = 0; i < people.length; i++){
    text(borough[i], 45 + 100 * i, 200); 
  }
}




