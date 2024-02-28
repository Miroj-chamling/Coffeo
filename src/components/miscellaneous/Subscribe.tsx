import coffeeImg from "../../assets/coffee/coffee-sub.png"
import coffeeBeans from "../../assets/coffee/beans.png"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"

const Subscribe = () => {
  return (
    <div className=" h-72 rounded-3xl flex bg-gradient-to-l from-subscribe1 to-subscribe-2 items-center justify-start relative overflow-hidden">
        <div className=" absolute -left-44">
          <img src={coffeeImg} alt="" className=" h-80"/>
        </div>
        <div className=" absolute w-1/2 left-2/4 top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center pl-20 pr-20">
          <div className=" text-4xl font-extrabold text-orange-950 mb-3">Join in and get <span className=" text-background">%25 OFF!</span></div>
          <div className=" text-lg font-light">Subscribe to out newsletter and get %25 OFF discount code.</div>
          <div className=" flex mt-8 gap-3">
          <InputGroup>
          <InputLeftElement paddingLeft={8} paddingTop={6} paddingBottom={6}> 
          <EmailIcon color={"grey"} fontSize={20} />
            </InputLeftElement>
          <Input paddingLeft={16} variant={"outline"} background={"white"} color={"#a8866f"} fontWeight={600} borderRadius={26} placeholder="Email Address" _placeholder={{color:"#a8866f", fontWeight: "600"}} paddingTop={6} paddingBottom={6}/>
          </InputGroup>
            <div className=" flex basis-1/5 items-center gap-2 pl-8 pt-2 pr-8 pb-2 bg-background text-white rounded-full text-base cursor-pointer w-max font-semibold">
    subscribe
      </div>  
          </div>
        </div>
       <div className=" absolute  -right-24 -bottom-20">
          <img src={coffeeBeans} alt="" className=" h-60"/>
        </div> 
    </div>
  )
}

export default Subscribe