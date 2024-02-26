import CoffeeShow from "../miscellaneous/CoffeeShow"
import karma from "../../assets/coffee/karma.png";
import nescafe from "../../assets/coffee/nescafe.png";
import colombian from "../../assets/coffee/colombian.png";
import CoffeeAd from "../miscellaneous/CoffeeAd";



const Recent = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between pl-20 pr-20">
      <div>
      <div className="text-4xl font-extrabold text-center pt-8">Explore the recent products</div>
        <div className="text-l font-normal text-center mt-3">Our delectable drink options, including classic espresso choices, house specialities, fruit smoothies and frozen treats.</div>
      </div>
        <div className="flex w-full justify-between" >
        <CoffeeShow imgSrc={colombian} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
        <CoffeeShow imgSrc={colombian} coffeeName="Karma" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={nescafe} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={karma} coffeeName="Motley" coffeeType="Blend" price={16}/>
        </div>  
        <CoffeeAd/>
    </div>
  )
}

export default Recent