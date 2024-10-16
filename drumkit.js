

document.addEventListener('keydown', (event) => {

    let key = event.key;
 
    switch(key) {
        case "a":
            let sound = new Audio("snare.wav");
            let img = document.getElementById("rightArm");
            img.style.transform = 'rotate3d(10,10,1,-90deg)';
            setTimeout(() => {
                img.style.transform = 'rotate(0deg)';
            }, 100)
            sound.play();
            //img.style.transform = 'rotate(0deg)';
            break;
        case "s":
            let boom = new Audio("boom.wav");
            let img2 = document.getElementById("leftArm");
            img2.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                img2.style.transform = 'rotate(0deg)';
            }, 100)
            boom.play();
            break;
        case "d":
            let clap = new Audio("clap.wav");
            let img3 = document.getElementById("head");
            img3.style.transform = 'rotate(45deg)';
            setTimeout(() => {
                img3.style.transform = 'rotate(0deg)';
            }, 300)
            clap.play();
            break;
        case "f":
            let hihat = new Audio("hihat.wav");
            let img4 = document.getElementById("leftArm");
            img4.style.transform = 'rotate(-50deg)';
            setTimeout(() => {
                img4.style.transform = 'rotate(0deg)';
            }, 100)
            hihat.play();
            break;
        case "g":
            let kick = new Audio("kick.wav");
            let img5 = document.getElementById("head");
            img5.style.transform = 'rotate(-45deg)';
            setTimeout(() => {
                img5.style.transform = 'rotate(0deg)';
            }, 100)
            kick.play();
            break;
        case "h":
            let openhat = new Audio("openhat.wav");
            let img6 = document.getElementById("rightArm");
            // img6.style.transform = 'rotate(2700deg)';
            img6.style.transform = 'rotate3d(1,1,10,-35deg)';
            setTimeout(() => {
                img6.style.transform = 'rotate(0deg)';
            }, 100)
            openhat.play();
            break;
        case "j":
            let ride = new Audio("ride.wav");
            let img7 = document.getElementById("leftArm");
            img7.style.transform = 'rotate(270deg)';
            setTimeout(() => {
                img7.style.transform = 'rotate(0deg)';
            }, 100)
            ride.play();
            break;
        case "k":
            let tink = new Audio("tink.wav");
            let img8l = document.getElementById("leftArm");
            img8l.style.transform = 'rotate(-180deg)';
            setTimeout(() => {
                img8l.style.transform = 'rotate(0deg)';
            }, 100)
            let img8r = document.getElementById("rightArm");
            img8r.style.transform = 'rotate(270deg)';
            setTimeout(() => {
                img8r.style.transform = 'rotate(0deg)';
            }, 100)
            tink.play();
            break;
        case "l":
            let tom = new Audio("tom.wav");
            let img9 = document.getElementById("head");
            img9.style.transform = 'rotate3d(10,1,1,150deg)';
            let img9a = document.getElementById("drumcentre");
            let width = img9a.clientWidth;
            let height = img9a.clientHeight;
            img9a.style.width = (width + 10) + "px";
            img9a.style.height = (height + 10) + "px";
            setTimeout(() => {
                img9.style.transform = 'rotate(0deg)';
                let width2 = img9a.clientWidth;
                let height2 = img9a.clientHeight;
                img9a.style.width = (width2 - 10) + "px";
                img9a.style.height = (height2 - 10) + "px";

            }, 100)
            tom.play();
            break;
        default:
            break
    }
   
})

function openNav() {
    document.getElementById("myNav").style.width = "15%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

