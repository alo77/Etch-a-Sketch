const container = document.querySelector("#grid-container");
const changeSize = document.querySelector("#change-size");
const clearSketch = document.querySelector("#clear-sketch");
const blackColor = document.querySelector("#black-color");
const shadeColor = document.querySelector("#shade-color");
const rgbColor = document.querySelector("#rgb-color");

let gridSize = 16;
let color = "black";
let shade = false;
let rgb = false;

changeSize.addEventListener("click", () => {
  // will prompt again whenver not giving a number 1-100.
  do {
    gridSize = Number(prompt("Enter a number of size (1-100)", 16));
  } while (
    isNaN(gridSize) ||
    !Number.isInteger(gridSize) ||
    gridSize < 1 ||
    gridSize > 100
  );
  container.textContent = "";
  createGrid(gridSize);
});
