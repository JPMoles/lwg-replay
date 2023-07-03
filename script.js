"use strict";

// Is a module
console.log("inside the module");

const fileInput = document.getElementById("fileUpload");
const dropInput = document.getElementById("fileDrop");
const fileContent = document.getElementById("fileContent");
const mapImages = document.getElementById("mapImages");

fileInput.addEventListener("change", handleChange, false);
fileInput.addEventListener("input", handleInput, false);

dropInput.addEventListener("dragenter", handleDragEnter, false);
dropInput.addEventListener("dragover", handleDragOver, false);
dropInput.addEventListener("drop", handleDrop, false);
dropInput.addEventListener("dragleave", handleDragLeave, false);
dropInput.addEventListener("click", handleClick, false);
dropInput.addEventListener("mousedown", handleMouseDown, false);
dropInput.addEventListener("mouseup", handleMouseUp, false);

const TICKS_PER_SECOND = 20;

const lwgReplayKeys = [
  "map",
  "mapVersion",
  "gameVersion",
  "players",
  "aiRandomizer",
  "ticksCounter",
  "orders",
  "messages",
  "playerLefts",
];

async function handleChange(event) {
  // event.target.files is same as fileInput.files because it's the target
  const fileList = fileInput.files;
  console.log(fileList);
  if (fileList.length > 0) {
    const bufferSliced = fileList[0].slice(0, 50); // slice([start[, end[, contentType]])
    const bufferStream = fileList[0].stream(); // Transforms File into ReadableStream to read File contents
    const bufferText = await fileList[0].text(); // Transforms File into a stream and reads it to completion. It returns a promise that resolves with a string (text)
    const bufferArray = await fileList[0].text(); // Transforms File into a stream and reads it to completion. It returns a promise that resolves with an ArrayBuffer
    // console.log(bufferText);

    const data = JSON.parse(await fileList[0].text());
    console.log("The json object: ");
    console.log(data);

    // Create paragraph elements for each key value pair in the json object
    for (const key in data) {
      const value = data[key];
      console.log("Key: ", key);
      console.log("Value: ", value);
    }

    if (isLWGReplay(data)) {
      // Process and print info
      console.log("It is a LWG replay!");

      // "map",
      // "mapVersion",
      // "gameVersion",
      // "players",
      // "aiRandomizer",
      // "ticksCounter",
      // "orders",
      // "messages",
      // "playerLefts",

      const playerList = [];

      for (const key of lwgReplayKeys) {
        const value = data[key];
        switch (key) {
          case "map":
            const h2 = document.createElement("h2");
            h2.innerText = "Map: " + value;
            fileContent.appendChild(h2);
            break;
          case "mapVersion":
            const mapParagraph = document.createElement("p");
            mapParagraph.innerText = "Map Version: " + value;
            fileContent.appendChild(mapParagraph);
            break;
          case "gameVersion":
            const gameVersionParagraph = document.createElement("p");
            gameVersionParagraph.innerText = "Game Version: " + value;
            fileContent.appendChild(gameVersionParagraph);
            break;
          case "players":
            // Add players to full playerList
            value.map((player) => playerList.push(player));

            const h3 = document.createElement("h3");
            // TODO: Create title based off map gamemode: 1v1, 2v2, 3v3, ect.
            h3.innerText = value[0].name + " v " + value[1].name;
            fileContent.appendChild(h3);
            break;
          case "aiRandomizer":
            const aiSeedParagraph = document.createElement("p");
            aiSeedParagraph.innerText = "AI Seed: " + value;
            fileContent.appendChild(aiSeedParagraph);
            break;
          case "ticksCounter":
            // TODO: Calculate game length -> ticks / ticks per second = seconds in the game -> format in terms of hours:minutes:seconds
            const gameLengthParagraph = document.createElement("p");
            gameLengthParagraph.innerText =
              "Game Length: " + formatTime(Math.ceil(value / TICKS_PER_SECOND));
            fileContent.appendChild(gameLengthParagraph);
            break;
          case "orders":
            break;
          case "messages":
            const messagesTextArea = document.createElement("p");
            const messages =
              "<b>Chat Messages:</b> <br>" +
              Object.keys(value).reduce((prev, curr) => prev + " " + value[curr] + "<br>", "");
            messagesTextArea.innerHTML = messages;
            fileContent.appendChild(messagesTextArea);
            break;
          case "playerLefts":
            console.log(playerList);
            const winner = document.createElement("h3");
            // TODO: List out all winners: 2v2, 3v3, ect.
            // playersLeft gives the team that won
            const winningTeam = Object.keys(value).reduce((prev, curr) => prev + value[curr], "");
            console.log("Winning team: ", winningTeam);
            winner.innerHTML =
              "Winning Team: " +
              Object.keys(value).reduce((prev, curr) => prev + " " + value[curr], "") +
              "<br>" +
              "Winning Players: ";
            fileContent.appendChild(winner);
            break;
          default:
            const p = document.createElement("p");
            p.innerText = key + ": " + value;
            fileContent.appendChild(p);
            break;
        }
      }
    } else {
      console.log("It is not a LWG replay!");
    }
  }
}

function formatTime(sec) {
  var sec_num = sec;
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
}

function isLWGReplay(obj) {
  for (const key of lwgReplayKeys) {
    if (!Object.hasOwn(obj, key)) return false;
  }

  return true;
}

function handleInput() {
  console.log("Now getting input event");
}

// Both "change" and "input" appear to be called at the same time for file upload
// They do not get called again if you select the exact same file(s) additional times

function setDefaultDropStyles() {
  fileDrop.style.backgroundColor = "lightblue";
  fileDrop.style.boxShadow = "";
}

function setDropStyles() {
  fileDrop.style.backgroundColor = "#88daf4";
  fileDrop.style.boxShadow = "inset 0 0 10px #444";
}

function handleDragEnter(event) {
  event.stopPropagation();
  event.preventDefault();
  console.log("Drag enter happened");

  setDropStyles();
}

function handleDragOver(event) {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
  console.log("Drag over happened");
}

function handleDrop(event) {
  event.stopPropagation();
  event.preventDefault();
  console.log("Drop happened");

  setDefaultDropStyles();

  const dataTransfer = event.dataTransfer;
  const files = dataTransfer.files;
  console.log(files);
}

function handleDragLeave(event) {
  event.stopPropagation();
  event.preventDefault();

  setDefaultDropStyles();
}

function handleClick(event) {
  fileInput.click();
}

function handleMouseDown(event) {
  console.log("mouse down");
  setDropStyles();
}

function handleMouseUp(event) {
  console.log("mouse up");
  setDefaultDropStyles();
}

// Create a WebSocket with the littlewargame server to get map data

const socket = new WebSocket("wss://sockets.littlewargame.com:8083");

socket.addEventListener("message", (event) => {
  if (event.data.startsWith("maps-list")) {
    // Maps are paginated
    // console.log(event.data);

    const splitMsg = event.data.split("<<$");

    const page = parseInt(splitMsg[1]) + 1;
    console.log("Current page: ", page);
    const totalPages = parseInt(splitMsg[2]);
    console.log("Total pages: ", totalPages);
    const maps = [];

    for (let i = 3; i < splitMsg.length; i += 6) {
      maps.push({
        name: splitMsg[i],
        description: splitMsg[i + 1],
        img: splitMsg[i + 2],
        countPlayers: splitMsg[i + 3],
        mode: splitMsg[i + 4],
        popularity: splitMsg[i + 5],
      });
    }

    for (let map of maps) {
      const img = document.createElement("img");
      img.src = map.img;
      mapImages.appendChild(img);
    }

    console.log(maps);
  }
  // console.log("Message from server: ", event);
});

socket.addEventListener("open", (event) => {
  console.log("sending message");
  setTimeout(() => {
    socket.send("login-guest<<$dummy-string");
  }, 5000);
  setTimeout(() => {
    socket.send("game-version<<$4.9.3");
  }, 10000);
  setTimeout(() => {
    socket.send("get-custom-maps<<$0<<$<<$*<<$0<<$popularity");
    console.log("sent the final message :)");
  }, 15000);
});
