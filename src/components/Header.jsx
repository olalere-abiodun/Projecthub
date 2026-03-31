import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Nav from "./Nav";
import menu from "../assets/icon-menu.svg";

function Header() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate("/signup");
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white px-10 md:px-[60px] shadow-md">
            <Link to="/" className="text-2xl font-bold">ProjectHub</Link>
            <Nav />
            <div className="flex space-x-4 hidden md:block">
                <Link to="/login" className="px-5 py-2 hover:underline">Login</Link>
                <button className="btn-linear px-4 py-2"
                    onClick={handleGetStarted}
                >Get Started</button>
                
            </div>
            {/* Mobile Menu Button */}
        <button
          className="md:hidden ms-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={menu} alt="" />
        </button>
        </header>
    );
}

export default Header;