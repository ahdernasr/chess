// TODO
// CHECKMATE, CHECK
// CORRECT MOVES ONLY ON CHECK +  STOP KING FROM MOVING INTO DANGEROUS SPOT
// SPECIAL RULES:
// CODE ENPASSANT
// CODE KING ROOK SWITCH
// CODE PAWN PROMOTION
// FEN STRINGS?

import { PIECES } from "./pieces.js";

let arr = [];
let soldierDanger = [];

export function findOptions(piece, color, checkForDanger) {
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
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
    }
  } else if (PIECES.bishops.includes(piece)) {
    arr = [];
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
      if (
        PIECES.whitePieces.includes(findSpot(x, y + 1 + i).firstElementChild)
      ) {
        break;
      }
      if (
        PIECES.blackPieces.includes(findSpot(x, y + 1 + i).firstElementChild)
      ) {
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
      if (
        PIECES.whitePieces.includes(findSpot(x, y - 1 - i).firstElementChild)
      ) {
        break;
      }
      if (
        PIECES.blackPieces.includes(findSpot(x, y - 1 - i).firstElementChild)
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
      if (
        PIECES.whitePieces.includes(findSpot(x - 1 - i, y).firstElementChild)
      ) {
        break;
      }
      if (
        PIECES.blackPieces.includes(findSpot(x - 1 - i, y).firstElementChild)
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
    x = piece.parentElement.value.x;
    y = piece.parentElement.value.y;
    if (PIECES.whitePieces.includes(piece)) {
      if (piece.value.firstTime) {
        if (!findSpot(x, y + 2).firstElementChild) arr.push(findSpot(x, y + 2));
        if (!findSpot(x, y + 1).firstElementChild) arr.push(findSpot(x, y + 1));
      } else if (!findSpot(x, y + 1).firstElementChild) {
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
    }
    if (PIECES.blackPieces.includes(piece)) {
      if (piece.value.firstTime) {
        if (!findSpot(x, y - 2).firstElementChild) arr.push(findSpot(x, y - 2));
        if (!findSpot(x, y - 1).firstElementChild) arr.push(findSpot(x, y - 1));
      } else if (!findSpot(x, y - 1).firstElementChild) {
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
            color ? a.classList.add("possible") : null;
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            color ? a.classList.add("possible") : null;
          }
        }
      }
      soldierDanger = arr
      soldierDanger.push(findSpot(x - 1, y - 1))
      soldierDanger.push(findSpot(x + 1, y - 1))
      soldierDanger.remove(findSpot(x, y - 1))
      // array modifiction for when kingDanger is called
    }
  } else if (PIECES.walls.includes(piece)) {
    arr = [];
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
      if (
        PIECES.whitePieces.includes(findSpot(x - 1 - i, y).firstElementChild)
      ) {
        break;
      }
      if (
        PIECES.blackPieces.includes(findSpot(x - 1 - i, y).firstElementChild)
      ) {
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
      if (
        PIECES.whitePieces.includes(findSpot(x, y + 1 + i).firstElementChild)
      ) {
        break;
      }
      if (
        PIECES.blackPieces.includes(findSpot(x, y + 1 + i).firstElementChild)
      ) {
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
      if (
        PIECES.whitePieces.includes(findSpot(x, y - 1 - i).firstElementChild)
      ) {
        break;
      }
      if (
        PIECES.blackPieces.includes(findSpot(x, y - 1 - i).firstElementChild)
      ) {
        break;
      }
    }
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
  arr.push(findSpot(x, y - 1))
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
  let x, y;
  let kingArr = [];
  let newKingArr = [];
  let allOppositeMoves = [];
  if (PIECES.whitePieces.includes(piece)) {
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
  if (PIECES.whitePieces.includes(piece)) {
    newKingArr = kingArr.filter((e) => {
      return e && !PIECES.whitePieces.includes(e.firstElementChild)
    });
    if (kingArr.includes(curr)) newKingArr.push(curr)
    for (let b of PIECES.blackPieces) {
      allOppositeMoves.push(findOptions(b, false, false))
    }
    for (let o of allOppositeMoves){
      for (let c of getArraysIntersection(o, kingArr)) {
        c ? c.classList.add('danger') : null
      }
    }
  }

}

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

function findSpot(x, y) {
  let elements = document.getElementsByClassName("el");
  for (let e of elements) {
    if (e.value.x == x && e.value.y == y) {
      return e;
    }
  }
  return undefined;
}
