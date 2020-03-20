import './rent1.css';

// SLIDER - zmienne
const slider = document.querySelector('.range');
const val = document.getElementById('rangeValue');
const dayLimit = document.querySelector('.day-limit');

const price = document.querySelector('.price');
let dayNumber = document.querySelector('.day');
const finishPrice = document.querySelector('.finished-price');

let actualDays = 1;

//Wyliczenie ceny całkowitej najmu
dayNumber.oninput = function () {
  actualDays = Number(this.value);
  console.log(actualDays);
  price.innerHTML = actualDays * (400 + 250 * 2);
  finishPrice.innerHTML = actualDays * (400 + 250 * 2); //Dla form z potwierdzeniem
};

val.innerHTML = slider.value;

slider.oninput = function () {
  val.innerHTML = this.value;
  dayLimit.innerHTML = this.value; //Dla form z potwierdzeniem
  console.log(actualDays);
  price.innerHTML = actualDays * (400 + this.value * 2);
};

//Walidacja inputów
//stałe do walidacji
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const form = document.getElementById('form-reserv');
const email = document.getElementById('email');
const errorEl = document.getElementById('error');

//Stałe do dodania/usunięcia klasy hide
const confirm = document.querySelector('.confirmation');
const reservation = document.querySelector('.reservation-container');
const info = document.querySelector('.info');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let messages = [];
  if(name.value.length <=2) {
    messages.push('Imię musi się składać z minimum 3 znaków');
  }

  // if(name.value.includes(Number)) {
  //   messages.push('Imię nie może być liczbą');
  // }

  if(surname.value.length <= 2) {
    messages.push('Nazwisko musi się skłądać z nimum 3 znaków');
  }

  // if(surname.value != NaN) {
  //   messages.push('Nazwisko nie może być liczbą');
  // }

  if(!email.value.includes('@')) {
    messages.push('email musi zawierać znak @');
  }

  if(messages.length > 0) {
    e.preventDefault();
    errorEl.innerText = messages.join(', ');
  }

  if(messages.length < 1) {
    console.log(confirm);
    confirm.classList.remove('hide');
    reservation.classList.add('hide');
    info.classList.add('hide');
  }
});

//Formularz potwierdzenia rezerwacji
const yourName = document.querySelector('.your-name');
const date = document.getElementById('pick-date');
const pickUpDate = document.querySelector('.pick-up-date');
const yourEmail = document.querySelector('.your-email');

name.oninput = function () {
  yourName.innerHTML = this.value;
};

date.oninput = function () {
  pickUpDate.innerHTML = this.value;
};

email.oninput = function () {
  yourEmail.innerHTML = this.value;
}



