import React, { useState } from 'react'

// possible win streaks for 3x3
const streaks = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
]

// collaborated project
export default function TicTacToe() {
  // a state that saves the clicked tile logs/history - object
  const [tileData, setTileData] = useState({}) // { 1: 'X', 2: 'O' }
  // a stat that saves whose turn it is - string
  const [currSymbol, setCurrSymbol] = useState('X')
  // a state that saves the winner - boolean
  const [winner, setWinner] = useState(false)

  const checkWinner = (squareIdx) => {
    // start checking winner from the 5th click
    if (Object.keys(tileData).length + 1 >= 5) {
      // filter out the options that include last clicked tile
      let winOptions = streaks.filter((value) => {
        if (value.includes(squareIdx)) return true
        else return false
      })

      // check the win case; if there are 3 current symbols in a row that's a win
      winOptions.forEach((winOption) => {
        const isWin = winOption.every((winLocation) => {
          if (winLocation === squareIdx) return true

          return tileData[winLocation] === currSymbol
        })

        if (isWin === true) {
          setWinner(true)
        }
      })
    }

    setTileData((currState) => {
      return { ...currState, [squareIdx]: currSymbol }
    })
    setCurrSymbol((currState) => {
      return currState === 'X' ? 'O' : 'X'
    })
  }

  return (
    <div>
      <button
        onClick={() => {
          setTileData({})
          setCurrSymbol('X')
          setWinner(false)
        }}
      >
        Restart
      </button>
      <div style={containerStyle}>
        {[...Array(9)].map((square, squareIdx) => {
          return (
            <button
              style={buttonStyle}
              key={squareIdx}
              onClick={() => {
                // if the tile clicked or there is a winner, don't do nothing
                if (tileData[squareIdx] || winner) return

                checkWinner(squareIdx)
              }}
              // {[variableName] : variableValue}
            >
              <span style={positionStyle}>{squareIdx}</span>
              {tileData[squareIdx]}
            </button>
          )
        })}
      </div>
      {winner
        ? `winner ${currSymbol === 'X' ? 'O' : 'X'}`
        : `turn ${currSymbol}`}
      {/* {winner ? `'winner' : 'turn:' ${currSymbol}`} */}
      <div style={{ display: 'flex' }}>
        {<pre>{JSON.stringify(tileData, null, 2)}</pre>}
        <div style={{ maxwidth: 100 }}>
          {<pre>{JSON.stringify(streaks)}</pre>}
        </div>
      </div>
    </div>
  )
}

// [...Array(3)] === [ , , ,]
// [...Array(2)] === [ , ,]

const containerStyle = {
  margin: 30,
  backgroundColor: 'lightgray',
  display: 'flex',
  flexWrap: 'wrap',
  width: 120,
}

const buttonStyle = {
  height: 40,
  width: 40,
  position: 'relative',
}

const positionStyle = {
  position: 'absolute',
  fontSize: 8,
  top: 0,
  left: 0,
  color: 'gray',
  textDecoration: 'underline',
}
