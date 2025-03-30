import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-gray-400">Building digital experiences</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Loganandamuthu. All rights reserved.
            </p>
          </div>
          
        </div>  
      </div>
    </footer>
  );
};

export default Footer;