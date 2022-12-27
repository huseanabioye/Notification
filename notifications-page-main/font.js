"use strict";
const marker = document.querySelector(".mark");
const disappear = document.querySelectorAll("appear");
const gaps = document.querySelectorAll(".gaps");
const body = document.querySelector("body");
const reds = document.querySelectorAll(".redR");
const bg = document.querySelector(".bg");

reds.forEach(function (ttte) {
  marker.addEventListener("click", function () {
    ttte.style.opacity = 0;
    gaps.forEach(function (gap) {
      gap.style.backgroundColor = "initial";
      bg.textContent = "0";
    });
    console.log(ttte);
  });
});
gaps.forEach(function (backgroundColors) {
  backgroundColors.style.backgroundColor = "hsl(211, 68%, 94%)";
});
