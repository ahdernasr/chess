import { addPieces, PIECES } from "./pieces.js";
import {
  findOptions,
  removeOptions,
  findKingDanger,
  fixCheck,
  checkMate,
  findSpot,
} from "./rules.js";

let turn = "white";
let firstMove = true;
let currentMove = "";
let oldCurrentMove = "";
let newMove = "";
let spinOnTurn = false;
let possibles = [];
let whiteHover, blackHover;
let mySound = new sound("sounds/move.mp3");

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

function showOptions(w, color) {
  if (color == "white" && whiteHover) {
    possibles = findOptions(w, true, true);
  }
  if (color == "black" && blackHover) {
    possibles = findOptions(w, true, true);
  }
}

function clearAllOptions() {
  for (let p of possibles) {
    p ? p.classList.remove("possible") : null;
  }
}

function addWhiteHoverListeners() {
  // whiteHover = true;
  // for (let w of PIECES.whitePieces) {
  //   w.addEventListener("mouseenter", showOptions.bind(this, w, 'white'));
  //   w.addEventListener("mouseleave", clearAllOptions);
  // }
}
function removeWhiteHoverListeners() {
  // whiteHover = false;
}
function addBlackHoverListeners() {
  // blackHover = true;
  // for (let w of PIECES.blackPieces) {
  //   w.addEventListener("mouseenter", showOptions.bind(this, w, 'black'));
  //   w.addEventListener("mouseleave", clearAllOptions);
  // }
}
function removeBlackHoverListeners() {
  // blackHover = false;
}

function addWhiteListeners() {
  for (let w of PIECES.whitePieces) {
    w.addEventListener("dragstart", whiteDragStart);
    w.addEventListener("dragend", whiteDragEnd);
    w.addEventListener("mouseenter", showOptions.bind(this, w));
    w.addEventListener("mouseleave", clearAllOptions);
  }
}
function removeWhiteListeners() {
  for (let w of PIECES.whitePieces) {
    w.removeEventListener("dragstart", whiteDragStart);
    w.removeEventListener("dragend", whiteDragEnd);
    w.removeEventListener("mouseenter", showOptions);
    w.removeEventListener("mouseexit", clearAllOptions);
  }
}
function addBlackListeners() {
  for (let b of PIECES.blackPieces) {
    b.addEventListener("dragstart", blackDragStart);
    b.addEventListener("dragend", blackDragEnd);
    b.addEventListener("mouseenter", showOptions.bind(this, b));
    b.addEventListener("mouseleave", clearAllOptions);
  }
}
function removeBlackListeners() {
  for (let b of PIECES.blackPieces) {
    b.removeEventListener("dragstart", blackDragStart);
    b.removeEventListener("dragend", blackDragEnd);
    b.removeEventListener("mouseenter", showOptions);
    b.removeEventListener("mouseleave", clearAllOptions);
  }
}

function whiteDragStart(event) {
  newMove ? newMove.classList.remove("newMove") : null;
  currentMove ? currentMove.classList.remove("currentMove") : null;
  event.target.closest(".piece").classList.add("dragging");
  currentMove = event.target.closest(".el");
  findOptions(event.target.closest(".piece"), true, true);
  fixCheck(event.target.closest(".piece"));
}
function whiteDragEnd(event) {
  event.target.closest(".piece").classList.remove("dragging");
  findKingDanger(event.target.closest(".piece"), currentMove);
  removeOptions();
}
function blackDragStart(event) {
  newMove ? newMove.classList.remove("newMove") : null;
  currentMove ? currentMove.classList.remove("currentMove") : null;
  event.target.closest(".piece").classList.add("dragging");
  currentMove = event.target.closest(".el");
  findOptions(event.target.closest(".piece"), true, true);
  fixCheck(event.target.closest(".piece"));
}
function blackDragEnd(event) {
  event.target.closest(".piece").classList.remove("dragging");
  findKingDanger(event.target.closest(".piece"), currentMove);
  removeOptions();
}

async function initTurn() {
  await sleep(600);
  if (!firstMove && newMove != currentMove && spinOnTurn) {
    document.getElementById("grid").classList.toggle("rotate");
    let elements = document.getElementsByClassName("el");
    for (let e of elements) {
      e.classList.toggle("rotate-piece");
    }
  }
  firstMove = false;
  if (turn == "white") {
    addWhiteHoverListeners();
    removeBlackHoverListeners();
    addWhiteListeners();
    removeBlackListeners();
  } else {
    addBlackHoverListeners();
    removeWhiteHoverListeners();
    addBlackListeners();
    removeWhiteListeners();
  }
}

async function dropHandler(event) {
  clearChecks();
  newMove ? newMove.classList.remove("newMove") : null;
  oldCurrentMove ? oldCurrentMove.classList.remove("currentMove") : null;
  var draggable = document.querySelector(".dragging");
  removeOptions(draggable);
  if (PIECES.whitePieces.includes(draggable)) {
    await whiteDropHandler(event);
    checkMate("black");
  }
  if (PIECES.blackPieces.includes(draggable)) {
    await blackDropHandler(event);
    checkMate("white");
  }

  if (PIECES.kings[0].parentElement.classList.contains("danger")) {
    PIECES.kings[0].parentElement.classList.add("check");
  } else {
    PIECES.kings[0].parentElement.classList.remove("check");
  }
  if (PIECES.kings[1].parentElement.classList.contains("danger")) {
    PIECES.kings[1].parentElement.classList.add("check");
  } else {
    PIECES.kings[1].parentElement.classList.remove("check");
  }
}

function whiteDropHandler(event) {
  var draggable = document.querySelector(".dragging");
  event.preventDefault();
  if (
    PIECES.whitePieces.includes(draggable) &&
    PIECES.blackPieces.includes(event.target.closest(".el").firstElementChild)
  ) {
    if (
      draggable &&
      event.target.closest(".el").classList.contains("possible")
    ) {
      mySound.play();
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      draggable.value.firstTime = false;
      newMove = event.target.closest(".el");
      newMove.classList.add("newMove");
      currentMove.classList.add("currentMove");
      oldCurrentMove = currentMove;
      turn = "black";
      if (newMove.classList.contains("castleR")) {
        let wall = findSpot(
          newMove.value.x + 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x - 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      } else if (newMove.classList.contains("castleL")) {
        let wall = findSpot(
          newMove.value.x - 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x + 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      }
    }
    if (
      event.target.closest(".el").firstElementChild &&
      event.target.closest(".el").classList.contains("possible")
    ) {
      PIECES.blackPieces.remove(event.target.closest(".el").firstElementChild);
      event.target.closest(".el").firstElementChild.remove();
    }
  } else if (
    PIECES.whitePieces.includes(
      event.target.closest(".el").firstElementChild
    ) ||
    !event.target.closest(".el").classList.contains("possible")
  ) {
    newMove = currentMove;
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
      mySound.play();
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      draggable.value.firstTime = false;
      newMove = event.target.closest(".el");
      newMove.classList.add("newMove");
      currentMove.classList.add("currentMove");
      oldCurrentMove = currentMove;
      turn = "black";
      if (newMove.classList.contains("castleR")) {
        let wall = findSpot(
          newMove.value.x + 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x - 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      } else if (newMove.classList.contains("castleL")) {
        let wall = findSpot(
          newMove.value.x - 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x + 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      }
    }
  }

  if (
    newMove.value.y == 8 &&
    !newMove.firstElementChild.value.promoted &&
    PIECES.soldiers.includes(newMove.firstElementChild)
  ) {
    document.getElementById("whitepromotion").classList.remove("hidden");
    removeBlackListeners();
    promoPrompt(newMove, "white");
  }

  eventHandler();
  clearAllDanger();
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
      mySound.play();
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      draggable.value.firstTime = false;
      newMove = event.target.closest(".el");
      newMove.classList.add("newMove");
      currentMove.classList.add("currentMove");
      oldCurrentMove = currentMove;
      turn = "white";
      if (newMove.classList.contains("castleR")) {
        let wall = findSpot(
          newMove.value.x + 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x - 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      } else if (newMove.classList.contains("castleL")) {
        let wall = findSpot(
          newMove.value.x - 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x + 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      }
    }
    if (
      event.target.closest(".el").firstElementChild &&
      event.target.closest(".el").classList.contains("possible")
    ) {
      PIECES.whitePieces.remove(event.target.closest(".el").firstElementChild);
      event.target.closest(".el").firstElementChild.remove();
    }
  } else if (
    PIECES.blackPieces.includes(
      event.target.closest(".el").firstElementChild
    ) ||
    !event.target.closest(".el").classList.contains("possible")
  ) {
    newMove = currentMove;
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
      mySound.play()
      draggable.classList.remove("dragging");
      event.target.closest(".el").appendChild(draggable);
      draggable.value.firstTime = false;
      newMove = event.target.closest(".el");
      newMove.classList.add("newMove");
      currentMove.classList.add("currentMove");
      oldCurrentMove = currentMove;
      turn = "white";
      if (newMove.classList.contains("castleR")) {
        let wall = findSpot(
          newMove.value.x + 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x - 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      } else if (newMove.classList.contains("castleL")) {
        let wall = findSpot(
          newMove.value.x - 1,
          newMove.value.y
        ).firstElementChild;
        wall.remove();
        findSpot(newMove.value.x + 1, newMove.value.y).appendChild(wall);
        newMove.classList.remove("possible");
      }
    }
  }

  if (
    newMove.value.y == 1 &&
    !newMove.firstElementChild.value.promoted &&
    PIECES.soldiers.includes(newMove.firstElementChild)
  ) {
    document.getElementById("blackpromotion").classList.remove("hidden");
    removeWhiteListeners();
    promoPrompt(newMove, "black");
  }

  if (PIECES.kings[0].parentElement.classList.contains("danger")) {
    PIECES.kings[0].parentElement.classList.add("check");
  } else {
    PIECES.kings[0].parentElement.classList.remove("check");
  }
  if (PIECES.kings[1].parentElement.classList.contains("danger")) {
    PIECES.kings[1].parentElement.classList.add("check");
  } else {
    PIECES.kings[1].parentElement.classList.remove("check");
  }
  eventHandler();
  clearAllDanger();
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

function promoChoice(newMove, color) {
  clearAllDanger();
  findKingDanger(newMove.firstElementChild);
  if (color == "white") {
    checkMate("black");
  } else if (color == "black") {
    checkMate("white");
  }
  if (PIECES.kings[0].parentElement.classList.contains("danger")) {
    PIECES.kings[0].parentElement.classList.add("check");
  } else {
    PIECES.kings[0].parentElement.classList.remove("check");
  }
  if (PIECES.kings[1].parentElement.classList.contains("danger")) {
    PIECES.kings[1].parentElement.classList.add("check");
  } else {
    PIECES.kings[1].parentElement.classList.remove("check");
  }
  newMove.classList.remove("possible");
}

function promoPrompt(spot, color) {
  let piece = document.createElement("div");
  piece.classList.add("piece");
  piece.draggable = "true";
  piece.value = {};
  piece.value.firstTime = true;
  piece.value.promoted = true;
  piece.style.width = "70%";
  if (color == "white") {
    document.getElementById("whitewall").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.whitePieces.remove(spot.firstElementChild);
      PIECES.walls.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/wallW.png')";
      PIECES.whitePieces.push(piece);
      PIECES.walls.push(piece);
      document.getElementById("whitepromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
    document.getElementById("whitehorse").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.whitePieces.remove(spot.firstElementChild);
      PIECES.horses.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/horseW.png')";
      PIECES.whitePieces.push(piece);
      PIECES.horses.push(piece);
      document.getElementById("whitepromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
    document.getElementById("whitebishop").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.whitePieces.remove(spot.firstElementChild);
      PIECES.bishops.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/bishopW.png')";
      PIECES.whitePieces.push(piece);
      PIECES.bishops.push(piece);
      document.getElementById("whitepromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
    document.getElementById("whitequeen").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.whitePieces.remove(spot.firstElementChild);
      PIECES.queens.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/queenW.png')";
      PIECES.whitePieces.push(piece);
      PIECES.queens.push(piece);
      document.getElementById("whitepromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
  } else if (color == "black") {
    document.getElementById("blackwall").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.blackPieces.remove(spot.firstElementChild);
      PIECES.walls.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/wallBL.png')";
      PIECES.blackPieces.push(piece);
      PIECES.walls.push(piece);
      document.getElementById("blackpromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
    document.getElementById("blackhorse").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.blackPieces.remove(spot.firstElementChild);
      PIECES.horses.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/horseBL.png')";
      PIECES.blackPieces.push(piece);
      PIECES.horses.push(piece);
      document.getElementById("blackpromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
    document.getElementById("blackbishop").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.blackPieces.remove(spot.firstElementChild);
      PIECES.bishops.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/bishopBL.png')";
      PIECES.blackPieces.push(piece);
      PIECES.bishops.push(piece);
      document.getElementById("blackpromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
    document.getElementById("blackqueen").addEventListener("click", () => {
      spot.firstElementChild.remove();
      PIECES.whitePieces.remove(spot.firstElementChild);
      PIECES.queens.remove(spot.firstElementChild);
      spot.appendChild(piece);
      piece.style.backgroundImage = "url('./chess_pieces/queenBL.png')";
      PIECES.blackPieces.push(piece);
      PIECES.queens.push(piece);
      document.getElementById("blackpromotion").classList.add("hidden");
      promoChoice(spot, color);
      return;
    });
  }
  return;
}

function clearAllDanger() {
  for (let e of document.getElementsByClassName("el")) {
    e.classList.remove("danger");
  }
}

function clearChecks() {
  document.querySelector(".check")
    ? document.querySelector(".check").classList.remove("check")
    : null;
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = async function () {
    this.sound.play();
  };
  this.stop = async function () {
    this.sound.pause();
  };
}

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

createGrid();
