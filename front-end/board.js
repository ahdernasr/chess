import { addPieces, PIECES } from "./pieces.js";
import { findOptions, removeOptions } from "./rules.js";

let turn = "white";
let firstMove = true;
let currentMove = "";
let oldCurrentMove = "";
let newMove = "";

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
  currentMove = event.target.closest(".el");
  findOptions(event.target.closest(".piece"));
}
function whiteDragEnd(event) {
  event.target.closest(".piece").classList.remove("dragging");
  removeOptions();
}
function blackDragStart(event) {
  event.target.closest(".piece").classList.add("dragging");
  currentMove = event.target.closest(".el");
  findOptions(event.target.closest(".piece"));
}
function blackDragEnd(event) {
  event.target.closest(".piece").classList.remove("dragging");
  removeOptions();
}

async function initTurn() {
  await sleep(600)
  if (!firstMove && newMove != currentMove) {
    document.getElementById("grid").classList.toggle('rotate')
    let elements = document.getElementsByClassName("el")
    for (let e of elements) {
      e.classList.toggle('rotate-piece')
    }
  }
  firstMove = false
  if (turn == "white") {
    addWhiteListeners();
    removeBlackListeners();
  } else {
    addBlackListeners();
    removeWhiteListeners();
  }
}

function dropHandler(event) {
  newMove ? newMove.classList.remove('newMove') : null
  oldCurrentMove ? oldCurrentMove.classList.remove('currentMove') : null
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
      draggable.value.firstTime = false
      newMove = event.target.closest(".el")
      newMove.classList.add('newMove')
      currentMove.classList.add('currentMove')
      oldCurrentMove = currentMove
      turn = "black";
    }
    if (event.target.closest(".el").firstElementChild &&
    event.target.closest(".el").classList.contains("possible"))
      event.target.closest(".el").firstElementChild.remove();
  } else if (
    PIECES.whitePieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    newMove = currentMove
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
      draggable.value.firstTime = false
      newMove = event.target.closest(".el")
      newMove.classList.add('newMove')
      currentMove.classList.add('currentMove')
      oldCurrentMove = currentMove
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
      draggable.value.firstTime = false
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      newMove = event.target.closest(".el")
      newMove.classList.add('newMove')
      currentMove.classList.add('currentMove')
      oldCurrentMove = currentMove
      turn = "white";
    }
    if (event.target.closest(".el").firstElementChild &&
    event.target.closest(".el").classList.contains("possible"))
      event.target.closest(".el").firstElementChild.remove();
  } else if (
    PIECES.blackPieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    newMove = currentMove
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
      draggable.value.firstTime = false
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      newMove = event.target.closest(".el")
      newMove.classList.add('newMove')
      currentMove.classList.add('currentMove')
      oldCurrentMove = currentMove
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

createGrid();