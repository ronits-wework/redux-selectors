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

const getTotalStoryPointsForTodos = (todos) => {
  return todos.reduce(
    function (sum, todo) {
      return sum + todo.storyPoints;
    }
    , 0);
};

export const getTotalStoryPoints = createSelector(
  [getTodos],
  (todos) => {
    return getTotalStoryPointsForTodos(todos);
  }
);

export const getTotalVisibleStoryPoints = createSelector(
  [getVisibleTodos],
  (todos) => {
    return getTotalStoryPointsForTodos(todos);
  }
);