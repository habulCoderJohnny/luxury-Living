import banner from "../assets/Image_Icon/Image/banner.png"
function Hero() {

    return (
        <div>
            <div className="hero min-h-screen bg-[#F7F7F7]">
                <div className="hero-content flex-col lg:flex-row-reverse"> 
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-primary text-5xl font-bold">We Build
                        <h1 className="text-primary text-5xl font-bold"> Your Dream

                           </h1>
                        
                           </h1>
                        
                        <p className="my-4">Online Easte Agency, the mordern way to sell your own home,
                        <p className="">You can use Griffin Residential to market your property.
                            </p>
                            </p>
                       
                        <button className="btn btn-primary  hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white">booking</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero