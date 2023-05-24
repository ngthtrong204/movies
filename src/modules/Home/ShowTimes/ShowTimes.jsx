import React, { useEffect, useState } from 'react'
import { apiGetShowtime } from '../../../api/movies.API';
import style from "./ShowTime.module.scss"
function ShowTimes() {
  const [data, setData] = useState([])
  const [theaterSelect, setTheaterSelect] = useState(null)

  const getTime = async () => {
    try {
      const data = await apiGetShowtime()
      setData(data.content)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSelectTheater = (maHeThongRap) => {
    const [theater] = data.filter((item) => {
      return item.maHeThongRap === maHeThongRap
    })
    setTheaterSelect(theater)
  }


  useEffect(() => {
    getTime()
  }, [])



  return (
    <div className='w-75 mx-auto'>
      <div className='card bg-dark text-white p-5'>
        <div className={style.main}>
          <div className={style.listHeThong}>
            {data && data.map(heThongRap => {
              return <div className={style.item}>
                <img
                  onClick={() => handleSelectTheater(heThongRap.maHeThongRap)}
                  className={style.img} src={heThongRap.logo} />
              </div>
            })}
          </div>
          <div className={style.listCumRap}>
            {theaterSelect && theaterSelect.lstCumRap.map((cumRap) => {
              return <div className={` ${style.myCard}  text-white card bg-dark`}>
                <div className="card-body">
                  <h5 className='card-title'>{cumRap.tenCumRap}</h5>
                  <p className='card-subtitle text-muted"'>{cumRap.diaChi}</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowTimes