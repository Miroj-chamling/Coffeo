interface props {
  handleLogin: ()=> void;
}

const LoginBtn = ({handleLogin}: props) => {

  return (
    <div onClick={handleLogin} className=" bg-[#3E3232] text-white rounded-md cursor-pointer text-center px-5 py-1 font-semibold">Login</div>
  )
}

export default LoginBtn