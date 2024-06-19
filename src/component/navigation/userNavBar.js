import { useNavigate } from "react-router-dom"

const UserNavBar = () =>{
    const navigate = useNavigate()
    return(
        <>
        <div onClick={() => navigate("/")}>
        home
        </div>
        <div onClick={() => navigate("/services")}>
        services
        </div>
        <div onClick={() => navigate("/contact-us")}>
        contact us
       </div>
       </>
    )
}
export default UserNavBar