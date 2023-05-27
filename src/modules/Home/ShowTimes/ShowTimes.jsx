import React, { useEffect, useState } from 'react'
import { apiGetShowtime } from '../../../api/movies.API';
import style from "./ShowTime.module.scss"
import { useNavigate } from 'react-router-dom';


function ShowTimes() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [heThongSelect, setHeThongSelect] = useState(null) //biến chứa dữ liệu của heThongRap được chọn
  const [cumRapSelect, setCumRapSelect] = useState(null) //biến chứa dữ liệu của cumRap được chọn
  const getTime = async () => {
    try {
      const data = await apiGetShowtime()
      setData(data.content)
    } catch (error) {
      console.log(error);
    }
  }
  const handleSelectHeThong = (heThongRap) => {
    setHeThongSelect(heThongRap)
    setCumRapSelect(null)
  }


  useEffect(() => {
    getTime()
  }, [])
  useEffect(() => {
    //Khỏi chạy heThongRap mặc định sau khi đã có data
    setHeThongSelect(data[0])
    // setCumRapSelect(data[0][0])
  }, [data])


  return (
    <>
      <div className='w-75 mx-auto'>
        <div className='card bg-dark text-white p-5'>
          <div className={`${style.main} row`}>
            <div className={`${style.listHeThong} col-lg-1`}>
              {data && data.map(heThongRap => {
                return <div key={heThongRap.maHeThongRap} className={style.item}>
                  <img
                    onClick={() => handleSelectHeThong(heThongRap)}
                    className={style.img} src={heThongRap.logo} />
                </div>
              })}
            </div>
            <div className={` col-lg-5`}>
              <h3 className='text-center'>Rạp chiếu</h3>
              <div className={`${heThongSelect && style.listCumRap}`}>

                {heThongSelect && heThongSelect.lstCumRap.map((cumRap) => {
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
              <div className={`${cumRapSelect && style.listCumRap}`}>
                {cumRapSelect && cumRapSelect.danhSachPhim.map((lichChieu) => {
                  if (lichChieu.dangChieu) {
                    return <div  key={lichChieu.maPhim} className={` ${style.myCard} text-white card bg-dark`}>
                      <div className="card-body">
                        <h5 className='card-title'>{lichChieu.tenPhim}</h5>
                        <p className='card-subtitle text-muted"'>{lichChieu.hot && "hot"}</p>
                      </div>
                    </div>
                  } return null
                })}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ShowTimes