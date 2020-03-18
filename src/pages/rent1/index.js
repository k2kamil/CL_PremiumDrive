import './rent1.css';

const slider = document.querySelector('.range');
const val = document.getElementById('rangeValue');

val.innerHTML = slider.value;

slider.oninput = function () {
  val.innerHTML = this.value;
};

