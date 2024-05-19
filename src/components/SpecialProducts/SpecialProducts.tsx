import {Tab, TabList, TabIndicator, TabPanels, Tabs, TabPanel } from "@chakra-ui/react"
import karma from "../../assets/coffee/karma.png";
import nescafe from "../../assets/coffee/nescafe.png";
import colombian from "../../assets/coffee/colombian.png";
import Accessories from "../miscellaneous/specialProducts/Accessories";
import CoffeBeans from "../miscellaneous/specialProducts/CoffeBeans";
import InstantCoffee from "../miscellaneous/specialProducts/InstantCoffee";


const SpecialProducts = () => {
  return (
    <div className=" md:mt-12 mt-8 md:w-full w-screen overflow-hidden">
          <div>
      <div className="md:text-4xl text-2xl font-extrabold text-center pt-8"><span className="text-background">Weekend</span> <span className=" text-stone-600">special products</span> </div>
        <div className="md:text-lg text-sm font-normal text-center mt-3">Checkout our special product that you can get with 20% OFF.</div>
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
<TabPanels className="mt-20">
  <TabPanel width={"full"} >
  <div className="flex gap-6 overflow-x-auto  whitespace-nowrap px-2 pb-12 " >

    <Accessories imgSrc={colombian} productName="Columbian Brew" previousPrice={120} />
    <Accessories imgSrc={colombian} productName="Karma" previousPrice={120} />
    <Accessories imgSrc={nescafe} productName="Nescaffee" previousPrice={220} />
    <Accessories imgSrc={karma} productName="Motley" previousPrice={300} />
    <Accessories imgSrc={colombian} productName="Karma" previousPrice={140} />
    <Accessories imgSrc={nescafe} productName="Nescaffee" previousPrice={200} />
    <Accessories imgSrc={karma} productName="Motley" previousPrice={180} />

    </div>  
  </TabPanel>
  <TabPanel width={"full"}>
  <div className="flex gap-6 overflow-x-auto  whitespace-nowrap px-2 pb-12" >
  <CoffeBeans imgSrc={karma} productName="Columbian Brew" previousPrice={200} />
    <CoffeBeans imgSrc={colombian} productName="Karma" previousPrice={250} />
    <CoffeBeans imgSrc={nescafe} productName="Nescaffee" previousPrice={280} />
    <CoffeBeans imgSrc={karma} productName="Motley" previousPrice={150} />
    <CoffeBeans imgSrc={karma} productName="Columbian Brew" previousPrice={200} />
    <CoffeBeans imgSrc={colombian} productName="Karma" previousPrice={250} />
    <CoffeBeans imgSrc={nescafe} productName="Nescaffee" previousPrice={280} />
    <CoffeBeans imgSrc={karma} productName="Motley" previousPrice={150} />
    </div>  
  </TabPanel>
  <TabPanel width={"full"}>
  <div className="flex gap-6 overflow-x-auto  whitespace-nowrap px-2 pb-12" >
  <InstantCoffee imgSrc={nescafe} productName="Columbian Brew" previousPrice={240}/>
    <InstantCoffee imgSrc={colombian} productName="Karma" previousPrice={290} />
    <InstantCoffee imgSrc={nescafe} productName="Nescaffee" previousPrice={300} />
    <InstantCoffee imgSrc={karma} productName="Motley" previousPrice={600} />
    <InstantCoffee imgSrc={nescafe} productName="Columbian Brew" previousPrice={240}/>
    <InstantCoffee imgSrc={colombian} productName="Karma" previousPrice={290} />
    <InstantCoffee imgSrc={nescafe} productName="Nescaffee" previousPrice={300} />
    <InstantCoffee imgSrc={karma} productName="Motley" previousPrice={600} />
    </div>  
  </TabPanel>
</TabPanels>
</Tabs>
</div>
</div>
  )
}

export default SpecialProducts