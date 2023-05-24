import React from 'react'
import style from "./Footer.module.scss"
function Footer() {
  return (
    <div className={`${style.main} bg-dark py-5 `}>
      <p className='m-0'>Contact for work, copyright and more:</p>
      <p>ngthtrong204@gmail.com</p>
      <p className={style.copyright}>© 2023 by thanhwei</p>
    </div>
  )
}

export default Footer