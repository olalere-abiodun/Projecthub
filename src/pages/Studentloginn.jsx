import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Label from "../components/Label";
import Nav from "../components/Nav";
import shield from "../assets/Shield.svg";
import grade from "../assets/grade.svg";
import Iconin from "../assets/Iconin.svg";
function Login() {
    return (
        <div>
            <div className="">
                <section className="flex flex-row justify-center w-full md:w-[1050px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-2xl bg-white mt-[100px] mb-[95px] mx-auto">
                    <div className="w-[549px] h-[544px] p-[25px] md:p-[48px] rounded-l-2xl bg-icon">
                     <section className="flex flex-row items-center gap-2">
                        <img src={grade} alt="" className="w-4 h-4" />
                        <h3 className="font-extrabold text-[20px] tracking-[-1px]">ProjectHub</h3>    
                    </section>   
                    <h1 className="text-[36px] font-extrabold mt-[49px]">Welcome back to institutional Excellence.</h1>
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
                                
                                <div class="progress-container">
                                  <div class="progress-bar"></div>
                                </div>
                    </section>
                    </div>
                    <div className="p-[25px] md:p-[48px]">
                        <h1 className="font-extrabold text-[24px]">Student Login</h1>
                    <p className="font-normal text-[14px] mb-[40px] text-[#434655]">Please enter your university credentials to continue</p>

                    <form action="" className="flex flex-col gap-[24px]">
                        <section className="flex flex-col gap-1">
                            <Label text="UNIVERSITY EMAIL" />
                            <Input className="input" type="text" placeholder="student@university.edu" />
                        </section>
                        <section className="flex flex-col gap-1">
                            <section>
                                <Label text="PASSWORD" />
                                <a href="#" className="text-blue-500 text-[12px] float-right">Forgot Password?</a>
                            </section>
                            <Input className="input" type="password" placeholder="••••••••" />
                        </section>
                        <button className="flex flex-row gap-2 items-center justify-center h-[52px] btn-linear px-6 py-3 mt-[16px]">Login <img src={Iconin} alt="" /></button>
                    </form>
                    <div className="text-center mt-[64px]">
                        <h6 className="font-[12px] font-light">New to the institution? <Link to="/signup" className="text-blue-500 font-bold">Create an Account</Link></h6>
                    </div>
                    
                    </div>
                </section>
                
            </div>

                <Footer />
        </div>
    );
}
export default Login;