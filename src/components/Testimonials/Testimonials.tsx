import CoffeBeansImg from "../../assets/coffee/coffebeans.jpeg"
import ExploreBtn from "../miscellaneous/ExploreBtn"
import testimoni from "../../assets/testimonie.jpg"
import Subscribe from "../miscellaneous/Subscribe"

const Testimonials = () => {
  return (
    <div className=" mt-12 md:w-auto w-screen overflow-hidden">
        <div className=" md:flex block items-start" >
          <div className=" basis-2/5 relative "> 
            <img src={CoffeBeansImg} alt=""/>
            <div className=" min-w-fit h-20 backdrop-blur-sm  bg-white/70 absolute rounded-full right-2 top-80 flex p-2">
              <img src={testimoni} alt="" width={60} className=" rounded-full object-cover "/>
            <div className=" ml-3">
                <div className="uname font-bold text-sm">Brooklyn Simons</div>
                <div className=" overflow-ellipsis text-sm font-light">Coffeo is one of the best online coffee shop</div>
                <div className=" text-sm font-light">Customer care is really good.</div>
            </div>
            </div>
          </div>
            <div className=" flex flex-col  w-full md:px-20 px-4 py-4 basis-3/5 ">  
            <div className=" md:text-5xl text-2xl  text-orange-950 font-medium">We care about the quality of</div>
            <div className=" md:text-5xl text-2xl text-orange-950 font-medium">our <span className=" md:text-5xl text-2xl text-orange-950 font-extrabold">products</span> </div>

            <div className=" mt-6 md:text-xl text-md text-orange-950">Drinking coffee is one of the most global things you can do each days here I can spend a long and comfortable time with this workspace tacilities. </div>

            <div className=" md:grid block grid-rows-2 grid-cols-2 content-center mt-12 gap-x-20 gap-y-12">
                   <div className=" flex items-center justify-start cursor-pointer ">
                     <div className=" rounded-full p-6 bg-primary">
                     <i className="fa fa-comments-o text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">Active Community</div>
                        <div className=" text-orange-950">You can reach out whenever you want!</div>
                     </div>
                    </div> 


                    <div className=" flex items-center justify-start cursor-pointer md:mt-0 mt-6">
                     <div className=" rounded-full p-6 bg-primary">
                     <i className="fa fa-cube text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">Best product design</div>
                        <div className=" text-orange-950">We worked a lot to make you have a good exprience</div>
                     </div>
                    </div> 


                    <div className=" flex items-center justify-start cursor-pointer md:mt-0 mt-6">
                     <div className=" rounded-full p-6 bg-primary">
                     <i className="fa fa-diamond text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">Premium quality </div>
                        <div className=" text-orange-950">A premium quality coffee is what our customers deserve</div>
                     </div>
                    </div> 


                    <div className=" flex items-center justify-start cursor-pointer md:mt-0 mt-6" >
                     <div className=" rounded-full p-6 bg-primary ">
                     <i className="fa fa-leaf text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">The best material</div>
                        <div className=" text-orange-950">Our product is made by best materials</div>
                     </div>
                    </div> 
            </div>     

            <div className=" mt-12 md:block hidden "><ExploreBtn/></div>

            </div>
        </div>

     <div className="mt-12 w-full">
      <Subscribe/>
     </div>
    </div>
  )
}

export default Testimonials