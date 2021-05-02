let whitePieces = [];
let blackPieces = [];
let soldiers = [];
let walls = [];
let bishops = [];
let horses = [];
let kings = [];
let queens = [];

export function addPieces() {
  let iconpack = "2";
  whitePieces = [];
  blackPieces = [];
  let elements = document.getElementsByClassName("el");
  let piece = document.createElement("div");
  // let label = document.createElement("h3");
  if (iconpack == "2") {
    for (let e of elements) {
      switch (e.value.letter + e.value.number) {
        //WHITE PIECES
        case "a2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "b2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "c2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "d2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "e2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "f2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "g2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "h2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "a1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          walls.push(piece);
          break;
        case "b1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          horses.push(piece);
          break;
        case "c1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          bishops.push(piece);
          break;
        case "d1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          queens.push(piece);
          break;
        case "e1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          kings.push(piece);

          break;
        case "f1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          bishops.push(piece);

          break;
        case "g1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          horses.push(piece);

          break;
        case "h1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          whitePieces.push(piece);
          walls.push(piece);

          break;
        //BLACK PIECES
        case "a7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "b7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "c7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "d7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "e7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "f7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "g7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "h7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          soldiers.push(piece);
          // label = document.createElement("h3");
          // label.textContent = "7";
          // label.classList.add("el-label-top");
          // e.appendChild(label);
          break;
        case "a8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          walls.push(piece);
          break;
        case "b8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          horses.push(piece);
          break;
        case "c8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          bishops.push(piece);
          break;
        case "d8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          queens.push(piece);
          break;
        case "e8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          kings.push(piece);
          break;
        case "f8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          bishops.push(piece);
          break;
        case "g8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
          blackPieces.push(piece);
          horses.push(piece);
          break;
        case "h8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL.png')";
          piece.value = {};
          piece.value.firstTime = true;
          piece.style.width = "70%";
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