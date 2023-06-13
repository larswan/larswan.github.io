import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate= useNavigate()
    
    
    return (
        <div className="navBar">
            <h3 onClick={()=>navigate("/")} className="siteTitle">SWAN THE GOOSE</h3>
            <h3 onClick={() => navigate("/websites")}>Websites</h3>
            <h3 onClick={()=>navigate("/art")}>Art</h3>
            <h3 onClick={() => navigate("/swantogoose")}>The Swan</h3>
            <h3 onClick={()=>navigate("/bio")}>Bio</h3>
        </div>
    )
}

export default NavBar