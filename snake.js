// board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

window.onload = () => {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); // Used for drawing on the board

  update();
};

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);
}
