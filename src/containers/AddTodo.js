import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let nameInput;
  let estimateInput;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const estimate = parseInt(estimateInput.value);
        if (!nameInput.value.trim() || isNaN(estimate)) {
          return
        }
        dispatch(addTodo(nameInput.value, estimate));
        nameInput.value = '';
        estimateInput.value = 0;
      }}>
        Name: <input ref={node => nameInput = node} />
        Estimate: <input ref={node => estimateInput = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};

export default connect()(AddTodo)
