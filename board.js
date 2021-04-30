turn = "black";
whitePieces = [];
blackPieces = [];

function createGrid() {
  //DRAW BOARD
  alphabet = `abcdefghijklmnopqrstuvwxyz`;
  if (document.getElementById("homediv").children[0]) {
    document.getElementById("homediv").children[0].remove();
  }
  grid = document.createElement("div");
  grid.id = "grid";
  document.getElementById("homediv").appendChild(grid);
  for (x = 0; x < 8; x++) {
    line = document.createElement("div");
    grid.appendChild(line);
    for (y = 8; y > 0; y--) {
      el = document.createElement("div");
      el.value = {
        letter: alphabet[x],
        number: y,
      };
      el.classList.add("el");
      line.appendChild(el);
    }
  }
  elements = document.getElementsByClassName("el");
  alternate = false;
  skip = true;

  //COLOR THE CHESS BOARD
  for (l of grid.children) {
    if (skip) {
      alternate = false;
      skip = false;
    } else {
      alternate = true;
      skip = true;
    }
    for (e of l.children) {
      if (alternate) {
        e.classList.add("white");
        alternate = false;
      } else {
        e.classList.add("black");
        alternate = true;
      }
    }
  }
  addPieces();
}

function addPieces() {
  whitePieces = [];
  blackPieces = [];
  elements = document.getElementsByClassName("el");
  for (e of elements) {
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
  dragHandler();
}

function addWhiteListeners() {
  console.log("adding white listeners");
  for (draggable of whitePieces) {
    draggable.addEventListener("dragstart", whiteDragStart);

    draggable.addEventListener("dragend", whiteDragEnd);
  }
}
function removeWhiteListeners() {
  console.log("remove white listeners");
  for (draggable of whitePieces) {
    draggable.removeEventListener("dragstart", whiteDragStart);

    draggable.removeEventListener("dragend", whiteDragEnd);
  }
}

function addBlackListeners() {
  console.log("adding black listeners");
  for (draggable of blackPieces) {
    draggable.addEventListener("dragstart", blackDragStart);

    draggable.addEventListener("dragend", blackDragEnd);
  }
}
function removeBlackListeners() {
  console.log("remove black listeners");
  for (draggable of blackPieces) {
    draggable.removeEventListener("dragstart", blackDragStart);

    draggable.removeEventListener("dragend", blackDragEnd);
  }
}

function whiteDragStart(event) {
  if (turn == "white") event.target.closest(".piece").classList.add("dragging");
}

function whiteDragEnd(event) {
  if (turn == "white")
    event.target.closest(".piece").classList.remove("dragging");
}

function blackDragStart(event) {
  if (turn == "black") event.target.closest(".piece").classList.add("dragging");
}

function blackDragEnd(event) {
  event.target.closest(".piece").classList.remove("dragging");
}

// function initTurn(turn) {
//   if (turn == "white") {
//     removeBlackListeners();
//     addWhiteListeners();
//   }
//   if (turn == "black") {
//     removeWhiteListeners();
//     addBlackListeners();
//   }
//   return;
// }

function onDrop(event) {
  event.preventDefault();
  draggable = document.querySelector(".dragging");
  if (turn == "white") {
    if (
      whitePieces.includes(draggable) &&
      blackPieces.includes(event.target.closest(".el").firstElementChild)
    ) {
      if (draggable) event.target.closest(".el").appendChild(draggable);
      if (event.target.closest(".el").firstElementChild)
        event.target.closest(".el").firstElementChild.remove();
    } else if (
      whitePieces.includes(draggable) &&
      !whitePieces.includes(event.target.closest(".el").firstElementChild)
    ) {
      if (draggable) event.target.closest(".el").appendChild(draggable);
    }
  } else if (turn == "black") {
    if (
      blackPieces.includes(draggable) &&
      whitePieces.includes(event.target.closest(".el").firstElementChild)
    ) {
      if (draggable) event.target.closest(".el").appendChild(draggable);
      if (event.target.closest(".el").firstElementChild)
        event.target.closest(".el").firstElementChild.remove();
    } else if (
      blackPieces.includes(draggable) &&
      !blackPieces.includes(event.target.closest(".el").firstElementChild)
    ) {
      if (draggable) event.target.closest(".el").appendChild(draggable);
    }
  }
  dragHandler()
}

function dragHandler() {
  elements = document.getElementsByClassName("el");
  for (e of elements) {
    e.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    e.addEventListener("drop", onDrop);
  }
}

createGrid();
