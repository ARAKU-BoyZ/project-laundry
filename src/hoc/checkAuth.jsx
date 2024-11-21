import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const IsAuth = (WrappedComponent) => {
    const AuthHOC = (props) => {
        const authData = useSelector((state) => state.auth.authData)

        if (!authData) {
            return <Navigate to="/" />
        }
        return <WrappedComponent {...props} />
    }
    return AuthHOC
}

const NotAuth = (WrappedComponent) => {
    const AuthHOC = (props) => {
        const authData = useSelector((state) => state.auth.authData)

        if (authData) {
            return <Navigate to="/Sign-Up" />
        }
        return <WrappedComponent {...props} />
    }
    return AuthHOC
}



export { IsAuth, NotAuth }