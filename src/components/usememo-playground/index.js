import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemoPlayground() {
  const [inputVal, setInputVal] = useState('')
  const [counter, setCounter] = useState(0)

  const counterIncrementer = useMemo(() => {
    const inc = counter + 1
    console.log(inc)
    return inc
  }, [counter])

  useEffect(() => {
    console.log('useEffect', counterIncrementer)
  }, [counterIncrementer])

  return (
    <div>
      <input
        value={counter}
        type="number"
        onChange={(e) => setCounter(e.target.value)}
      />
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
    </div>
  )
}
