"use strict";

let button = document.getElementById('button');
button.addEventListener('click', click);

function click(e) {
  console.log('button was clicked');
  let number = document.getElementById("number");
  number.innerText = Number(number.innerText) + 1;
}
