import React from 'react';
import './FilterChips.css';

function FilterChips({ filters, onRemove }) {
  return (
    <div className="filter-chips-container">
      {filters.map((filter, index) => (
        <div key={index} className="chip">
          {filter}
          <button onClick={() => onRemove(filter)}>×</button>
        </div>
      ))}
    </div>
  );
}

export default FilterChips;