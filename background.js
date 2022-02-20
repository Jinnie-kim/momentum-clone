const images = ["background1.png", "background2.jpeg", "background3.jpeg", "background4.jpeg", "background5.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement('img');

bgImage.src = `./assets/${chosenImage}`;

document.body.appendChild(bgImage);

