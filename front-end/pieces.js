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
  // let label = document.createElement("h3");
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
          // label = document.createElement("h3");
          // label.textContent = "2";
          // label.classList.add("el-label-top");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "a";
          // label.classList.add("el-label");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "b";
          // label.classList.add("el-label");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "c";
          // label.classList.add("el-label");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "d";
          // label.classList.add("el-label");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "e";
          // label.classList.add("el-label");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "f";
          // label.classList.add("el-label");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "g";
          // label.classList.add("el-label");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "h";
          // label.classList.add("el-label");
          // e.appendChild(label);
          // label = document.createElement("h3");
          // label.textContent = "1";
          // label.classList.add("el-label-top");
          // e.appendChild(label);
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
          // label = document.createElement("h3");
          // label.textContent = "8";
          // label.classList.add("el-label-top");
          // e.appendChild(label);
          break;
        // case "h3":
        //   label = document.createElement("h3");
        //   label.textContent = "3";
        //   label.classList.add("el-label-top");
        //   e.appendChild(label);
        //   break;
        // case "h4":
        //   label = document.createElement("h3");
        //   label.textContent = "4";
        //   label.classList.add("el-label-top");
        //   e.appendChild(label);
        //   break;
        // case "h5":
        //   label = document.createElement("h3");
        //   label.textContent = "5";
        //   label.classList.add("el-label-top");
        //   e.appendChild(label);
        //   break;
        // case "h6":
        //   label = document.createElement("h3");
        //   label.textContent = "6";
        //   label.classList.add("el-label-top");
        //   e.appendChild(label);
        //   break;
      }
    }
  }
  if (iconpack == "2") {
    for (let e of elements) {
      switch (e.value.letter + e.value.number) {
        //WHITE PIECES
        case "a2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "b2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "c2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "d2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "e2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "f2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "g2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "h2":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          soldiers.push(piece);
          break;
        case "a1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          walls.push(piece);

          break;
        case "b1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          horses.push(piece);
          break;
        case "c1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          bishops.push(piece);
          break;
        case "d1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          queens.push(piece);
          break;
        case "e1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          kings.push(piece);
          break;
        case "f1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          bishops.push(piece);
          break;
        case "g1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          horses.push(piece);
          break;
        case "h1":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallW2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          whitePieces.push(piece);
          walls.push(piece);
          break;
        //BLACK PIECES
        case "a7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "b7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "c7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "d7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "e7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "f7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "g7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "h7":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/soldierBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          soldiers.push(piece);
          break;
        case "a8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          walls.push(piece);
          break;
        case "b8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          horses.push(piece);
          break;
        case "c8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          bishops.push(piece);
          break;
        case "d8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/queenBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          queens.push(piece);
          break;
        case "e8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/kingBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          kings.push(piece);
          break;
        case "f8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/bishopBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          bishops.push(piece);
          break;
        case "g8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/horseBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
          blackPieces.push(piece);
          horses.push(piece);
          break;
        case "h8":
          piece = document.createElement("div");
          piece.classList.add("piece");
          piece.draggable = "true";
          e.appendChild(piece);
          piece.style.backgroundImage = "url('./chess_pieces/wallBL2.png')";
          piece.value = {};
          piece.value.firstTime = true;
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