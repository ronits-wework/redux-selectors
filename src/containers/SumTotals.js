import React from 'react'
import { connect } from 'react-redux'

const SumTotals = ({ totalEstimates }) => {
  return (
    <div>
      <div>Total estimates: {totalEstimates}</div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  totalEstimates: state.todos.reduce(
    function(sum, todo) {
      return sum + todo.estimate;
    }
  , 0)
});

export default connect(
  mapStateToProps
)(SumTotals)
