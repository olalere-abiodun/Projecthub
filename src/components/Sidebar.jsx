import { Link } from "react-router-dom";
import Dashboard from "../assets/Dashboard.svg";
import Submission from "../assets/Submission.svg";
import Upload from "../assets/Upload.svg";
import Settings from "../assets/Settings.svg";
function Sidebar() {
    return (
        <div className="w-[256px] h-screen bg-white px-[21px] py-[17px] hidden md:block border-2">
            <button className="flex flex-row gap-2 items-center justify-center w-full h-[48px] btn-linear px-6 py-3 mb-[40px]"> + New Submission </button>
            <nav className="flex flex-col gap-[8px]">
                <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                    <img src={Dashboard} alt="Dashboard" />
                    <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</Link>
                </section>

                <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                    <img src={Submission} alt="Submissions" />
                    <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Submissions</Link>
                </section>

                <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                    <img src={Upload} alt="Messages" />
                    <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Messages</Link>
                </section>
                <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                    <img src={Settings} alt="Settings" />
                    <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Settings</Link>
                </section>
            </nav>
            
        </div>
    );
}

export default Sidebar;