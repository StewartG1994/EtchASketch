
const container = document.querySelector('.container');
console.log(container)


function createDiv(number) {

container.style.setProperty('--rows', number);


for (i = 0; i < (number* number); i++){
  const div = document.createElement('div')
  container.appendChild(div).className = 'div';
  [i];

}

}

createDiv(40)

container.addEventListener('mouseover', event => {
  event.target.style.backgroundColor = 'red';
})






// create div * number required 