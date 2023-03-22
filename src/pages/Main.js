
import Box from "../assets/components/Box";
import About from "../assets/components/About";
import AboutWithBg from "../assets/components/AboutWithBg"
import Service from "../assets/components/Service"
import Portfolio from "../assets/components/Portfolio"
import FuctsList from "../assets/components/FuctsList"
import Testimonials from "../assets/components/Testimonials"
import Video from "../assets/components/common/Video"
// import Blog from "../pages/Blog"
import Team from "../assets/components/Team"
import Contacts from "../assets/components/Contacts"



function Main() {
    return (
        <div className="main-page">
            <Box />                 
            <About />
            <AboutWithBg />
            <Service />
            <Portfolio />
            <Team />
            <FuctsList />
            <Testimonials />
            <Video />
            {/* <Blog />  */}
            <Contacts />
            
        </div>
    )
}

export default Main