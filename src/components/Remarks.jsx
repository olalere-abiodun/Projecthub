
import Label from "./Label";
import { PiSealCheckBold } from "react-icons/pi";
import { MdOutlineEditNote } from "react-icons/md";
import { LiaWindowClose } from "react-icons/lia";

function Remarks() {
  return (
    <div className="p-[32px] flex flex-col shadow rounded">
      <h1 className="text-[20px] text-[#191C1E] font-bold  ">
        Review Feedback
      </h1>
      <section>
        <h3 className="text-[12px] font-bold text-[#434655]">
          COMPLAINCE CHECKLIST
        </h3>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-row gap-3 p-3 bg-[#F8F9FB] rounded-2xl">
            <input type="checkbox" />
            <section>
              <h2 className="text-[14px] font-semibold text-[#191C1E]">
                Academic Formating
              </h2>
              <p className="text-[12px] font-normal text-[#434655]">
                Adhere to institutional style guide for formatting, including
                title page, abstract and table of contents.
              </p>
            </section>
          </div>
          <div className="flex flex-row gap-3 p-3 bg-[#F8F9FB] rounded-2xl">
            <input type="checkbox" />
            <section>
              <h2 className="text-[14px] font-semibold text-[#191C1E]">
                Plagiarism Check
              </h2>
              <p className="text-[12px] font-normal text-[#434655]">
                Similarity score is below 15%
              </p>
            </section>
          </div>
          <div className="flex flex-row gap-3 p-3 bg-[#F8F9FB] rounded-2xl">
            <input type="checkbox" />
            <section>
              <h2 className="text-[14px] font-semibold text-[#191C1E]">
                Citations &amp; References
              </h2>
              <p className="text-[12px] font-normal text-[#434655]">
                All sources are cited and listed in the bibliography according
                to the required citation style.
              </p>
            </section>
          </div>
          <div>
            <Label text="ADMINISTRATOR COMMENT" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className="w-full p-3 border-0 rounded-[12px] focus:outline-none focus:ring-2 bg-[#E7E8EA]"
              placeholder="Provide specific feedback on formatting issues"
            ></textarea>
          </div>
          <div className="flex flex-col gap-3">
            <button className="linear text-white font-bold text-[16px] h-[56px] rounded-[12px] gap-[6px] w-full flex flex-row items-center justify-center">
              <PiSealCheckBold size={20} />
              <span>Approve Submission</span>
            </button>
            <button className="bg-[#bc480028] font-bold text-[#BC4800] h-[56px] rounded-[12px] w-full flex flex-row gap-[6px] items-center justify-center">
              <MdOutlineEditNote size={20} />
              <span>Request Revision</span>
            </button>
            <button className="text-[#BA1A1A] font-bold h-[56px] rounded-[12px] w-full flex flex-row gap-[6px] items-center justify-center">
              <LiaWindowClose size={20} />
              <span>Reject Submission</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Remarks;