import React from 'react'
import style from "./Mainlayout.module.scss"
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
//Trang layout chính, để hai component Header và Footer luôn được hiển thị  





function MainLayout() {
  return (
    <div className='bg-dark' >
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}

export default MainLayout