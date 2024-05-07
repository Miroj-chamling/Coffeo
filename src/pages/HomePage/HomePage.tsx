import Footer from "../../components/Footer"
import Home from "../../components/Home"
import Recent from "../../components/RecentProducts"
import SpecialProducts from "../../components/SpecialProducts"
import Testimonials from "../../components/Testimonials"
const HomePage = () => {
  return (
   <div className="mx-32"> 
    <Home/>
    <Recent/>
    <SpecialProducts/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default HomePage