function getElementId(id1, id2) {
  let x = document.getElementById(id1).value;
  let y = document.getElementById(id2).value;
  return { x, y };
}

function setOutput(id, result) {
  let output = document.getElementById(id);
  output.innerText = result;
}

function triangleCalculate() {
  let obj = getElementId("triangle-base", "triangle-height");
  let { x, y } = obj;
  setOutput("output", 0.5 * x * y);
}

function rectangleCalculate() {
  let obj = getElementId("rectangle-width", "rectangle-length");
  let { x, y } = obj;
  setOutput("output", 0.5 * x * y);
}
function parallelismCalculate() {
  let obj = getElementId("parallelism-base", "parallelism-height");
  let { x, y } = obj;
  setOutput("output", x * y);
}
function rhombusCalculate() {
  let obj = getElementId("rhombus-d1", "rhombus-d2");
  let { x, y } = obj;
  setOutput("output", x * y);
}
function pentagonCalculate() {
  let obj = getElementId("pentagon1", "pentagon2");
  let { x, y } = obj;
  setOutput("output", x * y);
}
function ellipseCalculate() {
  let obj = getElementId("ellipse1", "ellipse2");
  let { x, y } = obj;
  setOutput("output", "π" + x * y);
}
