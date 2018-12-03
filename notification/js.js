/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

setTimeout(() => {
  if (localStorage["close"] == undefined)
  document.getElementById('hideBlock').style.visibility = 'visible';
  go();
  prev();
}, 5000);
let i = 0; let conten; let
  circle;
window.onload = function () {
  const arr = ['Content1', 'Content2', 'Content3', 'Content4'];
  for (let i = 0; i < arr.length; i++) {
    document.getElementById('slider').insertAdjacentHTML('beforeEnd', `<div class="slide"> <div><p>${arr[i]}</p></div></div>`);
  }
  content = document.querySelectorAll('.slide');
  const div = document.getElementById('circle');
  for (let j = 0; j < content.length; j++) {
    div.insertAdjacentHTML('beforeEnd', '<div class="circle"></div>');
  }
  circle = document.querySelectorAll('.circle');
};
function go() {
  circle[i].classList.remove('act');
  content[i].classList.remove('active');
  i = ++i % content.length;
  content[i].classList.add('active');
  circle[i].classList.add('act');
}

function prev() {
  circle[i].classList.remove('act');
  content[i].classList.remove('active');
  if (i - 1 < 0) i = content.length;
  --i;
  content[i].classList.add('active');
  circle[i].classList.add('act');

}

function closeNotification() {
  document.getElementById('hideBlock').style.visibility = 'hidden';
  const element = document.querySelector('input[type=checkbox]');
  if (element.checked) {
    localStorage["close"] = true;

  }
}

function keyEvent() {
  switch (event.keyCode) {
    case 37:
      prev();
      break;
    case 39:
      go();
      break;
    case 27:
      closeNotification();
      break;
  }
}
