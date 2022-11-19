import { useLocation } from 'react-router-dom'

export default function Page1() {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <div style={{ backgroundColor: 'green', padding: 10 }}>
        Page 3
        <div style={{ color: 'white' }}>
          {location.state?.from} {location.state?.to}
          {location.state ? location.state.to : ''}
        </div>
      </div>
    </>
  )
}
