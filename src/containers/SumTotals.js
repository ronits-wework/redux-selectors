import React from 'react'
import { connect } from 'react-redux'
import { getTotalStoryPoints, getTotalVisibleStoryPoints } from '../selectors'

const SumTotals = ({ totalStoryPoints, totalVisibleStoryPoints }) => {
  return (
    <div>
      <div>Total story points: {totalStoryPoints}</div>
      <div>Total visible story points: {totalVisibleStoryPoints}</div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  totalStoryPoints: getTotalStoryPoints(state),
  totalVisibleStoryPoints: getTotalVisibleStoryPoints(state)
});

export default connect(
  mapStateToProps
)(SumTotals)
