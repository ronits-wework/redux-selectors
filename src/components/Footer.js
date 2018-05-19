import React from 'react'
import FilterLink from '../containers/FilterLink'
import SumTotals from '../containers/SumTotals'
import {VisibilityFilters} from '../actions'

const Footer = () => (
  <div>
    <div className="footerRow">
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
    <div className="footerRow">
      <SumTotals/>
    </div>
  </div>
);

export default Footer
