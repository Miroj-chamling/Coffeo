import apple from "../../assets/login/apple.png"

const Apple = () => {
  return (
    <>
      <div className=" h-10 w-64 flex items-center cursor-pointer">
            <div className=" h-10 w-12 flex items-center justify-center border-l border-t border-b border-black">
            <img src={apple} alt="" width={32} height={16} />
            </div>
            <div className="text-sm bg-white w-full h-10 flex justify-center items-center text-black border border-black">Continue with Apple</div>
      </div>
    </>
  )

}

export default Apple