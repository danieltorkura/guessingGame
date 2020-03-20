var numSquares = 6
var colors = [];
var pickedColor ;

var squares = document.querySelectorAll(".square");
var pickedColor = document.getElementById("pickedColor");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("#h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode")
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

init();

function init() {
    // Button Event Listeners
    setupButtons();
    // Square Event Handlers
    setupSquares();
    // Reset
    reset();

}

function setupButtons() {
    for(var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
    
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor == pickedColor){
                messageDisplay.textContent = 'Correct'
                changedColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                displayColor.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
        
    }
}

   

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    displayColor.innerHTML = pickedColor;
    messageDisplay.textContent = ''
    h1.style.backgroundColor = "steelblue";
    displayColor.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none"
        }
    }
}


resetButton.addEventListener("click", function(){
    reset();
})


// Helper Function

function changedColors(colors) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    var arr = []
    for(var i = 1; i <= num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);

     return "rgb(" + r + ", " + g + ", " + b + ")";
}
