import logo from "../assets/Image_Icon/Icon/logo.png"
import { Link } from 'react-router-dom';
import auth from "../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
function Navabar() {
  const [user] = useAuthState(auth);
  const logout = () => {
    const confirm = window.confirm('Are you sure to logout?');
    if (confirm) {
      signOut(auth);
    };

  }
  const nav = <>
    <li><a>Home</a></li>
    <li><a>About us</a></li>
    <li><a>Projects</a></li>
    <li><a>Contact</a></li>
    <li><a>Admin</a></li>
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
      <div className="navbar-end">
        {user ? <button onClick={logout} className="btn btn-ghost">Logout</button> :
          <Link to="/login" className="btn hover:bg-teal-400 focus:outline-none  text-white">Login</Link>}
      </div>
    </div>
  )
}

export default Navabar