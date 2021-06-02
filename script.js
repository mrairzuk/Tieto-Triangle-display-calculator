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
  
  Board.prototype.drawBoard = function() {
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
  const sideA = document.getElementById("side1");
  const sideB = document.getElementById("side2");
  const sideC = document.getElementById("side3");

  
  board.drawBoard();


