// import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
// import React, { useEffect } from "react";
// import { toast } from 'sonner'
// import { Controller, useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from '@hookform/resolvers/zod'
// import { axiosInstance } from "../../lib/axios";
// import { useNavigate } from 'react-router-dom'



// const signUpFormschema = z.object({
//     email: z.string().email("Format email belum sesuai"),
//     // username: z.string().regex(/^[0-9.+$/], "Username harus 4 karakter atau lebih"),
//     password: z.string().min(8, "Password harus lebih dari 8 karakter"),
//     nama: z.string().min(5, "Nama Harus Lebih dari 5 karakter ")
// })




// const SignUp = () => {
//     const navigate = useNavigate()
//     // handle inputan atau form
//     const form = useForm({
//         defaultValues: {
//             name: "",
//             email: "",
//             username: "",
//             password: "",
//         },
//         resolver: zodResolver(signUpFormschema),
//     })

// const registerUser = async (data) => {
//     try {
//         const userData = { ...data, role: "employee" }
//         const response = await axiosInstance.post("/auth/register", userData)
//         toast.success("Register Berhasil")
//         if (response.status === 201) {
//             setTimeout(() => {
//                 navigate("/")
//             }, 1000)
//         }
//         console.log(registerUser)
//     } catch (error) {
//         toast.error("Register Failed")
//         console.log(registerUser)
//     }
// }

    

//     // zod untuk memvalidasi form
//     return (
//         <div className="flex h-screen items-center justify-center">
//             <Card className="w-[300px]">
//                 <CardHeader className="font-bold text-lg">Sign Up</CardHeader>
//                 <Divider />
//                 <CardBody>
//                     <form onSubmit={form.handleSubmit(registerUser)} className="flex flex-col gap-4">
                    
//                     <Controller
//                     //Properties
//                      name="name"
//                     // Props control untuk mengendalikan form
//                      control={form.control}
//                     // Prop untuk menampilkan ui
//                      render={({field, fieldState}) => {
//                         return (
//                             <Input {...field}
//                             label="Nama"
//                             size="sm"
//                             isInvalid={Boolean(fieldState.error)}
//                             errorMessage={fieldState.error?.message}
//                              />
//                         )  
//                      }}/>

//                     <Controller
//                     //Properties 
//                      name="email"
//                     // Props control untuk mengendalikan form
//                      control={form.control}
//                     // Prop untuk menampilkan ui
//                      render={({ field, fieldState }) => {
//                         return (
//                         <Input {...field}
//                         type="email"
//                         label="Email"
//                         size="sm"
//                         isInvalid={Boolean(fieldState.error)}
//                         errorMessage={fieldState.error?.message}
//                          />
//                         )
//                      }}/>

//                     <Controller
//                     //Properties
//                      name="username"
//                     // Props control untuk mengendalikan form
//                      control={form.control}
//                     // Prop untuk menampilkan ui
//                      render={({field, fieldState}) => {
//                         return (
//                             <Input {...field}
//                             label="Username"
//                             size="sm" 
//                             isInvalid={Boolean(fieldState.error)}
//                             errorMessage={fieldState.error?.message}
//                              />
//                         )
//                      }}/>

//                     <Controller
//                     //Properties
//                      name="password"
//                     // Props control untuk mengendalikan form
//                      control={form.control}
//                     // Prop untuk menampilkan ui
//                      render={({field, fieldState}) => {
//                         return (
//                             <Input {...field}
//                             type="password"
//                             label="Password"
//                             size="sm"
//                             isInvalid={Boolean(fieldState.error)}
//                             errorMessage={fieldState.error?.message}
//                              />
//                         )  
//                      }}/>

//                     <Button type="submit" color="primary">
//                         Sign Up
//                     </Button>
//                     </form>
//                 </CardBody>
//             </Card>
//         </div>
//     )
// }


// export default SignUp




























import { Card, Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner";




const SignUp = () => {
    // State untuk menyimpan data
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
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
            navigate('/')
            toast.success("Registrasi Berhasil")
        }catch (error) {
            setIsLoading(false)
            toast.error('Daftar gagal')
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