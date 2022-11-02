import React from 'react'

export const StudentCard = ({
  firstName,
  lastName,
  isActive,
  isTheChosenOne,
  changeStatus,
}) => {
  return (
    <div
      className={`student-card-container ${
        isTheChosenOne.isSelected
          ? 'chosen'
          : isTheChosenOne.isSearching
          ? 'searching'
          : ''
      }`}
      onClick={() => changeStatus()}
    >
      <div
        className={`student-initials ${
          isActive ? 'present' : ''
        }`}
      >{`${firstName.charAt(0)}${lastName}`}</div>
      <div className="student-info">
        <span>
          {firstName} {lastName}
        </span>
        <span>{`${firstName.toLowerCase()}_${lastName.toLowerCase()}@`}</span>
      </div>
    </div>
  )
}
