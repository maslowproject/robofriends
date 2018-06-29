import React from 'react'

const SearchBox = ({ value, searchChange }) => {
  console.log('searchbox')
  return (
    <div className="pa2">
      <input 
        aria-label="Search Robots"
        className="pa3 b--green bg-lightest-blue"
        type="search" 
        placeholder="Search Robots"
        onChange={searchChange} 
      />
    </div>
  )
}

export default SearchBox;
