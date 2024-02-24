import { useNavigate } from "react-router-dom";
import Logo from "../miscellaneous/Logo";
import "./Navbar.css";

import { ShoppingCart, Search } from "lucide-react"


const Navbar = () => {
    const navigate = useNavigate(); 
    const handleClick =()=> {
        navigate("/login");
    }

  return (
            <>
            <div className="navbar">
            <Logo/>
                <div className="links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Special Offers</a></li>
                    <li><a href="">Products</a></li>
                </div>
            <div className="functionalities">
                <div className="search" >
                    <Search height={20}/>
                </div>
                <div className="cart"> 
                <ShoppingCart height={20}/>
                </div>
                <div className="login-btn" onClick={handleClick}>Login</div>
            </div>
            </div>
            </>
)
}

export default Navbar