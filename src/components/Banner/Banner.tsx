import coffeeImg from "../../assets/banner/coffeee.png"
import ExploreBtn from "../miscellaneous/ExploreBtn";


import "./banner.css"
const Banner = () => {


  return (
    <div className="min-h-[750px] bg-slate-200 xl:mt-16">
    <div className="xl:w-[1500px] xl:mx-auto xl:flex block  mt-10 xl:px-0 px-12 xl:pt-28 pt-12  overflow-hidden">
    <div className="xl:w-[1440px]  xl:mx-auto h-fit  py-2 ">
      <div className="coffeo text-background xl:text-8xl text-5xl font-medium" >COFFEO.</div>
      <div className="xl:text-7xl text-4xl font-semibold xl:mt-2">An online coffee store</div>
      <div className="xl:text-xl text-sm mt-6 font-medium">
          <div>Straight to your doorstep. We dont roast our coffee beans until we have your order.</div>
          <div>Every order is roasted and shipped the same day.</div>
      </div>


    <div className=" my-5">
    <ExploreBtn/>
    </div>
      <div className="flex text-center mt-8">
        <div className=" xl:text-2xl text-xl font-medium">
          <p>Our Products</p>
          <p>+1000</p>
        </div>
    <div className=" border-l-[1px] border-black mx-6" ></div>
        <div className=" xl:text-2xl text-xl font-medium">
        <div>Total Sales</div>
          <div >+340K</div>
        </div>
      </div>
    </div>
      <div className=" xl:block w-[1000px] relative -rotate-[26deg] bottom-[100px] right-[5%] ">
        <img className="coffee-img w-full h-full" src={coffeeImg} alt="" />
      </div>

  </div>
  </div>
  )
};

export default Banner;
