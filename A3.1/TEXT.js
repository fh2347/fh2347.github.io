var headlines = [];
var hitwords = [
  "and",
  "or",
  "the",
  "on",
  "a",
  "an",
  "in",
  "into",
  "of",
  "for",
  "from"
];
var sign = [
"?", "!"];
var punc = [
".", ","];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "6c251b7589c74deca159acbdaba2d9bb"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(2000, 2000);
  background(0);

  textSize(20);
  textAlign(LEFT);

  noLoop(); 

  extractHeadlines();
}

function draw() {

  var lineheight = 30;
  var margin = 30;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], '');

    var nextX = 0;

      var rectheight = 3;


//draw sign to circles


    for (var j = 0; j < words.length; j++) {
      stroke(400);
      strokeWeight(1);
      line(0,i*lineheight, nextX, i*lineheight);

      //text
      noFill();
      noStroke();
      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+'  ');
    

      //define size of alphabets
      var str1 = 'abcdefghijklmnopqrstuvwxyz';
      var str2 = split(str1, '');
      var size = (str2.indexOf(words[j])+1);

      //define size of numbers
      var str3 = '0123456789';
      var str4 = split(str3, '');
      var sizen = (str4.indexOf(words[j])+1);



      //signs 
      if (sign.includes(words[j].toLowerCase())) {
        noStroke();
        fill(0);
        ellipse(nextX,i*lineheight,50,50);
        //punc
      } else if (punc.includes(words[j])){
        noStroke();
        fill(0);
        ellipse(nextX,i*lineheight,20,20);
        //alphabets
      } else if (str2.includes(words[j].toLowerCase())){
        noStroke();
        fill(255,153,51,30);
        ellipse(nextX,i*lineheight,size,size);

      };
      
    }
  }


}




function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}