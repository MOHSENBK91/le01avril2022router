import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
function Input({setTitle}) {
  return (
    <div>
      <InputGroup className="mb-3">
    
    <FormControl
       onChange = {(e)=> setTitle(e.target.value)}
      placeholder="Search"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    </div>
  )
}

export default Input