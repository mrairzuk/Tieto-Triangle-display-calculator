function Board(width, height) {
  this.width = width;
  this.height = height;
  this.chartBoard = [];

  for (var i = 0; i < this.width; i++) {
    const row = [];
    this.chartBoard.push(row);
    for (var j = 0; j < this.height; j++) {
      const col = {};
      row.push(col);
    }
  }
}

Board.prototype.drawBoard = function () {
  for (var i = 0; i < this.width; i++) {
    for (var j = 0; j < this.height; j++) {
      ctx.beginPath();
      ctx.strokeStyle = "gray";
      ctx.strokeRect(j * 40, i * 40, 40, 40);
      ctx.closePath();
    }
  }
};

let board = new Board(1000, 1000);

const canvas = document.getElementById("TriangleDrawing");
const ctx = canvas.getContext("2d");
const inputA = document.getElementById("side1");
const inputB = document.getElementById("side2");
const inputC = document.getElementById("side3");


function GetTriangleType() {
  var sideA = Number(inputA.value);
  var sideB = Number(inputB.value);
  var sideC = Number(inputC.value);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  board.drawBoard();

  if (((sideA + sideB) > sideC) && ((sideA + sideC) > sideB) && ((sideB + sideC) > sideA)) {
    console.log("exist")
  } else {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle="red";
    ctx.textAlign = "center";
    ctx.fillText("Triangle with this sides does not exist!", canvas.width/2, canvas.height/8*7);
  }
}



board.drawBoard();


