// images
const lightTee = document.getElementById('light-tee');
const darkTee = document.getElementById('dark-tee');

// image urls
const lightGreyTeeUrl = "assets/images/vitalik-buterin-ethereum-t-shirt-light-grey.jpg";
// const lightGreyTeeUrl = "{{'/assets/images/vitalik-buterin-ethereum-t-shirt-light-grey.jpg' | relative_url }}";
const lightBlueTeeUrl = "assets/images/vitalik-buterin-ethereum-t-shirt-light-blue.jpg";
// const lightBlueTeeUrl = "{{'/assets/images/vitalik-buterin-ethereum-t-shirt-light-blue.jpg' | relative_url }}";
const darkGreyTeeUrl = "{{'/assets/images/vitalik-buterin-ethereum-t-shirt-dark-grey.jpg' | relative_url }}";
const darkBlueTeeUrl = "{{'/assets/images/vitalik-buterin-ethereum-t-shirt-dark-grey.jpg' | relative_url }}";

// swatches
const swatchLightBlue = document.getElementById('swatch-light-blue');
const swatchLightGrey = document.getElementById('swatch-light-grey');
const swatchDarkBlue = document.getElementById('swatch-dark-blue');
const swatchDarkGrey = document.getElementById('swatch-dark-grey');

// change light tee to blue
swatchLightBlue.addEventListener('click', () => {
    lightTee.src = lightBlueTeeUrl;
});

// change light tee to grey
swatchLightGrey.addEventListener('click', () => {
    lightTee.src = lightGreyTeeUrl;
});
