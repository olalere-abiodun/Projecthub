import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
function Nav() {
    return (
        <nav className="hidden md:block">
            <ul className="flex text-[#475569] font-[16px] space-x-[20px]">
                <li><Link to="/" className="hover:text-[#1D4ED8]">Home</Link></li>
                <li><NavHashLink smooth to="/#features" className="hover:text-[#1D4ED8]">Features</NavHashLink></li>
                <li><Link to="/support" className="hover:text-[#1D4ED8]">Support</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;