import React from 'react'

function Categories(props) {
  return (
    <div>
        <button onClick={() => props.setCategory("All")}>All</button>
        <button onClick={() => props.setCategory("staple")}>Staple</button>
        <button onClick={() => props.setCategory("meat")}>Meat</button>
    </div>
  );
};

export default Categories