import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import style from "../Sign.module.scss"
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../../slices/userSlices'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
   taiKhoan: yup.string().required("Tài khoản không được để trống"),
   matKhau: yup
      .string()
      .required("Mật khẩu không được để trống")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "Mật khẩu phải có ít nhất 8 ký tự, 1 ký tự hoa, 1 ký tự thường, 1 ký tự số"),
   email: yup
      .string()
      .required("Email khoản không được để trống")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email không hợp lệ"),
   hoTen: yup.string().required("Họ tên không được để trống"),
   soDT: yup.number().required("SĐT không được để trống"),
})


function SignUp() {
   const dispatch = useDispatch()
   const { register,
      handleSubmit,
      formState: { errors }
   } = useForm({
      defaultValues: {
         taiKhoan: "",
         matKhau: "",
         hoTen: "",
         email: "",
         soDT: "",
      },
      mode: 'onTouched',
      resolver: yupResolver(schema)
   })
   const navigate = useNavigate()
   const handleSignIn = () => {
      //Hàm chuyển hướng sang form đăngký
      navigate("/signin")
   }
   const onSubmit = (values) => {
      dispatch(signup(values));
      console.log(values);

   }
   const onError = (error) => {
      console.log(error);
   }
   const { isLoading, error ,signUpDone} = useSelector(state => state.user)

if (signUpDone){
   return <Navigate to="/signin"></Navigate>
}

   return (
      <div className={`bg-white ${style.main}`} >
         <h1 className={style.title}>Đăng ký</h1>

         <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* input tài khoản  */}
            <div className={`input-group ${style.input}`} >
               <input {...register("taiKhoan")} className={`form-control d-block `} placeholder="Nhập tài khoản" />
            </div>
            {(error === "Tài khoản đã tồn tại!") &&
               <p className={` ${style.smallText}`}>*Tài khoản đã tồn tại</p>
            }
            {errors.taiKhoan && <p className={` ${style.smallText}`}>*{errors.taiKhoan.message}</p>}

            {/* input email  */}
            <div className={`input-group ${style.input}`} >
               <input {...register("email")} type='email' className={`form-control `} placeholder="Nhập email " />
            </div>
            {(error === "Email đã tồn tại!") &&
               <p className={` ${style.smallText}`}>*Email đã tồn tại</p>
            }
            {errors.email && <p className={` ${style.smallText}`}>*{errors.email.message}</p>}


            {/* input mật khẩu  */}
            <div className={`input-group ${style.input}`} >
               <input {...register("matKhau")} type='password' className={`form-control `} placeholder="Nhập mật khẩu" />
            </div>
            {errors.matKhau && <p className={` ${style.smallText}`}>*{errors.matKhau.message}</p>}


            {/* input ho ten  */}
            <div className={`input-group ${style.input}`} >
               <input {...register("hoTen")} type='text' className={`form-control `} placeholder="Nhập họ & tên " />
            </div>
            {errors.hoTen && <p className={` ${style.smallText}`}>*{errors.hoTen.message}</p>}


            {/* input SDT  */}
            <div className={`input-group ${style.input}`} >
               <input {...register("soDT")} type='number' className={`form-control `} placeholder="Nhập số điện thoại " />
            </div>
            {errors.soDT && <p className={` ${style.smallText}`}>*{errors.soDT.message}</p>}


            <button className='btn btn-success ms-auto d-block my-3'>Đăng ký</button>
         </form>
         <a disabled={isLoading} onClick={handleSignIn}><p className={style.signup}>Bạn đã có tài khoản?/Đăng nhập</p></a>
      </div>
   )
}

export default SignUp
