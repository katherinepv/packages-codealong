import "./style.scss";
import confetti from "canvas-confetti";
import ColorThief from "colorthief";

const colorThief = new ColorThief();

const triggerConfettiButton = document.querySelector(".confetti-button");
const dogImage = document.querySelector("#image");
const imageInputBar = document.querySelector("#url-user-input");

const handleUrlInput = (event) => {
  dogImage.src = event.target.value;
};
console.log(handleUrlInput);

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

const onImageLoad = () => {
  const color = colorThief.getColor(dogImage);
  const body = document.querySelector("body");

  body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
};

// get colour from the image DOM Element
// check if image has loaded
// if it has, get the colour
// otherwise tell it to get the colour once it's loaded the image
// console.log what the colours are in the console

if (dogImage.complete) {
  onImageLoad();
  fireConfetti();
} else {
  dogImage.addEventListener("load", onImageLoad);
  dogImage.addEventListener("load", fireConfetti);
}

//if the image has been successfully downloaded, run the function right away,
//otherwise, wait for the "load" event.

imageInputBar.addEventListener("input", handleUrlInput);

triggerConfettiButton.addEventListener("click", fireConfetti);
