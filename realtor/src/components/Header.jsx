import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutline, CloseOutline } from "react-ionicons"; 
import logo from "../assets/logoblack.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 text-lg uppercase ">

      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="max-h-12 inline-block mr-2" />
        </Link>
      </div>


      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >

        {isMenuOpen ? (
          <CloseOutline color="#000" height="30px" width="30px" />
        ) : (
          <MenuOutline color="#000" height="30px" width="30px" />
        )}
      </button>


      <nav className="hidden md:flex space-x-6">
        <Link to="/map" className="hover:underline">Portfolio</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>


      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full h-56 bg-white shadow-md  space-y-4 py-4 md:hidden flex flex-col justify-evenly items-end px-8`}
      >
        <Link to="/map" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
        <Link to="/about" className="hover:underline" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/contact" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
