
const container = document.querySelector("div")

const squarecontainer = document.createElement("div");
container.appendChild(squarecontainer);

squarecontainer.style.width = "800px";
squarecontainer.style.display = "flex";
squarecontainer.style.flexWrap = "wrap";


container.style.display = "flex";
container.style.justifyContent = "center";

for(let i = 0; i < 16; i++){
    const square = document.createElement("div");

    square.style.height = "200px";
    square.style.width = "200px";
    square.style.background = "red";

    squarecontainer.appendChild(square);
};