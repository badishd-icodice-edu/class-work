import React from 'react'
import './App.css'
import BinaryConverter from './components/binary-converter'
// import LanguageSelector from './components/language-picker'
// import StatusPicker from './components/status-picker'

const App = () => {
  return (
    <div>
      {/* <LanguageSelector/> */}
      <BinaryConverter />
    </div>
  )
}

export default App

// import React,{ useState } from 'react'

// const App = () => {
//   const [objState, setObjState] = useState({})
//   return <div>
//     <pre>{JSON.stringify(objState, null ,2)}</pre>
//     <button onClick={() => {
//       setObjState(currState => {
//         return {
//           ...currState,
//           aKey: 'a',
//           bKey: 'b'
//         }
//       })
//     }}>add element</button>
//   </div>
// }

// export default App

// import React from 'react'

// const numbers = [1, 2, 3, 4]

// // const [firstNum, , thirdNum, fourth, fifth] = numbers
// const { length, [length - 1]: last, 2: third, 1: second } = numbers
// console.log(last)

// function App() {
//   return <div className="App"></div>
// }

// export default App
