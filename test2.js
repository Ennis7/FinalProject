// Define words and their corresponding definitions
const words = ["and", "or", "break", "image", "paragraph", "content layer", "presentation layer", "behavior layer", "not", "array", "logical operator", "table row", "table data", "boolean", "equal to", "greater than", "less than", "list item", "unorder list", "ordered list"];
const definitions = ["&", "||", "<br>", "<img>", "<p>", "html", "css", "js", "!=", "[ ]", "&&", "<tr>", "<td>", "true or false", "==", ">=", "<=", "<li>", "<ul>", "<ol>"];

// for (let i = 0; i < termsArray.length; i++) {
//     termsArray[i] = symbolArray[i];
// }

// Initialize canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define card properties
const cardWidth = 200;
const cardHeight = 100;
const padding = 20;
const columns = 6; // Number of columns
const startX = (canvas.width - (cardWidth + padding) * columns + padding) / 2;
const startY = (canvas.height - (cardHeight + padding) * Math.ceil(words.length / columns) + padding) / 2; // Calculate startY based on number of rows

// Shuffle words and definitions
shuffleArray(words);
shuffleArray(definitions);

// Store clicked cards
let selectedCards = [];

// Draw words and definitions on the canvas
for (let i = 0; i < words.length; i++) {
    const column = i % columns; // Calculate the column index
    const row = Math.floor(i / columns); // Calculate the row index
    const wordX = startX + column * (cardWidth + padding); // Calculate the x position for word
    const wordY = startY + row * (cardHeight + padding); // Calculate the y position for word
    
    drawCard(wordX, wordY, words[i], 'word', i);
    
    const definitionX = startX + column * (cardWidth + padding); // Calculate the x position for definition
    const definitionY = startY + row * (cardHeight + padding) + cardHeight + padding; // Calculate the y position for definition
    
    drawCard(definitionX, definitionY, definitions[i], 'definition', i);
}

// Function to draw a card
function drawCard(x, y, text, type, index) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, cardWidth, cardHeight);
    
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + cardWidth / 2, y + cardHeight / 2);
    
    // Store card coordinates and type
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.fill();
    
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'white';
    // ctx.fillText(type === 'word' ? 'Click to reveal definition' : 'Click to reveal word', x + cardWidth / 2, y + cardHeight / 2);
    ctx.restore();
    
    // Store card information for click event handling
    if (type === 'word') {
        selectedCards.push({
            type: 'word',
            text: text,
            x: x,
            y: y,
            index: index
        });
    } else {
        selectedCards.push({
            type: 'definition',
            text: text,
            x: x,
            y: y,
            index: index
        });
    }
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Event listener for canvas click
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    // Check if a card was clicked
    for (let i = 0; i < selectedCards.length; i++) {
        const card = selectedCards[i];
        if (mouseX >= card.x && mouseX <= card.x + cardWidth &&
            mouseY >= card.y && mouseY <= card.y + cardHeight) {
            // Reveal the clicked card
            ctx.clearRect(card.x, card.y, cardWidth, cardHeight);
            ctx.fillStyle = 'blue';
            ctx.fillRect(card.x, card.y, cardWidth, cardHeight);
            ctx.font = '20px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(card.text, card.x + cardWidth / 2, card.y + cardHeight / 2);
            
            // Remove the revealed card from the list of selectable cards
            selectedCards.splice(i, 1);
            break;
        }
    }
});

