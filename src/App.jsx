import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import LoginPage from "./pages/auth/LoginPage"
import ProfilPage from "./component/ProfilPage"
import SignUp from "./pages/auth/SignUp"
import Dashboard from "./pages/Dashboard"
import WishListPage from "./pages/WishListPage"
import { Provider } from "react-redux"




function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<SignUp />} path="Sign-Up" />
        <Route element={<Dashboard />} path="/Dashboard" />
        <Route element={<ProfilPage />} path="/Profile/:username"/>
        <Route element={<WishListPage />} path="/wishlist" />
      </Routes>
    </>
  )
}

export default App
