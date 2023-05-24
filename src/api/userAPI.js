import axiosClient from "./axiosClient";

export const apiSignin = async (values) => {
   const { data } = await axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
   return data;
};

export const apiSignup = async (values) => {
   const payload = { ...values, maNhom: "GP10" };
   const { data } = await axiosClient.post("/QuanLyNguoiDung/DangKy", payload)
   return data
}