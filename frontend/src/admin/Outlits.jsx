import { Outlet, Navigate } from "react-router-dom"


const AdminOutlits = () => {
    const admin = true


    return (


        admin ? <Outlet /> : <Navigate to="/login" />

    )
}

export default AdminOutlits