import Login from "../../components/Login"
import Logo from "../../components/miscellaneous/Logo"


const LoginPage = () => {
  return (
    <>
      <div className="login-page w-screen h-screen overflow-hidden px-16 py-6">
        <Logo/>
        <div className=" mt-20 flex items-center justify-center">
            <Login />
        </div>
      </div>
    </>
  )
}

export default LoginPage