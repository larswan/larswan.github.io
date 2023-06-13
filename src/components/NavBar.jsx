import { Link } from 'react-router-dom';
// import router from App
import {router} from '../App';

const NavBar = () => {
    
    
    return (
        <div className="navBar">
            <Link to="/" className="siteTitle">SWAN THE GOOSE</Link>
            <h3>Websites</h3>
            <h3>Art</h3>
            <h3>The Swan</h3>
            <h3>Bio</h3>
        </div>
    )
}

export default NavBar