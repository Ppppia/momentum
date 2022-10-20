const images = [
  "0.jpg",
  "1.jpeg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];

function randomImage() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.src = `img/${chosenImage}`;

  document.body.appendChild(bgImage);
  bgImage.id = "background";
}

randomImage();
setInterval(randomImage, 10000);
