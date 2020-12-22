const input = document.querySelector('.color-input')
const options = document.getElementById('color-options')
const paragraph = document.querySelector('.color-box');

input.addEventListener("change", function() {
paragraph.style.backgroundColor = input.value;
});

options.addEventListener("change", function(e) {
document.body.style.backgroundColor  = e.target.value;
});
