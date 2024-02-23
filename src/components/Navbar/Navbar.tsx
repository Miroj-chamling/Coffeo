import "./Navbar.css"

import { ShoppingCart, Search } from "lucide-react"

const Navbar = () => {
  return (
            <>
            <div className="navbar">
                <div className="logo">Coffeo</div>
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
                <div className="login">Login</div>
            </div>
            </div>
            </>
)
}

export default Navbar