import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import shield from "../assets/Shield.svg";
import grade from "../assets/grade.svg";
// import Icon7 from "../assets/Icon7.svg";
function Signup() {
    return (
        <div>
            <div className="">
                <section className="flex flex-row justify-center w-full md:w-[1100px] p-[25px] md:p-[48px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-2xl bg-white">
                    <div className="w-[453px]">
                     <section className="flex flex-row items-center gap-2">
                        <img src={grade} alt="" className="w-4 h-4" />
                        <h3 className="font-extrabold text-[20px] tracking-[-1px]">ProjectHub</h3>    
                    </section>   
                    <h1 className="text-[36px] font-extrabold mt-[56px]">Welcome back to institutional Excellence.</h1>
                    <p className="font-normal text-[18px] mt-[24px] w-[384px] text-[#434655]">
                        Access your academic submissions, review feedback, and manage your project documents with ease.
                    </p>
                    <section className=" tag2 w-full md:w-[380px] p-[15px] md:p-[24px] mt-[48px]">
                                <div className="flex flex-row gap-2 mb-[16px] align-middle ">
                                   <div className="icon2 px-[11px] py-[11px]">
                                  <img src={shield} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[14px]">Secure Gateway</h3>
                                    <p className="text-[12px] text-[#434655]">Encrypted Academic Protocol</p>
                                </div>
                    
                                </div>
                                
                                <div class="progress-container mt-[16px]">
                                  <div class="progress-bar"></div>
                                </div>
                    </section>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-[30px]">Create your account</h1>
                    <p className="font-normal text-[14px] mb-[40px]">Manage Your submission with institutional claim</p>

                    <Form />
                    <div className="text-center mt-[64px]">
                        <h6 className="font-[14px] font-light">Already Have an Account? <a href="/login" className="text-blue-500 font-bold">Login</a></h6>
                    </div>
                    </div>
                </section>
                
            </div>

                <Footer />
        </div>
    );
}
export default Signup;