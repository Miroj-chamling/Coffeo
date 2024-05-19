import coffeeImg from "../../assets/coffee/coffee-sub.png"
import coffeeBeans from "../../assets/coffee/beans.png"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"

const Subscribe = () => {
  return (
    <div className=" min-h-56  rounded-3xl flex bg-gradient-to-l from-subscribe1 to-subscribe-2 items-center justify-start relative overflow-hidden">
        <div className=" absolute md:-left-44 -left-56">
          <img src={coffeeImg} alt="" className=" h-80"/>
        </div>
        <div className=" absolute w-1/2 left-2/4 top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center md:pl-20 md:pr-20">
          <div className=" md:text-4xl text-xl font-extrabold text-orange-950 mb-3">Join in and get <span className=" text-background">%25 OFF!</span></div>
          <div className=" md:text-lg text-sm font-light">Subscribe to out newsletter and get %25 OFF discount code.</div>
          <div className=" md:flex items-center block mt-8 gap-3">
          <InputGroup>
          <InputLeftElement > 
          <EmailIcon color={"grey"} fontSize={20} />
            </InputLeftElement>
          <Input className=" md:px-10 md:py-5"  variant={"outline"} background={"white"} color={"#a8866f"} fontWeight={600} borderRadius={26} placeholder="Email Address" _placeholder={{color:"#a8866f", fontWeight: "600"}} />
          </InputGroup>
            <div className=" text-center md:mt-0 mt-2 basis-1/5 gap-2 md:px-8 px-4 md:py-2 py-1  bg-background text-white rounded-full md:text-base text-sm cursor-pointer w-max font-semibold">
    subscribe
      </div>  
          </div>
        </div>
       <div className=" absolute  md:-right-24 -right-32 -bottom-20 ">
          <img src={coffeeBeans} alt="" className=" md:h-60 h-52"/>
        </div> 
    </div>
  )
}

export default Subscribe