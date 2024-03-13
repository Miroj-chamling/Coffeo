import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';

import { Routes as Switch, Route } from "react-router-dom";
import SignupPage from './pages/signup/SignupPage';

function App() {

  return (
    <>
      {/* <HomePage/> */}
       <Switch>
      <Route  path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
     </Switch>
    </>
  )
}

export default App
