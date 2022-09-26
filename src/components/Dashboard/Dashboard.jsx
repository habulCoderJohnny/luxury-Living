import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Navbar from '../Navbar';
import book from '../../assets/Image_Icon/Icon/book.png';
import booklist from '../../assets/Image_Icon/Icon/booking-list.png';
import review from '../../assets/Image_Icon/Icon/review.png';

function Dashboard() {
    const [user] = useAuthState(auth);
    return(
        <>
        <Navbar></Navbar>
        <div className="drawer">
   
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <label htmlFor="my-drawer" className="text-center cursor-pointer"> 
            <h1 className='stat-value text-primary'> <span className='text-secondary'>DASH</span>BOARD</h1>
                <h3 className='text-primary'>Welcome to your Dashboard</h3></label>
            {/*Render Nested Routes*/}
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-3 overflow-y-auto w-80 bg-secondary  text-white text-xl font-serif">

            <label tabIndex="0" className="avatar ml-4 my-6">
                   {  user?.photoURL? <div className="w-32  mask mask-squircle">
                            <img src={user?.photoURL} alt="" />
                            </div>
                          :<div className="w-24 rounded-full">
                            <img src="https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="" />
                        </div>
                        }
                    </label>
  
                <li><Link to="/dashboard"><img className='w-10' src={book} />Booking</Link></li>
                <li><Link to="/dashboard/booking-list"> <img className='w-10' src={booklist} /> Booking List</Link></li>
                <li><Link to="/dashboard/review"><img className='w-10' src={review} /> Review/Feedback</Link></li>
   
            </ul>
        </div>
    </div>
    </>


    );
}
export default Dashboard