import { axiosInstance } from "../../lib/axios"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"
import { Input, Button } from "@nextui-org/react"
import { z } from "zod"
import { Link } from "react-router-dom"
import { NotAuth } from "../../hoc/checkAuth"
import { jwtDecode } from "jwt-decode"




const validateForm = z.object({
    username: z.string().min(5, "Username must be at least 5 characters"),
    password: z.string().min(5, "Password must be at least 5 characters"),
})



const LoginPage = () => {
    const dispatch = useDispatch()

    const { control, handleSubmit, formState: { isValid } } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(validateForm),
        mode: "onChange",
    })

    const LoginUser = async (data) => {
        try {
            const response = await axiosInstance.post("/api/v1/auth/login", data)
            const token = response.data.data.token
            const decoded = jwtDecoded(token)
            const combined = { ...decoded, token }

            if (response.data.status.code === 201) {
                toast.success("Login Succes")
                setTimeout(() => {
                   dispatch(login(combined)) 
                }, 1000);
            } else {
                toast.error("invalid username or Password")
            }
        } catch (error) {
            if (error?.response?.data?.status) {
                toast.error("Invalid username or Password")
            } else {
                toast.error("Server error")
            }
            console.log(error.response)
        }
    }

    useEffect(() => {
        toast.info("Akun Demo Role Admin, Usernam: admin, Password: password")
    }, [])

    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-80 p-6 bg-white shadow-lg">
            <h2 className="text-center text-2xl text-black font-bold mb-4">Login</h2>
                 <form onSubmit={handleSubmit(LoginUser)} className="space-y-4">
                     <div>
                        <Controller 
                         control={control}
                         name="username"
                         render={({ field, fieldState }) => (
                            <Input {...field}
                            type="text"
                            placeholder="Enter username"
                            isInvalid={Boolean(fieldState.error)} />
                        )}/>
                     </div>
                     <div>
                        <Controller
                         control={control}
                         name="password"
                         render={({ field, fieldState }) => (
                             <Input
                             type="password"
                             placeholder="Enter your Password"
                             isInvalid={Boolean(fieldState.error)} />
                            )} />
                            {fieldState.error && fieldState.error.message}
                     </div>
                     <Button 
                      type="submit"
                      color="primary">
                        Masuk
                      </Button>
                         <h4>Belum punya akun? <Link to="/Sign-Up" className="text-blue-500">Daftar</Link></h4>
                 </form>
             </Card>
         </div>
    )
}


export default NotAuth(LoginPage)











// import { Button, Card, Input } from "@nextui-org/react"
// import { useState } from "react"
// import axios from "axios"
// import { Link, useNavigate } from "react-router-dom"

// const LoginPage = () => {
//     // State untuk menyimpan email dan password
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [errorMessage, setErrorMessage] = useState("")
//     const [isLoading, setIsLoading] = useState(false)
//     const navigate = useNavigate()


//     // Fungsi untuk menangani perubahan email
//     const handleUserNameChange = (e) => {
//         setUsername(e.target.value)

//     }

//     // Fungsi untuk menangani perubahan password
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value)
//     }

//     // Fungsi untuk menangani submit form 
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         // cara pertama mendapatkan data form tanpa menggunakan useState
//         // console.log(e.targer[0].value)
//         // console.log(e.target[1].value)

//         // cara kedua menggunakan useState
//         setIsLoading(true) // Mulai Loading saat tombol submit ditekan
//         setErrorMessage("") // Reset pesan error

//         try {
//             // Kirim data login ke endpoint Login
//             const response = await axios.post('/api/v1/auth/login',
//                 {
//                     "username": username,
//                     "password": password,
//                 }
//             )
//             localStorage.setItem('token', response.data.data.token)
//             navigate('/Dashboard')
//         }catch (error) {
//             setIsLoading(false) // Matikan Loading saat permintaan selesai
//             setErrorMessage('Login gagal. Cek username atau password Anda.')
//         }
//     };


//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100">
//             <Card className="w-80 p-6 bg-white shadow-lg">
//                 <h2 className="text-center text-2xl text-black font-bold mb-4">Login</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <Input
//                          label="Username"
//                          fullWidth
//                          value={username}
//                          onChange={handleUserNameChange}
//                          type="text"
//                          required
//                          placeholder="Enter your email / username" />
//                     </div>
//                     <div>
//                         <Input
//                          label="Password"
//                          fullWidth
//                          value={password}
//                          onChange={handlePasswordChange}
//                          type="password"
//                          required
//                          placeholder="Enter your Password" />
//                     </div>
//                     {errorMessage && <h1>{errorMessage}</h1>}
//                     <Button 
//                      type="submit"
//                      color="primary"
//                      disabled={isLoading}
//                      fullWidth
//                      className="mt-4">
//                         {isLoading ? 'Logging In ...': 'Masuk'}
//                         </Button>
//                         <h4>Belum punya akun? <Link to="/Sign-Up" className="text-blue-500">Daftar</Link></h4>
//                 </form>
//             </Card>
//         </div>

//         // <div className="flex items-center justify-center h-screen bg-gray-100">
//         //     <Card className="w-96 p-6 shadow-lg">
//         //         <h3 className="font-bold text-center mb-6">Login</h3>
//         //         <Input className="mb-3" type="email" label="Email"
//         //         />
//         //         <Input label="Password" className="mb-6" />
//         //         <Button>Login</Button>
//         //         <Spacer y={1} />
//         //     </Card>
//         // </div>
//     )
// }

// export default LoginPage