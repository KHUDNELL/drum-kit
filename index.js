let date = new Date();
let year = date.getFullYear();

document.getElementById('year').innerHTML = year;

let drums = document.querySelectorAll(".drum");
for (let i = 0;i < drums.length; i++){
    drums[i].addEventListener("click", function(){
        let buttonHTML = this.innerHTML;
    
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
        
    });
}


document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key) {

    let logo = document.getElementById('logo');


    switch (key) {
        case "w":
            var tom = new Audio("sounds/tom-1.mp3");
            tom.play();
           
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            logo.classList.remove('animate__backInDown', 'animate__delay-3s');
            logo.classList.add('animate__swing', 'animate__faster');
           
            logo.addEventListener('animationend', () => {
                logo.classList.remove('animate__swing', 'animate__faster');
              });

            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonHTML);
    }

}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}



//var tom = new Audio("sounds/tom-1.mp3");
//        tom.play();