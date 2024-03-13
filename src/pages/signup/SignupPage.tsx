import SignUp from "../../components/Signup"
import Logo from "../../components/miscellaneous/Logo"


const SignupPage = () => {
  return (
    <>
      <div className="login-page w-screen h-screen overflow-hidden px-16 py-6">
        <Logo/>
        <div className=" mt-20 flex items-center justify-center">
            <SignUp />
        </div>
      </div>
    </>
  )
}

export default SignupPage