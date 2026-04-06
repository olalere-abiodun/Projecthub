import React, {useState} from "react"
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";  
import Shortheader from "../components/Innerheader";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

function Userdashboard() {
    const statusStyles = {
        approved: "bg-green-100 text-green-700 px-4 py-1 rounded-2xl",
        rejected: "bg-red-100 text-red-700 font-bold px-2 py-1 rounded-md",
        pending: "bg-orange-100 text-orange-600 px-2 py-1 rounded-md",
        };

    return (
      <div className="min-h-screen flex flex-col md:flex-row gap-0">
        {/* desktop side bar only  */}
        <div className="hidden md:block">
          <Sidebar title="Admin Dashboard" />
        </div>
        <main className="flex-1 flex flex-col">
          <Shortheader title="Academic Project Review" user="John Doe" />

          <section className=" flex-1 p-[32px]">
            <div>
              <h1 className="text-[28px] md:text-[36px] font-bold text-[#191C1E]">
                Admin Dashboard
              </h1>
              <p className="text-[14px] md:text-[16px] text-[#434655]">
                Curating institutional excellence through rigorous academic
                validation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 md:h-[192px] mt-[48px] mb-[48px]">
              <div className="p-[24px] md:p-[32px] h-[164px] rounded-[12px] border-l-4 border-[#2563EB] shadow">
                <h2 className="text-[14px] md:text-[16px] font-bold text-[#434655] tracking-[1.6px]">
                  TOTAL SUBMISSIONS
                </h2>
                <div>
                  <h1 className="flex flex-col gap-2 text-[36px] md:text-[60px] font-extrabold text-[#004AC6] tracking-[-3px]">
                    24
                  </h1>
                </div>
              </div>
              <div className="bg-[#F3F4F6] p-[32px] rounded-[12px] flex flex-col gap-4">
                <h2 className="text-[16px] font-bold text-[#434655] tracking-[1.6px]">
                  TOTAL SUBMISSIONS
                </h2>
                <div>
                  <h1 className="flex flex-col gap-2 text-[36px] font-extrabold text-[#191C1E]">
                    128
                  </h1>
                  <div className="h-1 bg-[#d9d9d9] overflow-hidden rounded">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              </div>
              <div class="bg-[#F3F4F6] p-[32px] rounded-[12px] flex flex-col gap-4">
                <h2 className="text-[16px] font-bold text-[#434655] tracking-[1.6px]">
                  DEPARTMENT REACH
                </h2>
                <div>
                  <h1 className="flex flex-col gap-2 text-[36px] font-extrabold text-[#191C1E]">
                    12
                  </h1>
                  <p className="text-[#434655] font-semibold text-[12px]">
                    Active departments
                  </p>
                </div>
              </div>
            </div>
            <div>
              <section className="px-[32px] py-[24px] shadow">
                <h1 className="text-[20px] font-bold text-[#191C1E]">
                  All Submissions
                </h1>
              </section>
              <section>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">
                        STUDENT NAME
                      </th>
                      <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">
                        FILE NAME
                      </th>
                      <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">
                        DEPARTMENT
                      </th>
                      <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">
                        STATUS
                      </th>
                      <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-[14px] font-medium text-[#191C1E] p-[30px]">
                        Bob Smith
                      </td>
                      <td className="text-[14px] font-medium text-[#191C1E] p-[30px]">
                        Research_Paper_Final.pdf
                      </td>
                      <td className="text-[14px] font-medium text-[#191C1E] p-[30px]">
                        Biology
                      </td>
                      <td className="text-[14px] font-medium p-[30px]">
                        <div
                          className={`${statusStyles.approved} inline-block`}
                        >
                          Approved
                        </div>
                      </td>
                      <td className="text-[14px] font-medium text-[#191C1E] p-[30px] flex flex-row gap-4">
                        <MdOutlineFileDownload size={20} />
                        <MdCheckCircleOutline size={20} />
                        <MdOutlineCancel size={20} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="flex flex-row justify-between px-[32px] py-[21px]">
                <p className="text-[12px] font-medium text-[#434655]">
                  Showing 1 to 10 of 25 results
                </p>
                <section>
                  <button className="text-[#191C1E] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">
                    Prev
                  </button>
                  <button className="text-[#191C1E] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">
                    1
                  </button>
                  <button className="bg-[#004AC6] text-[#FFFFFF] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">
                    2
                  </button>
                  <button className=" text-[#191C1E] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">
                    Next
                  </button>
                </section>
              </section>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    );
}

export default Userdashboard;