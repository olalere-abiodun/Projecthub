import Header from "../components/Header";
import hero from "../assets/heroimg.png";
import Icon from "../assets/Icon.svg";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";
import seal from "../assets/seal.png";
import iconbtn from "../assets/iconbtn.png";

function Index() {
  return (
    <div>
      <Header />
      <main className="hero px-[60px] py-[40px] flex gap-[48px]">
        <div className="flex flex-col gap-[25px] w-[614px] h-[588px]">
          <section className="flex items-center justify-center align-middle w-[614px] h-[58px] bg-[#DBE1FF] rounded-3xl">
            <h1 className="font-bold text-[20px]">
              ESPAM FORMATION UNIVERSITY
            </h1>
          </section>
          <h1 className="text-4xl font-bold mb-4 text-[65px]">
            Submit and Manage Student Projects{" "}
            <span className="text-[#004AC6]">Easily</span>
          </h1>
          <p className="text-gray-700 mb-6 text-[20px]">
            A calm, professional platform for graduate researchers to submit
            projects and manage review & approval workflows
          </p>
          <section>
            <button className="btn-linear px-6 py-3">Get Started</button>
            <button className="ml-4 px-6 py-3 bg-[#E7E8EA] rounded-lg font-bold">
              View Documentation
            </button>
          </section>
        </div>
        <div>
          <img src={hero} alt="Hero Image" />
        </div>
      </main>
      <section className="flex justify-between bg-[#F3F4F6] py-[48px] px-[24px] text-[20px] text-[#191C1E] font-bold ">
        <h3>OXFORD ARCHIVE</h3>
        <h3>CAMBRIDGE COLLABORATIVE</h3>
        <h3>MIT REPOSITORY</h3>
        <h3>STANFORD SCHOLAR</h3>
      </section>
      <section className="feature-section">
        <div className="flex justify-between px-[25px]">
          <div className="w-[571px]">
            <h4 className="text-[#004AC6] font-bold text-[14px] tracking-[2.8px]">
              CORE CAPABILITIES
            </h4>
            <h1 className="text-[48px] font-extrabold  tracking-[-1.2px] leading-[48px]">
              Engineered for Academic Precision and Reliability.
            </h1>
          </div>
          <div className="flex place-items-end gap-[7px]">
            <h3 className="text-[#004AC6] font-bold text-[16px]">
              Explore all Features
            </h3>
            <img src={Icon} alt="" className="w-4" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[20px] px-[25px] align-middle justify-center mt-[80px]">
          {/* Row 1 - Left (2/3) */}
          <div className="col-span-2 rounded-[12px] border-0 shadow p-[40px]">
            <div className="linear icon px-[14px] py-[18px]">
              <img src={Icon1} alt="" />
            </div>
            <h2 className="font-bold text-[30px] mt-[32px]">Upload File</h2>
            <p className="text-[18px] w-[448px] mt-[16px]">
              Support for all major academic formats with secure, encrypted
              storage. Drag, drop and tag your project for review
            </p>
            <div className="flex flex-row gap-[16px] mt-[24px]">
              <div className="rounded-2xl bg-[#EDEEF0] w-[128px] h-[160px] flex flex-col justify-center items-center">
                <img src={Icon2} alt="" />
                <h3 className="text-[#C3C6D7] text-[10px] font-bold">
                  NEW ITEM
                </h3>
              </div>
              <div className="rounded-2xl bg-[#004AC60D] w-[128px] h-[160px] px-[12px] py-[16px] flex flex-col justify-between">
                <img src={Icon3} alt="" style={{ width: "20px" }} />
                <p className="text-[#004AC6] text-[10px] font-bold">
                  Thesis_final.pdf
                </p>
              </div>
              <div className="rounded-2xl bg-[#EDEEF0] w-[128px] h-[160px] px-[12px] py-[16px] flex flex-col justify-between">
                <img src={Icon4} alt="" style={{ width: "20px" }} />
                <p className="text-[10px] font-bold">Sources.docx</p>
              </div>
            </div>
          </div>

          {/* Row 1 - Right (1/3) */}
          <div className="col-span-1 bg-[#004AC6] rounded-[12px] p-[40px]">
            <div className="icon bg-[rgb(255,255,255,0.2)] px-[14px] py-[18px]">
              <img src={Icon5} alt="" />
            </div>
            <h2 className="font-bold text-[30px] mt-[32px] text-white">
              Track Status
            </h2>
            <p className="text-[18px] mt-[16px] text-[#DBE1FF]">
              Real time transparency into where your submission sits in the
              departmental approval pipeline
            </p>
            <div className="flex flex-row items-center gap-[12px] mt-[72px] bg-[rgb(255,255,255,0.2)] p-[16px] rounded-lg">
              <div className="bullet"></div>
              <h4 className="text-white font-medium text-[14px]">
                Departmental Head Approved
              </h4>
            </div>
            <div className="flex flex-row items-center gap-[12px] mt-[16px] bg-[rgb(255,255,255,0.05)] p-[16px] rounded-lg">
              <div className="bullet2"></div>
              <h4 className="text-gray-500 font-medium text-[14px]">
                Faculty Review
              </h4>
            </div>
          </div>

          {/* Row 2 - Full width */}
          <div className="flex flex-row justify-center items-center gap-[48px] col-span-3 bg-[#F3F4F6] p-[48px] rounded-[12px]">
            <div>
              <div className="icon bg-[#E1E2E4] px-[14px] py-[18px]">
                <img src={Icon6} alt="" />
              </div>
              <h2 className="font-bold text-[30px] mt-[32px]">
                Download Approved Files
              </h2>
              <p className="text-[18px] w-[500px] mt-[16px] font-light">
                Once finalized, access your approved project files with a single
                click. Download for personal archiving or departmental
                submission.
              </p>
              <button className="iconbtn rounded-lg bg-white mt-[32px]">
                <img src={iconbtn} alt="" /> Access Archive
              </button>
            </div>
            <img
              src={seal}
              alt=""
              style={{ width: "544px", height: "256px" }}
            />
          </div>
        </div>
      </section>
      {/* CTA  */}
      <section className="cta px-[25px] py-[80px]">
          <div className="flex items-center justify-center flex-col bg-[#E1E2E4] rounded-2xl py-[95px]">
            <section className="flex flex-col gap-[30px] w-[768px] items-center justify-center">
                <h1 className="text-[48px] font-extrabold  tracking-[-1.2px] leading-[48px] text-center">
              Ready to Review Your Project Document?
            </h1>
            
            <p className="text-gray-700 mb-6 text-[20px] text-center">
              Join hundreds of graduate researchers who trust ProjectHub to manage their project submissions with ease and confidence.
            </p>
            <section>
              <button className="btn-linear px-6 py-3">Create Your Account</button>
              <button className="ml-4 px-6 py-3 bg-white rounded-lg font-bold">Contact Admin</button>
            </section>
            </section>
          </div>
        </section>
    </div>
  );
}

export default Index;
