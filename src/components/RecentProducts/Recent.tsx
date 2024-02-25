import CoffeeShow from "../miscellaneous/CoffeeShow"
import coffee from "../../assets/coffee/coffee.webp";
import karma from "../../assets/coffee/karma.webp";
import nescafee from "../../assets/coffee/nescafe.webp";
import motley from "../../assets/coffee/motley.webp";


const Recent = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-white">
        <div className="text-4xl font-extrabold text-center pt-12">Explore the recent products</div>
        <div className="text-l font-normal text-center mt-3">Our delectable drink options, including classic espresso choices, house specialities, fruit smoothies and frozen treats.</div>
        <div className="flex mt-32">
        <CoffeeShow imgSrc={coffee} coffeeName="Columbian Brew" coffeeType="Single Origin" price={80}/>
        <CoffeeShow imgSrc={karma} coffeeName="Karma" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={nescafee} coffeeName="Nescaffee" coffeeType="Blend" price={10}/>
        <CoffeeShow imgSrc={motley} coffeeName="Motley" coffeeType="Blend" price={16}/>
        </div>
    </div>
  )
}

export default Recent