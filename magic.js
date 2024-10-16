const stars = [];
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var inpChars = "";

function init() {
  const banner = document.getElementById("banner");
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      change: 0.15,
    });
  }
}

function update() {
  for (const star of stars) {
  //star.x += 0.01;  // makes stars move cross sky
  
    if (star.x > 1) {
      star.x = 0;
    }
    if (star.size < 0.1) {
      star.change = 0.1;
    } else if (star.size > 0.9) {
      star.change = -0.1;
    }
    star.size += star.change;
  }
}

function render() {
  const { width, height } = canvas; // set size of 'universe' to that of the canvass
  context.clearRect(0, 0, width, height); 
  for (const star of stars) {
    context.beginPath();
    context.arc(
     star.x * width,
     star.y * height,
     star.size * 3,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = "white";
    context.fill();
  }
}

function twinkle() {
  update();
  render();
}
setInterval(twinkle, 100);
init();


function calcAnswer() {

   var total = 0;

   inpChars = document.getElementById('userInp').value;
   inpChars = inpChars.toUpperCase();

   var a_found = inpChars.includes("A");
   var b_found = inpChars.includes("B");
   var c_found = inpChars.includes("C");
   var d_found = inpChars.includes("D");
   var e_found = inpChars.includes("E");
   var f_found = inpChars.includes("F");
    
    if (a_found) {
      total = total + 1;
    } 
    if (b_found) {
      total = total + 2;
    } 
    if (c_found) {
      total = total + 4;
    } 
    if (d_found) {
      total = total + 8;
    } 
    if (e_found) {
      total = total + 16;
    } 
    if (f_found) {
      total = total + 32;
    } 

    var totAnswer = total;
    sessionStorage.setItem("totAnswer", total); // session storage to savea value across pages

    window.open ('answer.html','_self',false);
}


var delayInMilliseconds = 2000; //2 second.  
var delayInMilliseconds3 = 3000; //3 second. 

function delay() {
  document.getElementById("delay1").innerText = "Think of your number...";
  setTimeout(function() {
  
   delay2();
   
}, delayInMilliseconds);
}

function delay2() {
  setTimeout(function() {
  document.getElementById("delay1").style.display == 'none';
  document.getElementById("delay1").innerText = "Think harder...";
   delay3();
}, delayInMilliseconds3);
}

function delay3() {
  setTimeout(function() {
  document.getElementById("delay1").innerText = "Your number is:";
   getAnswer();
}, delayInMilliseconds);
}


function getAnswer() {
  var totAnswer = sessionStorage.getItem('totAnswer');
  document.getElementById("answerH11").innerText = totAnswer;
}


