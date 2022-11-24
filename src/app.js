import "./style.scss";
import confetti from "canvas-confetti";
import ColorThief from "colorthief";

const colorThief = new ColorThief();

const triggerConfettiButton = document.querySelector(".confetti-button");
const displayedImage = document.querySelector("#image");
const imageInputBar = document.querySelector("#url-user-input");

console.log(imageInputBar);

const changeDisplayedImage = () => {};

const fireConfetti = () => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  });
};

// get colour from the image DOM Element
// check if image has loaded
// console.log what the colours are in the

triggerConfettiButton.addEventListener("click", fireConfetti);
imageInputBar.addEventListener("input", changeDisplayedImage);
