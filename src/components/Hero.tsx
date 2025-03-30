import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block text-blue-600">Loganandamuthu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            I create solutions for your inconviniences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="group px-6 py-6">
              <a href="#contact" className="flex items-center">
                Contact Me 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
