
var pianoButton = document.querySelectorAll(".piano button");

for(var i = 0; i < pianoButton.length; ++i){
    pianoButton[i].addEventListener("click", function (){
        var idClicked = this.id;
        soundCheck(idClicked);
        buttonAnimation(idClicked);
    });

    pianoButton[i].addEventListener("keydown", function (event){ 
        var keyPressed = event.key;
        soundCheck(keyPressed);
        buttonAnimation(keyPressed);
    });
}


//This function checks and matches id to the correct key / note sound.
function soundCheck(id){
    var charArray = ["c", "c-sharp", "d", "d-sharp", "e", "f", "f-sharp", "g", "g-sharp", "a", "a-sharp", "b", "c-octave"];
    var j = 0;    
        while(j < charArray.length){
            if(id === charArray[j]){
                var sound = "./sounds/key_"+id+".mp3"
                var note = new Audio(sound);
                note.play();
            }
            j++;    
        }
}


function buttonAnimation(eventKey){
    var activeButton = document.querySelector("#"+eventKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}