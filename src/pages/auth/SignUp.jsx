import { Card, Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { label } from "framer-motion/client";




const SignUp = () => {
    // State untuk menyimpan data
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    

    // Data pada role
    const roles = [
        {label: "employee", value:"employee"},
        {label: "admin", value:"admin"},
    ]


    // Fungsi menangani perubahan
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    

    // Fungsi menangani perubahan
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        
    }
    

    // Fungsi menangani perubahan
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)    
    }


    // Fungsi menangani perubahan
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    // Fungsi menangani perubahan
    const handleRoleChange = (e) => {
        setRole(e.target.value)
    }


    const handleSubmit = async (e) => {
        // console.log(handleSubmit)
        e.preventDefault()
        try {
            const response = await axios.post('/api/v1/auth/register',
                {
                    "name": name,
                    "email": email,
                    "username": username,
                    "password": password,
                    "role": role,
                }
            )
            localStorage.setItem('id', response.data.data.id)
            console.log(handleSubmit)
            navigate('/')
        }catch (error) {
            setIsLoading(false)
            setErrorMessage('Daftar gagal')
        }

    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-80 p-6 bg-white shadow-lg">
                <h2 className="text-center text-2xl text-black font-bold mb-4">Daftar</h2>
                <form onSubmit={handleSubmit}
                className="space-y-4">
                    <div>
                        <Input
                         label="Name"
                         fullWidth
                         value={name}
                         onChange={handleNameChange}
                         type="text"
                         required
                         placeholder="Enter your Name" />
                    </div>
                    <div>
                        <Input
                         label="Email"
                         fullWidth
                         value={email}
                         onChange={handleEmailChange}
                         type="text"
                         required
                         placeholder="Enter your Email" />
                    </div>
                    <div>
                        <Input
                         label="Username"
                         fullWidth
                         value={username}
                         onChange={handleUsernameChange}
                         type="text"
                         required
                         placeholder="Enter your Username" />
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
                    <div>
                        <Select
                        items={roles}
                        label="Role"
                        onChange={handleRoleChange}
                        placeholder="Enter your Role">
                        {roles.map((role) => (
                            <SelectItem key={role.value} value={role.value}>{role.label}
                            </SelectItem>
                        ))}
                        </Select>
                    </div>
                    {errorMessage && <h1>{errorMessage}</h1>}
                    <Button 
                     type="submit"
                     color="primary"
                     disabled={isLoading}
                     fullWidth
                     className="mt-4">
                        {isLoading ? 'Pendaftaran gagal': 'Daftar'}
                        </Button>
                        <h4>Login? <Link to="/" className="text-blue-500">Login</Link></h4>
                </form>
            </Card>
        </div>
    )
}

export default SignUp;