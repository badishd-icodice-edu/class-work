import React, { useEffect, useRef, useState } from 'react'

export default function UseRefPlayground() {
  const myRef = useRef(0)
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log('inputValue render', inputValue)
  }, [inputValue])

  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  return (
    <div>
      <pre>{JSON.stringify(myRef, null, 2)}</pre>
      {/* <button onClick={() => {
        inputRef.current?.focus()
      }}>focus input field</button> */}
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>myRef value: {myRef.current}</div>
      <button
        onClick={() => {
          myRef.current = 2
        }}
      >
        change myRef value
      </button>
    </div>
  )
}
