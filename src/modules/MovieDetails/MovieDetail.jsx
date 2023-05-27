import React from 'react'
import MovieInfo from './MovieInfo/MovieInfo'
import Showtime from './Showtime/Showtime'
import { useParams } from 'react-router-dom'

function MovieDetail() {
   const { movieId } = useParams()
   return (
      <div className='my-5'>
         <MovieInfo movieId={movieId}></MovieInfo>
         <Showtime movieId={movieId}></Showtime>
      </div>
   )
}

export default MovieDetail