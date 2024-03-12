const typeTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

let palabras = ["Awesome", "Fun", "Cool", "Famous"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () =>{
    if (palabras.length){
        setTimeout(type, newTextDelay);
    }
})

function type() {
  if (charIndex < palabras[index].length) {
    typeTextSpan.textContent += palabras[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typeTextSpan.textContent = palabras[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= palabras.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
