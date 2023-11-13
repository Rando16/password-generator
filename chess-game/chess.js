const chessboard = document.getElementById("chessboard");

const startPieces = [
  "rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook",
  "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn",
  "rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook",
];

function createChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");

      if ((row + col) % 2 === 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }

      chessboard.appendChild(square);

      const pieceName = startPieces[row * 8 + col];

      if (pieceName) {
        const piece = document.createElement('div');
        piece.className = 'piece';
        piece.innerHTML = piecesSVG[pieceName];

        square.appendChild(piece);

        if (row <= 2) {
          piece.classList.add('blackpiece');
        }

        if (row >= 6) {
          piece.classList.add('whitepiece');
        }
        
piece.id = pieceName + '-' + row + '-' + col;
piece.draggable = true;
}
}
}
}

createChessboard();



document.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
});


document.addEventListener('dragover', (e) => {
  e.preventDefault();
});


document.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const sourcePiece = document.getElementById(data);
  const targetSquare = e.target;

  if (targetSquare.classList.contains('square') && !targetSquare.querySelector('.piece')) {
    targetSquare.appendChild(sourcePiece);
  }
});
