import { useNavigate, useParams } from 'react-router-dom'

export default function Page() {
  const { pageId } = useParams()
  return (
    <>
      <div style={{ backgroundColor: 'red', padding: 10 }}>Page {pageId} {typeof pageId}</div>
    </>
  )
}
