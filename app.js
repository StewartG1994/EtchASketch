const container = document.getElementById("container");
const grid = document.querySelectorAll('grid');
const div = document.querySelectorAll('div')
console.log(container, div, grid)


function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    [c];
    container.appendChild(cell).className = "grid";
  };
};

function sizeSelect (){
    const number = prompt("Please enter a number between 10 and 64");
    if (number >= 10 && number <=64)
        makeGrid(number,number);
    }

sizeSelect()


  container.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'red';
  })
