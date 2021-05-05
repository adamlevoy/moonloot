// images
const lightTee = document.getElementById('light-tee');
const darkTee = document.getElementById('dark-tee');

// image urls
const lightGreyTeeUrl = "assets/images/vitalik-buterin-ethereum-t-shirt-light-grey.jpg";
const lightBlueTeeUrl = "assets/images/vitalik-buterin-ethereum-t-shirt-light-blue.jpg";
const darkGreyTeeUrl = "assets/images/vitalik-buterin-ethereum-t-shirt-dark-grey.jpg";
const darkBlueTeeUrl = "assets/images/vitalik-buterin-ethereum-t-shirt-dark-blue.jpg";

// swatches
const swatchLightBlue = document.getElementById('swatch-light-blue');
const swatchLightGrey = document.getElementById('swatch-light-grey');
const swatchDarkBlue = document.getElementById('swatch-dark-blue');
const swatchDarkGrey = document.getElementById('swatch-dark-grey');

// change light tee to blue, +/- swatch select
swatchLightBlue.addEventListener('click', () => {
    lightTee.src = lightBlueTeeUrl;
    swatchLightBlue.classList.add("swatch-select");
    swatchLightGrey.classList.remove("swatch-select");
});

// change light tee to grey, +/- swatch select
swatchLightGrey.addEventListener('click', () => {
    lightTee.src = lightGreyTeeUrl;
    swatchLightGrey.classList.add("swatch-select");
    swatchLightBlue.classList.remove("swatch-select");
});

// change dark tee to grey, +/- swatch select
swatchDarkGrey.addEventListener('click', () => {
    darkTee.src = darkGreyTeeUrl;
    swatchDarkGrey.classList.add("swatch-select");
    swatchDarkBlue.classList.remove("swatch-select");
});

// change dark tee to blue, +/- swatch select
swatchDarkBlue.addEventListener('click', () => {
    darkTee.src = darkBlueTeeUrl;
    swatchDarkBlue.classList.add("swatch-select");
    swatchDarkGrey.classList.remove("swatch-select");
});
