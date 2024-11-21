import { axiosInstance } from "../../lib/axios";


export const login = (authData) => ({
    type: "LOGIN",
    payload: {authData},
})


export const refreshToken = () => {
    const async (dispatch, getState) => {
        const dataAuth = getState().auth.authData
        try {
            if (!dataAuth.token) {
                console.log("No token found!")
                return;
            }
            const response = await axiosInstance("/auth/refresh-token", {
                headers: {
                    Authorization : `Bearer ${dataAuth.token}`
                }
            })
            const newToken = response.data.data.token;
            if (response.data.status.code === 201) {
                const newData = {...dataAuth, token: newToken}
                dispatch(login(newData))
                console.log("Token refreshed")
            } else {
                console.log("failed to refresh token")
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}