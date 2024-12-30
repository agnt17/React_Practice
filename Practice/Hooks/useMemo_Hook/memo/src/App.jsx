import React, { useState } from 'react'
import ChildComp from './Components/ChildComp';
import ChildComp2 from './Components/ChildComp2';



function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Click to Increment</button>
      <h1>Count: {count}</h1>
      <div>
        <ChildComp child = "child1"/> {/* Our main goal here is that this child component should only re-render if any changes occurs inside it, not any chnages to its parent components so for this we use React.memo hook to ensure that it doesn't run unnecessarily.*/ }
      </div>

      <div>
        <ChildComp2 childname = {handleClick}/> {/*Here we have passed a function, now useMemo can't protect the child component from functions and thus will cause rerendering when its parent component have any modifications, to deal with this we use useCallback Hook... */}
      </div>
    </div>
  )
}

export default App
