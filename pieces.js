let whitePieces = [];
let blackPieces = [];

export function addPieces() {
  let iconpack = "1";
  whitePieces = [];
  blackPieces = [];
  let elements = document.getElementsByClassName("el");
  let piece = document.createElement("div");
  if (iconpack == "1") {
    for (let e of elements) {
      switch (e.value.letter + e.value.number) {
        //WHITE PIECES
        case "a2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "b2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "c2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "d2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "e2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "f2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "g2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "h2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          whitePieces.push(piece);
          break;
        case "a1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW.png')";
          whitePieces.push(piece);
          break;
        case "b1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW.png')";
          whitePieces.push(piece);
          break;
        case "c1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW.png')";
          whitePieces.push(piece);
          break;
        case "d1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenW.png')";
          whitePieces.push(piece);
          break;
        case "e1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingW.png')";
          whitePieces.push(piece);
          break;
        case "f1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW.png')";
          whitePieces.push(piece);
          break;
        case "g1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW.png')";
          whitePieces.push(piece);
          break;
        case "h1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW.png')";
          whitePieces.push(piece);
          break;
        //BLACK PIECES
        case "a7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "b7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "c7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "d7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "e7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "f7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "g7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "h7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          blackPieces.push(piece);
          break;
        case "a8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL.png')";
          blackPieces.push(piece);
          break;
        case "b8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL.png')";
          blackPieces.push(piece);
          break;
        case "c8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL.png')";
          blackPieces.push(piece);
          break;
        case "d8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenBL.png')";
          blackPieces.push(piece);
          break;
        case "e8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingBL.png')";
          blackPieces.push(piece);
          break;
        case "f8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL.png')";
          blackPieces.push(piece);
          break;
        case "g8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL.png')";
          blackPieces.push(piece);
          break;
        case "h8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL.png')";
          blackPieces.push(piece);
          break;
      }
    }
  }
  if (iconpack == "2") {
    for (e of elements) {
      switch (e.value.letter + e.value.number) {
        //WHITE PIECES
        case "a2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "b2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "c2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "d2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "e2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "f2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "g2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "h2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          whitePieces.push(piece);
          break;
        case "a1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW2.png')";
          whitePieces.push(piece);
          break;
        case "b1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW2.png')";
          whitePieces.push(piece);
          break;
        case "c1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW2.png')";
          whitePieces.push(piece);
          break;
        case "d1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenW2.png')";
          whitePieces.push(piece);
          break;
        case "e1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingW2.png')";
          whitePieces.push(piece);
          break;
        case "f1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW2.png')";
          whitePieces.push(piece);
          break;
        case "g1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW2.png')";
          whitePieces.push(piece);
          break;
        case "h1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW2.png')";
          whitePieces.push(piece);
          break;
        //BLACK PIECES
        case "a7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "b7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "c7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "d7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "e7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "f7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "g7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "h7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          blackPieces.push(piece);
          break;
        case "a8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL2.png')";
          blackPieces.push(piece);
          break;
        case "b8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL2.png')";
          blackPieces.push(piece);
          break;
        case "c8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL2.png')";
          blackPieces.push(piece);
          break;
        case "d8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenBL2.png')";
          blackPieces.push(piece);
          break;
        case "e8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingBL2.png')";
          blackPieces.push(piece);
          break;
        case "f8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL2.png')";
          blackPieces.push(piece);
          break;
        case "g8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL2.png')";
          blackPieces.push(piece);
          break;
        case "h8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL2.png')";
          blackPieces.push(piece);
          break;
      }
    }
  }

  PIECES = {
    whitePieces: whitePieces,
    blackPieces: blackPieces,
  };
}

export let PIECES = {
  whitePieces: whitePieces,
  blackPieces: blackPieces,
};
