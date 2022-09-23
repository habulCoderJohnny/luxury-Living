import google from "../../assets/Image_Icon/Icon/google.png";
import fb from "../../assets/Image_Icon/Icon/fb.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";

function SocialAuth() {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    

    const navigate = useNavigate();
    if (gUser){
      navigate('/')
    }


    return (
        <div>

            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary rounded-full"><img className="w-10 mr-6" src={google} />Continue with google</button> <br />

            <button className="btn btn-outline btn-primary rounded-full"><img className="w-10 mr-6" src={fb} />Continue with Facebook</button> <br />
        </div>
    )
}


export default SocialAuth