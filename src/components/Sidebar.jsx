import { Link } from "react-router-dom";
import Dashboard from "../assets/Dashboard.svg";
import Submission from "../assets/Submission.svg";
import Upload from "../assets/Upload.svg";
import Settings from "../assets/Settings.svg";
import UploadIcon from "../assets/Iconupload.svg";
import Help from "../assets/Help.svg";
import Logout from "../assets/Logout.svg";
function Sidebar() {
    return (
        <div className="w-[256px] h-screen bg-white px-[21px] py-[17px] hidden md:block border-2">
            <header>
                <button className="flex flex-row gap-2 items-center justify-center w-full h-[48px] btn-linear px-6 py-3 mb-[40px]"> + New Submission </button>
            </header>
            <aside>
                <nav className="flex flex-col gap-[8px]">
                <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                    <img src={Dashboard} alt="Dashboard" />
                    <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</Link>
                </section>
                <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                    <img src={UploadIcon} alt="Upload Archive" />
                    <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Upload Archive</Link>
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
            <footer className="border-[#E2E8F0]-1 py-[12px]">
                <div>
                    <nav>
                        <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                            <img src={Help} alt="Help Center" />
                            <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Help Center</Link>
                        </section>
                        <section className="flex flex-row gap-[12px] px-[12px] py-[8px] rounded-lg bg-[#F3F4F6]">
                            <img src={Logout} alt="Logout" />
                            <Link to="" className="text-gray-700 hover:text-gray-900 font-medium">Logout</Link>
                        </section>

                    </nav>
                </div>
            </footer>
            </aside>
            
        </div>
    );
}

export default Sidebar;