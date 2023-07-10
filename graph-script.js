console.log("The graph script was ran!");

const TICKS_PER_SECOND = 20;

const buildOrderPlayerOneDiv = document.getElementById("buildOrderP1");
const buildOrderPlayerTwoDiv = document.getElementById("buildOrderP2");
let lastTickChecked = 0;

let plot = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const div = document.querySelector("#unusedGoldPlot");
div.append(plot);

let plot2 = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const totalSupplyDiv = document.querySelector("#totalSupplyPlot");
totalSupplyDiv.append(plot2);

let plot3 = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const unitsLostDiv = document.querySelector("#unitsLostPlot");
unitsLostDiv.append(plot3);

let plot4 = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const workerSupplyDiv = document.querySelector("#workerSupplyPlot");
workerSupplyDiv.append(plot4);

let plot5 = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const armySupplyDiv = document.querySelector("#armySupplyPlot");
armySupplyDiv.append(plot5);

const replayOutputDataDiv = document.getElementById("replayOutputData");

const playerOneData = [];
const playerTwoData = [];
const playerOneBuildUnits = [];
let p1UnitsIndex = 0;
const playerTwoBuildUnits = [];
let p2UnitsIndex = 0;
let lastTickProcessed = -1;

const replayOutputInterval = setInterval(() => {
  // Check if the replay is over every 5 seconds
  if (window.replayStats && Object.keys(window.replayStats).length > 0) {
    if (window.replayStats["16275"]) {
      // Clear the interval
      // console.log("Clearing the interval checking for replay finishing!");
      // clearInterval(replayOutputInterval);
    }

    // Player 1
    // window.replayStats[tickNumber][0]
    // Player 2
    // window.replayStats[tickNumber][1]

    let statsTimer = performance.now();

    // Current game tick
    const currentTick = window.currentGameTick;

    for (let i = lastTickProcessed + 1; i <= currentTick; i++) {
      if (window.replayStats[i][0].number) playerOneData.push(window.replayStats[i][0]); // get player 1
      if (window.replayStats[i][1].number) playerTwoData.push(window.replayStats[i][1]); // get player 2
      if (window.replayStats[i][0].unitsCreated) playerOneBuildUnits.push(window.replayStats[i][0]); // get player 1
      if (window.replayStats[i][1].unitsCreated) playerTwoBuildUnits.push(window.replayStats[i][1]); // get player 2
    }
    lastTickProcessed = currentTick;

    console.log("Time to process all player data: ", performance.now() - statsTimer);

    statsTimer = performance.now();

    // Unused Gold Plot
    const unusedGoldPlot = Plot.plot({
      grid: true,
      color: { legend: true },
      y: {
        label: "Unused Gold",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(playerOneData, { x: "tick", y: "gold", stroke: "name" }),
        Plot.lineY(playerTwoData, { x: "tick", y: "gold", stroke: "name" }),
      ],
    });
    div.replaceChildren(unusedGoldPlot);

    const plotTimerOne = performance.now() - statsTimer;
    statsTimer = performance.now();

    // Total Supply Chart
    const totalSupplyPlot = Plot.plot({
      grid: true,
      color: { legend: true },
      y: {
        label: "Total Supply",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.line(playerOneData, { x: "tick", y: "totalSupply", stroke: "name" }),
        Plot.line(playerTwoData, { x: "tick", y: "totalSupply", stroke: "name" }),
      ],
    });
    totalSupplyDiv.replaceChildren(totalSupplyPlot);

    const plotTimerTwo = performance.now() - statsTimer;
    statsTimer = performance.now();

    // Units Killed Plot
    const unitsLostPlot = Plot.plot({
      grid: true,
      color: { legend: true },
      y: {
        label: "Units Lost",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.line(playerOneData, { x: "tick", y: "unitsLost", stroke: "name" }),
        Plot.line(playerTwoData, { x: "tick", y: "unitsLost", stroke: "name" }),
      ],
    });
    unitsLostDiv.replaceChildren(unitsLostPlot);

    const plotTimerThree = performance.now() - statsTimer;
    statsTimer = performance.now();

    // Workers Supply Plot
    const workerSupplyPlot = Plot.plot({
      grid: true,
      color: { legend: true },
      y: {
        label: "Worker Supply",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.line(playerOneData, { x: "tick", y: "workerSupply", stroke: "name" }),
        Plot.line(playerTwoData, { x: "tick", y: "workerSupply", stroke: "name" }),
      ],
    });
    workerSupplyDiv.replaceChildren(workerSupplyPlot);

    const plotTimerFour = performance.now() - statsTimer;
    statsTimer = performance.now();

    // Army Supply Plot
    const armySupplyPlot = Plot.plot({
      grid: true,
      color: { legend: true },
      y: {
        label: "Army Units",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.line(playerOneData, { x: "tick", y: "armySupply", stroke: "name" }),
        Plot.line(playerTwoData, { x: "tick", y: "armySupply", stroke: "name" }),
      ],
    });
    armySupplyDiv.replaceChildren(armySupplyPlot);

    const plotTimerFive = performance.now() - statsTimer;
    statsTimer = performance.now();

    console.log(
      "Individual plots: ",
      plotTimerOne,
      plotTimerTwo,
      plotTimerThree,
      plotTimerFour,
      plotTimerFive
    );
    // console.log("Time to process plots: ", performance.now() - statsTimer);

    statsTimer = performance.now();

    // Update build order
    let playerOneBuild = "";
    let playerTwoBuild = "";

    for (let i = p1UnitsIndex; i < playerOneBuildUnits.length; i++) {
      // unitsCreated has to contain something to be here
      const unitsCreated = playerOneBuildUnits[i].unitsCreated;
      if (!unitsCreated) console.log(playerOneBuildUnits[i]);
      playerOneBuild += Object.keys(unitsCreated).reduce(
        (prev, curr) => prev + unitImage(curr) + ": " + unitsCreated[curr] + ", ",
        `${formatTime(Math.floor(playerOneBuildUnits[i].tick / TICKS_PER_SECOND))}: `
      );
      playerOneBuild += "<br>";
    }
    // Set next index to length of current array
    p1UnitsIndex = playerOneBuildUnits.length;

    for (let i = p2UnitsIndex; i < playerTwoBuildUnits.length; i++) {
      const unitsCreated = playerTwoBuildUnits[i].unitsCreated;
      if (!unitsCreated) console.log(playerTwoBuildUnits[i]);
      playerTwoBuild += Object.keys(unitsCreated).reduce(
        (prev, curr) => prev + unitImage(curr) + ": " + unitsCreated[curr] + ", ",
        `${formatTime(Math.floor(playerTwoBuildUnits[i].tick / TICKS_PER_SECOND))}: `
      );
      playerTwoBuild += "<br>";
    }
    // Set next index to length of current array
    p2UnitsIndex = playerTwoBuildUnits.length;

    // Append both players units built in last 5 seconds
    buildOrderPlayerOneDiv.innerHTML += playerOneBuild;
    buildOrderPlayerTwoDiv.innerHTML += playerTwoBuild;

    console.log("Time to render build order: ", performance.now() - statsTimer);
  }
}, 5_000);

function formatTime(sec) {
  var sec_num = sec;
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 1) {
    return minutes + ":" + seconds;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  return hours + ":" + minutes + ":" + seconds;
}

function unitImage(unit) {
  return `<img src="imgs/${unit}.png" width="32" height="32" /> (${unit})`;
}
