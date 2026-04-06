import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Nav from "./Nav";
import menu from "../assets/icon-menu.svg";
import { IoMdClose } from "react-icons/io";

function Header() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate("/signup");
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <header className="w-full bg-white px-10 md:px-[60px] shadow-md">
        <Link to="/" className="text-2xl font-bold">
          ProjectHub
        </Link>
        <Nav />
        <div className="flex space-x-4 hidden md:block">
          <Link to="/login" className="px-5 py-2 hover:underline">
            Login
          </Link>
          <button className="btn-linear px-4 py-2" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden ms-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={menu} alt="" />
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-40">
            <section className="absolute w-[250px] space-y-8 px-6 py-6 top-0 right-0 bg-white h-screen shadow-md font-semibold z-50">
              <IoMdClose
                className="flex ms-auto"
                onClick={() => setIsMenuOpen(false)}
                size={35}
              />

              

              <nav>
                <ul className="flex flex-col gap-6 text-[#475569]">
                  <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/#features" onClick={() => setIsMenuOpen(false)}>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" onClick={() => setIsMenuOpen(false)}>
                      Support
                    </Link>
                  </li>
                </ul>
              </nav>

              <section className="flex flex-col gap-4 pt-6 border-t border-gray-300">
                <Link
                  to="/login"
                  className="text-center py-2 text-[#475569]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <button
                  className="btn-linear w-full py-3"
                  onClick={() => {
                    handleGetStarted();
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </button>
              </section>
            </section>
          </div>
        )}
      </header>
    );
}

export default Header;