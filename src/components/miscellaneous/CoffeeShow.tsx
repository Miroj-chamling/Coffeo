import { MoveRight } from "lucide-react"
import { useState } from "react"


interface CoffeeProps 
{
    imgSrc: string;
    coffeeType: string;
    coffeeName: string;
    price: number;
}

const CoffeeShow:React.FC<CoffeeProps> = ({imgSrc, coffeeType, coffeeName, price} ) => {
    const [isFav, setIsFav] = useState(false);

    const handleFav = () =>
    {
        setIsFav(!isFav);
    }
  return (
    <div className='coffee-container border rounded-3xl w-72 h-96 flex flex-col items-center justify-between ml-5 text-center relative hover:bg-red-300' >
        <img src={imgSrc} alt="" width={220} className="coffee img absolute -top-10 bg-transparent" />
        <div className='description w-full pb-8 pl-4 pr-4 absolute bottom-0'>
            <div className='type font-light text-sm'>{coffeeType}</div>
            <div className=" font-bold text-xl">{coffeeName}</div>
            <div className=" text-3xl font-light mt-1 mb-1">${price}</div>
            <div className='addCart flex justify-between'>
                <div className=" flex items-center text-background cursor-pointer">Add to cart &nbsp;<MoveRight size={18}/></div>
                {
                    isFav?<i className="fa fa-heart text-2xl text-red-600" aria-hidden="true" onClick={handleFav}></i>:<i className="fa fa-heart-o text-2xl" aria-hidden="true" onClick={handleFav} ></i>
                }
            </div>
        </div>
    </div>
  )
}

export default CoffeeShow