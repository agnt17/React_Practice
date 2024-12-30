import React from 'react'

const ChildComp2 = React.memo((props) => {
    console.log('ChildComponent2 re-rendered')
    return (
        <div>
          {/* <button>Click me: {props.handleClick}</button>
           */}
            <p>ChildComponent2</p>
        </div>
      )
})

export default ChildComp2
 

// Now even use Memo can't help it to re render again and again... So its time to learn useCallback...