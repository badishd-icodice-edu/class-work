import axios from 'axios'
import { useEffect } from 'react'

export default function TryCatchPlayground() {
  useEffect(() => {
    const fetchRandomBeer = async () => {
      console.log(null.status)
      try {
        const randomBeerRes = await axios.get(
          'https://random-data-api.com/api/v2/beers',
        )
        console.log(randomBeerRes.status)
      } catch (err) {
        console.error('error occured', err)
      }

      console.log('block code after try catch')
    }

    fetchRandomBeer()
  }, [])
  return <>test</>
}
