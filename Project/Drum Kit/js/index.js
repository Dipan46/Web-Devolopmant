// Click event for mouse input
for (let index = 0; index < document.querySelectorAll(".drum").length; index++)
    document.querySelectorAll("button")[index].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        // Specifying sound while clicking with mouse
        switch (buttonInnerHTML) {
            case "w":
                let audioW = new Audio("sounds/tom-1.mp3");
                audioW.play();
                break;
            case "a":
                let audioA = new Audio("sounds/tom-2.mp3");
                audioA.play();
                break;
            case "s":
                let audioS = new Audio("sounds/tom-3.mp3");
                audioS.play();
                break;
            case "d":
                let audioD = new Audio("sounds/tom-4.mp3");
                audioD.play();
                break;
            case "j":
                let audioJ = new Audio("sounds/snare.mp3");
                audioJ.play();
                break;
            case "k":
                let audioK = new Audio("sounds/crash.mp3");
                audioK.play();
                break;
            case "l":
                let audioL = new Audio("sounds/kick-bass.mp3");
                audioL.play();
                break;
            default:
                break;
        }

        // Button Animation
        
        buttonAnimation(this.innerHTML);
    });

// Click event for keyboard input

document.addEventListener("keypress", function (event) {
    // Specifying sound while clicking key
    switch (event.key) {
        case "w":
            let audioW = new Audio("sounds/tom-1.mp3");
            audioW.play();
            break;
        case "a":
            let audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();
            break;
        case "s":
            let audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();
            break;
        case "d":
            let audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
            break;
        case "j":
            let audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();
            break;
        case "k":
            let audioK = new Audio("sounds/crash.mp3");
            audioK.play();
            break;
        case "l":
            let audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();
            break;
        default:
            break;
    }

    // Button Animation

        buttonAnimation(event.key);
});

// Button Animation

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}