import CoffeeShow from "../miscellaneous/CoffeeShow"
import karma from "../../assets/coffee/karma.png";
import nescafe from "../../assets/coffee/nescafe.png";
import colombian from "../../assets/coffee/colombian.png";
import CoffeeAd from "../miscellaneous/CoffeeAd";



const Recent = () => {
  return (
    <div className="recent-products"> 
      <div className="desctiption mt-8">
      <div className="text-4xl font-extrabold text-center pt-2">Explore the recent products</div>
        <div className="text-l font-normal text-center mt-3">Our delectable drink options, including classic espresso choices, house specialities, fruit smoothies and frozen treats.</div>
      </div>
        <div className="flex pt-8 w-full px-32  justify-between mt-20" >
        <CoffeeShow imgSrc={colombian} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
        <CoffeeShow imgSrc={colombian} coffeeName="Karma" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={nescafe} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={karma} coffeeName="Motley" coffeeType="Blend" price={16}/>
        </div>  
      <div className="w-full px-32 mt-12">
      <CoffeeAd/>
      </div>
    </div>
  )
}

export default Recent