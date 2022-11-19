import { useNavigate } from 'react-router-dom'

export default function Page1() {
  const navigate = useNavigate()
  return (
    <>
      404
      <button
        onClick={() =>
          navigate('/pages', { state: { from: 'A', to: 'B' } })
        }
      >
        to pages
      </button>
    </>
  )
}
