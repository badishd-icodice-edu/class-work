import { useNavigate } from 'react-router-dom'

export default function Page1() {
  const navigate = useNavigate()
  return (
    <>
      <div style={{ backgroundColor: 'blue', padding: 10 }}>Page 2</div>
    </>
  )
}
