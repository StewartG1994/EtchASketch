const container = document.querySelector('.container');
const buttons =document.querySelector('.buttons');
const redBtn = document.getElementById('red');
const random = document.getElementById('random');
const reset = document.getElementById('reset');

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

function reloadThePage(){
  window.location.reload();
} 

function createDiv(number) {

container.style.setProperty('--rows', number);

for (i = 0; i < (number* number); i++){
  const div = document.createElement('div')
  container.appendChild(div).className = 'div';
  [i];
}}

let gridSize = prompt('Enter a number between 16 and 64')
createDiv(gridSize)


redBtn.addEventListener('click', () => {
  container.addEventListener('mouseover', event => {
  event.target.style.backgroundColor = 'red';
  })
});

random.addEventListener('click', ()=>{

  container.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = randomColor();
  })
})

reset.addEventListener('click', reloadThePage)





