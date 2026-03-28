function Footer() {
    return (
        <footer className="flex flex-row justify-between bg-gray-100 p-[48px] mt-5">
            <div className="flex flex-col">
                <p className="text-[12px] font-medium">&copy; 2026 ProjectHub. ESPAM FORMATION - All rights reserved.</p>
                <p className="text-[10px] font-extralight">
                   DESIGNED FOR ACADEMIC EXCELLENCE AND RESEARCH INNOVATION.
                </p>
            </div>
            <nav>
            <ul className="flex text-[#475569] font-[16px] space-x-[32px]">
                <li><a href="#">PRIVACY</a></li>
                <li><a href="#">TERMS OF USE</a></li>
                <li><a href="#">CONTACT REGISTRY</a></li>
            </ul>
            </nav>
        </footer>
    );
}

export default Footer;