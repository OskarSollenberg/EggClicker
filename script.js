"use strict";

// let count = 0;
// let count = localStorage.setItem("count", 0)

let count = JSON.parse(localStorage.getItem("count")) || 0;
let btnEl = document.querySelector("#btn");

let counterValue = document.querySelector("#counterValue");
counterValue.textContent = count;

btnEl.addEventListener("click", function () {
    count++;

    localStorage.setItem("count", JSON.stringify(count));

    let counterValue = document.querySelector("#counterValue");
    counterValue.textContent = count;
});



// let decreeseBtnEl = document.querySelector("#decreese");

// decreeseBtnEl.addEventListener("click", function () {
//     count--;

//     localStorage.setItem("count", JSON.stringify(count));

//     let counterValue = document.querySelector("#counterValue");
//     counterValue.textContent = count;
// });
