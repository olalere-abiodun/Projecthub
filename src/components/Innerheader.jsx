import React, {useState} from "react";
import profile from "../assets/profile.svg";
import menu from "../assets/icon-menu.svg";
import Sidebar from "./Sidebar";


function Shortheader(props) {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

     const toggleSidebar = () => {
       setIsSidebarOpen(!isSidebarOpen);
     };
    return (
      <header className="px-[25px] md:px-[32px] shadow-[0_7px_5px_-8px_rgba(0,0,0,0.3)]">
        <h1 className="text-[16px] md:text-[20px] font-bold">{props.title}</h1>

        <div className="hidden md:flex md:flex-row md:gap-[24px]">
          <input
            className="w-[255px] h-[36px] rounded-[12px] border-none px-[16px] py-[10px] bg-[#F3F4F6] "
            type="search"
            placeholder="Quick find submissions..."
          />

          <div className="flex flex-row gap-[6px] items-center">
            <img src={profile} alt="" />
            <h3 className="text-[14px] text-[#191C1E] font-semibold">
              {props.user}
            </h3>
          </div>
        </div>
        <button
          className="md:hidden ms-auto"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <img src={menu} alt="" />
        </button>

        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-red-500/50 z-40 md:hidden"
              onClick={() => {
                console.log("OVERLAY CLICKED");
                toggleSidebar();
              }}
            ></div>

            {/* Sidebar */}
            <div className="fixed top-0 left-0 z-50 md:hidden">
              <Sidebar />
            </div>
          </>
        )}
      </header>
    );
}

export default Shortheader;