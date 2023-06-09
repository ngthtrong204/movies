import axiosClient from "./axiosClient";

export const apiGetBanner = async () => {
   const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachBanner")
   return data
}


export const apiGetMovies = async () => {
   const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
         maNhom: "GP10",
      },
   });
   return data;
};

export const apiGetShowtime = async () => {
   const { data } = await axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
         maNhom: "GP10",
      },
   });
   return data;
};

export const apiGetMovieInfo = async (movieId) => {
   const { data } = await axiosClient.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
         MaPhim: movieId,
      },
   });
   return data;
};
export const apiGetMovieTime = async (movieId) => {
   const { data } = await axiosClient.get("/QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
         MaPhim: movieId,
      },
   });
   return data;
};

