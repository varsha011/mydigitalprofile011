// Typing effect for the text in the home section
const typedTextSpan = document.querySelector(".typing");
const textArray = ["Your Name", "A Web Developer", "A Tech Enthusiast"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);  // Adjust speed of typing
    } else {
        setTimeout(erase, 1500);  // Start erasing after delay
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);  // Adjust speed of erasing
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 200);  // Start typing next text
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) {
        setTimeout(type, 200);  // Starts typing after a short delay
    }
});
