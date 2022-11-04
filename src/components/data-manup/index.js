import React, { useState } from 'react'

const DataManupilationEx = () => {
  const [sampleData, setSampleData] = useState({
    name: 'John',
    additionalData: {
      instructor: true,
      favoriteHobbies: ['Coding', 'Playing Basketball'],
      favoriteFood: {
        type: 'soup',
        includeNoodle: true,
      },
      moreDetails: {
        favoriteBasketballPlayer: 'Kyrie Irving',
        numberOfSiblings: 5,
        isYoungest: true,
        hometown: {
          city: 'Portland',
          state: 'OR',
        },
        citiesLivedIn: ['Portland', 'Chicago', 'Ulaanbaatar'],
      },
    },
  })

  return (
    <div>
      <button onClick={() => setSampleData((currState) => {
        return {
          ...currState,
          additionalData: {
            ...currState.additionalData,
            favoriteHobbies: [...currState.additionalData.favoriteHobbies,'3dah']
          }
        }
      })}>click me</button>
      <button onClick={() => setSampleData((prevData) => {
        return {
            ...prevData,
            additionalData: {
                ...prevData.additionalData,
                moreDetails: {
                    ...prevData.additionalData.moreDetails,
                    hometown: {
                        ...prevData.additionalData.moreDetails.hometown,
                        state: 'Maine'
                    }
                }
            }
        }
      })}>Change hometown state</button>
      {/* sampleData.additionalData.favoriteHobbies === [...sampleData.additionalData.favoriteHobbies] */}
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  )
}

export default DataManupilationEx


// const array = ['a', 'b', 'c', 'ac']
// const filteredArray = array.filter((arrayItem) => arrayItem !== 'c')
// ['a', 'b', 'ac'] 