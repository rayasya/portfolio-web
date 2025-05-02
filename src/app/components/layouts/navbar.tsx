import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-500/10 backdrop-blur-lg backdrop-saturate-100 backdrop-contrast-100 mx-4 md:mx-12 lg:mx-[200px] rounded-2xl mt-5">
      <div className="mx-auto px-4 relative">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex gap-8 lg:gap-16 xl:gap-32 text-white">
            <a href="#" className="group">
              Home
              <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a href="#" className="group">
              About Me
              <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a href="#" className="group">
              Projects
              <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a href="#" className="group">
              Contacts
              <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-white absolute top-1/2 right-4 -translate-y-1/2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 text-white">
              <a href="#" className="group py-2">
                Home
                <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </a>
              <a href="#" className="group py-2">
                About Me
                <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </a>
              <a href="#" className="group py-2">
                Projects
                <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </a>
              <a href="#" className="group py-2">
                Contacts
                <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
