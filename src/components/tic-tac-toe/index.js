import React, { useState } from 'react'
import './index.css'

const squareCount = 3
// const winRow = 2

let winRows = []

for (let idx = 0; idx < squareCount ** 2; idx++) {
  if (idx < squareCount) {
    if (idx === 0)
      winRows.push(
        [...Array(squareCount)].map(
          (el, elIdx) => idx + elIdx,
        ),
      )
    winRows.push(
      [...Array(squareCount)].map(
        (el, elIdx) => idx + squareCount * elIdx,
      ),
    )
  } else if (idx % squareCount === 0)
    winRows.push(
      [...Array(squareCount)].map(
        (el, elIdx) => idx + elIdx,
      ),
    )
}
// tl -> br diagnal option
winRows = [
  ...winRows,
  [...Array(squareCount)].map(
    (el, elIdx) => squareCount * elIdx + elIdx,
  ),
]
// tr -> bl diagnal option
winRows = [
  ...winRows,
  [...Array(squareCount)].map(
    (el, elIdx) => squareCount * (elIdx + 1) - (elIdx + 1),
  ),
]

export default function TicTacToe() {
  const [tileData, setTileData] = useState({})
  const [currentSymbol, setCurrentSymbol] =
    useState(firstSymbol)
  const [gameEnded, setGameEnded] = useState(false)
  const [winnerTileLocs, setWinnerTileLocs] = useState([])

  const updateDataOnPlay = (tileLoc) => {
    setTileData((currState) => ({
      ...currState,
      [tileLoc]: currentSymbol,
    }))
    setCurrentSymbol((currState) =>
      currState === symbolA ? symbolB : symbolA,
    )
  }

  const checkWinner = (tileLoc) => {
    const currData = tileData
    const takenTilesCount =
      Object.entries(currData).length + 1
    if (takenTilesCount > (squareCount - 1) * 2) {
      const possibilities = winRows.filter((p) =>
        p.includes(tileLoc),
      )
      
      possibilities.forEach((p) => {
        let inARowCount = 1
        p.forEach((tileIdx) => {
          if (currData[tileIdx] === currentSymbol)
            inARowCount += 1
        })
        if (inARowCount === squareCount) {
          updateDataOnPlay(tileLoc)
          setGameEnded(true)
          setWinnerTileLocs(p)
          return
        }
      })
    }
    updateDataOnPlay(tileLoc)

    if (takenTilesCount === squareCount ** 2)
      setGameEnded(true)
  }

  return (
    <div className="container">
      <pre>
        {winRows.length} Winning rows:{' '}
        {JSON.stringify(winRows)}
      </pre>
      {gameEnded ? (
        winnerTileLocs.length > 0 ? (
          <span>{currentSymbol} is the winner!</span>
        ) : (
          'Draw'
        )
      ) : (
        <span className="turn-label">
          {currentSymbol} turn!
        </span>
      )}
      <div
        className="row"
        style={{
          width: 40 * squareCount + squareCount,
          height: 40 * squareCount + squareCount,
        }}
      >
        {[...Array(squareCount ** 2)].map((el, tileLoc) => (
          <div
            className={`tile ${
              winnerTileLocs.includes(tileLoc)
                ? 'winner-tile'
                : ''
            }`}
            style={{
              width: `calc(98% / ${squareCount})`,
              height: `calc(98% / ${squareCount})`,
            }}
            key={tileLoc}
            onClick={() =>
              !gameEnded &&
              !tileData[tileLoc] &&
              checkWinner(tileLoc)
            }
          >
            <span className="tile-loc">{tileLoc}</span>
            {tileData[tileLoc]}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setGameEnded(false)
          setTileData({})
          setCurrentSymbol(firstSymbol)
          setWinnerTileLocs([])
        }}
      >
        Restart
      </button>
      <pre>{JSON.stringify(tileData, null, 2)}</pre>
    </div>
  )
}

const symbolA = 'X'
const symbolB = 'O'
const firstSymbol = symbolA
