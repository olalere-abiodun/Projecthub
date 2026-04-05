import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Shortheader from "../components/Innerheader";
import { MdDownload, MdOutlineFileDownload } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineZoomOut } from "react-icons/md";
import { MdOutlineZoomIn } from "react-icons/md";
import File from "../components/File";
import Remarks from "../components/Remarks";

function AdminSubmission() {
  const statusStyles = {
    approved: "bg-green-100 text-green-700 px-4 py-1 rounded-2xl",
    rejected: "bg-red-100 text-red-700 font-bold px-2 py-1 rounded-2xl",
    pending: "bg-orange-100 text-orange-600 px-2 py-1 rounded-2xl",
    action_required: "bg-orange-100 text-orange-600 px-2 py-1 rounded-2xl",
  };
  return (
    <div className="min-h-screen flex flex-row gap-0">
      <Sidebar title="Admin Dashboard" />
      <main className="flex-1 flex flex-col">
        <Shortheader title="Academic Project Review" user="John Doe" />

        <section className=" flex-1 p-[32px]">
          <div className="flex flex-row justify-between items-end  ">
            <section>
              <Link
                to="/submission"
                className="flex flex-row items-center text-[14px] font-medium text-[#004AC6]"
              >
                <BsArrowLeftShort />
                <span>Back to Queue</span>
              </Link>
              <h1 className="text-[36px] font-bold text-[#191C1E]">
                Quantum_Computing_Thesis.pdf
              </h1>
              <section className="flex flex-row gap-[36px]">
                <span className="text-[#434655]">
                  <FaRegUser size={16} className="inline-block mr-1" />
                  <span className="text-[14px] text-[#434655]">
                    Alice Johnson
                  </span>
                </span>
                <span className="text-[#434655]">
                  <FaRegUser size={16} className="inline-block mr-1" />
                  <span className="text-[14px] text-[#434655]">
                    Submitted: Oct 24, 2025
                  </span>
                </span>
                <span className="text-[#434655]">
                  <FaRegUser size={16} className="inline-block mr-1" />
                  <span className="text-[14px] text-[#434655]">
                    Dept: Computer Science
                  </span>
                </span>
                <span className="text-[#434655]">
                  <div
                    className={`${statusStyles.action_required} inline-block`}
                    style={{
                      height: "24px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Action Required
                  </div>
                </span>
              </section>
            </section>
            <section className="flex flex-row gap-3">
              <button className="flex flex-row gap-2 bg-[#E7E8EA] rounded-[12px] w-[144px] h-[44px] items-center justify-center">
                <MdOutlineFileDownload size={20} />
                <span className="text-[14px] font-medium">Download</span>
              </button>
              <button className="flex flex-row gap-2 bg-[#E7E8EA] rounded-[12px] h-[44px] w-[60px] items-center justify-center">
                <LuPrinter size={20} />
              </button>
            </section>
          </div>
          <div className="flex flex-row gap-[32px] mt-[40px] mb-[32px] ">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center w-[629px] h-[56px] bg-[#F3F4F6] px-[24px] rounded-t-xl">
                <div>
                  <section className="flex flex-row gap-1">
                    <IoDocumentText size={20} className="text-[#004AC6]" />
                    <span className="text-[#191C1E] text-[16] font-medium">
                      Document Preview
                    </span>
                  </section>
                </div>
                <div className="flex flex-row gap-[6px] items-center">
                  <span className="text-[#434655] text-[12px]">
                    {" "}
                    Page 1 of 10{" "}
                  </span>
                  <div className="border border-[#c3c6d74e] w-[45px] h-[24px] rounded-[8px] flex items-center justify-center">
                    <button>
                      <MdOutlineZoomIn size={16} />
                    </button>
                    <button>
                      <MdOutlineZoomOut size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-[48px] w-[629px] h-[847px] border-2">
                {/* file preview */}
                <File />
              </div>
            </div>

            <div>
              {/* Remarks  */}
              <Remarks />
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
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">
                      STUDENT NAME
                    </th>
                    <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">
                      SUBMISSION TITLE
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
                    <td>
                      <input type="checkbox" />
                    </td>
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
                        className={`${statusStyles.action_required} inline-block`}
                      >
                        Action Required
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

export default AdminSubmission;
