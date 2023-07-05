console.log("The graph script was ran!");

// function testLoop() {
//   console.log("Test Loop!");
//   setTimeout(testLoop, 3_000);
// }

// testLoop();

const plot = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
const div = document.querySelector("#myplot");
div.append(plot);
