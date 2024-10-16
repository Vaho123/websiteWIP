var bannerStatus = 1;  // Keeps track of which is the current banner
var bannerTimer = 4000; // Every 4 seconds, the picture displayed in the banner changes

window.onload = function() {  // this funtion initialises the loop when the page first loads
   bannerLoop(); 
 }; // end onload
  
var startBannerLoop = setInterval(function(){
     bannerLoop(); 
  }, bannerTimer);  // the funtion inside the variable, takes two parameters
  
function enterBanner()  {
  clearInterval(startBannerLoop);  // i.e. clears the interval set in startBannerLoop
}  // This stops the images changing if the mourse is in the image container  




function exitBanner()  {
   startBannerLoop = setInterval(function(){ // this restarts the interval loop again
     bannerLoop(); 
  }, bannerTimer); 
  
}  // end exitBanner function



function prevImage(){
  if (bannerStatus === 1) {
    bannerStatus = 2;
  } // end if === 1  
  else  if (bannerStatus === 2) {
    bannerStatus = 3;
  } // end if === 2 
  else  if (bannerStatus === 3) {
    bannerStatus = 1;
  } // end if === 3 
  
  bannerLoop();
}

function nextImage(){
   
  bannerLoop();
}

  
  //  this function loops the images round from centre to left then round to the right, ready to be redisplayed
  //  this function loops the images round from centre to left then round to the right, ready to be redisplayed
function bannerLoop(){

      if (bannerStatus === 1) {
      
       document.getElementById("imgBanner1").style.opacity ="1"; 
       document.getElementById("imgBanner2").style.opacity ="0";          //Happens immediately.  0 is to make it invisible - 
       document.getElementById("imgBanner3").style.opacity ="0";
      
      // stack the images in the correc order                                       
      document.getElementById("imgBanner1").style.right ="0px";      // starts image 1 from the right hand side all the way over to the left side 100% width
      document.getElementById("imgBanner1").style.zIndex ="1000";     // zIndex = stack order - greter is in front of lower
      document.getElementById("imgBanner2").style.right ="-600px";   // to position this picture to the right of the current picture, ready to slide in next
      document.getElementById("imgBanner2").style.zIndex ="1200px";  // to ensure this image slides OVER and not under the current image
      document.getElementById("imgBanner3").style.right ="600px";    // to position this picture to the left of the current picture
      document.getElementById("imgBanner3").style.zIndex ="500px";   // so when repositioned next time, it is under the image

      bannerStatus = 2;  
    } // end if status = 1
    
         // display second image
         else if (bannerStatus === 2) {
          
            document.getElementById("imgBanner2").style.opacity ="1"; 
            document.getElementById("imgBanner3").style.opacity ="0"; 
            document.getElementById("imgBanner1").style.opacity ="0"; 
   
            document.getElementById("imgBanner2").style.right ="0px"; 
            document.getElementById("imgBanner2").style.zIndex ="1000"; 
            document.getElementById("imgBanner3").style.right ="-600px"; 
            document.getElementById("imgBanner3").style.zIndex ="1200px"; 
            document.getElementById("imgBanner1").style.right ="600px"; 
            document.getElementById("imgBanner1").style.zIndex ="500px"; 

 
     
          bannerStatus = 3;  
        } // end if status = 2
    
    
              // Display third image
               else if (bannerStatus === 3) {
                
                document.getElementById("imgBanner3").style.opacity ="1";
                document.getElementById("imgBanner1").style.opacity ="0";
                document.getElementById("imgBanner2").style.opacity ="0";
    
                document.getElementById("imgBanner3").style.right ="0px"; 
                document.getElementById("imgBanner3").style.zIndex ="1000"; 
                document.getElementById("imgBanner1").style.right ="-600px"; 
                document.getElementById("imgBanner1").style.zIndex ="1200px"; 
                document.getElementById("imgBanner2").style.right ="600px"; 
                document.getElementById("imgBanner2").style.zIndex ="500px"; 
 
           
                bannerStatus = 1;  
              } // end if status = 3
    
    
  }// end bannerLoop
  
function clicked1() {
    alert("You chose the forest adventure");
    
}
  
function clicked2() {
    alert("You chose the enlightening adventure");
}
  
  function clicked3() {
    alert("You chose do discover my writing");
  }
  
function openNav() {
  document.getElementById("myNav").style.width = "15%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


/* Bubbes */
class bubble {
  constructor(canvasWidth, canvasHeight) {
    this.maxHeight = canvasHeight ;
    this.maxWidth = canvasWidth;
    this.randomise();
  }

  generateDecimalBetween(min, max) {
    return (Math.random() * (min - max) + max).toFixed(100); /*was 2 */
  }

  update() {
    this.posX = this.posX - this.movementX;
    this.posY = this.posY - this.movementY;

    if (this.posY < 0 || this.posX < 0 || this.posX > this.maxWidth) {
      this.randomise();
      this.posY = this.maxHeight;
    }
  }


  randomise() {
    this.colour = Math.random() * 255;
    this.size = this.generateDecimalBetween(2, 12);
    this.movementX = this.generateDecimalBetween(-0.4, 0.4);
    this.movementY = this.generateDecimalBetween(-0.4, 0.4);
    this.posX = this.generateDecimalBetween(0, this.maxWidth);
    this.posY = this.generateDecimalBetween(0, this.maxHeight);
  }
}

class background {
  constructor() {
    this.canvas = document.getElementById("floatingbubbles");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.bubblesList = [];
    this.generateBubbles();
    this.animate();
    
  }
  
   animate() {
    let self = this;
    // self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.bubblesList.forEach(function(bubble) {
      bubble.update();
      self.ctx.beginPath();
      self.ctx.arc(bubble.posX, bubble.posY, bubble.size, 0, 2 * Math.PI);
   //   self.ctx.fillStyle = "hsl(" + bubble.colour + ", 40%, 39%)";
      self.ctx.fillStyle = "hsl(" + bubble.colour + ", 100%, 80%)";
      self.ctx.fill();
      // self.ctx.strokeStyle = "hsl(" + bubble.colour + ", 0, 0)";
      // self.ctx.stroke();
    });

    requestAnimationFrame(this.animate.bind(this));
  }

  addBubble(bubble) {
    return this.bubblesList.push(bubble);
  }

generateBubbles() {
    let self = this;
    for (let i = 0; i < self.bubbleDensity(); i++) {
      // self.addBubble(new bubble(self.canvas.width, self.canvas.height));
      self.addBubble(new bubble(self.canvas.width, self.canvas.height));
      
    }
  }

  bubbleDensity() {
    return Math.sqrt((this.canvas.height, this.canvas.width) * 25); /* orig 7 */
  }
}

window.onload = function() {
  new background();
  bannerLoop();
};

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
