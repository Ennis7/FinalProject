const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cardWidth = 80;
const cardHeight = 80;
const numRows = 4;
const numCols = 6;
const numPairs = (numRows * numCols) / 2;

let termsArray = ["and", "or", "break", "image", "paragraph", "content layer", "presentation layer", "behavior layer", "not", "array", "logical operator", "table row", "table data", "boolean", "equal to", "greater than", "less than", "list item", "unorder list", "ordered list"];
let symbolArray= ["&", "||", "<br>", "<img>", "<p>", "html", "css", "js", "!=", "[]", "&&", "<tr>", "<td>", "true or false", "==", ">=", "<=", "<li>", "<ul>", "<ol>"];

for (let i = 0; i < termsArray.length; i++) {
    termsArray[i] = { name: termsArray[i], img: symbolArray[i] };
}

document.getElementById("hidden").style.visibility = "hidden";
document.getElementById("playAgain").style.visibility = "hidden";

var gameGrid = termsArray.concat(symbolArray).sort(() => 0.5 - Math.random());

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach((item, index) => {
    var term = document.createElement('div');
    term.classList.add('term');
    term.dataset.name = item.name;

    var front = document.createElement('div');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('back');
    back.innerText = item.img;

    grid.appendChild(term);
    term.appendChild(front);
    term.appendChild(back);
});

// Function to draw the game grid on canvas
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const index = row * numCols + col;
            const x = col * cardWidth;
            const y = row * cardHeight;

            ctx.fillStyle = 'blue';
            ctx.fillRect(x, y, cardWidth, cardHeight);
        }
    }
}

// Draw initial grid
drawGrid();

// Event listener for canvas click
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const col = Math.floor(mouseX / cardWidth);
    const row = Math.floor(mouseY / cardHeight);
    const index = row * numCols + col;

    console.log(`Clicked on row: ${row}, col: ${col}, index: ${index}`);
});

// Other game logic goes here...
