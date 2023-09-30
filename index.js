var object = document.querySelectorAll(".drum");
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var kick = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3')
h1 = document.querySelector("h1");
for (i=0;i<object.length;i++){
    object[i].addEventListener("click",function(){
            var buttonInnerHtml = this.innerHTML;
            h1.classList.toggle("headshadow")
            this.classList.toggle("clickShadow");
            switch (buttonInnerHtml) {
                case "A":
                    tom1.play();
                    break;
                case "B":
                    
                    tom2.play();
                    break;
                case "C":
                    crash.play();
                    break;
                case "D":
                    tom3.play();
                    break;
                case "E":
                    tom4.play();
                    break;
                case "F":
                    kick.play();
                    break;
                case "G":
                    snare.play();
                    break;

                default: console.log(buttonInnerHtml)
                    break;
            }
    })
}