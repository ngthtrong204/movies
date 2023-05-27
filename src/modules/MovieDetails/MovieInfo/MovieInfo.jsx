import React, { useEffect, useState } from 'react'
import style from "./MovieInfo.module.scss"
import { apiGetMovieInfo } from '../../../api/movies.API'
import dayjs from 'dayjs'
function MovieInfo({ movieId }) {
   const [movie, setMovie] = useState(null)
   const getMovieDetail = async () => {
      try {
         const movie = await apiGetMovieInfo(movieId)
         setMovie(movie.content)
      } catch (error) {
         console.log(error.response?.data?.content);
      }
   }
   useEffect(() => {
      getMovieDetail()
   }, [])

   if (!movie) {
      return null
   }

   return (
      <div className={` ${style.main} row text-white w-75 mx-auto`}>
         <div className={`  col-3`}>
            <img className={`  ${style.img} w-100    `} src={movie.hinhAnh} alt="" />
         </div>
         <div className={`    ${style.info} col-4 d-flex align-items-top my-5`}>
            <div className="">
               <p >{dayjs(movie.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
               <h3 className='mb-3'>{movie.tenPhim}</h3>
               <p>120 phút</p>
               <button className={` btn btn-success`}>Mua vé</button>
            </div>
         </div>
      </div>
   )
}

export default MovieInfo