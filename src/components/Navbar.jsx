import logo from "../assets/Image_Icon/Icon/logo.png"
import { Link } from 'react-router-dom';
import auth from "../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [user] = useAuthState(auth);
  const logout = () => {
    const confirm = window.confirm('Are you sure to logout?');
    if (confirm) {
      signOut(auth);
    };
  }

  const nav = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">About us</Link></li>
    <li><a href="#service">Services</a></li>
    <li><a href="#project">Projects</a></li>
    <li><a href="#contact">Contact us</a></li>


  </>

  return (
    <div className="navbar bg-[#F7F7F7]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {nav}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-28" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {nav}
        </ul>
      </div>
      <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                       {  user?.photoURL? <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="" />
                                </div>
                              :<div className="w-10 rounded-full">
                                <img src="https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="" />
                            </div>
                            }
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                          <Link to="/profile" className="justify-between text-purple-500 font-bold uppercase">
                              {user?.displayName} 
                                <span className="badge">View</span>
                                </Link>
                            </li>
                           
                            {
                                user && <li><Link to="/dashboard">Dashboard</Link></li>
                            }
                            
        {user ? <button onClick={logout} className="btn hover:bg-red-500 text-green">Logout</button> :
          <Link to="/login" className="btn hover:bg-teal-400 focus:outline-none  text-white">Login</Link>}
          
          </ul>
      </div>
      </div>
   
  )
}

export default Navbar