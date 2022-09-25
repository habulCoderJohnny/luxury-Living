
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Booking from './components/Dashboard/Booking';
import BookingList from './components/Dashboard/BookingList';
import Review from './components/Dashboard/Review';
function App() {


  return (
   <div className='mx-10'>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
      {/* Nested Route */}
    <Route path="/dashboard" element={<Dashboard/>}>
    <Route index element={<Booking />}></Route>
    <Route path="booklist" element={<BookingList/>}></Route>
    <Route path="review" element={<Review/>}></Route>
    </Route>
    </Routes>
</div>
  )
}

export default App