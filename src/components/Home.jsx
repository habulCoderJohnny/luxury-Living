
import ContactForm from "./ContactForm"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Services from "./Services"

// import Testimonials from "./Testimonials"
function Home() {


    return (
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Projects></Projects>
        <Services></Services>
        {/* <Testimonials></Testimonials> */}
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    )
  }
  
  export default Home