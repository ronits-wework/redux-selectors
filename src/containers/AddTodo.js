import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let nameInput;
  let storyPointInput;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const storyPoints = parseInt(storyPointInput.value);
        if (!nameInput.value.trim() || isNaN(storyPoints)) {
          return;
        }
        dispatch(addTodo(nameInput.value, storyPoints));
        nameInput.value = '';
        storyPointInput.value = '';
      }}>
        Name: <input ref={node => nameInput = node} />
        Story points: <input ref={node => storyPointInput = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};

export default connect()(AddTodo)
