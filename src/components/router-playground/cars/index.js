import { useNavigate } from 'react-router-dom'

export default function CarList() {
  const navigate = useNavigate()
  return (
    <div>
      {cars.map((car, carIdx) => (
        <div key={carIdx}>
          {car.brand}
          <button
            onClick={() => {
              navigate(`/cars/${carIdx}`, { state: cars })
            }}
          >
            View Detais
          </button>
        </div>
      ))}
    </div>
  )
}

const cars = [
  { brand: 'Toyota', year: 2020, model: 'Camry' },
  { brand: 'Tesla', year: 2021, model: '3' },
  { brand: 'X', year: 2022, model: 'Z' },
]
