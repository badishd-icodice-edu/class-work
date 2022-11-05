import React from 'react'

const MemoryGame = () => {
  // a state that saves a list of cards - array (making it a state so that we can shuffle later)
  // a state that saves whose turn it is - boolean
  // a state that saves all the turned cards, so it stays flipped - array
  // a state that saves the 2 flipped cards - object (keys would be locations, values would be cards)
  // later add a stata that saves the scores of the players - object
  // later add a state that saves the winner result - initial value would null, when the game ends, it becomes a string

  // a function that handles a card click
  // it should update the currently flipped cards state, so that the cards flip immediately
  // depending on how many of the 2 current flipped cards are flipped, check if the cards match

  return (
    <div>
      {/* render the cards */}
      {/* each card has a click event handler  */}
    </div>
  )
}

export default MemoryGame
