const Footer = () => {
  return (
    <footer className=" flex flex-col bg-darkBrown rounded-t-3xl mt-16 w-screen overflow-hidden">
        <div className="  flex mt-12 text-white items-start pl-20">
        <div className=" basis-2/3 flex">
            <div className=" basis-1/4">
                <div className="privacy text-white font-extrabold text-2xl">Privacy</div>
                <div className=" text-gray-400 text-lg font-medium">
                    <div className=" block mt-6"> Terms of use</div>
                    <div className=" block mt-4"> Privacy Policy</div>
                    <div className=" block mt-4"> Cookies</div>
                </div>
            </div>
            
            <div className=" basis-1/4">
                <div className="privacy text-white font-extrabold text-2xl">Services</div>
                <div className=" text-gray-400 text-lg font-medium">
                    <div className=" block mt-6 cursor-pointer"> Shop</div>
                    <div className=" block mt-4 cursor-pointer"> Order ahead</div>
                    <div className=" block mt-4 cursor-pointer"> Menu</div>
                </div>
            </div>

            <div className=" basis-1/4">
                <div className="privacy text-white font-extrabold text-2xl">About us</div>
                <div className=" text-gray-400 text-lg font-medium">
                    <div className=" block mt-6 cursor-pointer"> Find a location</div>
                    <div className=" block mt-4 cursor-pointer"> About us</div>
                    <div className=" block mt-4 cursor-pointer"> Our Story</div>
                </div>
            </div>

            <div className=" basis-1/4">
                <div className="privacy text-white font-extrabold text-2xl">Information</div>
                <div className=" text-gray-400 text-lg font-medium">
                    <div className=" block mt-6 cursor-pointer">Plans and Pricing</div>
                    <div className=" block mt-4 cursor-pointer">Jobs</div>
                    <div className=" block mt-4 cursor-pointer"> Sell Your Product</div>
                </div>
            </div>
          </div>
        <div className="social-media basis-2/6">
            <div className=" font-extrabold text-2xl">Social Media</div>
            <div className="links">
            </div>
        </div>
    </div>   

    <div className=" w-full h-12 mt-16 bg-secondaryBrown flex items-center justify-center text-white">
    <div className=" font-light text-sm">Copyright &copy; 2024, Coffeo</div>
    <div></div>
    </div>


    </footer>
  )
}

export default Footer