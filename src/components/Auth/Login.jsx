import logo from "../../assets/Image_Icon/Icon/logo.png";
import { Link} from 'react-router-dom';
import SocialAuth from "./SoicialAuth";
function Login() {


    return (
      <div className="text-center  my-20">
        <img className="w-44 mx-auto" src={logo} />
        <h1 className="text-3xl font-black my-10">Login With</h1>
        <SocialAuth></SocialAuth>

        <h1>Don’t have an account? 
            <Link to="/signup" className="underline"> Create an account</Link></h1>

      </div>
    )
  }
  
  export default Login