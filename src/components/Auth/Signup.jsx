import logo from "../../assets/Image_Icon/Icon/logo.png";
import SocialAuth from "./SoicialAuth";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  // const [lastname, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword,user,loading,error] =   useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleName = event =>{
    setName(event.target.value);
}
//   const handleLastName = event =>{
//     setlastName(event.target.value);
// }
const handleEmail = event =>{
    setEmail(event.target.value);
}
const handlePassword = event =>{
    setPassword(event.target.value);
}

if (user) {
  navigate('/');
}

const handleCreateUser = event => {
  event.preventDefault();
  createUserWithEmailAndPassword(email,password,name);
}
 console.log(email,password,name);

    return (
      <div className="text-center my-20">
       <Link to="/"><img className="w-44 mx-auto mb-6" src={logo} /></Link>
       
     
    {/* <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto rounded">

      <div className="card-body">
      <h1 className="text-2xl font-semibold text-left">Create an account</h1>
      
      <form onSubmit={handleCreateUser}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input onBlur={handleName} type="text" placeholder="name" className="input input-bordered" />
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
          <input onBlur={handleEmail}  type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onBlur={handlePassword}  type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white">Create an account</button>
        </div>
        </form>

      </div>
    </div> */}
    <div className="divider max-w-sm mx-auto text-red-500">OR</div>
      <SocialAuth></SocialAuth>
  </div>

    )
  }
  
  export default Signup