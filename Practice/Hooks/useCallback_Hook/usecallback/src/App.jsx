import React, { useCallback, useState } from 'react'
import ChildComp1 from './Components/ChildComp1';

const App = (() =>  {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count])  
  //If we don't pass anything inside the dependencies array, then we will freeze the function right there.
  return (
    <div>
      <button onClick={handleClick}>Click to Increment</button>
      <h1>Count: {count}</h1>
      <div>
        <ChildComp1 childname = {handleClick} childname2 = {count}/>
      </div>
    </div>
  )
})

export default App
