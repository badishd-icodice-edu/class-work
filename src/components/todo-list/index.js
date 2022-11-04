import React, { useState } from 'react'

export default function ToDoList() {
  // create a state that saves the todo items
  const [toDoItems, setToDoItems] = useState([])
  // create a state that saves the value of the input field
  const [inputValue, setInputValue] = useState('')
  // create a state that saves if it's a new todo or edit
  // hint: to know which item is being edited, save the item index
  const [editItemIdx, setEditItemIdx] = useState(-1)

  // create a submit function, that takes the input field value and add it to the todo items state
  const onFormSubmit = (e) => {
    e.preventDefault()

    if (inputValue.length === 0) {
      alert('Insert value first')
      return
    } else {
      // if not in edit mode
      if (editItemIdx === -1)
        setToDoItems((currState) => {
          return [
            ...currState,
            {
              title: inputValue,
              createdDate: new Date().toUTCString(),
              isCompleted: false,
            },
          ]
        })
      // if in edit mode
      else {
        setToDoItems((currState) => {
          return currState.map((saveItem, saveItemIdx) => {
            return saveItemIdx === editItemIdx
              ? { ...saveItem, title: inputValue }
              : saveItem
          })
        })
        setEditItemIdx(-1)
      }
    }

    setInputValue('')
  }

  // controlled component/input, when user types, save it in the state
  const onInputChange = (e) => {
    if (e.target.value.charAt(0) === ' ') {
      alert('TRY AGAIN')
      return
    } else setInputValue(e.target.value)
  }

  // create an edit function - better to do it at the end
  const onEdit = (toDo, toDoIdx) => {
    setEditItemIdx(toDoIdx)
    setInputValue(toDo.title)
  }

  // create a function that deletes the item from the list (i.e. update the todo items state)
  const onDelete = (toDoIdx) => {
    setToDoItems((currState) => {
      return currState.filter((item, itemIdx) => {
        return itemIdx !== toDoIdx ? true : false
      })
    })
  }

  // create a function that changes the "isCompleted" status
  const onComplete = (toDoIdx) => {
    // updating the state based on the current state, so use the callback way of to do
    setToDoItems((currState) => {
      return currState.map((currToDo, currToDoIdx) => {
        return currToDoIdx === toDoIdx
          ? {
              ...currToDo,
              isCompleted: !currToDo.isCompleted,
            }
          : currToDo
      })
    })
  }

  // create a function that cancels the edit mode
  const onEditCancel = () => {
    setEditItemIdx(-1)
    setInputValue('')
  }

  return (
    <div>
      {/* calls the submit function */}
      <form onSubmit={onFormSubmit}>
        <label>
          Add chore
          <input
            placeholder="Add todo item"
            value={inputValue} //should read from the state
            onChange={onInputChange} // should update the state
          />
        </label>
        {/* if type is submit, it triggers the onSubmit event handler function when clicked */}
        <button type="submit">
          {/* if in edit mode, show Save button text */}
          {editItemIdx === -1 ? 'Add' : 'Save'}
        </button>
      </form>
      <div>
        {/** todo items rendering */}
        {toDoItems.map((toDo, toDoIdx) => {
          return (
            <div
              key={toDoIdx} // when mapping in jsx, each element must have a unqiue id
              style={{ border: 'solid black 1px' }} // inline styling
            >
              <div
                style={
                  toDo.isCompleted // conditionally render the title style
                    ? { textDecoration: 'line-through' }
                    : {}
                }
              >
                {toDo.title}
              </div>
              <div>{toDo.createdDate}</div>
              {editItemIdx !== toDoIdx ? ( // do now show "Edit", "Delete" and "Complete" buttons if item is in edit mode
                <div>
                  <button
                    onClick={() => onEdit(toDo, toDoIdx)}
                  >
                    Edit
                  </button>
                  <button onClick={() => onDelete(toDoIdx)}>
                    Delete
                  </button>
                  <button
                    onClick={() => onComplete(toDoIdx)}
                  >
                    Complete
                  </button>
                </div>
              ) : (
                // if is in edit mode, show "Cancel" button
                <button onClick={onEditCancel}>
                  Cancel
                </button>
              )}
            </div>
          )
        })}
        {/** style the todo item */}
        {/** todo item should include
         * 1. title
         * 2. date
         * 3. button 1 - calls the delete function
         * 4. button 2 - calls the function that changes the isCompleted
         * 5. button 3 - calls the edit function
         */}
      </div>
    </div>
  )
}

/**
 * Structure of the todo list state data
    [
        {
            title: 'Finish Tic Tac Toe',
            createdDate: '2022-11-01 19:00 PM', // todo item created date
            isCompleted: true
        },
        {
            title: 'Finish Memory Game',
            createdDate: '2022-11-02 19:00 PM', // todo item created date
            isCompleted: false
        }
    ]
 */
