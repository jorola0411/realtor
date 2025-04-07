import { Link } from "react-router-dom";
import logo from "../assets/logoblack.png";

function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 border-b text-lg uppercase bg-white">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="max-h-12 inline-block mr-2" />
        </Link>
      </div>
      <nav className="flex space-x-6">
        <Link to="/" className="hover:underline">Portfolio</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
