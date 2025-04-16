import About from "./components/About"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"; 

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

export default function App() {
  return(
    <div>
      <div className="p-5 md:px-[15%]">
      <Navbar />
      <Home />
      </div>
      <About />
      <Experiences />
      <div
      className="p-5 md:px-[15%]">
       
        <Projects/>
      </div>
      <Footer />
    </div>
  )
  
}