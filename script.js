"use strict";

// Is a module
console.log("inside the module");

const fileInput = document.getElementById("fileUpload");
const dropInput = document.getElementById("fileDrop");
const fileContent = document.getElementById("fileContent");

fileInput.addEventListener("change", handleChange, false);
fileInput.addEventListener("input", handleInput, false);

dropInput.addEventListener("dragenter", handleDragEnter, false);
dropInput.addEventListener("dragover", handleDragOver, false);
dropInput.addEventListener("drop", handleDrop, false);
dropInput.addEventListener("dragleave", handleDragLeave, false);
dropInput.addEventListener("click", handleClick, false);
dropInput.addEventListener("mousedown", handleMouseDown, false);
dropInput.addEventListener("mouseup", handleMouseUp, false);

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

      for (const key in data) {
        const p = document.createElement("p");
        const value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        p.innerText = key + ": " + value;
        fileContent.appendChild(p);
      }
    } else {
      console.log("It is not a LWG replay!");
    }
  }
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
