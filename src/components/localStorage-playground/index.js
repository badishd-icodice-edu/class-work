import React, { useState } from 'react'

export default function LocalStoragePlayground() {
  const [sampleData, setSampleData] = useState({
    firstName: 'Joe',
    lastName: 'Bob',
    age: 20,
  })

  return (
    <div style={{ margin: 20 }}>
      {JSON.stringify(sampleData, null, 2)}
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          localStorage.setItem(
            'sampleDataObj',
            JSON.stringify(sampleData),
          )
        }}
      >
        Save to localStorage
      </button>
      <button
        onClick={() => {
          let localStorageData =
            localStorage.getItem('sampleDataObj')

          localStorageData = JSON.parse(localStorageData)

          if (localStorageData) {
            setSampleData(localStorageData)
          } else {
            alert('no data found')
          }
        }}
      >
        Read from localStorage
      </button>
      <br />
      <button
        onClick={() => {
          localStorage.removeItem('sampleDataObj')
        }}
      >
        Remove localStorage Item
      </button>
      <button
        onClick={() => {
          localStorage.clear()
        }}
      >
        Clear localStorage
      </button>
    </div>
  )
}
