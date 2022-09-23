import logo from "../../assets/Image_Icon/Icon/logo.png";
import google from "../../assets/Image_Icon/Icon/google.png";
import { Link} from 'react-router-dom';
function Signup() {


    return (
      <div className="text-center  my-20">
        <img className="w-44 mx-auto" src={logo} />
        <h1 className="text-3xl font-black my-10">Signup With</h1>

        <button className="btn btn-outline btn-primary rounded-full"><img className="w-10 mr-6" src={google} />Continue with google</button> <br />
        <h1>Already have an account? 
            <Link to="/login"> just Login</Link></h1>

      </div>
    )
  }
  
  export default Signup