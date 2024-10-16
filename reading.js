var theme =0;
    
function changeTheme()   { 

      if (theme === 0)  {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogoGrey.png";

        for (i=0; i < tags.length; ++i)  {                            // brackets ensure maths calculation not string concatenation
      	  tags[i].style.color = "white";
        } // end for 
      }// end if 0
      
      if (theme === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogBetterTransp.png";

        for (i=0; i < tags.length; ++i) {                            // brackets ensure maths calculation not string concatenation
      	  tags[i].style.color = "black";  
        } // end for 
        
      	document.getElementById("puzzleButton").style.color = "white";
      	document.getElementById("Home2").style.color = "green";
      }// end if 1
      
      if (theme >= 2) {
        body.style.backgroundColor = '#BCED91';
        body.style.color = 'black';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogBetterTransp.png";
    
        for (i=0; i < tags.length; ++i) {                            // brackets ensure maths calculation not string concatenation
         	tags[i].style.color = "black";
        } // end for 
        
     	  document.getElementById("puzzleButton").style.color = "white";
      	document.getElementById("myNav").style.color = "yellow";
      } // end if 2
      
      if (theme === 3){
        body.style.backgroundColor = '#00ddff';
        body.style.color = 'black';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogBetterTransp.png";
      
        for (i=0; i < tags.length; ++i){                            // brackets ensure maths calculation not string concatenation
          	tags[i].style.color = "black";
        } // end for 
        
        document.getElementById("puzzleButton").style.color = "white";
    	  document.getElementById("myNav").style.color = "yellow";
      }// end if 3
    
    
      theme ++;
      if (theme >= 4)  // prevents errors of going over 4 styles and loops back to the first
      {
        document.getElementById("puzzleButton").style.color = "white";
    	  document.getElementById("myNav").style.color = "yellow";
        theme = 0;
      }// end if >= 4
      
}// end changeTheme


  var fontSize = 20; // This will run when the page loads as it is outside the function
  
  function incFontSize()
  {
    // Ensure it does not keep growing, but wraps around back to 16 - therefore don't need another button/tag to make it maller again, therefore less mees on screen
    fontSize = fontSize + 4;
    if (fontSize > 40)
    {
      fontSize = 20;
    }// end if
  
       // boost the list boxes
       var tags = document.getElementsByTagName('select');  // all paragraph tags
    
   for (var i=0; i < tags.length; ++i)  // tags.length = the number of ('p') tags
    {
      	tags[i].style.fontSize = fontSize + "px";
    } // end for  list boxes
    
       // boost the buttons
   tags = document.getElementsByTagName('button');  // all paragraph tags
    
   for (i=0; i < tags.length; ++i)  // tags.length = the number of ('p') tags
    {
      	tags[i].style.fontSize = fontSize + "px";
    } // end for buttons
    
    
   // boost the p tags
   tags = document.getElementsByTagName('p');  // all paragraph tags
    
   for (i=0; i < tags.length; ++i)  // tags.length = the number of ('p') tags
    {
      	tags[i].style.fontSize = fontSize + "px";
    } // end for p tags
    
   // boost the li tags
   tags = document.getElementsByTagName('li'); //tags was crates in var tags, above, therefore only tags is required here
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = fontSize + "px";
    }// end for li tags
    
    
   // boost the h2 tags
   tags = document.getElementsByTagName('h2');
    
   for (i=0; i < tags.length; ++i)
    {                            // brackets ensure maths calculation not string concatenation
      	tags[i].style.fontSize = (fontSize + 4) + "px"; //Esnure h2 headings are always 4px larger than paragraphs
    } // end for h2 tgs
    
       // boost the h1 tags
   tags = document.getElementsByTagName('h1');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 10) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h1 tags
    
         // boost the h3 tags
   tags = document.getElementsByTagName('h3');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 2) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h3 tags
    
           // boost the h3 tags
   tags = document.getElementsByTagName('blockquote');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 2) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h3 tags
    
             // boost the h4 tags
   tags = document.getElementsByTagName('h4');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 1) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h4 tags
    
    
    
       // boost the <a> tags
   tags = document.getElementsByTagName('a');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <a> tags
    
        
       // boost the <input> tags
   tags = document.getElementsByTagName('input');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <input> tags
    
          
       // boost the <textarea> tags
   tags = document.getElementsByTagName('textarea');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <input> tags
    
    
         // boost the <labels> tags
   tags = document.getElementsByTagName('label');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <input> tags
    
    
          // boost the <div> tags
   tags = document.getElementsByTagName('div');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <div> tags
    
    
} // end function