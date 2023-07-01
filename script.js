"use strict";

// Is a module
console.log("inside the module");

const fileInput = document.getElementById("fileUpload");
const dropInput = document.getElementById("fileDrop");

fileInput.addEventListener("change", handleChange, false);
fileInput.addEventListener("input", handleInput, false);

dropInput.addEventListener("dragenter", handleDragEnter, false);
dropInput.addEventListener("dragover", handleDragOver, false);
dropInput.addEventListener("drop", handleDrop, false);

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
  }
}

function handleInput() {
  console.log("Now getting input event");
}

// Both "change" and "input" appear to be called at the same time for file upload
// They do not get called again if you select the exact same file(s) additional times

function handleDragEnter(event) {
  event.stopPropagation();
  event.preventDefault();
  console.log("Drag enter happened");
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

  const dataTransfer = event.dataTransfer;
  const files = dataTransfer.files;
  console.log(files);
}
