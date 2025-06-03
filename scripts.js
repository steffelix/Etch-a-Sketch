
const container = document.querySelector("div")
const squares = [];

const squarecontainer = document.createElement("div");
const button = document.createElement("button");

button.addEventListener("click", () => {
    var userInput = prompt("Please provide the grid row size:");
    generateSquares(userInput)
})

container.appendChild(button);
container.appendChild(squarecontainer);

button.textContent = "Grid Size";
button.style.padding = "10px";
button.style.margin = "0";
button.style.margin = "30px";

squarecontainer.style.width = "800px";
squarecontainer.style.display = "flex";
squarecontainer.style.flexWrap = "wrap";

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center"

function generateSquares(size){

    let totalSquares = size*size;
    let squareSize = 800 / size;

    const newSquares = [];
    squarecontainer.replaceChildren();

    for(let i = 0; i < size*size; i++){
        const square = document.createElement("div");
    
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        square.style.background = "red";
    
        squarecontainer.appendChild(square);
    
        square.addEventListener("mouseover", (event) => {
            square.style.background = "blue"
        })
    
        
    
        squares[i] = square;
    };
    
}



