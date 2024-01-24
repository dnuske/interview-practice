import * as React from 'react';
import classes from "@/pages/solved/tetris/styles.module.css";
import {useEffect, useState} from "react";


// matrix for tetris game
// creation of pieces
// ability to move pieces down and sideways
// ability to rotate pieces
// ability to disappear completed lines

const gameMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

var renderMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const PIECE_STICK = [[1, 1, 1, 1]];
const PIECE_L = [[1, 0],
  [1, 0],
  [1, 1]];
const PIECE_SQUARE = [[1, 1],
  [1, 1]];
const PIECE_3 = [[0, 1, 0],
  [1, 1, 1]];


const PIECES = [
  PIECE_STICK,
  PIECE_L,
  PIECE_SQUARE,
  PIECE_3,
]

function getRandomPiece() {
  return PIECE_SQUARE
}

var currentPiece = null;
var currentPiecePosition = [0, 0];

function addPiece() {
  for (let i = 0; i < currentPiece.length; i++) {
    for (let j = 0; j < currentPiece[0].length; j++) {
      const newXpos = currentPiecePosition[0] + i;
      const newYpos = currentPiecePosition[1] + j;
      console.log("newXpos", newXpos, newYpos)
      renderMatrix[newXpos][newYpos] = currentPiece[i][j]
    }
  }
}
function removePiece() {
  console.log('currentPiece', currentPiece)
  for (let i = 0; i < currentPiece.length; i++) {
    for (let j = 0; j < currentPiece[0].length; j++) {
      const newXpos = currentPiecePosition[0] + i;
      const newYpos = currentPiecePosition[1] + j;
      if (renderMatrix[newXpos][newYpos] === 1) {
        renderMatrix[newXpos][newYpos] = 0;
      }
    }
  }
}

const MOVE_DOWN = 'MOVE_DOWN';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';

function move(movement) {
  removePiece()
  // if (movement === MOVE_DOWN) {
  currentPiecePosition = [currentPiecePosition[0] + 1, 0]
  addPiece()
}

// const handleKeyDown = (e) => {
//   if (e.key === 'ArrowDown') {
//     console.log('down')
//     createPiece();
//   }
// }

const Tetris = () => {

  const [rerender, setRerender] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      console.log('down')
      //addPiece();
      move();
      setRerender(rerender+1);
    }
  }

  useEffect(
    () => {
      // init game
      currentPiece = getRandomPiece();
      addPiece();
      setRerender(rerender+1);
    }, [])

  useEffect(
    () => {
      document.addEventListener('keydown', handleKeyDown, true)
      return () => {document.removeEventListener('keydown', handleKeyDown, true)}
    }, [rerender])

  return (<div className={classes.main} >
    <div>
      tetris
    </div>
    <div>
      <Render rerender={rerender} />
    </div>

  </div>);
};


function Render({rerender}) {
  return <>{renderMatrix.map((x, i) =>
    <div key={`${rerender}${i}`} className={classes.tetrisLine} >{x}</div>
  )}</>
}

export default Tetris;
