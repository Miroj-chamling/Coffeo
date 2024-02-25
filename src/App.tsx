import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';

import { Routes as Switch, Route } from "react-router-dom";

function App() {

  return (
    <>
      {/* <HomePage/> */}
       <Switch>
      <Route  path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
     </Switch>
    </>
  )
}

export default App
