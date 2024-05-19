// import { useNavigate } from "react-router-dom";
import Logo from "../miscellaneous/Logo";
import { Menu, X } from 'lucide-react';

import { ShoppingCart, Search } from "lucide-react"
import { useEffect, useState } from "react";
import LoginBtn from "../miscellaneous/LoginBtn";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const navigate = useNavigate(); 

    // const handleLogin =()=> {
    //     navigate("/login");
    // }

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
      }, [isOpen]);

  return (
            <nav className="fixed flex h-[10%] justify-between items-center text-black z-50 w-full md:px-24 px-[6vw] py-2 bg-white left-0 top-0 drop-shadow-[0_10px_30px_rgba(255,94,0,0.15)]">
           <Logo/>
            <div className={`bg-white md:static absolute md:w-auto w-full md:min-h-fit min-h-[90vh] left-0  md:border-0 border-t-2 flex items-start  md:p-0 px-6 pt-10 ${isOpen ? 'top-[100%]' : 'top-[-3000%]'}`}>
                {/* <div className="bg-white md:static absolute md:w-auto w-16 md:min-h-fit min-h-[70vh] left-0 top-[900%] md:border-0 border-t-2 flex items-center px-5"> */}
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-10 md:text-lg">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Special Offers</a></li>
                    <li><a href="#">Products</a></li>
                    <div className=" md:hidden">  <LoginBtn/>  </div> 
                </ul>
                </div>
            <div className="hidden md:flex gap-8 items-center">
                <div className="search" >
                    <Search className="cursor-pointer" height={20}/>
                </div>
                <div className="cart"> 
                <ShoppingCart className=" cursor-pointer" height={20}/>
                </div>
                <LoginBtn />
                {/* <div className="login-btn" onClick={handleClick}>Login</div> */}
            </div>
            <div className="md:hidden flex">
               {isOpen? <X  onClick={toggleMenu} className=" text-6xl cursor-pointer"/>: <Menu onClick={toggleMenu} className=" text-6xl cursor-pointer"/>}
               
            </div>
            </nav>
)
}

export default Navbar