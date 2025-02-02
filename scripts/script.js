// Typing effect logic
const typedTextSpan = document.querySelector(".typing");
const textArray = ["A DevOps Engineer", "Cloud Enthusiast", "BigQuery Expert"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);  // Adjust speed here
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);  // Adjust speed here
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 200);  // Adjust delay before starting to type next sentence
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) {
        setTimeout(type, 200);  // Starts typing after a small delay
    }
});
