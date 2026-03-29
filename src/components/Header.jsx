import { useState } from "react";
import Nav from "./Nav";
import menu from "../assets/icon-menu.svg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white px-10 md:px-[60px] shadow-md">
            <h1 className="text-2xl font-bold">ProjectHub</h1>
            <Nav />
            <div className="flex space-x-4 hidden md:block">
                <a href="#" className="px-5 py-2 hover:underline">Login</a>
                <button className="btn-linear px-4 py-2">Get Started</button>
                
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