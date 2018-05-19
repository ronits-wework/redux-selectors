import {VisibilityFilters} from '../actions'

export const getVisibilityFilter = (state) => state.visibilityFilter;
export const getTodos = (state) => state.todos;

export const getVisibleTodos = (state) => {
  const filter = getVisibilityFilter(state);
  const todos = getTodos(state);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const getTotalEstimatesForTodos = (todos) => {
  return todos.reduce(
    function (sum, todo) {
      return sum + todo.estimate;
    }
    , 0);
};

export const getTotalEstimates = (state) => {
  const todos = getTodos(state);
  return getTotalEstimatesForTodos(todos);
};

export const getTotalVisibleEstimates = (state) => {
  const todos = getVisibleTodos(state);
  return getTotalEstimatesForTodos(todos);
};