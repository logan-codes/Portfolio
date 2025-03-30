import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden bg-blue-100">
              <img 
                src= "https://avatars.githubusercontent.com/u/181629521?v=4" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                I'm <span className="text-blue-600">Loganandamuthu</span>, a passionate developer
              </h3>
              
              <p className="text-gray-600 mb-4">
                I specialize in creating beautiful, functional, and responsive websites 
                and applications. With a strong foundation in modern web technologies 
                and a keen eye for design, I bring ideas to life with clean code and 
                intuitive user experiences.
              </p>
              
              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or enjoying outdoor activities. I'm always 
                looking for new challenges and opportunities to grow as a developer.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download size={16} className="mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
