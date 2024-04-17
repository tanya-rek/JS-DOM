/*
// 1. Create a page that displays a numbered list of tracks:

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const targetElement = document.querySelector(".trackList");

const tracksList = document.createElement("ul");
const main = document.querySelector("main");

main.append(tracksList);

playList.forEach((song, index) => {
  const listItem = document.createElement("li");
  listItem.innerText = `${index + 1}. ${song.author} - ${song.song}`;
  tracksList.append(listItem);
});
*/

// 2. Create an html page with OPEN button and a modal box. The modal box should
// have text and a CLOSE button. The modal box is not displayed from the beginning.
// It appears when clicking the OPEN button and disappears when clicking CLOSE.
/*
let modal = document.querySelector(".modalWindow");

let openModal = document.querySelector(".btnOpenModal");

let closeModal = document.querySelector(".btnCloseModal");

openModal.onclick = function () {
  modal.style.display = "block";
  openModal.style.display = "none";
};

closeModal.onclick = function () {
  modal.style.display = "none";
  openModal.style.display = "block";
};
*/
// 3. Create an html page with streetlights and a button that switches the color
//to the next one.

/*
let switchingTheLights = document.querySelector(".switchingLights");

let redLight = document.querySelector(".colorRed");
let yellowLight = document.querySelector(".colorYellow");
let greenLight = document.querySelector(".colorGreen");

let counter = -1;

switchingTheLights.onclick = function () {
  if (counter >= 2) {
    counter = 0;
  } else {
    counter++;
  }

  switch (counter) {
    case 0:
      redLight.classList.remove("white");
      redLight.classList.add("red");
      greenLight.classList.remove("green");
      greenLight.classList.add("white");
      break;
    case 1:
      redLight.classList.remove("red");
      redLight.classList.add("white");
      yellowLight.classList.remove("white");
      yellowLight.classList.add("yellow");
      break;
    case 2:
      yellowLight.classList.remove("yellow");
      yellowLight.classList.add("white");
      greenLight.classList.remove("white");
      greenLight.classList.add("green");
      break;
  }
};
*/
