import React from 'react'
import { connect } from 'react-redux'
import { getTotalEstimates, getTotalVisibleEstimates } from '../selectors'

const SumTotals = ({ totalEstimates, totalVisibleEstimates }) => {
  return (
    <div>
      <div>Total estimates: {totalEstimates}</div>
      <div>Total visible estimates: {totalVisibleEstimates}</div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  totalEstimates: getTotalEstimates(state),
  totalVisibleEstimates: getTotalVisibleEstimates(state)
});

export default connect(
  mapStateToProps
)(SumTotals)
