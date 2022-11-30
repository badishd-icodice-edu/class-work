import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function CarDetails() {
  const { carId } = useParams()
  const location = useLocation()
  const [carDetails, setCarDetails] = useState(null)

  useEffect(() => {
    if (location.state)
      setCarDetails(location.state.find((c, cIdx) => cIdx === parseInt(carId)))
  }, [carId, location.state])

  return (
    <div>
      <pre>{JSON.stringify(location.state, null, 2)}</pre>
      {carDetails?.year}
      <br />
      param id - {carId}
      {typeof carId}
    </div>
  )
}
