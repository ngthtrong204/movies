import React from 'react'
import { Outlet } from 'react-router-dom'
import style from "./AuthLayout.module.scss"
function AuthLayout() {
   return (
      <div className={`bg-dark ${style.main}`}>
         <div className={style.box}>

            <Outlet></Outlet>
         </div>
      </div>
   )
}

export default AuthLayout