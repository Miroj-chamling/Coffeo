import ExploreBtn from "./ExploreBtn"
import coffeeAd from  "../../assets/coffee/coffeead.png"

const CoffeeAd = () => {
  return (
    <div className= " bg-gradient-to-r from-coffeAd to-coffeAd2 w-full h-48 flex items-center rounded-3xl justify-around">
        <div className=" font-extrabold text-3xl ">
            <div>Check out our</div>
            <div className="mb-4">best coffee beans</div>
            <ExploreBtn/>
        </div>
    <img src={coffeeAd} alt="" width={360} height={500}/>
    </div>
  )
}

export default CoffeeAd