import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative max-w-screen-xl">
        <div className="flex justify-between items-center">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <img className="h-6 w-auto mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          {/* Navigation items - Only visible on large screens */}
          {isLargeScreen && (
            <ul className="flex ml-12 space-x-20">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Buttons - Only visible on large screens */}
          {isLargeScreen && (
            <div className="flex justify-center items-center space-x-3">
              <a
                href="#"
                className="py-2 px-4 border border-gray-400 rounded-md hover:bg-gray-800 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-red-600 transition-colors"
              >
                Create an Account
              </a>
            </div>
          )}

          {/* Toggle button - Only visible on small screens */}
          {!isLargeScreen && (
            <button onClick={toggleNavbar} className="p-2">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile menu - Only visible when toggled on small screens */}
        {!isLargeScreen && mobileDrawerOpen && (
          <div className="pt-4 border-t border-neutral-600 mt-3 bg-neutral-900/90 w-full pb-6">
            <ul className="flex flex-col space-y-6 text-center ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors py-2 text-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-row space-x-2 mt-6 justify-center">
              <a
                href="#"
                className="py-2 px-4 border border-gray-400 rounded-md hover:bg-gray-800 transition-colors text-center"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-red-600 transition-colors text-center"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
