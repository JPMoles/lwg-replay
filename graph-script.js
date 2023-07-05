console.log("The graph script was ran!");

// function testLoop() {
//   console.log("Test Loop!");
//   setTimeout(testLoop, 3_000);
// }

// testLoop();

let plot = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const div = document.querySelector("#unusedGoldPlot");
div.append(plot);

let plot2 = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const totalSupplyDiv = document.querySelector("#totalSupplyPlot");
totalSupplyDiv.append(plot2);

const replayOutputDataDiv = document.getElementById("replayOutputData");

const replayOutputInterval = setInterval(() => {
  // Check if the replay is over every 5 seconds
  if (window.replayStats) {
    if (window.replayStats["16275"]) {
      // Clear the interval
      console.log("Clearing the interval checking for replay finishing!");
      clearInterval(replayOutputInterval);
    }

    // Output the data in string form to a div
    replayOutputDataDiv.innerText = JSON.stringify(window.replayStats);

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
  }
}, 5_000);
