let whitePieces = [];
let blackPieces = [];
let soldiers = [];
let walls = [];
let bishops = [];
let horses = [];
let kings = [];
let queens = [];

export function addPieces() {
  let iconpack = "1";
  whitePieces = [];
  blackPieces = [];
  let elements = document.getElementsByClassName("el");
  let piece = document.createElement("div");
  if (iconpack == "1") {
    for (let e of elements) {
      piece = document.createElement("div");
      piece.classList.add("piece");
      piece.draggable = "true";
      piece.value = {};
      piece.value.firstTime = true;
      piece.style.width = "70%";
      switch (e.value.letter + e.value.number) {
        //WHITE PIECES
        case "a2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "b2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "c2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "d2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "e2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "f2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "g2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "h2":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "a1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW.png')";
          whitePieces.push(piece);
          walls.push(piece);
          break;
        case "b1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW.png')";
          whitePieces.push(piece);
          horses.push(piece);
          break;
        case "c1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW.png')";
          whitePieces.push(piece);
          bishops.push(piece);
          break;
        case "d1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenW.png')";
          whitePieces.push(piece);
          queens.push(piece);
          break;
        case "e1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingW.png')";
          whitePieces.push(piece);
          kings.push(piece);

          break;
        case "f1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW.png')";
          whitePieces.push(piece);
          bishops.push(piece);

          break;
        case "g1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW.png')";
          whitePieces.push(piece);
          horses.push(piece);

          break;
        case "h1":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW.png')";
          whitePieces.push(piece);
          walls.push(piece);

          break;
        //BLACK PIECES
        case "a7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "b7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "c7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "d7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "e7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "f7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "g7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "h7":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          soldiers.push(piece)
          break;
        case "a8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL.png')";
          blackPieces.push(piece);
          walls.push(piece);
          break;
        case "b8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL.png')";
          blackPieces.push(piece);
          horses.push(piece);
          break;
        case "c8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL.png')";
          blackPieces.push(piece);
          bishops.push(piece);
          break;
        case "d8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenBL.png')";
          blackPieces.push(piece);
          queens.push(piece);
          break;
        case "e8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingBL.png')";
          blackPieces.push(piece);
          kings.push(piece);
          break;
        case "f8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL.png')";
          blackPieces.push(piece);
          bishops.push(piece);
          break;
        case "g8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL.png')";
          blackPieces.push(piece);
          horses.push(piece);
          break;
        case "h8":
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL.png')";
          blackPieces.push(piece);
          walls.push(piece);
          break;
      }
    }
  }
  PIECES = {
    whitePieces: whitePieces,
    blackPieces: blackPieces,
    soldiers: soldiers,
    walls: walls,
    kings: kings,
    queens: queens,
    bishops: bishops,
    horses: horses,
  };
}

export let PIECES = {
  whitePieces: whitePieces,
  blackPieces: blackPieces,
  soldiers: soldiers,
  walls: walls,
  kings: kings,
  queens: queens,
  bishops: bishops,
  horses: horses,
};
