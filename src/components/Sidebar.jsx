import { Link, NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { BiCloudUpload } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import home from "../assets/HomeIcon.svg";


function Sidebar() {
    const linkClass = ({ isActive }) =>
        `flex flex-row gap-[12px] px-[16px] py-[12px] h-[44px] rounded-lg 
        ${isActive ? "bg-[#EFF6FF] text-[#2563EB] border-r-4 border-[#2563EB]" : "bg-transparent text-[#64748B]"}`;

    const iconClass = (isActive) =>
        isActive ? "text-[#1D4ED8]" : "text-[#64748B]";
    return (
        <div className="w-[256px] min-h-screen bg-white px-[21px] py-[17px] hidden md:flex flex-col gap-6 border-r border-[#E2E8F0]">
            <header className="flex flex-col gap-6 mb-[40px]">
                <section className="flex flex-row gap-3">
                    <div className="bg-[#2563EB] p-[10px] rounded-[12px] h-[40px] w-[40px]">
                        <img src={home} alt="" />
                    </div>
                    <div>
                        <h1 className="text-[18px] font-bold text-[#0F172A] tracking-tight">Student Portal</h1>
                        <p className="text-[10px] font-semibold text-[#434655]">ACADEMIC YEAR 2025-2026</p>
                    </div>
                </section>
                <button className="flex flex-row gap-2 items-center justify-center w-full h-[48px] btn-linear px-6 py-3 mb-[40px]"> + New Submission </button>
            </header>
            <aside className="flex-1 flex flex-col overflow-hidden">
                <nav className="flex flex-col">
                <NavLink to="/dashboard" className={Link => linkClass(Link)}>
                    {({ isActive }) => (
                    <>
                    <MdOutlineDashboard className={iconClass(isActive)} size={18}/>
                    <span className="text-[14px] font-medium">Dashboard</span>
                    </>
                 )}
                </NavLink>
                <NavLink to="/submission" className={Link => linkClass(Link)}>
                    {({ isActive }) => (
                    <>
                    <FaRegFileLines className={iconClass(isActive)} size={18}/>
                    <span className="text-[14px] font-medium">Submission</span>
                    </>
                 )}
                </NavLink>
                <NavLink to="/upload" className={Link => linkClass(Link)}>
                    {({ isActive }) => (
                    <>
                    <BiCloudUpload className={iconClass(isActive)} size={18}/>
                    <span className="text-[14px] font-medium">Upload Archive</span>
                    </>
                 )}
                </NavLink>
                <NavLink to="/settings" className={Link => linkClass(Link)}>
                    {({ isActive }) => (
                    <>
                    <MdOutlineSettings className={iconClass(isActive)} size={18}/>
                    <span className="text-[14px] font-medium">Settings</span>
                    </>
                 )}
                </NavLink>
                
            </nav>
            <footer className="pt-[24px] align-bottom mt-auto border-t border-[#E2E8F0]">
                <div>
                    <nav>
                        <NavLink to="/help" className="flex flex-row gap-[12px] px-[12px] py-[8px]">
                            <MdHelpOutline className="text-[#64748B]" size={18}/>
                            <span to="" className="text-gray-700 hover:text-gray-900 font-medium">Help Center</span>
                        </NavLink>
                       <NavLink to="/logout" className="flex flex-row gap-[12px] px-[12px] py-[8px]">
                            <MdLogout className="text-[#64748B]" size={18}/>
                            <span to="" className="text-gray-700 hover:text-gray-900 font-medium">Logout</span>
                        </NavLink>

                    </nav>
                </div>
            </footer>
            </aside>
            
        </div>
    );
}

export default Sidebar;