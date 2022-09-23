import logo from "../../assets/Image_Icon/Icon/logo.png";
import { Link} from 'react-router-dom';
import SocialAuth from "./SoicialAuth";



function Signup() {



    return (
      <div className="text-center my-20">
        <img className="w-44 mx-auto mb-6" src={logo} />
       
     
    <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto rounded">

      <div className="card-body">
      <h1 className="text-2xl font-semibold text-left">Create an account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">last Name</span>
          </label>
          <input type="text" placeholder="last Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">confirm Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white">Create an account</button>
        </div>
      </div>
    </div>
    <div className="divider max-w-sm mx-auto text-red-500">OR</div>
      <SocialAuth></SocialAuth>
  </div>

    )
  }
  
  export default Signup