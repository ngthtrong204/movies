import React from 'react'
import Banner from './Banner/Banner'
import Movies from './Movies/Movies'
import ShowTimes from './ShowTimes/ShowTimes'

function Home() {
   return (
      <div>
         <Banner></Banner>
         <Movies></Movies>
         <ShowTimes></ShowTimes>
      </div>
   )
}

export default Home