import React, { useEffect, useState } from 'react'
import { apiGetMovieTime } from '../../../api/movies.API'
import style from "./Showtime.module.scss"

function Showtime({ movieId }) {
   const [heThongRapChieu, setHeThongRapChieu] = useState(null)
   const [cumRap, setCumRap] = useState(null)
   const [cumRapSelect, setCumRapSelect] = useState(null)
   const getTime = async () => {
      try {
         const data = await apiGetMovieTime(movieId)
         setHeThongRapChieu(data.content.heThongRapChieu)
      } catch (error) {
         console.log(error.response?.data?.content);
      }
   }

   const handleSelectHeThong = (cumRapChieu) => {
      setCumRap(cumRapChieu)
   }

   useEffect(() => {
      getTime()
   }, [])
   return (
      <>
         <div className='w-75 mx-auto'>
            <div className='card bg-dark text-white p-5'>
               <div className={`${style.main} row`}>
                  <div className={`${style.listHeThong} col-lg-1`}>
                     {heThongRapChieu && heThongRapChieu.map(heThongRap => {
                        return <div key={heThongRap.maHeThongRap} className={style.item}>
                           <img
                              onClick={() => handleSelectHeThong(heThongRap.cumRapChieu)}
                              className={style.img} src={heThongRap.logo} />
                        </div>
                     })}
                  </div>
                  <div className={` col-lg-5`}>
                     <h3 className='text-center'>Rạp chiếu</h3>
                     <div className={``}>
                        {cumRap && cumRap.map((cumRap) => {
                           return <div onClick={() => { setCumRapSelect(cumRap) }} key={cumRap.maCumRap} className={` ${style.myCard} text-white card bg-dark`}>
                              <div className="card-body">
                                 <h5 className='card-title'>{cumRap.tenCumRap}</h5>
                                 <p className='card-subtitle text-muted"'>{cumRap.diaChi}</p>
                              </div>
                           </div>
                        })}
                     </div>
                  </div>
                  <div className={` col-lg-5`}>
                     <h3 className='text-center'>Phim đang chiếu</h3>
                     {/* <div className={`${cumRapSelect && style.listCumRap}`}>
                        {cumRapSelect && cumRapSelect.lichChieuPhim.map((lichChieu) => {
                           if (lichChieu.dangChieu) {
                              return <div key={lichChieu.maPhim} className={` ${style.myCard} text-white card bg-dark`}>
                                 <div className="card-body">
                                    <h5 className='card-title'>{lichChieu.tenPhim}</h5>
                                    <p className='card-subtitle text-muted"'>{lichChieu.hot && "hot"}</p>
                                 </div>
                              </div>
                           } return null
                        })}
                     </div> */}
                  </div>
               </div>
            </div>
         </div >
      </>
   )
}

export default Showtime