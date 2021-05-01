import { addPieces, PIECES } from "./pieces.js";
import { findOptions, removeOptions } from "./rules.js";

let turn = "white";

function createGrid() {
  //DRAW BOARD
  let alphabet = `abcdefghijklmnopqrstuvwxyz`;
  if (document.getElementById("homediv").children[0]) {
    document.getElementById("homediv").children[0].remove();
  }
  let grid = document.createElement("div");
  grid.id = "grid";
  document.getElementById("homediv").appendChild(grid);
  for (let x = 0; x < 8; x++) {
    let line = document.createElement("div");
    grid.appendChild(line);
    for (let y = 8; y > 0; y--) {
      let el = document.createElement("div");
      el.value = {
        x: x,
        y: y,
        letter: alphabet[x],
        number: y,
        firstTime: true
      };
      el.classList.add("el");
      line.appendChild(el);
    }
  }
  let alternate = false;
  let skip = true;

  //COLOR THE CHESS BOARD
  for (let l of grid.children) {
    if (skip) {
      alternate = false;
      skip = false;
    } else {
      alternate = true;
      skip = true;
    }
    for (let e of l.children) {
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
  eventHandler();
}

function addWhiteListeners() {
  for (let w of PIECES.whitePieces) {
    w.addEventListener("dragstart", whiteDragStart);

    w.addEventListener("dragend", whiteDragEnd);
  }
}
function removeWhiteListeners() {
  for (let w of PIECES.whitePieces) {
    w.removeEventListener("dragstart", whiteDragStart);

    w.removeEventListener("dragend", whiteDragEnd);
  }
}
function addBlackListeners() {
  for (let b of PIECES.blackPieces) {
    b.addEventListener("dragstart", blackDragStart);

    b.addEventListener("dragend", blackDragEnd);
  }
}
function removeBlackListeners() {
  for (let b of PIECES.blackPieces) {
    b.removeEventListener("dragstart", blackDragStart);

    b.removeEventListener("dragend", blackDragEnd);
  }
}

function whiteDragStart(event) {
  event.target.closest(".piece").classList.add("dragging");
  findOptions(event.target.closest(".piece"));
}
function whiteDragEnd(event) {
  event.target.closest(".piece").classList.remove("dragging");
  removeOptions();
}
function blackDragStart(event) {
  event.target.closest(".piece").classList.add("dragging");
  findOptions(event.target.closest(".piece"));
}
function blackDragEnd(event) {
  event.target.closest(".piece").classList.remove("dragging");
  removeOptions();
}

function initTurn() {
  let turnLabel = document.getElementById("turn");
  if (turn == "white") {
    turnLabel.textContent = "White's";
    addWhiteListeners();
    removeBlackListeners();
  } else {
    turnLabel.textContent = "Black's";
    addBlackListeners();
    removeWhiteListeners();
  }
}

function dropHandler(event) {
  removeOptions();
  PIECES.whitePieces;
  var draggable = document.querySelector(".dragging");
  if (PIECES.whitePieces.includes(draggable)) {
    whiteDropHandler(event);
  }
  if (PIECES.blackPieces.includes(draggable)) {
    blackDropHandler(event);
  }
}

function whiteDropHandler(event) {
  var draggable = document.querySelector(".dragging");
  event.preventDefault();
  if (
    PIECES.whitePieces.includes(draggable) &&
    PIECES.blackPieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    if (draggable && event.target.closest(".el").classList.contains("possible")) {
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      turn = "black";
    }
    if (event.target.closest(".el").firstElementChild &&
    event.target.closest(".el").classList.contains("possible"))
      event.target.closest(".el").firstElementChild.remove();
  } else if (
    PIECES.whitePieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    turn = "white";
    eventHandler();
    return;
  } else if (
    PIECES.whitePieces.includes(draggable) &&
    !PIECES.whitePieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    if (
      draggable &&
      event.target.closest(".el").classList.contains("possible")
    ) {
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      turn = "black";
    }
  }
  eventHandler();
}

function blackDropHandler(event) {
  var draggable = document.querySelector(".dragging");
  event.preventDefault();
  if (
    PIECES.blackPieces.includes(draggable) &&
    PIECES.whitePieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    if (
      draggable &&
      event.target.closest(".el").classList.contains("possible")
    ) {
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      turn = "white";
    }
    if (event.target.closest(".el").firstElementChild &&
    event.target.closest(".el").classList.contains("possible"))
      event.target.closest(".el").firstElementChild.remove();
  } else if (
    PIECES.blackPieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    turn = "black";
    eventHandler();
    return;
  } else if (
    PIECES.blackPieces.includes(draggable) &&
    !PIECES.blackPieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    if (
      draggable &&
      event.target.closest(".el").classList.contains("possible")
    ) {
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      turn = "white";
    }
  }
  eventHandler();
}

function eventHandler() {
  initTurn();
  let elements = document.getElementsByClassName("el");
  for (let e of elements) {
    e.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    e.addEventListener("drop", dropHandler);
  }
}

createGrid();

// console.log(PIECES.walls, PIECES.soldiers, PIECES.kings, PIECES.horses, PIECES.queens, PIECES.bishops)
