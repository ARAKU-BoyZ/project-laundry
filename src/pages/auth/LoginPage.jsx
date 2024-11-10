import { Button, Card, Input, Spacer, } from "@nextui-org/react"
import { useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {
    // State untuk menyimpan email dan password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    // Fungsi untuk menangani perubahan email
    const handleEmailChange = () => {
        setEmail()
    }

    // Fungsi untuk menangani perubahan password
    const handlePasswordChange = () => {
        setPassword()
    }

    // Fungsi untuk menangani submit form 
    const handleSubmit = async () => {
        setIsLoading(true) // Mulai Loading saat tombol submit ditekan
        setErrorMessage("") // Reset pesan error

        try {
            // Kirim data login ke endpoint Login
            const response = await axios.post('/api/v1/auth/login',
                {
                    "username": username,
                    "password": password,
                }
            ).then ((sukses) => {
                localStorage.setItem('token', sukses.data.data.token)
                
            })
            .catch ((error) =>{
                setErrorMessage('Login gagal. Cek username atau password Anda.')
                console.error('Error Login', error)
            })
        }finally {
            setIsLoading(false) // Matikan Loading saat permintaan selesai
        }
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-80 p-6 bg-white shadow-lg">
                <h2 className="text-center text-2xl text-black font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                         label="email"
                         fullWidth
                         value={email}
                         onChange={handleEmailChange}
                         type="email"
                         required
                         placeholder="Enter your email / username" />
                    </div>
                    <div>
                        <Input
                         label="Password"
                         fullWidth
                         value={password}
                         onChange={handlePasswordChange}
                         type="password"
                         required
                         placeholder="Enter your Password" />
                    </div>
                    {errorMessage && <h1>{errorMessage}</h1>}
                    <Button 
                     type="submit"
                     color="primary"
                     disabled={isLoading}
                     fullWidth
                     className="mt-4">
                        {isLoading ? 'Logging In ...': 'Masuk'}
                        </Button>
                </form>
            </Card>
        </div>

        // <div className="flex items-center justify-center h-screen bg-gray-100">
        //     <Card className="w-96 p-6 shadow-lg">
        //         <h3 className="font-bold text-center mb-6">Login</h3>
        //         <Input className="mb-3" type="email" label="Email"
        //         />
        //         <Input label="Password" className="mb-6" />
        //         <Button>Login</Button>
        //         <Spacer y={1} />
        //         <h4>Belum punya akun? <Link to="/Sign-Up" className="text-blue-500">Daftar</Link></h4>
        //     </Card>
        // </div>
    )
}

export default LoginPage