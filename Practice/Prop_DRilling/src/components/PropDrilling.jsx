import React, { useState } from 'react'

function comp(){
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  return (
    <>
      <ChildA fname={fname} lname={lname}/>
    </>
  )
}

function ChildA({fname, lname}){
  return (<>
    <ChildB fname={fname} lname={lname}/>
  </>)
}

function ChildB({fname, lname}){
    fname = "Aditya"
    lname = "Gupta"
  return (<>
    <h1>{fname}, {lname}</h1>
    {/* <h1>{lname}</h1> */}
  </>)
}


export default comp


//A better alternative for prop drilling is usecontext hooks  