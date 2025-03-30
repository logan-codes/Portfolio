import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"


const Landing = () => {
    return (
        <main className="min-h-screen bg-white w-full top-0 left-0">
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
            <Navbar/>
        </div>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
    )
} 

export default Landing