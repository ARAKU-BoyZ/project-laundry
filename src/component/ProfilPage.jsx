// Pages with params agar link dinamis
import React from "react";
import { useParams } from "react-router-dom";



const ProfilPage = () => {
    const params = useParams()

    return (
        <div className="h-screen flex justify-center items-center flex-col w-screen ">
            <h1 className="text-3xl font-semibold">Profil Page</h1>
            <p className="text-xl font-bold text-red-500">{params.username}</p>
        </div>
    )
}

export default ProfilPage

// class ProfilPage extends React.Component {
//     render() {
//         return (
//             <div className="h-screen flex justify-center items-center flex-col w-screen ">
//                 <h1 className="text-3xl font-semibold">Profil Page</h1>
//                 <p className="text-xl font-bold text-red-500">{this.props.username}</p>
//             </div>
//         )
//     }
// }

// export default withParams(ProfilPage);