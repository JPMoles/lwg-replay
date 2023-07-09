console.log("The graph script was ran!");

// function testLoop() {
//   console.log("Test Loop!");
//   setTimeout(testLoop, 3_000);
// }

// testLoop();

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

const replayOutputInterval = setInterval(() => {
  // Check if the replay is over every 5 seconds
  if (window.replayStats && Object.keys(window.replayStats).length > 0) {
    if (window.replayStats["16275"]) {
      // Clear the interval
      // console.log("Clearing the interval checking for replay finishing!");
      // clearInterval(replayOutputInterval);
    }

    // Output the data in string form to a div
    // replayOutputDataDiv.innerText = JSON.stringify(window.replayStats);

    // Format data for graph
    // We want an array of objects, where each array is only data on one player ideally
    const playerOneData = [];
    for (const key in window.replayStats) {
      const player1 = window.replayStats[key][0]; // get player 1
      playerOneData.push(player1);
    }

    const playerTwoData = [];
    for (const key in window.replayStats) {
      const player2 = window.replayStats[key][1]; // get player 1
      playerTwoData.push(player2);
    }

    // Unused Gold Plot
    plot = Plot.plot({
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
    div.replaceChildren(plot);

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

    // Update build order

    // Player 1
    // window.replayStats[tickNumber][0]
    // Player 2
    // window.replayStats[tickNumber][1]

    let playerOneBuild = "";
    let playerTwoBuild = "";

    for (const tickNumber in window.replayStats) {
      const tickArray = window.replayStats[tickNumber];
      const p1 = tickArray[0].unitsCreated;
      const p2 = tickArray[1].unitsCreated;

      if (p1) {
        playerOneBuild += Object.keys(p1).reduce(
          (prev, curr) => prev + unitImage(curr) + ": " + p1[curr] + ", ",
          `${formatTime(Math.floor(tickNumber / TICKS_PER_SECOND))}: `
        );
        playerOneBuild += "<br>";
      }

      if (p2) {
        playerTwoBuild += Object.keys(p2).reduce(
          (prev, curr) => prev + unitImage(curr) + ": " + p2[curr] + ", ",
          `${formatTime(Math.floor(tickNumber / TICKS_PER_SECOND))}: `
        );
        playerTwoBuild += "<br>";
      }
    }

    buildOrderPlayerOneDiv.innerHTML = playerOneBuild;
    buildOrderPlayerTwoDiv.innerHTML = playerTwoBuild;
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
  return `<img src="imgs/${"Worker"}.png" />`;
}
