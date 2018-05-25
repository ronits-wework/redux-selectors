import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const SumTotals = ({ totalStoryPoints }) => {
  return (
    <div>
      <div>Total story points: {totalStoryPoints}</div>
    </div>
  )
};

SumTotals.propTypes = {
  totalStoryPoints: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  totalStoryPoints: state.todos.reduce(
    function(sum, todo) {
      return sum + todo.storyPoints;
    }
  , 0)
});

export default connect(
  mapStateToProps
)(SumTotals)
