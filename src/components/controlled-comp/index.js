import React, { useState } from 'react'

export default function ControlledComp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  })

  const onFormValueChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    setFormData((currState) => ({
      ...currState,
      [fieldName]: fieldValue,
    }))
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('function submit', formData)
  }

  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={onFormSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => onFormValueChange(e)}
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => onFormValueChange(e)}
          />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  )
}
