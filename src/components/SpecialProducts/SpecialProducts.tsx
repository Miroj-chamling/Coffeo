import {Tab, TabList, TabIndicator, TabPanels, Tabs, TabPanel } from "@chakra-ui/react"
import CoffeeShow from "../miscellaneous/CoffeeShow"
import karma from "../../assets/coffee/karma.png";
import nescafe from "../../assets/coffee/nescafe.png";
import colombian from "../../assets/coffee/colombian.png";


const SpecialProducts = () => {
  return (
    <div className=" w-screen h-screen flex flex-col pl-20 pr-20 items-center" >
          <div>
      <div className="text-4xl font-extrabold text-center pt-8"><span className="text-background">Weekend</span> <span className=" text-stone-600">special products</span> </div>
        <div className="text-l font-normal text-center mt-3">Checkout our special product that you can get with 20% OFF.</div>
</div>


<div className=" mt-6">
<Tabs  variant="unstyled" className=" mt-3" isLazy isFitted>

<TabList position={"relative"}>
  <Tab  _selected={{color: "brown"}} style={{fontSize:"18px", fontWeight:"600" }}>Accessories</Tab>
  <Tab _selected={{color: "brown"}} style={{fontSize:"18px"  ,fontWeight:"600"}}>Coffee beans</Tab>
  <Tab _selected={{color:"brown"}} style={{fontSize:"18px" , fontWeight:"600"}}>Instant Coffee</Tab>
</TabList>

<TabIndicator
  mt="-1.5px"
  height="6px"
  bg= "brown"
  borderRadius="16px"
/>
<TabPanels className=" mt-20">
  <TabPanel width={"80vw"}>
  <div className="flex" >
    <CoffeeShow imgSrc={colombian} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
    <CoffeeShow imgSrc={colombian} coffeeName="Karma" coffeeType="Blend" price={10}/>
    <CoffeeShow imgSrc={nescafe} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
    <CoffeeShow imgSrc={karma} coffeeName="Motley" coffeeType="Blend" price={16}/>
    </div>  
  </TabPanel>
  <TabPanel width={"80vw"}>
  <div className="flex" >
    <CoffeeShow imgSrc={nescafe} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
    <CoffeeShow imgSrc={colombian} coffeeName="Karma" coffeeType="Blend" price={10}/>
    <CoffeeShow imgSrc={nescafe} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
    <CoffeeShow imgSrc={karma} coffeeName="Motley" coffeeType="Blend" price={16}/>
    </div>  
  </TabPanel>
  <TabPanel width={"80vw"}>
  <div className="flex" >
    <CoffeeShow imgSrc={colombian} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
    <CoffeeShow imgSrc={colombian} coffeeName="Karma" coffeeType="Blend" price={10}/>
    <CoffeeShow imgSrc={nescafe} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
    <CoffeeShow imgSrc={karma} coffeeName="Motley" coffeeType="Blend" price={16}/>
    </div>  
  </TabPanel>
</TabPanels>
</Tabs>
</div>

  
       </div>


  )
}

export default SpecialProducts