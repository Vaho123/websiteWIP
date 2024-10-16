//var wordList = ["HELLO", "WORDS", "DERBY", "HAPPY"];
var wordList = ["ABUSE",
"ADULT",
"AGENT",
"ANGER",
"AWARD",
"BASIS",
"BEACH",
"BIRTH",
"BLOCK",
"BOARD",
"BRAIN",
"BREAD",
"BREAK",
"BROWN",
"BUYER",
"CAUSE",
"CHAIN",
"CHAIR",
"CHEST",
"CHIEF",
"CHILD",
"CHINA",
"CLAIM",
"CLOCK",
"COACH",
"COAST",
"COURT",
"COVER",
"CREAM",
"CRIME",
"CROWD",
"CROWN",
"DANCE",
"DEATH",
"DEPTH",
"DOUBT",
"DRAFT",
"DREAM",
"DRINK",
"DRIVE",
"EARTH",
"ENTRY",
"FAITH",
"FAULT",
"FIELD",
"FIGHT",
"FINAL",
"FOCUS",
"FORCE",
"FRAME",
"FRANK",
"FRONT",
"FRUIT",
"GRANT",
"GROUP",
"GUIDE",
"HEART",
"HENRY",
"HORSE",
"HOTEL",
"HOUSE",
"IMAGE",
"INDEX",
"INPUT",
"JONES",
"JUDGE",
"KNIFE",
"LAYER",
"LEWIS",
"LIGHT",
"LUNCH",
"MAJOR",
"MARCH",
"MATCH",
"METAL",
"MODEL",
"MONEY",
"MONTH",
"MOUTH",
"MUSIC",
"NIGHT",
"NOISE",
"NORTH",
"NOVEL",
"NURSE",
"OTHER",
"OWNER",
"PANEL",
"PARTY",
"PEACE",
"PHASE",
"PHONE",
"PILOT",
"PITCH",
"PLACE",
"PLANE",
"PLANT",
"PLATE",
"POINT",
"POUND",
"POWER",
"PRICE",
"PRIDE",
"PRIZE",
"RADIO",
"RANGE",
"RATIO",
"REPLY",
"RIGHT",
"RIVER",
"ROUND",
"ROUTE",
"RUGBY",
"SCALE",
"SCOPE",
"SCORE",
"SHAPE",
"SHARE",
"SHIFT",
"SHIRT",
"SHOCK",
"SIGHT",
"SMILE",
"SMITH",
"SMOKE",
"SOUND",
"SOUTH",
"SPACE",
"SPITE",
"SPORT",
"SQUAD",
"STAFF",
"STAGE",
"STEAM",
"STOCK",
"STONE",
"STORE",
"STUDY",
"STYLE",
"SUGAR",
"TABLE",
"THING",
"TOTAL",
"TOUCH",
"TOWER",
"TRACK",
"TRADE",
"TRAIN",
"TREND",
"TRIAL",
"UNCLE",
"UNITY",
"VALUE",
"VIDEO",
"VOICE",
"WASTE",
"WATCH",
"WATER",
"WHILE",
"WHITE",
"WHOLE",
"WOMAN",
"WORLD",
"WORDS",
"YOUTH"];

var lettArr = [];
var ansCorrect = false;
var activeRow = 0;
var selectedWord = "";
var count = 0;


function checkLetters(rounds) {
  var element = "";
  match = [0,0,0,0,0];

  for (i=0; i<=4; i++) {
     next = i + 1;
     next = next.toString(); 
     j = rounds + next;   

     divName =  "dletter" + j;
     idName =  "letter" + j;

     elementVal = document.getElementById(idName).value;
     idxVal = false;
     idxVal = selectedWord.includes(elementVal);

     if ((idxVal) && (elementVal > "") )   {
         match[i] = 0;
         elementDiv = document.getElementById(divName);
         elementDiv.style.backgroundColor = "#F0F000";
         elementId = document.getElementById(idName);
         elementId.style.backgroundColor = "#F0F000";
     }     
            
     if (elementVal == selectedWord[i]){
        match[i] = 1;
        elementDiv = document.getElementById(divName);
        elementDiv.style.backgroundColor = "#00FF00";
        elementId = document.getElementById(idName);
        elementId.style.backgroundColor = "#00FF00";      
     } 
      
   } // for
 
   if ((match[0]==1) && (match[1]== 1) &&  (match[2]== 1) && (match[3] == 1) && (match[4] ==1)) {
      ansCorrect = true;
      
   } else {
      ansCorrect = false;
   }  
   
   return ansCorrect;
 
} // checkLetters



function showHide(row) {

  row = row.toString();

  for (i=0; i<=4; i++) {
     next = (parseInt(row) + i).toString();
     next = i + 1;
     j = row + next;  

     divName =  "dletter" + j;
     idName =  "letter" + j;
     
     elementDiv = document.getElementById(divName);
     elementDiv.style.backgroundColor = "lightblue";
     elementId = document.getElementById(idName);
     elementId.style.backgroundColor = "lightblue";

     elementDiv = document.getElementById(divName);
     elementDiv.style.display = "block";      

  } // end for
  
  idName =  "letter" + row + "1";

  return idName;


} // end func


function setUp () {
   idx = Math.floor((Math.random() * 213) );
   selectedWord = wordList[idx];
   showHide("0"); 
//  alert(selectedWord);
   document.getElementById("letter01").focus();
   const fs = require('fs');

   const array = fs.readFileSync('file.txt').toString().split("\n");
   for (const a of array) {
      console.log(a);
   }
}

document.addEventListener('DOMContentLoaded', function() {
 setUp ();
}, false);


function clearArray(activeRow) {
  row = activeRow.toString(); 
  var x = "";
 
  for (i=0; i<=4; i++) {
    
     next = i + 1;
     j = row + next;   
     
     divName =  "dletter" + j;
     domObjName =  "letter" + j;
     
     document.getElementById(divName).style.display = "none";
     document.getElementById(domObjName).value = "";
     lettArr[i]  = "";
}
}

function fillArray(activeRow) {

  row = activeRow.toString(); 
  var x = "";
 
  for (i=0; i<=4; i++) {
    
     next = i + 1;
     j = row + next;   
     
     domObjName =  "letter" + j;
     
     x = document.getElementById(domObjName).value.toUpperCase();
     lettArr[i]  = x;

  }  // end for
 
} 


function reveal() {
    alert (" The word was: " + selectedWord.toUpperCase());
}


function mainGame() {

   count += 1;
    

   for (var i = 0; i <= 5; i++) {
     fillArray(i);
   }// for 
   
   ansCorrect = checkLetters(activeRow);

   if (ansCorrect) {
        i = 8; // this will break out of the loop
   } else {  
        lettArr = [];    
   }

   if (! ansCorrect) {
      if (count < 6) {
           activeRow +=1;    
           idName = showHide(activeRow); 
           document.getElementById(idName).focus();
           document.getElementById(idName).select();
        } // if count < 6
      } // if else
   
      if (ansCorrect) {
        alert("YOU'VE FOUND IT - CONGRATULATIONS!");
        document.getElementById("subBtn").style.display = "none";
        document.getElementById("againBtn").style.display = "block";
      } 

   if (count >= 6) {
      document.getElementById("subBtn").style.display = "none";
      document.getElementById("againBtn").style.display = "block";
      document.getElementById("dispBtn").style.display = "block";
   }

} // mainGame

function reset() {
  lettArr = [];
  ansCorrect = false;
  selectedWord = "";
  count = 0;

  for (var i = 1; i <= 5; i++) {
     clearArray(i);

     divName =  "dletter" + "0" + i;
     idName =  "letter" + "0" + i;

     elementDiv = document.getElementById(divName);
     elementDiv.style.backgroundColor = "lightblue";
     elementId = document.getElementById(idName);
     elementId.style.backgroundColor = "lightblue";
     elementId.value = "";

   }// for 
   
  document.getElementById("againBtn").style.display = "none";
  document.getElementById("dispBtn").style.display = "none";
  document.getElementById("subBtn").style.display = "block";

  document.getElementById("letter01").focus();

  activeRow = 0; 
  
  setUp ();
  mainGame();

  
}




