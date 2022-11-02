import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function RatingStar() {
  const [rate, setRate] = useState(0)
 
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(5)].map((el, starIdx) => (
        <button
          key={starIdx}
          style={buttonInlineStyle}
          onClick={() => setRate(starIdx + 1)}
        >
          {starIdx + 1 <= rate ? (
            <AiFillStar style={{ color: 'orange' }} />
          ) : (
            <AiOutlineStar />
          )}
        </button>
      ))}
    </div>
  )
}

const buttonInlineStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
}
