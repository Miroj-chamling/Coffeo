import CoffeeShow from "../miscellaneous/CoffeeShow"
import karma from "../../assets/coffee/karma.png";
import nescafe from "../../assets/coffee/nescafe.png";
import colombian from "../../assets/coffee/colombian.png";
import CoffeeAd from "../miscellaneous/CoffeeAd";



const Recent = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-between  ">
      <div>
      <div className="text-4xl font-extrabold text-center pt-2">Explore the recent products</div>
        <div className="text-l font-normal text-center mt-3">Our delectable drink options, including classic espresso choices, house specialities, fruit smoothies and frozen treats.</div>
      </div>
        <div className="flex mt-8 w-full px-32  justify-between " >
        <CoffeeShow imgSrc={colombian} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
        <CoffeeShow imgSrc={colombian} coffeeName="Karma" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={nescafe} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={karma} coffeeName="Motley" coffeeType="Blend" price={16}/>
        </div>  
      <div className="w-full px-32 ">
      <CoffeeAd/>
      </div>
    </div>
  )
}

export default Recent