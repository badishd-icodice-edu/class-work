import React, { useState } from 'react'

import { FaAdn } from 'react-icons/fa'

const DemoUseState = () => {
  const [bootcamp, setBootcamp] = useState({
    studentCount: 13,
    isPartTime: true,
    isFinished: false,
  })

  
  
  return (
    <>
      <pre>{JSON.stringify(bootcamp, null, 2)}</pre>

      paragraph

      {bootcamp.isFinished && <div>Don't forget to do your homework!</div>}

      <FaAdn style={{ color: 'red' }} />

      <button
        onClick={() => {
          setBootcamp((currState) => ({
            ...currState,
            isFinished: !currState.isFinished,
          }))
        }}
      >
        {bootcamp.isFinished ? 'Finish Clas' : bootcamp.isPartTime ? 'Finish class' : 'Still have time'}
      </button>
    </>
  )
}

//   if(bootcamp.isFinished) {
//     return 'Finished'
//   } else if(bootcamp.isPartTime) {
//     return 'Okay'
//   } else return 'Finish Class'

export default DemoUseState
