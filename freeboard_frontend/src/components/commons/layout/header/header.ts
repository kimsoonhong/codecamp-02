"use strict";

const wrapper = document.querySelector("#wrapper");
const wrapper_height = wrapper.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > wrapper_height / 2) {
    navber.classList.add("navber--dark");
  } else {
    navber.classList.remove("navber--dark");
  }
});
