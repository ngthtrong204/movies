import React from 'react'
import { useLocation } from 'react-router-dom'

function Test() {
let location = useLocation()
console.log(location);
   return (

      <div>
         <h1 className='text-center'>Testing</h1>
      </div>
   )
}

export default Test