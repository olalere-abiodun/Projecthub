
import Label from "./Label";
function Remarks() {
  return (
    <div className="p-[32px] flex flex-col">
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
            <button className="linear text-white py-2 px-4 rounded-[12px] w-full">
              <span>Approve Submission</span>
            </button>
            <button className="bg-[#bc480028] text-[#BC4800] py-2 px-4 rounded-[12px] w-full">
              Request Revision
            </button>
            <button className="text-red py-2 px-4 rounded-[12px] w-full">
              Reject Submission
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Remarks;