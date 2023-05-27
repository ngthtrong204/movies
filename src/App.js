import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";

const Home = lazy(() => import("./modules/Home/Home"))
const MovieDetails = lazy(() => import("./modules/MovieDetails/MovieDetail"))
const SignIn = lazy(() => import("./modules/Auth/SignIn/SignIn"))
const SignUp = lazy(() => import("./modules/Auth/SignUp/SignUp"))
// const ModalTrailer =lazy(()=>import("./components/ModalTrailer/ModalTrailer"))


function App() {
  // const location = useLocation()
  // console.log(location);
  return (
    <Suspense fallback={<h1>Loading</h1>}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />

          </Route>
          <Route path="/" element={<AuthLayout></AuthLayout>}>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
          </Route>
        </Routes>



      </BrowserRouter>
    </Suspense>

  )
}

export default App;
