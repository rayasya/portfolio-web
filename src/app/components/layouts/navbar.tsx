export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-500/10 backdrop-blur-lg backdrop-saturate-100 backdrop-contrast-100 mx-[200px] rounded-2xl mt-5">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex gap-32 text-white">
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
      </div>
    </nav>
  );
}
