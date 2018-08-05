const catImage = document.querySelector('img');
let counterP = document.querySelector('.counter-p');

catImage.addEventListener('click', (function () {
  let counter = 0;
  return function () {
    counter++;
    counterP.textContent = counter;
  };
}()));