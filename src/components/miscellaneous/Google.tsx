import google from "../../assets/login/google.png"

const Google = () => {
  return (
    <>
    <div className=" h-10 w-64 flex items-center border border-google border-solid cursor-pointer">
          <div className=" h-10 w-12 flex items-center justify-center">
          <img src={google} alt="" width={32} height={16} />
          </div>
          <div className="text-sm bg-google w-full h-10 flex justify-center items-center text-white">Continue with Google</div>
    </div>
  </>
  )
}

export default Google