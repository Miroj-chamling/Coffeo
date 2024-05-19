import { MoveRight } from "lucide-react"
import { useState } from "react"


interface AccessoriesProps 
{
    imgSrc: string;
    productName: string;
    previousPrice: number;
}

const Accessories:React.FC<AccessoriesProps> = ({imgSrc, productName, previousPrice} ) => {
    const [isFav, setIsFav] = useState(false);

    const handleFav = () =>
    {
        setIsFav(!isFav);
    }
  return (
    <div className='flex flex-col items-center  border rounded-3xl min-w-[250px] md:min-h-fit min-h-fit  relative hover:bg-green-300 overflow-clip' >
        <img src={imgSrc} alt="" className="md:min-h-[200px] min-h-[150px] bg-slate-200"  />
        <div className='flex flex-col mt-4 items-center w-full pb-5 px-4'>
            <div className=" font-bold md:text-xl text-sm">{productName}</div>
            <div className=" flex items-center gap-2">
            <div className=" text-xl line-through font-light">${previousPrice}</div>   
            <div className=" text-2xl font-light mt-1 mb-1">${Math.ceil(previousPrice - previousPrice*(20/100)) }</div>
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

export default Accessories