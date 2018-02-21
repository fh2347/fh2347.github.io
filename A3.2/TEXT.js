var headlines = [];
var maxHeadLen, minHeadLen;

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "6c251b7589c74deca159acbdaba2d9bb"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(2000, 2000);

  textSize(20);
  textAlign(LEFT);


  extractHeadlines();
}

function draw() {
  background(0);

  var lineheight = 30;
  var margin = 30;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');


    var nextX = 0;

    var linelength = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
      stroke(255);
      strokeWeight(1);
      line(0,i*lineheight, linelength, i*lineheight);


  for (var j = 0; j < words.length; j++) {

    fill(255);
    rect(linelength, i*lineheight, 20, 20);}

     
    if (mouseX > margin && mouseX < margin+linelength && mouseY < margin+i*lineheight && mouseY > margin+i*lineheight+(-1*lineheight))
      {fill(255);
        text(headlines[i], 0, i*lineheight);}

        console.log(mouseX)

  }


}


function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;

    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }

    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}