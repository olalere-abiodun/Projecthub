function Nav() {
    return (
        <nav className="hidden md:block">
            <ul className="flex text-[#475569] font-[16px] space-x-[20px]">
                <li><a href="#" className="hover:text-[#1D4ED8]">Home</a></li>
                <li><a href="#" className="hover:text-[#1D4ED8]">Features</a></li>
                <li><a href="#" className="hover:text-[#1D4ED8]">Support</a></li>
            </ul>
        </nav>
    );
}

export default Nav;