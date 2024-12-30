import React, { useMemo } from 'react'

const ChildComp = React.memo((props) => {
    console.log('ChildComponent re-rendered')
    return (
        <div>
            Child Component: {props.data}
        </div>
    )
})

export default ChildComp
           

// Now you can easily see that react.memo is useful if we pass any text sort of thing, but it fails if we pass any function as a props to a child component