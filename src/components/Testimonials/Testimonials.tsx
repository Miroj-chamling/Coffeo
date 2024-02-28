import CoffeBeansImg from "../../assets/coffee/coffebeans.jpeg"
import ExploreBtn from "../miscellaneous/ExploreBtn"
import testimoni from "../../assets/testimonie.jpg"
import Subscribe from "../miscellaneous/Subscribe"

const Testimonials = () => {
  return (
    <div className=" w-screen h-min flex flex-col items-center">
        <div className=" flex items-start w-screen mt-12 " >
          <div className=" basis-2/5 w-full relative"> 
            <img src={CoffeBeansImg} alt=""/>
            <div className=" w-max h-20 backdrop-blur-sm  bg-white/70 absolute rounded-full right-3 top-96 flex p-2">
              <img src={testimoni} alt="" width={60} className=" rounded-full object-cover "/>
            <div className=" ml-3">
                <div className="uname font-bold text-sm">Brooklyn Simons</div>
                <div className=" overflow-ellipsis text-sm font-light">Coffeo is one of the best online coffee shop</div>
                <div className=" text-sm font-light">Customer care is really good.</div>
            </div>
            </div>
          </div>
            <div className=" flex flex-col ml-36 w-full pr-20 basis-3/5 ">  
            <div className=" text-5xl text-orange-950 font-medium">We care about the quality of</div>
            <div className=" text-5xl text-orange-950 font-medium">our <span className=" text-5xl text-orange-950 font-extrabold">products</span> </div>

            <div className=" mt-6 text-xl text-orange-950">Drinking coffee is one of the most global things you can do each days here I can spend a long and comfortable time with this workspace tacilities. </div>

            <div className=" grid grid-rows-2 grid-cols-2 content-center mt-12 gap-x-20 gap-y-12">
                   <div className=" flex items-center justify-start cursor-pointer">
                     <div className=" rounded-full p-6 bg-primary">
                     <i className="fa fa-comments-o text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">Active Community</div>
                        <div className=" text-orange-950">You can reach out whenever you want!</div>
                     </div>
                    </div> 


                    <div className=" flex items-center justify-start cursor-pointer">
                     <div className=" rounded-full p-6 bg-primary">
                     <i className="fa fa-cube text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">Best product design</div>
                        <div className=" text-orange-950">We worked a lot to make you have a good exprience</div>
                     </div>
                    </div> 


                    <div className=" flex items-center justify-start cursor-pointer">
                     <div className=" rounded-full p-6 bg-primary">
                     <i className="fa fa-diamond text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">Premium quality </div>
                        <div className=" text-orange-950">A premium quality coffee is what our customers deserve</div>
                     </div>
                    </div> 


                    <div className=" flex items-center justify-start cursor-pointer" >
                     <div className=" rounded-full p-6 bg-primary ">
                     <i className="fa fa-leaf text-4xl" aria-hidden="true"></i>
                        </div>   
                     <div className=" ml-3">
                        <div className=" text-base font-bold">The best material</div>
                        <div className=" text-orange-950">Our product is made by best materials</div>
                     </div>
                    </div> 
            </div>     

            <div className=" mt-8"><ExploreBtn/></div>

            </div>
        </div>

     <div className=" pr-20 pl-20 w-full">
      <Subscribe/>
     </div>
    </div>
  )
}

export default Testimonials