import React, { useState } from 'react'
import './index.css'

const StatusPicker = () => {
  const [status, setStatus] = useState('Active')

  return (
    <div>
      My current status:
      <div className="status-wrapper">
        <div className={`${status.toLowerCase()} status-circle`} /> {status}
        {/* <div className={status.toLowerCase() + ' status-circle'} /> {status} */}
      </div>
      {['Away', 'Offline', 'Active', 'Busy'].map((st, stIdx) => (
        <button onClick={() => setStatus(st)} key={stIdx}>
          {st}
        </button>
      ))}
      {/* <button onClick={() => setStatus('Offline')}>Offline</button>
      <button onClick={() => setStatus('Active')}>Active</button> */}
    </div>
  )
}

export default StatusPicker
