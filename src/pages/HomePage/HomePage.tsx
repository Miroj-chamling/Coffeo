import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Recent from "../../components/RecentProducts"
import SpecialProducts from "../../components/SpecialProducts"
import Testimonials from "../../components/Testimonials"
const HomePage = () => {
  return (
   <div className=" overflow-hidden">  
      <Navbar/>
      <Banner/>
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