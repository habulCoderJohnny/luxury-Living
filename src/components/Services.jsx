import { useEffect, useState } from "react";

function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
      <div id="service" className="text-center my-28">
         <h1>Services</h1>
            <p className="text-3xl font-black">We're an agency tailored to all
                <p>clients' needs that always delivers</p>
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                services.map(service => 
                <div service={service} className="card card-compact w-80 shadow-xl gap-4  mx-auto">
                    <figure><img className="w-36" src={service.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">{service.name}</h2>
                        <p className="">${service.price}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex odio sed odit accusantium placeat, at architecto ratione quisquam iusto.</p> 
                        </p>    
                       
                    </div>
                </div>
                )
            }
            </div>

            <button className="btn btn-primary  hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white">Explore more</button>
     
      </div>
    )
  }
  
  export default Services