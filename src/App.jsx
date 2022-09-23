
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
function App() {


  return (
   <div className='mx-10'>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    </Routes>
</div>
  )
}

export default App
