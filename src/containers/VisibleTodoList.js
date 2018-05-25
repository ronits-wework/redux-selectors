import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
)(TodoList)
