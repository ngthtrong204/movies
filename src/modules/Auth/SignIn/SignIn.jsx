import React from 'react'
import style from "../Sign.module.scss"
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../../slices/userSlices'



function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignUp = () => {
    //Hàm chuyển hướng sang form đăngký
    navigate("/signup")
  }

  const { register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: 'onTouched',
  })

  const onSubmit = (values) => {
    dispatch(signin(values));
    console.log(values);
  }
  const onError = (error) => {
    console.log(error);
  }
  const { isLoading, error,user } = useSelector((state) => state.user)

if(user){
  return <Navigate to='/'></Navigate>
}

  return (
    <div className={`bg-white ${style.main}`} >
      <h1 className={style.title}>Đăng nhập</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={`input-group  mb-3 ${style.input}`} >
          <input  {...register("taiKhoan")} className={`form-control  `} placeholder="Tài khoản" />
        </div>
        <div className={`input-group mb-3 ${style.input}`} >
          <input {...register("matKhau")} type='password' className={`form-control `} placeholder="Mật khẩu" />
        </div>
        {error && 
        <p className={style.smallText}>*{error}</p>}
        <button disabled={isLoading} className='btn btn-success ms-auto d-block my-3'>Đăng nhập</button>
      </form>
      <a onClick={handleSignUp}><p className={style.signup}>Bạn chưa có tài khoản?/Đăng ký tài khoản</p></a>
    </div>
  )
}

export default SignIn