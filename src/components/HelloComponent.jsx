import React from 'react'

function HelloComponent() {
  return (
    <div>
       <h1>React Hello</h1>

      <button onClick={() => 
        alert('Hello')
      }>
         Click Me
      </button>
   </div>
  )
}

export default HelloComponent
