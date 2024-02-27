import { MoveRight } from "lucide-react"
import { useState } from "react"


interface InstantCoffeeProps 
{
    imgSrc: string;
    productName: string;
    previousPrice: string;
    price: number;
}

const InstantCoffee:React.FC<InstantCoffeeProps> = ({imgSrc, productName, price, previousPrice} ) => {
    const [isFav, setIsFav] = useState(false);

    const handleFav = () =>
    {
        setIsFav(!isFav);
    }
  return (
    <div className='coffee-container border rounded-3xl w-72 h-96 flex flex-col items-center justify-between ml-5 relative hover:bg-red-300' >
        <img src={imgSrc} alt="" width={220} className="coffee img absolute -top-10 bg-transparent" />
        <div className='flex flex-col items-start description w-full pb-8 pl-4 pr-4 absolute bottom-0'>
            <div className=" text-sm font-light">Product name</div>
            <div className=" font-bold text-xl">{productName}</div>
            <div className=" flex items-center gap-2">
            <div className=" text-xl line-through font-light">${previousPrice}</div>   
            <div className=" text-3xl font-light mt-1 mb-1">${price}</div>
            </div>
            <div className='addCart flex justify-between w-full'>
                <div className=" flex items-center text-background cursor-pointer">Add to cart &nbsp;<MoveRight size={18}/></div>
                {
                    isFav?<i className="fa fa-heart text-2xl text-red-600" aria-hidden="true" onClick={handleFav}></i>:<i className="fa fa-heart-o text-2xl" aria-hidden="true" onClick={handleFav} ></i>
                }
            </div>
        </div>
    </div>
  )
}

export default InstantCoffee