import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function PageSharedLayout() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ background: 'lightgray' }}>
        <button onClick={() => navigate('/pages/new')}>new page</button>
        <button onClick={() => navigate('/pages')}>pages dashboard</button>
        <button onClick={() => navigate('/pages/50', { replace: true })}>
          dynamic
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
