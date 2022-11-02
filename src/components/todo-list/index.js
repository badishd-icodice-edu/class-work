import React from 'react'

export default function ToDoList() {
  // create a state that saves the todo items
  // create a state that saves the value of the input field
  // create a state that saves if it's a new todo or edit

  // create a function that changes the "isCompleted" status
  // create a function that deletes the item from the list (i.e. update the todo items state)
  // create an edit function - better to do it at the end

  // create a submit function, that takes the input field value and add it to the todo items state

  return (
    <div>
      {/* calls the submit function */}
      <form onSubmit={() => {}}>
        <label>
          Add chore
          <input
            value="" //should read from the state
            onChange={() => {}} // should update the state
          />
        </label>
        <button type="submit">Add icon</button>
      </form>
      {/** list of to do items container */}
      <div>
        {/** todo items rendering */}
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
