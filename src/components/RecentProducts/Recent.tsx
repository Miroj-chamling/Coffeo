import CoffeeShow from "../miscellaneous/CoffeeShow"
import karma from "../../assets/coffee/karma.png";
import nescafe from "../../assets/coffee/nescafe.png";
import colombian from "../../assets/coffee/colombian.png";
import CoffeeAd from "../miscellaneous/CoffeeAd";



const Recent = () => {
  return (
    <div className=" md:w-full w-screen overflow-hidden"> 
      <div className="desctiption mt-2 ">
      <div className="md:text-4xl text-2xl font-extrabold text-center pt-2">Explore the recent products</div>
        <div className="md:text-lg text-md font-normal text-center mt-3">Our delectable drink options, including classic espresso choices, house specialities, fruit smoothies and frozen treats.</div>
      </div>
        <div className="flex md:flex-row flex-col items-center pt-8 w-full md:px-32 justify-between mt-20 md:gap-10 gap-24" >
        <CoffeeShow imgSrc={colombian} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
        <CoffeeShow imgSrc={colombian} coffeeName="Karma" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={nescafe} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={karma} coffeeName="Motley" coffeeType="Blend" price={16}/>
        </div>  
      <div className="md:px-32 mt-12 ">
      <CoffeeAd/>
      </div>
    </div>
  )
}

export default Recent