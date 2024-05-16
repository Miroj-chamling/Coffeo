import Footer from "../../components/Footer"
import Home from "../../components/Home"
import Recent from "../../components/RecentProducts"
import SpecialProducts from "../../components/SpecialProducts"
import Testimonials from "../../components/Testimonials"
const HomePage = () => {
  return (
   <div>  
    <Home/>
       <div className=" w-[1400px] my-0 mx-auto"> 
        <Recent/>
        <SpecialProducts/>
        <Testimonials/>
        </div>
    <Footer/>
    </div>
  )
}

export default HomePage