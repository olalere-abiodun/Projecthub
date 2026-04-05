import Sidebar from "../components/Sidebar";
import Shortheader from "../components/Innerheader";
import { FaRegUser } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowLeftSquareFill } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import Preview from "../assets/preview.png"


function Reviews() {
  return (
    <div className="min-h-screen flex flex-row gap-0">
      <Sidebar title="Admin Dashboard" />
      <main className="flex-1 flex flex-col">
        <Shortheader title="Academic Project Review" user="John Doe" />

        <section className=" flex-1 p-[32px] flex flex-row gap-[32px]">
          <div className="w-[581px]">
            <section>
              <h1 className="text-[36px] font-bold text-[#191C1E]">
                Review Status History
              </h1>
              <p className="text-[16px] text-[#434655]">
                Comprehensive timeline for Submission #4412: Neural
                Architectures in LLMs
              </p>
            </section>
            <section className="flex flex-col p-[32px] shadow-2xl rounded-[12px] mt-[40px] mb-[40px]">
              <h1>Neural Architectures in LLMs</h1>
              <div className="text-[#434655]">
                <FaRegUser size={16} className="inline-block mr-1" />
                <span className="text-[14px] text-[#434655]">
                  Alice Johnson
                </span>
              </div>
            </section>
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-row gap-2 ">
                <section className="bg-[#004AC6] w-[30px] h-[30px] rounded-[100%] flex items-center justify-center shrink-0">
                  <IoMdCheckmark className="text-white font-bold" size={14} />
                </section>
                <div className="flex flex-col gap-1 shadow p-[24px] rounded-[12px]">
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
                  <BsArrowLeftSquareFill className="text-red-800" size={14} />
                </section>
                <div className="flex flex-col gap-2 shadow p-[24px] rounded-[12px]">
                  <h1 className="text-[16px] font-bold">Revision Requested</h1>
                  <section className="border-l-2 border-red-500 p-3 h-[64px] overflow-y-auto rounded bg-white">
                    <p className="text-[14px] text-[#434655]">
                      Please expand the methodology section and verify the
                      citations in Chapter 3. Make sure all correction is fixed
                      Please expand the methodology section and verify the
                      citations in Chapter 3. Make sure all correction is fixed
                      Please expand the methodology section and verify the
                      citations in Chapter 3. Make sure all correction is fixed
                    </p>
                  </section>
                  <p className="text-[12px] text-[#434655]">
                    Oct 24, 2023 • 14:20 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[267px] p-[32px] bg-[#F3F4F6] shadow-2xl rounded-[12px] self-start">
            <section className="flex flex-col gap-[24px] border-b-2 border-[#E2E8F0] pb-[32px]">
              <div>
                <h2 className="text-[#191C1E] text-[14px] font-bold">
                  DOCUMNET INFO
                </h2>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-[#434655] font-medium text-[14px]">
                  File size
                </p>
                <p className="text-[#191C1E] font-bold text-[14px]">4.2MB</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-[#434655] font-medium text-[14px]">Type</p>
                <p className="text-[#191C1E] font-bold text-[14px]">PDF</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-[#434655] font-medium text-[14px]">
                  Department
                </p>
                <p className="text-[#191C1E] font-bold text-[14px]">
                  Computer Science
                </p>
              </div>
            </section>
            <img src={Preview} alt="" className="mt-[32px]" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Reviews;
