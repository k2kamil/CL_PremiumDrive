import './samochody.css';

// Zbiory wszystkich klas
const coupe = document.querySelectorAll('.coupe');
const hatch = document.querySelectorAll('.hatch');
const exotic = document.querySelectorAll('.exotic');
const card = document.querySelectorAll('.card');

console.log(exotic);

// Stałe dla buttonów
const btnAll = document.getElementById('all');
const btnHatch = document.getElementById('hatch');
const btnCoupe = document.getElementById('coupe');
const btnExotic = document.getElementById('exotic');

btnAll.addEventListener('click', function () {
  for(let i = 0; i <= card.length; i++) {
    card[i].classList.remove('hide');
  }
});

btnHatch.addEventListener('click', function() {
  for (let i = 0; i <= coupe.length; i++) {
    coupe[i].classList.add('hide');
  }
  console.log(exotic);
  console.log(coupe);
});

btnCoupe.addEventListener('click', function () {
  for (let i = 0; i <= hatch.length; i++) {
    hatch[i].classList.add('hide');
  }
});

// for (let i = 0; i <= coupe.length; i++) {
//   coupe[i].classList.add('hide');
// }
