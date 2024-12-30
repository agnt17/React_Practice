import React from 'react';

const ChildComp1 = React.memo(({ count, handleClick }) => {
  console.log("This should not be rendered again and again");
  
  return (
    <div>
      <h1>Child Comp 2: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
});

export default ChildComp1;
