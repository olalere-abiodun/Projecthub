import Header from "../components/Header";
import hero from "../assets/heroimg.png"

function Index() {
    return (
        <div>
            <Header />
            <main className="hero px-[60px] py-[40px] flex gap-[48px]">
                <div className="flex flex-col gap-[25px] w-[614px] h-[588px]">
                    <section className="flex items-center justify-center align-middle w-[614px] h-[58px] bg-[#DBE1FF] rounded-3xl">
                        <h1 className="font-bold text-[20px]">ESPAM FORMATION UNIVERSITY</h1>
                    </section>
                    <h1 className="text-4xl font-bold mb-4 text-[65px]">Submit and Manage Student Projects <span className="text-[#004AC6]">Easily</span></h1>
                    <p className="text-gray-700 mb-6 text-[20px]">A calm, professional platform for graduate researchers to submit projects and manage review & approval workflows</p>
                    <section>
                        <button className="btn-linear px-6 py-3">Get Started</button>
                    <button className="ml-4 px-6 py-3 bg-[#E7E8EA] rounded-lg font-bold">View Documentation</button>
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
            <div>
                <h4 className="text-[#004AC6] font-bold text-[14px] tracking-[2.8px]">CORE CAPABILITIES</h4>
                <h1 className="text-[48px] font-extrabold">Engineered for Academic Precision and Reliability.</h1>
            </div>
        </div>
    );
}

export default Index;