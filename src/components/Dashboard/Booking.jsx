import auth from "../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react";

function Booking() {
    const [user] = useAuthState(auth);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://luxury-living-server-qp69.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return(
        
        <div className="card w-full max-w-md shadow-2xl bg-base-100 mx-auto rounded mt-4">

        <div className="card-body">
        <h1 className="text-2xl font-semibold text-left text-yellow-600">Best Booking Deal for you!</h1>
        
        <form className="">
          
          <div className="form-control my-6">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
            <input value={user?.displayName}  type="text" className="input input-bordered" />
      
          </div>
          <div className="form-control my-6">
          <label className="label">
            <span className="label-text">Your email</span>
          </label>
            <input type="email" value={user?.email}  className="input input-bordered" />
          </div>
          <label className="label">
            <span className="label-text font-bold">Best Package</span>
          </label>
            <select name='booking' className="select select-primary w-full max-w-md mb-5 text-pink-600 text-xl" required>
         
                        <option selected disabled>Pick your option</option>
                            {
                                services.map((booking)=><option key={booking._id} defaultValue={booking}>{booking?.name} / $ {booking?.price}</option>
                               
                                )
                            }
             </select>
  
          <div className="form-control my-5">
            <button type="submit" className="btn text-white btn-primary hover:bg-white hover:text-black focus:shadow-outline focus:outline-none ">Pay</button>
          </div>
          </form>
  
        </div>
      </div>

    )
}
export default Booking