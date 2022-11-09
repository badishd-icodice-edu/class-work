import React, { useEffect, useState } from 'react'

export default function UseEffectPlayground() {
  const [showChildComp, setShowChildComp] = useState(true)
  return (
    <div>
      {showChildComp && <ChildComponent />}
      <button
        onClick={() =>
          setShowChildComp((prevBool) => !prevBool)
        }
      >
        Toggle child comp
      </button>
    </div>
  )
}

const ChildComponent = () => {
  const [counter, setCounter] = useState(0)
  //   const [inputValue, setInputValue] = useState('')

  //   useEffect(() => {
  //     console.log('child comp mounted')

  //     return () => {
  //       console.log('unmounted')
  //     }
  //   }, [])

  //   useEffect(() => {
  //     console.log('counter state updated', counter)
  //   }, [counter])

  //   useEffect(() => {
  //     console.log('on every render')
  //   })

  // dangerous use case 1
  //   useEffect(() => {
  //     setCounter((prevC) => prevC + 1)
  //   })

  // dangerous use case 2
  //   useEffect(() => {
  //     setCounter((prevC) => prevC + 1)
  //   }, [counter])


  console.log(counter)
  
//   useEffect(() => {
//     const counterInterval = setInterval(() => {
//       setCounter((c) => c + 1)
//     }, 1000)

//     return () => {
//         clearInterval(counterInterval)
//     }

//   }, [])

  return (
    <div>
      {counter}
      {/* <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => setCounter((curr) => curr + 1)}
      >
        inc
      </button> */}
    </div>
  )
}
