const canvas = document.getElementById("TriangleDrawing");
const ctx = canvas.getContext("2d");
const inputA = document.getElementById("side1");
const inputB = document.getElementById("side2");
const inputC = document.getElementById("side3");



function drawBoard(width, height, sqw, sqh, ctx) { //Draws board in canvas depending on input
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      ctx.beginPath();
      ctx.strokeStyle = "gray";      
      ctx.lineWidth = 1;
      ctx.strokeRect(j * sqw, i * sqh, sqw, sqh);
      ctx.closePath();
    }
  }
}

drawBoard(18, 10, 40, 40, ctx); //Draws 18x10 squares board with size 40x40px in canvas context

function GetTriangleType() {
  //Converts values from inputs to numbers
  var sideA = Number(inputA.value);
  var sideB = Number(inputB.value);
  var sideC = Number(inputC.value);

  //Checks for correct input (input numbers must be greater than 0)
  if (sideA <= 0 || !(Number.isInteger(sideA))) {
    inputA.setCustomValidity("Please input number that is greater than 0 and is whole number");
    return inputA.reportValidity();
  }
  if (sideB <= 0 || !Number.isInteger(sideB)) {
    inputB.setCustomValidity("Please input number that is greater than 0 and is whole number");
    return inputB.reportValidity();
  }
  if (sideC <= 0 || !Number.isInteger(sideC)) {
    inputC.setCustomValidity("Please input number that is greater than 0 and is whole number");
    return inputC.reportValidity();
  }
  //Redrawing the board (to clear the text/triangle from previos submits)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoard(18, 10, 40, 40, ctx);

  //Checks if triangle with this sides exist
  if (((sideA + sideB) > sideC) && ((sideA + sideC) > sideB) && ((sideB + sideC) > sideA)) {
    WriteTypeOfTriangle(sideA, sideB, sideC);
    DrawTriangle(sideA, sideB, sideC);
  } else { //if triangle does not exist
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Triangle with this sides does not exist!", canvas.width / 2, canvas.height / 8 * 7);
  }
}

function WriteTypeOfTriangle(sideA, sideB, sideC) {
  //Setting style of text
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  //Check if is equilateral
  if (sideA == sideB && sideB == sideC) {
    ctx.fillText("Triangle is equilateral", canvas.width / 2, canvas.height / 8 * 7);
  } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
    ctx.fillText("Triangle is isosceles", canvas.width / 2, canvas.height / 8 * 7);
  } else {
    ctx.fillText("Triangle is scalene", canvas.width / 2, canvas.height / 8 * 7);
  }
}

function DrawTriangle(sideA, sideB, sideC) {
  var p = (sideA + sideB + sideC)/2;
  var Area = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
  var height = 2 * Area/sideC;
  var coefficient = (canvas.width-50)/sideC/4;

  var A = [0, 0];
  var B = [0, sideA];
  var C = [];

  C[1] = (sideA * sideA + sideB * sideB - sideC * sideC)/ (2*sideA);
  C[0] = Math.sqrt(sideB * sideB - C[1] * C[1]);

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000";
  //ctx.moveTo(A[0] + 160, A[1] + 80);
  //ctx.lineTo(B[0] + 160, B[1] * coefficient + 80);
  //ctx.lineTo(C[0] * coefficient + 160, C[1] * coefficient + 80);
  //ctx.lineTo(A[0] + 160, A[1] + 80);

  ctx.moveTo(A[1] + 240, A[0] + 40);
  ctx.lineTo(B[1] * coefficient + 240, B[0] + 40);
  ctx.lineTo(C[1] * coefficient + 240, C[0] * coefficient + 40);
  ctx.lineTo( A[1] + 240, A[0] + 40);

  ctx.stroke();
}