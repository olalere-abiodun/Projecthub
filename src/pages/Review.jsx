import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Shortheader from "../components/Innerheader";
import File from "../components/File";
import Remarks from "../components/Remarks";
import {
  MdDownload,
  MdOutlineFileDownload,
  MdOutlineZoomOut,
  MdOutlineZoomIn,
} from "react-icons/md";
import { BsArrowLeftShort, BsArrowLeftSquareFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";

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
            <div className="flex flex-col gap-[32px]">
              <div className="shadow rounded-2xl flex flex-col">
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

                <div className="p-[48px] w-[629px] h-[847px]">
                  {/* file preview */}
                  <File />
                </div>
              </div>
              <div className="bg-[#F3F4F6] h-[384px] w-[630px] p-[32px] rounded-[12px] flex flex-col gap-[40px]">
                <section className="flex flex-row gap-2 items-center">
                  <GiBackwardTime size={20} />
                  <span className="text-[18px] text-[#191C1E] font-bold">
                    Review Timeline
                  </span>
                </section>
                <section className="flex flex-col gap-[40px]">
                  <div className="flex flex-row gap-2">
                    <section className="bg-[#004AC6] w-[30px] h-[30px] rounded-[100%] flex items-center justify-center shadow-0">
                      <IoMdCheckmark
                        className="text-white font-bold"
                        size={14}
                      />
                    </section>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[16px] font-bold">
                        Final Thesis Uploaded
                      </h1>
                      <section className="h-[64px] overflow-y-auto">
                        <p className="text-[14px] text-[#434655]">
                          The student submitted the final corrected version
                          incorporating feedback from preliminary review.
                        </p>
                      </section>
                      <p className="text-[12px] text-[#434655]">
                        Oct 24, 2023 • 14:20 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 align-top">
                    <section className="bg-[#FFDAD6] w-[30px] h-[30px] rounded-[100%] flex items-center justify-center shrink-0">
                      <BsArrowLeftSquareFill
                        className="text-red-800"
                        size={14}
                      />
                    </section>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-[16px] font-bold">
                        Revision Requested
                      </h1>
                      <section className="border-l-2 border-red-500 p-3 h-[64px] overflow-y-auto rounded bg-white">
                        <p className="text-[14px] text-[#434655]">
                          Please expand the methodology section and verify the
                          citations in Chapter 3. Make sure all correction is
                          fixed Please expand the methodology section and verify
                          the citations in Chapter 3. Make sure all correction
                          is fixed Please expand the methodology section and
                          verify the citations in Chapter 3. Make sure all
                          correction is fixed
                        </p>
                      </section>
                      <p className="text-[12px] text-[#434655]">
                        Oct 24, 2023 • 14:20 PM
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="">
              {/* Remarks  */}
              <Remarks />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminSubmission;
