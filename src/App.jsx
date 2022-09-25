
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
function App() {


  return (
   <div className='mx-10'>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
      {/* Nested Route */}
    <Route path="/dashboard" element={<Dashboard/>}>
    {/* <Route index element={<MyProfile />}></Route> */}
    {/* <Route path="order" element={}></Route> */}
    </Route>
    </Routes>
</div>
  )
}

export default App
