import React, { useRef, useState } from 'react'
import { StudentCard } from './student-card'
import './index.css'

const initialChosenOne = { name: '', isOG: false }

const StudentPicker = () => {
  const audioMp3 = useRef()
  const [students, setStudents] = useState({
    list: studentsData,
    time: new Date(),
  })
  const [chosenOne, setChosenOne] = useState(
    initialChosenOne,
  )

  const randomizeList = () => {
    audioMp3.current.play()

    setChosenOne(initialChosenOne)
    setStudents((currState) => ({
      list: currState.list.sort(() =>
        Math.random() > 0.5 ? 1 : -1,
      ),
      time: new Date(),
    }))
    const intervalPicker = setInterval(() => {
      pickStudent(false)
    }, 250)
    setTimeout(() => {
      clearInterval(intervalPicker)
      setTimeout(() => {
        pickStudent(true)
        audioMp3.current.pause()
        audioMp3.current.currentTime = 0
      }, 250)
    }, 4000)
  }

  const pickStudent = (isOG) => {
    const presentStudents = students.list.filter(
      (student) => student.isActive,
    )
    const randomNumber = Math.floor(
      Math.random() * presentStudents.length,
    )
    const student = presentStudents[randomNumber]
    setChosenOne({
      name: `${student.firstName}${student.lastName}`,
      isOG,
    })
  }

  const changeStudentStatus = (clickedStudentIdx) => {
    setStudents((currState) => ({
      list: currState.list.map((student, studentIdx) =>
        studentIdx === clickedStudentIdx
          ? { ...student, isActive: !student.isActive }
          : student,
      ),
      time: new Date(),
    }))
  }

  return (
    <div className="students-container">
      <div className="students">
        <div className="title">
          <span>
            Our lovely students ({students.list.length})
          </span>
          <div>
            <button onClick={() => randomizeList()}>
              Randomize
            </button>
          </div>
        </div>
        {/* <pre>{JSON.stringify(students, null, 2)}</pre> */}

        <div className="students-list">
          {students.list.map((student, studentIdx) => (
            <StudentCard
              key={studentIdx}
              {...student}
              isTheChosenOne={
                student.isActive &&
                chosenOne.name ===
                  `${student.firstName}${student.lastName}` && {
                  isSearching: !chosenOne.isOG,
                  isSelected: chosenOne.isOG,
                }
              }
              changeStatus={() =>
                changeStudentStatus(studentIdx)
              }
            />
          ))}
        </div>
      </div>
      <audio ref={audioMp3}>
        <source src="/drum2.mp3" type="audio/mpeg"></source>
      </audio>
    </div>
  )
}

export default StudentPicker

const studentsData = [
  { firstName: 'Anar', lastName: 'B', isActive: true },
  { firstName: 'Dee', lastName: 'L', isActive: true },
  { firstName: 'Jaagii', lastName: 'N', isActive: true },
  { firstName: 'Jamiya', lastName: 'T', isActive: true },
  { firstName: 'Khuluguu', lastName: 'B', isActive: true },
  { firstName: 'Mandahaa', lastName: 'M', isActive: true },
  { firstName: 'Meg', lastName: 'D', isActive: true },
  { firstName: 'Muug', lastName: 'S', isActive: true },
  { firstName: 'Tsatsa', lastName: 'B', isActive: true },
  { firstName: 'Ziggy', lastName: 'M', isActive: true },
  { firstName: 'Zoe', lastName: 'Ch', isActive: true },
]
