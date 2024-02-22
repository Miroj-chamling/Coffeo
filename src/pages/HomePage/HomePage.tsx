import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"

import "./homepage.css"
const HomePage = () => {
  return (
   <>
        <div className="homepage">
            <Navbar/>
            <Banner/>
        </div>
    </>
  )
}

export default HomePage