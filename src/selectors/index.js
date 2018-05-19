import {VisibilityFilters} from '../actions'
import {createSelector} from 'reselect'

export const getVisibilityFilter = (state) => state.visibilityFilter;
export const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (filter, todos) => {
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
  }
);

const getTotalEstimatesForTodos = (todos) => {
  return todos.reduce(
    function (sum, todo) {
      return sum + todo.estimate;
    }
    , 0);
};

export const getTotalEstimates = createSelector(
  [getTodos],
  (todos) => {
    return getTotalEstimatesForTodos(todos);
  }
);

export const getTotalVisibleEstimates = createSelector(
  [getVisibleTodos],
  (todos) => {
    return getTotalEstimatesForTodos(todos);
  }
);