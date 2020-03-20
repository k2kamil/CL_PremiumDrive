window.console.log('index page js');

//PONIŻEJ KOD DLA IMAGE SLIDER
//Stałe
let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//Clear all Images
function reset() {
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

//Init slider
function startSlide () {
  reset();
  sliderImages[0].style.display = 'block';
}

// Show previous Image
function slideLeft(){
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

//Show next
function slideRight () {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function () {
  if(current === 0) {
    current = sliderImages.length;
  }

  slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', function () {
  if(current === sliderImages.length - 1) {
    current = -1;
  }

  slideRight();
});

startSlide();

//Aktywny link
const currentLocation = location.href;
const menuItem = document.querySelectorAll('li');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if(menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}
