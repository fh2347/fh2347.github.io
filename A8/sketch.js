var table;


function setup() {
  createCanvas(2000, 1300);
  background(128);
  frameRate(30);
}

function draw() {
  var boroughB = table.getColumn("BoroughB");
  var districtB = table.getColumn("DistrictB");
  var typeB = table.getColumn('OwnerTypeB');
  var boroughBR = table.getColumn("BoroughBR");
  var districtBR = table.getColumn("DistrictBR");
  var typeBR = table.getColumn('OwnerTypeBR');
  var boroughM = table.getColumn("BoroughM");
  var districtM = table.getColumn("DistrictM");
  var typeM = table.getColumn('OwnerTypeM');
  var boroughQ = table.getColumn("BoroughQ");
  var districtQ = table.getColumn("DistrictQ");
  var typeQ = table.getColumn('OwnerTypeQ');
  var boroughS = table.getColumn("BoroughS");
  var districtS = table.getColumn("DistrictS");
  var typeS = table.getColumn('OwnerTypeS');

  fill(100);
  textAlign(LEFT);
  textFont(Times);
  textSize(25);
  text('Cultural Institutions in NYC',250,50);
  textFont(Times);
  textSize(20);
 textAlign(CENTER);
  text('Bronx',130,200);
  text('Brooklyn',130,500);
  text('Manhattan',130,700);
  text('Ellis Island',130,880);
  text('Liberty Island',130,1030);
  //console.log(districtB);
  //unique values of district
  var uniqueB = districtB.unique();
  //remove last index
  uniqueB.splice(-1,1);
  //console.log(uniqueB);

  for (var j = 0; j < uniqueB.length; j++) {
    push();
   for (var i = 0; i < boroughB.length; i++) {  
      noStroke();
     if (districtB[i] == uniqueB[j]){
        if (typeB[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(250,j*25+60,20,20);
        translate(25,0);
        var b1 = districtB.lastIndexOf(uniqueB[j])+1;
        }
      };
    pop();
  };

  //Brooklyn
  var uniqueBR = districtBR.unique();
  //remove last index
  uniqueBR.splice(-1,1);
  for (var j = 0; j < uniqueBR.length; j++) {
    push();
   for (var i = 0; i < boroughBR.length; i++) {  
      noStroke();
     if (districtBR[i] == uniqueBR[j]){
        if (typeBR[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(250,j*25+350,20,20);
        translate(25,0);
        var b1 = districtBR.lastIndexOf(uniqueBR[j])+1;
        }
      };
    pop();
  };
  //manhattan
  var uniqueM = districtM.unique();
  uniqueM.splice(-1,1);
  for (var j = 0; j < uniqueM.length; j++) {
    push();
   for (var i = 0; i < boroughM.length; i++) {  
      noStroke();
     if (districtM[i] == uniqueM[j]){
        if (typeM[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(250,j*25+670,20,20);
        translate(25,0);
        var b1 = districtM.lastIndexOf(uniqueM[j])+1;
        }
      };
    pop();
  };
  //queens
  var uniqueQ = districtQ.unique();
  uniqueQ.splice(-1,1);
  for (var j = 0; j < uniqueQ.length; j++) {
    push();
   for (var i = 0; i < boroughQ.length; i++) {  
      noStroke();
     if (districtQ[i] == uniqueQ[j]){
        if (typeQ[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(250,j*25+780,20,20);
        translate(25,0);
        var b1 = districtQ.lastIndexOf(uniqueQ[j])+1;

        }
      };
    pop();
  };
  //staten island
  var uniqueS = districtS.unique();
  uniqueS.splice(-1,1);
  for (var j = 0; j < uniqueS.length; j++) {
    push();
   for (var i = 0; i < boroughS.length; i++) {  
      noStroke();
     if (districtS[i] == uniqueS[j]){
        if (typeS[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(250,j*25+1000,20,20);
        translate(25,0);
        var b1 = districtS.lastIndexOf(uniqueS[j])+1;
        }
      };
    pop();
  };

  for (var i = 0; i < uniqueQ.length; i++) {
    for (var j = 0; j < boroughQ.length; j++) {
      if (mouseX > (250+(j*25)) && 
        mouseX < (250+((j+1)*20)) && 
        mouseY > (780+i*25)&&
        mouseY < ((i+1)*25+780)
        ){
        noStroke();
        fill(0);
        text("District " + districtQ[i], 500,500);
      }
    }
  };

}

function extractData() {
  var borough = table.getColumn("Borough");
  var district = table.getColumn("District");
  var type = table.getColumn('OwnerType');
  var block = table.getColumn('Block');
  var lot = table.getColumn('Lot');
  var address = table.getColumn('Address');
}

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

