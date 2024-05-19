import ExploreBtn from "./ExploreBtn"
import coffeeAd from  "../../assets/coffee/coffeead.png"

const CoffeeAd = () => {
  return (
    <div className= " bg-gradient-to-r from-coffeAd to-coffeAd2 w-full md:h-48 flex items-center rounded-3xl justify-between md:px-24 px-5 overflow-hidden">
        <div className=" font-extrabold md:text-3xl ">
            <div>Check out our</div>
            <div className="mb-4">best coffee beans</div>
            <ExploreBtn/>
        </div>
    <img src={coffeeAd} alt="" className=" w-72 h-44" />
    </div>
  )
}

export default CoffeeAd