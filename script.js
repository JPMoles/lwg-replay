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
            // Print out orders done by player 1:
            const playerOneOrders = Object.keys(value)
              .map((tickNumber) => {
                const tickOrders = value[tickNumber];
                const playerOneOrder = tickOrders.filter(
                  (order) => order.length > 0 && order[0] === 1
                );
                // console.log(playerOneOrder);
                if (playerOneOrder.length > 0 && playerOneOrder[0]) return playerOneOrder[0];
                return null;
              })
              .filter((value) => value !== null)
              .reduce((prev, order) => {
                if ((order[2] < 7 || order[2] > 15) && commands[order[2]])
                  return prev + commands[order[2]].commandName + "<br>";
                else return prev + " ";
              }, "");
            const ordersParagraph = document.createElement("p");
            ordersParagraph.innerHTML = "Orders: <br>" + playerOneOrders;
            fileContent.appendChild(ordersParagraph);

            // Print out orders done by player 2:

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
            console.log("Player List: ", playerList);
            const winner = document.createElement("h3");
            // TODO: List out all winners: 2v2, 3v3, ect.
            // playersLeft gives the team that won
            const winningTeam = Object.keys(value).reduce((prev, curr) => prev + value[curr], "");
            const winningPlayers = playerList
              .filter((p) => p.team === parseInt(winningTeam))
              .reduce((prev, curr) => prev + " " + curr.name + ", ", "");
            console.log("Winning team: ", winningTeam);
            console.log("Winning players: ", winningPlayers);
            winner.innerHTML =
              "Winning Team: " +
              Object.keys(value).reduce((prev, curr) => prev + " " + value[curr], "") +
              "<br>" +
              "Winning Players: " +
              winningPlayers;
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

const commands = [
  { commandName: "Train Worker", number: 0 },
  { commandName: "Train Soldier", number: 1 },
  { commandName: "Train Archer", number: 2 },
  { commandName: "Build Castle", number: 3 },
  { commandName: "Build Barracks", number: 4 },
  { commandName: "Build Watchtower", number: 5 },
  { commandName: "Build House", number: 6 },
  { commandName: "Stop", number: 7 },
  { commandName: "Hold Position", number: 8 },
  { commandName: "Attack", number: 9 },
  { commandName: "Cancel", number: 10 },
  { commandName: "Move", number: 11 },
  { commandName: "Moveto", number: 12 },
  { commandName: "Mine", number: 13 },
  { commandName: "Repair", number: 14 },
  { commandName: "AMove", number: 15 },
  { commandName: "Makebuilding", number: 16 },
  { commandName: "Train Mage", number: 17 },
  { commandName: "Train Priest", number: 18 },
  { commandName: "Build Mages Guild", number: 19 },
  { commandName: "Flamestrike", number: 20 },
  { commandName: "Construct Catapult", number: 21 },
  { commandName: "Build Workshop", number: 22 },
  { commandName: "Build Forge", number: 23 },
  { commandName: "Basic Buildings", number: 24 },
  { commandName: "Human Buildings", number: 25 },
  { commandName: "Beast Buildings", number: 26 },
  { commandName: "Mechancial Buildings", number: 27 },
  { commandName: "Buildings", number: 28 },
  { commandName: "Buildings", number: 29 },
  { commandName: "Attack Upgrade", number: 30 },
  { commandName: "Armor Upgrade", number: 31 },
  { commandName: "Heal", number: 32 },
  { commandName: "Research Fireball", number: 33 },
  { commandName: "Research Slow Field", number: 34 },
  { commandName: "Research Heal", number: 35 },
  { commandName: "Upgrade To Fortress", number: 36 },
  { commandName: "Research Detection", number: 37 },
  { commandName: "Build Dragons Lair", number: 38 },
  { commandName: "Train Dragon", number: 39 },
  { commandName: "Beast Attack Upgrade", number: 40 },
  { commandName: "Beast Defense Upgrade", number: 41 },
  { commandName: "Train Wolf", number: 42 },
  { commandName: "Build Wolves Den", number: 43 },
  { commandName: "Build Animal Testing Lab", number: 44 },
  { commandName: "Load in", number: 45 },
  { commandName: "Unload", number: 46 },
  { commandName: "Build Advanced Workshop", number: 47 },
  { commandName: "Test building", number: 48 },
  { commandName: "Construct Airship", number: 49 },
  { commandName: "Tower Upgrade", number: 50 },
  { commandName: "Direct Unload", number: 51 },
  { commandName: "Attack Ground", number: 52 },
  { commandName: "Smash", number: 53 },
  { commandName: "Speed Upgrade", number: 54 },
  { commandName: "Beast Speed Upgrade", number: 55 },
  { commandName: "Upgrade To Werewolves Den", number: 56 },
  { commandName: "Train Werewolf", number: 57 },
  { commandName: "Construct Ballista", number: 58 },
  { commandName: "Mech Attack Upgrade", number: 59 },
  { commandName: "Mech Armor Upgrade", number: 60 },
  { commandName: "Mech Speed Upgrade", number: 61 },
  { commandName: "Ballista Black Powder", number: 62 },
  { commandName: "Fireball", number: 63 },
  { commandName: "Research Shockwave", number: 64 },
  { commandName: "Back", number: 65 },
  { commandName: "Back", number: 66 },
  { commandName: "Back", number: 67 },
  { commandName: "Back", number: 68 },
  { commandName: "Back", number: 69 },
  { commandName: "Back", number: 70 },
  { commandName: "Back", number: 71 },
  { commandName: "Back", number: 72 },
  { commandName: "Research Archer Range", number: 73 },
  { commandName: "Beast Range Upgrade", number: 74 },
  { commandName: "Mech Range Upgrade", number: 75 },
  { commandName: "Dmg Buff", number: 76 },
  { commandName: "Invisibility", number: 77 },
  { commandName: "Summon Skeleton", number: 78 },
  { commandName: "Build Church", number: 79 },
  { commandName: "Research Invisibility", number: 80 },
  { commandName: "Research Summon Skeleton", number: 81 },
  { commandName: "Research Summon Healing Ward", number: 82 },
  { commandName: "Airship Telescope Extension", number: 83 },
  { commandName: "Dance", number: 84 },
  { commandName: "Dance2", number: 85 },
  { commandName: "Summon Healing Ward", number: 86 },
  { commandName: "Slow Field", number: 87 },
  { commandName: "Train Bird", number: 88 },
  { commandName: "Fire", number: 89 },
  { commandName: "Teleport", number: 90 },
  { commandName: "Train Snake", number: 91 },
  { commandName: "Flash", number: 92 },
  { commandName: "Research Shroud", number: 93 },
  { commandName: "Shroud", number: 94 },
  { commandName: "Train Raider", number: 95 },
  { commandName: "Build Snake Charmer", number: 96 },
  { commandName: "Build Armory", number: 97 },
  { commandName: "Construct Gatling Gun", number: 98 },
  { commandName: "Drop Caltrops", number: 99 },
  { commandName: "Research Spoked Wheel", number: 100 },
  { commandName: "Research Bird Detection", number: 101 },
  { commandName: "Construct Gyrocraft", number: 102 },
  { commandName: "Build Mill", number: 103 },
  { commandName: "Sprint", number: 104 },
  { commandName: "Research Wolf Sprint", number: 105 },
  { commandName: "Explosive Shot", number: 106 },
];
