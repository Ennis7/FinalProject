// array of terms
let termsArray = ["and", "or", "break", "image", "paragraph", "content layer", "presentation layer", "behavior layer", "not", "array", "logical operator", "table row", "table data", "boolean", "equal to", "greater than", "less than", "list item", "unorder list", "ordered list"];

// array of symbols
let symbolArray= ["&", "||", "<br>", "<img>", "<p>", "html", "css", "js", "!=", "[]", "&&", "<tr>", "<td>", "true or false", "==", ">=", "<=", "<li>", "<ul>", "<ol>"];

// termsArray[0] = symbolArray[0];
// termsArray[1] = symbolArray[1];
// termsArray[2] = symbolArray[2];
// termsArray[3] = symbolArray[3];
// termsArray[4] = symbolArray[4];
// termsArray[5] = symbolArray[5];
// termsArray[6] = symbolArray[6];
// termsArray[7] = symbolArray[7];
// termsArray[8] = symbolArray[8];
// termsArray[9] = symbolArray[9];
// termsArray[10] = symbolArray[10];
// termsArray[11] = symbolArray[11];
// termsArray[12] = symbolArray[12];
// termsArray[13] = symbolArray[13];
// termsArray[14] = symbolArray[14];
// termsArray[15] = symbolArray[15];
// termsArray[16] = symbolArray[16];
// termsArray[17] = symbolArray[17];
// termsArray[18] = symbolArray[18];
// termsArray[19] = symbolArray[19];
// termsArray[20] = symbolArray[20];

for (let i = 0; i < termsArray.length; i++) {
    termsArray[i] = symbolArray[i];
}


// ---------------------------------------------

  // hide the hidden div and the play again buttton
  document.getElementById("hidden").style.visibility = "hidden"; 
  document.getElementById("playAgain").style.visibility = "hidden"; 

// the gameGrid consist of both arrays.
let gameGrid = termsArray
.concat(symbolArray)
.sort(function(){return 0.5 - Math.random()});

// get the div with the id 'game' and creade a section element
var game = document.getElementById('game');
var grid = document.createElement('section');

// game variables
var firstGuess = '';
var secondGuess = '';
// count for cards selected
var count = 0;
var previousTarget = null;
var delay = 1200;
var attempt = 0;
var correctCount = 0;

// set a class attribute to grid called grid and append to game
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// create a new card div for each object, and set the data-name attribute and background-image style property of the div. 
//We will then append that div to the grid. This will give us 12 divs in total.


// loop through each item in the gameGrid
gameGrid.forEach(item => {
  var { name, img } = item;

  // create a flag dic
  var flag = document.createElement('div');
  flag.classList.add('flag');
  // set a data-name attribute to the flag that is the name in the array
  // the name will determine if the two cards match
  flag.dataset.name = name;

  // create a front and back class
  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  // add the img form the array to the back 
  back.style.backgroundImage = `url(${img})`;

  // append flag to div and back and front to the flag
  grid.appendChild(flag);
  flag.appendChild(front);
  flag.appendChild(back);
});

// function loops trhough selected elements
function match(){
  var selected = document.querySelectorAll('.selected');
  selected.forEach(flag => {
    flag.classList.add('match');
  });
};

// resets guesses
function resetGuesses(){
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  // remove selected class
  var selected = document.querySelectorAll('.selected');
  selected.forEach(flag => {
    flag.classList.remove('selected');
  });
};

  // function runs of all the matches are found
  function win(){
    document.getElementById("hidden").style.visibility = "visible";
    document.getElementById("playAgain").style.visibility = "visible"; 
    victory.play();
  }

// event listener for the grid to determine if an item is clicked
grid.addEventListener('click', event => {

  // the target is the item clicked
  var clicked = event.target;
  
  // make sure that the section itsels is not clickes
  // the previous target is not clickes
  // a alreadye selected card is not clicked
  // and a card in the match class is not clicked
  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  // only 2 cards can be selected
  if (count < 2) {
    // add to count
    count++;
    flip.play();
    // determine if first guess
    if (count === 1) {
      // assing first guess to clicked
      firstGuess = clicked.parentNode.dataset.name;
      // add to selected class
      clicked.parentNode.classList.add('selected');
    } else {
      // if second card add second guess to clicked
      secondGuess = clicked.parentNode.dataset.name;
      // add to selected class
      clicked.parentNode.classList.add('selected');
    }

    // if both are true
    if (firstGuess && secondGuess) {
      // check to see if their names match
      if (firstGuess === secondGuess) {
        // if match, run match function
        setTimeout(match, delay);
        setTimeout("correct.play()", 1000);
        // add to correct count
        correctCount++;
      }else{
        // if no match, add to attempt
        attempt++;
        document.getElementById('attempts').innerHTML = attempt;
      }
      // reset guesses function
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;

    // if correctCount is 12, the number of pairs. The game has been won
    if(correctCount == 12){
      setTimeout(win, 2000);
    }

  }
});

   