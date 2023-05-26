import React, { useEffect, useState } from 'react'
import { apiGetMovies } from '../../../api/movies.API'
import ModalVideo from 'react-modal-video'
import style from "./Movies.module.scss"
function Movies() {
  const [movies, setMovies] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [videoID, setVideoID] = useState("")
  const getMovies = async () => {
    try {
      const data = await apiGetMovies()
      setMovies(data.content)
    } catch (error) {
      console.log(error);
    }
  }
  const openTrailer = (videoID) => {
    setVideoID(videoID)
    setIsOpen(true)
  }

  useEffect(() => {
    getMovies()
  }, [])



  return (
    <div className='row bg-dark w-75 mx-auto my-5'>

      {movies && movies.map((movie) => {
        return (
          <div key={movie.maPhim} className="col-3 my-2">
            <div className="card bg-dark text-white " style={{ width: '15rem' }}>
              <img src={movie.hinhAnh} className={style.img} alt="..." />
              <div className="card-body p-1">
                <div className={`${style.title} `}>
                  <p className='m-0 d-block'>
                    {movie.tenPhim}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn-success px-4 btn" onClick={() => openTrailer(movie.trailer)}>TRAILER</button>
                  <button className="btn btn-success px-4">ĐẶT VÉ</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId={videoID}
        onClose={() => {
          setVideoID("")
          setIsOpen(false)
        }} />
    </div>
  )
}

export default Movies