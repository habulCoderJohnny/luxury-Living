import logo from "../assets/Image_Icon/Icon/logo.png"
function Navabar() {
  const nav = <>
      <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
  
  
  </>

    return (
        <div className="navbar bg-base-100">
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
          <a className="btn text-white">Login</a>
        </div>
      </div>
    )
  }
  
  export default Navabar