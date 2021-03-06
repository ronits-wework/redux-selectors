import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, storyPoints }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text + ', ' + storyPoints}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo
