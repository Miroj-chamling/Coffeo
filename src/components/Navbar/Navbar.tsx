import "./Navbar.css"

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
            <div className="auth">
            <div className="auth-btn">Login</div>
                <div className="auth-btn">Signup</div>
            </div>
            
            </div>
            </>
)
}

export default Navbar