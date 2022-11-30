import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseRefUnmount() {
  const navigate = useNavigate()
  const [, setApiData] = useState(0)

  useEffect(() => {
    // api call
    setTimeout(() => {
      setApiData(1)
    }, 5000)

    return () => {
      console.log('unmounted')
    }
  }, [])

  return (
    <div>
      {/* <pre>{JSON.stringify(myRef, null, 2)}</pre> */}
      <button onClick={() => navigate('/useref')}>unmount example</button>
    </div>
  )
}
