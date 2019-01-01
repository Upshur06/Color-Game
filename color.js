var numberofSquares = 6;

var colors = generatedRandomColors(numberofSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor !== pickedColor){
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }else{
        messageDisplay.textContent = "Correct!!!";
        changeColors(clickedColor);
        heading.style.backgroundColor =clickedColor;
        resetButton.textContent = "Play Again?";
      }
    });
};

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
};


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generatedRandomColors(number){
  var array = [];
  for(var i = 0; i < number; i++){
    array.push(randomColor());
  }
  return array
};

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetButton.addEventListener("click", function(){
    colors = generatedRandomColors(numberofSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    heading.style.backgroundColor = "steelblues";
    messageDisplay.textContent = " ";
    this.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };

});


easyButton.addEventListener("click", function(){
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numberofSquares = 3
  colors = generatedRandomColors(numberofSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener("click", function(){
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numberofSquares = 3
  colors = generatedRandomColors(numberofSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor
  for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});
