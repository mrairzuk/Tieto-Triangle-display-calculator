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

function init() {
  const canvas = document.getElementById("TriangleDrawing");
  const ctx = canvas.getContext("2d");
  drawBoard(18, 10, 40, 40, ctx);
}


function MakeTriangle() {
  const canvas = document.getElementById("TriangleDrawing");
  const ctx = canvas.getContext("2d");
  const inputA = document.getElementById("side1");
  const inputB = document.getElementById("side2");
  const inputC = document.getElementById("side3");
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
  var triangleType = GetTypeOfTriangle(sideA, sideB, sideC)
  WriteTypeOfTriangle(triangleType, ctx, canvas);
  if (triangleType != "impossible") {
    DrawTriangle(sideA, sideB, sideC, ctx, canvas);
  }
}


  function GetTypeOfTriangle(sideA, sideB, sideC) {
    if (((sideA + sideB) > sideC) && ((sideA + sideC) > sideB) && ((sideB + sideC) > sideA)) { //Is triangle possible
      if (sideA == sideB && sideB == sideC) {
        return "equilateral";
      } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
        return "isosceles";
      } else {
        return "scalene";
      }
    } else {
      return "impossible";
    }
  }

function WriteTypeOfTriangle(triangleType, ctx, canvas) {
  //Setting style of text
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  //writing text
  if (triangleType == "equilateral") {
    ctx.fillText("Triangle is equilateral", canvas.width / 2, canvas.height / 8 * 7);
  } else if (triangleType == "isosceles") {
    ctx.fillText("Triangle is isosceles", canvas.width / 2, canvas.height / 8 * 7);
  } else if (triangleType == "scalene") {
    ctx.fillText("Triangle is scalene", canvas.width / 2, canvas.height / 8 * 7);
  } else {
    ctx.fillStyle = "red";
    ctx.fillText("Triangle with this sides does not exist!", canvas.width / 2, canvas.height / 8 * 7);
  }
}


function DrawTriangle(sideA, sideB, sideC, ctx, canvas) {
  var p = (sideA + sideB + sideC) / 2;
  var Area = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
  var height = 2 * Area / sideC;
  var coefficient = (canvas.width - 50) / sideC / 4;

  var A = [0, 0];
  var B = [0, sideA];
  var C = [];

  C[1] = (sideA * sideA + sideB * sideB - sideC * sideC) / (2 * sideA);
  C[0] = Math.sqrt(sideB * sideB - C[1] * C[1]);

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000";

  ctx.moveTo(A[1] + 240, A[0] + 40);
  ctx.lineTo(B[1] * coefficient + 240, B[0] + 40);
  ctx.lineTo(C[1] * coefficient + 240, C[0] * coefficient + 40);
  ctx.lineTo(A[1] + 240, A[0] + 40);

  ctx.stroke();
}

exports.GetTypeOfTriangle = GetTypeOfTriangle;