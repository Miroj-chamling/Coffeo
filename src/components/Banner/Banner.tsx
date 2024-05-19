import coffeeImg from "../../assets/banner/coffeee.png"
import ExploreBtn from "../miscellaneous/ExploreBtn";


import "./banner.css"
const Banner = () => {


  return (
    <div className=" mt-4 overflow-hidden bg-red-100">
    <div className="w-full flex xl:flex-row xl:items-start items-center flex-col justify-center  xl:pl-24 px-12 xl:pt-40 pt-20">
    <div className="xl:flex-1 xl:w-auto xl:mx-auto h-fit  py-2">
      <div className="coffeo text-background xl:text-8xl text-5xl font-medium" >COFFEO.</div>
      <div className="xl:text-md text-4xl font-semibold xl:mt-2">An online coffee store</div>
      <div className="xl:text-lg text-xs mt-6 xl:font-medium">
          <div>Straight to your doorstep. We dont roast our coffee beans until we have your order.</div>
          <div>Every order is roasted and shipped the same day.</div>
      </div>


    <div className=" my-5">
    <ExploreBtn/>
    </div>
      <div className="flex text-center mt-8">
        <div className=" xl:text-2xl text-sm font-medium">
          <p>Our Products</p>
          <p>+1000</p>
        </div>
    <div className=" border-l-[1px] border-black mx-6" ></div>
        <div className=" xl:text-2xl text-sm font-medium">
        <div>Total Sales</div>
          <div >+340K</div>
        </div>
      </div>
    </div>
      <div className="xl:block xl:max-w-[700px] max-w-[360px] relative -rotate-[26deg] bottom-[100px] right-[5%] xl:mt-0 mt-24 ">
        <img className="coffee-img w-full h-full" src={coffeeImg} alt="" />
      </div>

  </div>
  </div>
  )
};

export default Banner;
