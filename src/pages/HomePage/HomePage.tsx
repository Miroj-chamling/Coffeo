import Footer from "../../components/Footer"
import Home from "../../components/Home"
import Recent from "../../components/RecentProducts"
import SpecialProducts from "../../components/SpecialProducts"
import Testimonials from "../../components/Testimonials"
const HomePage = () => {
  return (
   <> 
    <Home/>
    <Recent/>
    <SpecialProducts/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default HomePage