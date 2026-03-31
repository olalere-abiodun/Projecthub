import { Link, NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { BiCloudUpload } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";

import Help from "../assets/Help.svg";
import Logout from "../assets/Logout.svg";
function Sidebar() {
    return (
        <div className="w-[256px] h-screen bg-white px-[21px] py-[17px] hidden md:block border-2">
            <header>
                <button className="flex flex-row gap-2 items-center justify-center w-full h-[48px] btn-linear px-6 py-3 mb-[40px]"> + New Submission </button>
            </header>
            <aside>
                <nav className="flex flex-col">
                <NavLink className={"flex flex-row gap-[12px] px-[16px] py-[12px] h-[44px] rounded-lg bg-[#F3F4F6]"}>
                    <MdOutlineDashboard className="text-[#64748B]" size={18}/>
                    <span className="text-[#64748B] text-[14px] font-medium">Dashboard</span>
                </NavLink>
                <NavLink className={"flex flex-row gap-[12px] px-[16px] py-[12px] h-[44px] rounded-lg bg-[#F3F4F6]"}>
                    <FaRegFileLines className="text-[#64748B]" size={18}/>
                    <span className="text-[#64748B] text-[14px] font-medium">Submission</span>
                </NavLink>
                <NavLink className={"flex flex-row gap-[12px] px-[16px] py-[12px] h-[44px] rounded-lg bg-[#F3F4F6]"}>
                    <BiCloudUpload className="text-[#64748B]" size={18}/>
                    <span className="text-[#64748B] text-[14px] font-medium">Upload Archive</span>
                </NavLink>
                <NavLink className={"flex flex-row gap-[12px] px-[16px] py-[12px] h-[44px] rounded-lg bg-[#F3F4F6]"}>
                    <MdOutlineSettings className="text-[#64748B]" size={18}/>
                    <span className="text-[#64748B] text-[14px] font-medium">Settings</span>
                </NavLink>
                
            </nav>
            <footer className="border-[#E2E8F0]-1 py-[12px]">
                <div>
                    <nav>
                        <NavLink className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                            <MdHelpOutline className="text-[#64748B]" size={18}/>
                            <span to="" className="text-gray-700 hover:text-gray-900 font-medium">Help Center</span>
                        </NavLink>
                       <NavLink className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                            <MdLogout className="text-[#64748B]" size={18}/>
                            <span to="" className="text-gray-700 hover:text-gray-900 font-medium">Help Center</span>
                        </NavLink>

                    </nav>
                </div>
            </footer>
            </aside>
            
        </div>
    );
}

export default Sidebar;