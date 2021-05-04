import { PIECES } from "./pieces.js";

let arr = [];
let soldierDanger = [];
let lastCheck, inCheck;

export function findOptions(piece, color, checkForDanger = true) {
  arr = [];
  let x, y;

  if (PIECES.kings.includes(piece)) {
    arr = [];
    x = piece.parentElement.value.x;
    y = piece.parentElement.value.y;
    arr.push(findSpot(x + 1, y));
    arr.push(findSpot(x - 1, y));
    arr.push(findSpot(x + 1, y + 1));
    arr.push(findSpot(x + 1, y - 1));
    arr.push(findSpot(x, y + 1));
    arr.push(findSpot(x, y - 1));
    arr.push(findSpot(x - 1, y + 1));
    arr.push(findSpot(x - 1, y - 1));
    if (PIECES.whitePieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.blackPieces.includes(a.firstElementChild)
          ) {
            color && !a.classList.contains("danger")
              ? a.classList.add("possible")
              : null;
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            color && !a.classList.contains("danger")
              ? a.classList.add("possible")
              : null;
          }
        }
      }
    }
    if (PIECES.blackPieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.whitePieces.includes(a.firstElementChild)
          ) {
            color && !a.classList.contains("danger")
              ? a.classList.add("possible")
              : null;
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            color && !a.classList.contains("danger")
              ? a.classList.add("possible")
              : null;
          }
        }
      }
    }
  } else if (PIECES.bishops.includes(piece)) {
    arr = [];
    arr = findDiagonals(piece);
    if (PIECES.whitePieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.blackPieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
    if (PIECES.blackPieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.whitePieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
  } else if (PIECES.queens.includes(piece)) {
    arr = [];
    arr = findHorizontals(piece).concat(findDiagonals(piece));
    if (PIECES.whitePieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.blackPieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
    if (PIECES.blackPieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.whitePieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
  } else if (PIECES.soldiers.includes(piece)) {
    arr = [];
    let soldierDanger = [];
    piece.parentElement ? (x = piece.parentElement.value.x) : null;
    piece.parentElement ? (y = piece.parentElement.value.y) : null;
    if (PIECES.whitePieces.includes(piece)) {
      arr = findWhitePawn(piece, color);
      soldierDanger = arr
      soldierDanger.push(findSpot(x - 1, y + 1))
      soldierDanger.push(findSpot(x + 1, y + 1))
      soldierDanger.remove(findSpot(x, y + 1))
      // array modifiction for when kingDanger is called
    }
    else if (PIECES.blackPieces.includes(piece)) {
      arr = findBlackPawn(piece, color);
      soldierDanger = arr
      soldierDanger.push(findSpot(x - 1, y - 1))
      soldierDanger.push(findSpot(x + 1, y - 1))
      soldierDanger.remove(findSpot(x, y - 1))
      // array modifiction for when kingDanger is called
    }
  } else if (PIECES.walls.includes(piece)) {
    arr = [];
    arr = findHorizontals(piece);
    if (PIECES.whitePieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.blackPieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
    if (PIECES.blackPieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.whitePieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
  } else if (PIECES.horses.includes(piece)) {
    arr = [];
    arr = findHorses(piece);
    if (PIECES.whitePieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.blackPieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
    if (PIECES.blackPieces.includes(piece)) {
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.whitePieces.includes(a.firstElementChild)
          ) {
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
  }
  if (PIECES.blackPieces.includes(piece)) {
    if (checkForDanger && PIECES.soldiers.includes(piece)) {
      findSpot(x, y - 1) ? arr.push(findSpot(x, y - 1)) : null;
    }
  }

  if (PIECES.whitePieces.includes(piece)) {
    if (checkForDanger && PIECES.soldiers.includes(piece)) {
      findSpot(x, y + 1) ? arr.push(findSpot(x, y + 1)) : null;
    }
  }
  return arr;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function removeOptions() {
  for (let a of arr) {
    await sleep(1);
    if (a) a.classList.remove("possible");
  }
}

function getArraysIntersection(a1, a2) {
  return a1.filter(function (n) {
    return a2.indexOf(n) !== -1;
  });
}

export function findKingDanger(piece, curr) {
  lastCheck ? lastCheck.classList.remove("check") : null;
  let dangerFound;
  let x, y;
  let kingArr = [];
  let newKingArr = [];
  let allOppositeMoves = [];
  if (PIECES.blackPieces.includes(piece)) {
    x = PIECES.kings[1].parentElement.value.x;
    y = PIECES.kings[1].parentElement.value.y;
  } else {
    x = PIECES.kings[0].parentElement.value.x;
    y = PIECES.kings[0].parentElement.value.y;
  }
  kingArr.push(findSpot(x + 1, y));
  kingArr.push(findSpot(x - 1, y));
  kingArr.push(findSpot(x + 1, y + 1));
  kingArr.push(findSpot(x + 1, y - 1));
  kingArr.push(findSpot(x, y + 1));
  kingArr.push(findSpot(x, y - 1));
  kingArr.push(findSpot(x - 1, y + 1));
  kingArr.push(findSpot(x - 1, y - 1));
  let dangerZone = [];
  if (PIECES.blackPieces.includes(piece)) {
    newKingArr = kingArr.filter((e) => {
      return e && !PIECES.whitePieces.includes(e.firstElementChild);
    });
    for (let b of PIECES.blackPieces) {
      allOppositeMoves.push(findOptions(b, false, false));
    }
    if (kingArr.includes(curr)) newKingArr.push(curr);
    for (let o of allOppositeMoves) {
      if (o.includes(findSpot(x, y))) {
        findSpot(x, y).classList.add("danger");
        dangerFound = true;
      }
      for (let c of getArraysIntersection(o, kingArr)) {
        if (c) {
          c.classList.add("danger");
          dangerZone ? dangerZone.push(c) : null;
        }
      }
    }
  }
  if (PIECES.whitePieces.includes(piece)) {
    newKingArr = kingArr.filter((e) => {
      return e && !PIECES.blackPieces.includes(e.firstElementChild);
    });
    for (let b of PIECES.whitePieces) {
      allOppositeMoves.push(findOptions(b, false, false));
    }
    if (kingArr.includes(curr)) newKingArr.push(curr);
    for (let o of allOppositeMoves) {
      if (o.includes(findSpot(x, y))) {
        findSpot(x, y).classList.add("danger");
        dangerFound = true;
      }
      for (let c of getArraysIntersection(o, kingArr)) {
        if (c) {
          c.classList.add("danger");
          dangerZone ? dangerZone.push(c) : null;
        }
      }
    }
  }
  for (let k of newKingArr) {
    if (
      k &&
      !dangerZone.includes(k) &&
      PIECES.blackPieces.includes(k.firstElementChild)
    ) {
      k.classList.remove("danger");
    }
  }
  inCheck = false;
  if (PIECES.kings[0].parentElement.classList.contains("danger")) {
    PIECES.kings[0].parentElement.classList.add("check");
    lastCheck = PIECES.kings[0].parentElement;
    inCheck = true;
  }
  if (PIECES.kings[1].parentElement.classList.contains("danger")) {
    PIECES.kings[1].parentElement.classList.add("check");
    inCheck = true;
    lastCheck = PIECES.kings[1].parentElement;
  }
  return inCheck;
}

export function fixCheck(piece) {
  if (inCheck) {
    let white;
    PIECES.whitePieces.includes(piece) ? (white = true) : (white = false);
    let options = findOptions(piece, false, false);
  }
  // for each of the dragging piece's availible moves
  // if the king is in check after placing
  // classlist remove possible
}

function findPath(piece) {
  if (PIECES.whitePieces.includes(piece)) {
    //attacking black
    if (PIECES.queens.includes(piece)) {
    } else if (PIECES.bishops.includes(piece)) {
    } else if (PIECES.soldiers.includes(piece)) {
    } else if (PIECES.walls.includes(piece)) {
    } else if (PIECES.horses.includes(piece)) {
    }
  } else if (PIECES.blackPieces.includes(piece)) {
    //attacking white
  }
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

function findDiagonals(piece) {
  let x, y;
  var arr = [];
  x = piece.parentElement.value.x;
  y = piece.parentElement.value.y;
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x + 1 + i, y + 1 + i)) {
      break;
    }
    if (findSpot(x + 1 + i, y + 1 + i)) {
      arr.push(findSpot(x + 1 + i, y + 1 + i));
    } else if (
      findSpot(x + 1 + i, y + 1 + i) &&
      findSpot(x + 1 + i, y + 1 + i).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(
          findSpot(x + 1 + i, y + 1 + i).firstElementChild
        )
      ) {
      }
    } else if (
      findSpot(x + 1 + i, y + 1 + i) &&
      findSpot(x + 1 + i, y + 1 + i).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(
          findSpot(x + 1 + i, y + 1 + i).firstElementChild
        )
      ) {
        arr.push(findSpot(x + 1 + i, y + 1 + i));
      }
    }
    if (
      findSpot(x + 1 + i, y + 1 + i) &&
      PIECES.whitePieces.includes(
        findSpot(x + 1 + i, y + 1 + i).firstElementChild
      )
    ) {
      break;
    }
    if (
      findSpot(x + 1 + i, y + 1 + i) &&
      PIECES.blackPieces.includes(
        findSpot(x + 1 + i, y + 1 + i).firstElementChild
      )
    ) {
      break;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x - 1 - i, y + 1 + i)) {
      break;
    }
    if (findSpot(x - 1 - i, y + 1 + i)) {
      arr.push(findSpot(x - 1 - i, y + 1 + i));
    } else if (
      findSpot(x - 1 - i, y + 1 + i) &&
      findSpot(x - 1 - i, y + 1 + i).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(
          findSpot(x - 1 - i, y + 1 + i).firstElementChild
        )
      ) {
      }
    } else if (
      findSpot(x - 1 - i, y + 1 + i) &&
      findSpot(x - 1 - i, y + 1 + i).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(
          findSpot(x - 1 - i, y + 1 + i).firstElementChild
        )
      ) {
        arr.push(findSpot(x - 1 - i, y + 1 + i));
      }
    }
    if (
      PIECES.whitePieces.includes(
        findSpot(x - 1 - i, y + 1 + i).firstElementChild
      )
    ) {
      break;
    }
    if (
      PIECES.blackPieces.includes(
        findSpot(x - 1 - i, y + 1 + i).firstElementChild
      )
    ) {
      break;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x + 1 + i, y - 1 - i)) {
      break;
    }
    if (findSpot(x + 1 + i, y - 1 - i)) {
      arr.push(findSpot(x + 1 + i, y - 1 - i));
    } else if (
      findSpot(x + 1 + i, y - 1 - i) &&
      findSpot(x + 1 + i, y - 1 - i).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(
          findSpot(x + 1 + i, y - 1 - i).firstElementChild
        )
      ) {
      }
    } else if (
      findSpot(x + 1 + i, y - 1 - i) &&
      findSpot(x + 1 + i, y - 1 - i).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(
          findSpot(x + 1 + i, y - 1 - i).firstElementChild
        )
      ) {
        arr.push(findSpot(x + 1 + i, y - 1 - i));
      }
    }
    if (
      findSpot(x + 1 + i, y - 1 - i) &&
      PIECES.whitePieces.includes(
        findSpot(x + 1 + i, y - 1 - i).firstElementChild
      )
    ) {
      break;
    }
    if (
      findSpot(x + 1 + i, y - 1 - i) &&
      PIECES.blackPieces.includes(
        findSpot(x + 1 + i, y - 1 - i).firstElementChild
      )
    ) {
      break;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x - 1 - i, y - 1 - i)) {
      break;
    }
    if (findSpot(x - 1 - i, y - 1 - i)) {
      arr.push(findSpot(x - 1 - i, y - 1 - i));
    } else if (
      findSpot(x - 1 - i, y - 1 - i) &&
      findSpot(x - 1 - i, y - 1 - i).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(
          findSpot(x - 1 - i, y - 1 - i).firstElementChild
        )
      ) {
      }
    } else if (
      findSpot(x - 1 - i, y - 1 - i) &&
      findSpot(x - 1 - i, y - 1 - i).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(
          findSpot(x - 1 - i, y - 1 - i).firstElementChild
        )
      ) {
        arr.push(findSpot(x - 1 - i, y - 1 - i));
      }
    }
    if (
      PIECES.whitePieces.includes(
        findSpot(x - 1 - i, y - 1 - i).firstElementChild
      )
    ) {
      break;
    }
    if (
      PIECES.blackPieces.includes(
        findSpot(x - 1 - i, y - 1 - i).firstElementChild
      )
    ) {
      break;
    }
  }
  return arr;
}

function findHorizontals(piece) {
  let x, y;
  var arr = [];
  x = piece.parentElement.value.x;
  y = piece.parentElement.value.y;
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x + 1 + i, y)) {
      break;
    }
    if (findSpot(x + 1 + i, y)) {
      arr.push(findSpot(x + 1 + i, y));
    } else if (
      findSpot(x + 1 + i, y) &&
      findSpot(x + 1 + i, y).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(findSpot(x + 1 + i, y).firstElementChild)
      ) {
      }
    } else if (
      findSpot(x + 1 + i, y) &&
      findSpot(x + 1 + i, y).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(findSpot(x + 1 + i, y).firstElementChild)
      ) {
        arr.push(findSpot(x + 1 + i, y));
      }
    }
    if (
      findSpot(x + 1 + i, y) &&
      PIECES.whitePieces.includes(findSpot(x + 1 + i, y).firstElementChild)
    ) {
      break;
    }
    if (
      findSpot(x + 1 + i, y) &&
      PIECES.blackPieces.includes(findSpot(x + 1 + i, y).firstElementChild)
    ) {
      break;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x - 1 - i, y)) {
      break;
    }
    if (findSpot(x - 1 - i, y)) {
      arr.push(findSpot(x - 1 - i, y));
    } else if (
      findSpot(x - 1 - i, y) &&
      findSpot(x - 1 - i, y).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(findSpot(x - 1 - i, y).firstElementChild)
      ) {
      }
    } else if (
      findSpot(x - 1 - i, y) &&
      findSpot(x - 1 - i, y).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(findSpot(x - 1 - i, y).firstElementChild)
      ) {
        arr.push(findSpot(x - 1 - i, y));
      }
    }
    if (PIECES.whitePieces.includes(findSpot(x - 1 - i, y).firstElementChild)) {
      break;
    }
    if (PIECES.blackPieces.includes(findSpot(x - 1 - i, y).firstElementChild)) {
      break;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x, y + i + 1)) {
      break;
    }
    if (findSpot(x, y + 1 + i)) {
      arr.push(findSpot(x, y + 1 + i));
    } else if (
      findSpot(x, y + 1 + i) &&
      findSpot(x, y + 1 + i).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(findSpot(x, y + 1 + i).firstElementChild)
      ) {
      }
    } else if (
      findSpot(x + 1 + i, y) &&
      findSpot(x, y + 1 + i).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(findSpot(x, y + 1 + i).firstElementChild)
      ) {
        arr.push(findSpot(x, y + 1 + i));
      }
    }
    if (PIECES.whitePieces.includes(findSpot(x, y + 1 + i).firstElementChild)) {
      break;
    }
    if (PIECES.blackPieces.includes(findSpot(x, y + 1 + i).firstElementChild)) {
      break;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (!findSpot(x, y - 1 - i)) {
      break;
    }
    if (findSpot(x, y - 1 - i)) {
      arr.push(findSpot(x, y - 1 - i));
    } else if (
      findSpot(x, y - 1 - i) &&
      findSpot(x, y - 1 - i).firstElementChild
    ) {
      if (
        PIECES.blackPieces.includes(findSpot(x, y - 1 - i).firstElementChild)
      ) {
      }
    } else if (
      findSpot(x, y - 1 - i) &&
      findSpot(x, y - 1 - i).firstElementChild
    ) {
      if (
        PIECES.whitePieces.includes(findSpot(x, y - 1 - i).firstElementChild)
      ) {
        arr.push(findSpot(x, y - 1 - i));
      }
    }
    if (PIECES.whitePieces.includes(findSpot(x, y - 1 - i).firstElementChild)) {
      break;
    }
    if (PIECES.blackPieces.includes(findSpot(x, y - 1 - i).firstElementChild)) {
      break;
    }
  }
  return arr;
}

function findHorses(piece) {
  let x, y;
  var arr = [];
  x = piece.parentElement.value.x;
  y = piece.parentElement.value.y;
  arr.push(findSpot(x + 1, y + 2));
  arr.push(findSpot(x + 2, y + 1));
  arr.push(findSpot(x + 2, y - 1));
  arr.push(findSpot(x + 1, y - 2));
  arr.push(findSpot(x - 1, y - 2));
  arr.push(findSpot(x - 2, y - 1));
  arr.push(findSpot(x - 2, y + 1));
  arr.push(findSpot(x - 1, y + 2));
  return arr;
}

function findWhitePawn(piece, color) {
  let x, y;
  var arr = [];
  piece.parentElement ? (x = piece.parentElement.value.x) : null;
  piece.parentElement ? (y = piece.parentElement.value.y) : null;
  if (piece.value.firstTime) {
    if (findSpot(x, y + 2) && !findSpot(x, y + 2).firstElementChild)
      arr.push(findSpot(x, y + 2));
    if (findSpot(x, y + 1) && !findSpot(x, y + 1).firstElementChild)
      arr.push(findSpot(x, y + 1));
  } else if (findSpot(x, y + 1) && !findSpot(x, y + 1).firstElementChild) {
    arr.push(findSpot(x, y + 1));
  }
  if (
    findSpot(x + 1, y + 1) &&
    findSpot(x + 1, y + 1).firstElementChild &&
    PIECES.blackPieces.includes(findSpot(x + 1, y + 1).firstElementChild)
  ) {
    arr.push(findSpot(x + 1, y + 1));
  }
  if (
    findSpot(x - 1, y + 1) &&
    findSpot(x - 1, y + 1).firstElementChild &&
    PIECES.blackPieces.includes(findSpot(x - 1, y + 1).firstElementChild)
  ) {
    arr.push(findSpot(x - 1, y + 1));
  }
  for (let a of arr) {
    if (a) {
      if (
        a.firstElementChild &&
        PIECES.blackPieces.includes(a.firstElementChild)
      ) {
        color ? a.classList.add("possible") : null;
      }
      if (!PIECES.whitePieces.includes(a.firstElementChild)) {
        color ? a.classList.add("possible") : null;
      }
    }
  }
  return arr;
}

function findBlackPawn(piece, color) {
  let x, y;
  var arr = [];
  piece.parentElement ? (x = piece.parentElement.value.x) : null;
  piece.parentElement ? (y = piece.parentElement.value.y) : null;
  if (piece.value.firstTime) {
    if (findSpot(x, y - 2) && !findSpot(x, y - 2).firstElementChild)
      arr.push(findSpot(x, y - 2));
    if (findSpot(x, y - 1) && !findSpot(x, y - 1).firstElementChild)
      arr.push(findSpot(x, y - 1));
  } else if (findSpot(x, y + 1) && !findSpot(x, y - 1).firstElementChild) {
    arr.push(findSpot(x, y - 1));
  }
  if (
    findSpot(x + 1, y - 1) &&
    findSpot(x + 1, y - 1).firstElementChild &&
    PIECES.whitePieces.includes(findSpot(x + 1, y - 1).firstElementChild)
  ) {
    arr.push(findSpot(x + 1, y - 1));
  }
  if (
    findSpot(x - 1, y - 1) &&
    findSpot(x - 1, y - 1).firstElementChild &&
    PIECES.whitePieces.includes(findSpot(x - 1, y - 1).firstElementChild)
  ) {
    arr.push(findSpot(x - 1, y - 1));
  }
  for (let a of arr) {
    if (a) {
      if (
        a.firstElementChild &&
        PIECES.whitePieces.includes(a.firstElementChild)
      ) {
        color && !PIECES.blackPieces.includes(a.firstElementChild)
          ? a.classList.add("possible")
          : null;
      }
      if (!PIECES.blackPieces.includes(a.firstElementChild)) {
        color && !PIECES.blackPieces.includes(a.firstElementChild)
          ? a.classList.add("possible")
          : null;
      }
    }
  }
  return arr;
}

function findSpot(x, y) {
  let elements = document.getElementsByClassName("el");
  for (let e of elements) {
    if (e.value.x == x && e.value.y == y) {
      return e;
    }
  }
  return undefined;
}
