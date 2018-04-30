var table;
var buttonB;

function preload(){
  table = loadTable('Cultural_Institutions2.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  background('white');
  console.log(table.getRow(0))
  noLoop();

  buttonB = createButton('Brooklyn');
  buttonB.position(800, 250);
  buttonB.mousePressed(selectBrooklyn);
  buttonB.addClass('SpecialButton');

  buttonM = createButton('Manhattan');
  buttonM.position(800, 275);
  buttonM.mousePressed(selectManhattan);
  buttonM.addClass('SpecialButton');

  buttonE = createButton('Ellis Island');
  buttonE.position(800, 300);
  buttonE.mousePressed(selectEllis);
  buttonE.addClass('SpecialButton');

  buttonX = createButton('Bronx');
  buttonX.position(800, 325);
  buttonX.mousePressed(selectBronx);
  buttonX.addClass('SpecialButton');

  buttonL = createButton('Liberty Island');
  buttonL.position(800, 350);
  buttonL.mousePressed(selectLiberty);
  buttonL.addClass('SpecialButton');

  
  console.log(table.getColumn("Distance"));

  


}

function draw() {
background('white');

basicGraphic('0.3');

}



function basicGraphic(opacity){
  for (var i=0; i<70; i++){

  noStroke();

  var color1 = 'rgba(200, 130, 140,' + opacity + ')';
  var color2 = 'rgba(200, 200, 140,' + opacity + ')';
  var color3 = 'rgba(200, 200, 140,' + opacity + ')';
  var color4 = 'rgba(90, 200, 200,' + opacity + ')';
  var color5 = 'rgba(130, 200, 2,' + opacity + ')';
  var color6 = 'rgba(30, 200, 2,' + opacity + ')';



  if (table.getColumn("Attributes")[i]==="V-Sightseeing"){fill(color1)}
  else if (table.getColumn("Attributes")[i]==="A-Attractions & Landmarks"){fill(color2)}
  else if (table.getColumn("Attributes")[i]==="A-Museums & Performing Arts"){fill(color3)}
  else if (table.getColumn("Attributes")[i]==="A-Theaters & Cinemas"){fill(color4)} 
  else if (table.getColumn("Attributes")[i]==="C-Public Library"){fill(color5)} 
  else if (table.getColumn("Attributes")[i]==="C-Religious Institutions"){fill(color6)}

    var valueMapped = map(table.getColumn("Distance")[i], 0, max(table.getColumn("Distance")), 0, 500);

  rect((i+5)*10, (500-valueMapped)+50, 5, valueMapped);
  
  textSize(8);
  text(i, (i+5)*10, 570);

  
}  
}



function selectBrooklyn() {
background('white');
console.log('hey');
colorByBorough('K');
}


function colorByBorough(Borough){
var ArrayList=[];

for (var i=0; i<70; i++){

  var opacity;

  function checkBorough(value){
    return value(2) === Borough;
  }

  console.log(table.getColumn("Borough")[i])
  if (table.getColumn("Borough")[i]===Borough){
    var opacity = '1';
    
    var list = table.getColumn("Name")[i];

    ArrayList.push(i + ' / ' + list);
  }
  else {var opacity = '0.3'};


  noStroke();

  var color1 = 'rgba(200, 130, 140,' + opacity + ')';
  var color2 = 'rgba(200, 200, 140,' + opacity + ')';
  var color3 = 'rgba(200, 200, 140,' + opacity + ')';
  var color4 = 'rgba(90, 200, 200,' + opacity + ')';
  var color5 = 'rgba(130, 200, 2,' + opacity + ')';
  var color6 = 'rgba(30, 200, 2,' + opacity + ')';

  if (table.getColumn("Attributes")[i]==="V-Sightseeing"){fill(color1)}
  else if (table.getColumn("Attributes")[i]==="A-Attractions & Landmarks"){fill(color2)}
  else if (table.getColumn("Attributes")[i]==="A-Museums & Performing Arts"){fill(color3)}
  else if (table.getColumn("Attributes")[i]==="A-Theaters & Cinemas"){fill(color4)} 
  else if (table.getColumn("Attributes")[i]==="C-Public Library"){fill(color5)} 
  else if (table.getColumn("Attributes")[i]==="C-Religious Institutions"){fill(color6)}
      var valueMapped = map(table.getColumn("Distance")[i], 0, max(table.getColumn("Distance")), 0, 500);

  rect((i+5)*10, (500-valueMapped)+50, 5, valueMapped);

  textSize(8);
  text(i, (i+5)*10, 570);

var words = ArrayList.join(' <br> ');
var divlist = createDiv(words);
divlist.addClass('list');
  
}
}

function selectManhattan() {
background('white');
console.log('hey');
colorByBorough('M');
} 

function selectEllis() {
background('white');
console.log('hey');
colorByBorough('E');
} 

function selectBronx() {
background('white');
console.log('hey');
colorByBorough('X');
} 

function selectLiberty() {
background('white');
console.log('hey');
colorByBorough('L');
} 