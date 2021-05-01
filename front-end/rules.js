// TODO
// HORSES, SOLDIERS
// CHECKMATE, CHECK
// CORRECT MOVES ONLY ON CHECK
// STOP KING FROM MOVING INTO DANGEROUS SPOT

import { PIECES } from "./pieces.js";

let arr = [];

export function findOptions(piece) {
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
            a.classList.add("possible");
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
          }
        }
      }
    }
  } else if (PIECES.soldiers.includes(piece)) {
    arr = [];
    x = piece.parentElement.value.x;
    y = piece.parentElement.value.y;
    if (PIECES.whitePieces.includes(piece)) {
        arr.push(findSpot(x-1, y+1));
        arr.push(findSpot(x+1, y + 1));
        arr.push(findSpot(x, y + 1));
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.blackPieces.includes(a.firstElementChild)
          ) {
            a.classList.add("possible");
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
          }
        }
      }
    }
    if (PIECES.blackPieces.includes(piece)) {
        arr.push(findSpot(x-1, y-1));
        arr.push(findSpot(x+1, y - 1));
        arr.push(findSpot(x, y - 1));
      for (let a of arr) {
        if (a) {
          if (
            a.firstElementChild &&
            PIECES.whitePieces.includes(a.firstElementChild)
          ) {
            a.classList.add("possible");
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
          }
        }
      }
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
            a.classList.add("possible");
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.whitePieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
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
            a.classList.add("possible");
          }
          if (!PIECES.blackPieces.includes(a.firstElementChild)) {
            a.classList.add("possible");
          }
        }
      }
    }
  }
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

function findSpot(x, y) {
  let elements = document.getElementsByClassName("el");
  for (let e of elements) {
    if (e.value.x == x && e.value.y == y) {
      return e;
    }
  }
  return undefined;
}
