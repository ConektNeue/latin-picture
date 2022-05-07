const left = document.querySelector(".left");
const right = document.querySelector(".right");

// Insert values on load of page
window.onload = function () {
    right.style.height = left.getBoundingClientRect().height + "px";
    right.style.top = window.innerHeight / 2 - right.getBoundingClientRect().height / 2 + "px";
    right.style.left = "calc(" + (window.innerWidth / 2) + "px + 10px)";
    left.style.top = window.innerHeight / 2 - left.getBoundingClientRect().height / 2 + "px";
    left.style.left = "calc(" + (window.innerWidth / 2 - left.getBoundingClientRect().width) + "px - 10px)";
};

// Change values when window is resized
window.onresize = function() {
    right.style.height = left.getBoundingClientRect().height + "px";
    right.style.top = window.innerHeight / 2 - right.getBoundingClientRect().height / 2 + "px";
    right.style.left = "calc(" + (window.innerWidth / 2) + "px + 10px)";
    left.style.top = window.innerHeight / 2 - left.getBoundingClientRect().height / 2 + "px";
    left.style.left = "calc(" + (window.innerWidth / 2 - left.getBoundingClientRect().width) + "px - 10px)";
};