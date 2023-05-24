import React from 'react'
import style from "./Header.module.scss"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import  { signout } from '../../slices/userSlices'
function Header() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const handleAuth = () => {
      navigate("/signin")
   }
   const handleSignOut = () => {
      dispatch(signout())
      navigate("/signin")
   }
   const { user } = useSelector((state) => state.user)

   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">thanhwei</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link " >Trang chủ</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Danh sách phim</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Lịch chiếu</a>
                     </li>
                  </ul>
                  {user && 
                  <>
                     <p className={style.name}>{user.hoTen}</p>
                     <button onClick={handleSignOut} className="btn btn-outline-success" >Đăng xuất</button>
                  </>}
                  {!user && <button onClick={handleAuth} className="btn ms-3 btn-outline-success" >Đăng nhập/Đăng ký</button>}
               </div>
            </div>
         </nav>



      </div>
   )
}
export default Header