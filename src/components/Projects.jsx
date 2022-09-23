import { useEffect, useState } from "react"

function Projects() {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('ProjectsData.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);
    return (
        <div className="text-center my-5">
            <h1>Projects</h1>
            <p className="text-3xl font-black">Discover the latest Interior Design
                <p>available today</p>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                project.map(service => 
                <div service={service} className="card card-compact w-80 shadow-xl gap-4">
                    <figure><img src={service.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className=" text-center">{service.name}</h2>
                        <p className="">{service.location}</p>      
                    </div>
                </div>
                )
            }
            </div>


        </div>
    )
}

export default Projects