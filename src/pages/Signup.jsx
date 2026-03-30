import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import shield from "../assets/Shield.svg";
import grade from "../assets/grade.svg";
function Signup() {
    return (
        <div>
            <Header />
            <div className="w-full md:w-[512px] mt-[50px] mb-[96px] mx-auto">
                <section className="flex flex-col justify-center w-full md:w-[512px] p-[25px] md:p-[48px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-2xl bg-white">
                    <h1 className="font-extrabold text-[30px]">Create your account</h1>
                    <p className="font-normal text-[14px] mb-[40px]">Manage Your submission with institutional claim</p>

                    <Form />
                    <div className="text-center mt-[64px]">
                        <h6 className="font-[12px] font-light">Already Have an Account? <a href="/login" className="text-blue-500 font-bold">Login</a></h6>
                    </div>
                </section>
                <div className="flex flex-row gap-[32px] mt-[32px] justify-center w-[512px] text-[10px] font-medium text-gray-400">
                    <section className="flex items-center gap-[3px]">
                        <img src={shield} alt="Shield" className="w-4 h-4" />
                        <p className="whitespace-nowrap">SECURE PORTAL</p>
                    </section>
                    <section className="flex items-center gap-[4px]">
                        <img src={grade} alt="Grade" className="w-4 h-4" />
                        <p className="whitespace-nowrap">INSTITUTIONAL CLAIM</p>
                    </section>
                </div>
            </div>

                <Footer />
        </div>
    );
}
export default Signup;