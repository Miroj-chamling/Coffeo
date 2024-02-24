import fb from "../../assets/login/fb.png"

const Facebook = () => {
  return (
    <>
      <div className=" h-10 w-64 flex items-center border border-facebook border-solid cursor-pointer">
            <div className=" h-10 w-12 flex items-center justify-center">
            <img src={fb} alt="" width={20} height={10} />
            </div>
            <div className="text-sm bg-facebook w-full h-10 flex justify-center items-center text-white">Continue with Facebook</div>
      </div>
    </>
  )

}

export default Facebook