import React from 'react'
import FilterLink from '../containers/FilterLink'
import SumTotals from '../containers/SumTotals'
import {VisibilityFilters} from '../actions'

const Footer = () => (
  <div>
    <div className="footerRow">
      <SumTotals/>
    </div>
  </div>
);

export default Footer
