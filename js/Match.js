//Using objects to assign matches for the tiles 
const matches = [
  { word: "and", symbol: "&&" },
  { word: "or", symbol: "||" },
  { word: "not", symbol: "!" },
  { word: "break", symbol: "<br>" },
  { word: "image", symbol: "<img>" },
  { word: "boolean", symbol: "true or false" },
  { word: "greater than", symbol: ">=" },
  { word: "less than", symbol: "<=" },
  { word: "content layer", symbol: "html" },
  { word: "presentation layer", symbol: "css" },
  { word: "logical layer", symbol: "js" },
  { word: "equal to", symbol: "==" },
  { word: "array", symbol: "[ ]" },
];


let cards = []; //Array to store card objects
let selectedCard = null; //To keep track of selected card 

//Retrieving canvas element and its context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Card dimensions and layout settings
const cardWidth = 175;
const cardHeight = 150;
const padding = 10;
const cols = 5;
const rows = Math.ceil((matches.length * 2) / cols);

//setting canvas size based on card dimensions and layout
canvas.width = (cardWidth + padding) * cols;
canvas.height = (cardHeight + padding) * rows;

//function to render a card on the canvas
function renderCard(x, y, text, selected = false) {
  //drawing card rectangle 
  ctx.fillStyle = selected ? "rgb(187, 142, 8)" : "hsl(154, 75%, 16%)";
  ctx.fillRect(x, y, cardWidth, cardHeight);
  //drawing text on the card
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText(text, x + cardWidth / 2, y + cardHeight / 2);
}

//Function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
//
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//Function to render cards on the canvas
function renderCards(mix = false) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (cards.length === 0) {
    //Generating card objects for each match
    matches.forEach((match, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const x = col * (cardWidth + padding);
      const y = row * (cardHeight + padding) * 2;

    // creating two cards for each match
      cards.push({
        x,
        y,
        text: match.word,
        match: match.symbol,
        selected: false,
      });

      cards.push({
        x,
        y: y + cardHeight + padding,
        text: match.symbol,
        match: match.word,
        selected: false,
      });
    });

    if (mix) cards = shuffle(cards);
  }
// Rendering each card on the canvas
  cards.forEach((card, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = col * (cardWidth + padding);
    const y = row * (cardHeight + padding);

    card.x = x;
    card.y = y;

    renderCard(card.x, card.y, card.text, card.selected);
  });
}
//function to handle click event on the canvas
function checkClick(x, y) {
  cards.forEach((card) => {
    if (
      x >= card.x &&
      x <= card.x + cardWidth &&
      y >= card.y &&
      y <= card.y + cardHeight
    ) {
      console.log(card);
      if (selectedCard === null) {
        //selecting the clicked card
        selectedCard = card;
        card.selected = true;
        renderCards();
      } else {
        if (selectedCard.match === card.text) {
          console.log("Matched");
          //if cards match, remove them from the array
          cards = cards.filter((c) => c !== card && c !== selectedCard);
          selectedCard = null;
          //re-render cards with a slight delay to show match
          setTimeout(() => {
            renderCards(true);
          }, 50);
        } else {
          console.log("Not matched");
          //if cards don't match, deselect them
          card.selected = false;
          cards.find((c) => c === selectedCard).selected = false;
          selectedCard = null;
          renderCards();
        }
      }
    }
  });
}

//adding click event listener to the canvas
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  checkClick(x, y);
});
//rendering initial shuffled cards on the canvas
renderCards(true);
