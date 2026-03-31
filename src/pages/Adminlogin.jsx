import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Label from "../components/Label";
import shield from "../assets/Shield.svg";
import grade from "../assets/grade.svg";
import Iconin from "../assets/Iconin.svg";
import Iconcap from "../assets/Iconcap.svg"
import operation from "../assets/operation.png"
function Adminlogin() {
    return (
        <div>
            <header>
                <section className="flex flex-row items-center justify-center gap-2 w-full">
                <Link to="/">
                    <img src={grade} alt="" className="w-4 h-4" />
                <h3 className="font-extrabold text-[20px] tracking-[-1px]">
                    ProjectHub
                </h3>
                </Link>    
                </section> 
            </header>
            <div className="">
                
                <section className="flex flex-col md:flex-row justify-center w-full md:w-[1050px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-2xl bg-white mb-[95px] mx-auto">
                    <div className="w-full md:w-[549px] md:h-[544px] p-[25px] md:p-[48px] rounded-l-2xl bg-icon2">
                      <section className="flex flex-row items-center gap-2 w-[200px] px-[12px] py-[6px] bg-[rgba(0,73,198,0.21)] rounded-3xl">
                        <img src={shield} alt="" className="w-4 h-4" />
                        <h3 className="font-extrabold text-[12px] text-[#004AC6]">
                            ADMINISTRATIVE PORTAL
                        </h3>    
                        </section> 

                    <h1 className="text-[28px] md:text-[48px] font-extrabold mt-[36px] md:w-[475px] leading-[45px] text-[#191C1E]">Institutional <span style={{color:"#004AC6"}}>Excellence</span> Starts With Oversight.</h1>
                    <p className="font-normal text-[18px] mt-[24px] w-[384px] text-[#434655]">
                        Access the central management hub for student submissions, academic archives, and institutional reporting.
                    </p>
                    <section className=" tag2 w-full md:w-[245px] p-[15px] md:p-[24px] mt-[48px]">
                                <div className="flex flex-row gap-2 mb-[16px] align-middle ">
                                   <div className="">
                                  <img src={operation} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-[14px] text-[#434655]">SYSTEM STATUS</h3>
                                    <p className="text-[12px] font-bold ">All systems operational</p>
                                </div>
                    
                                </div>
                                
                                <div class="progress-container">
                                  <div class="progress-bar"></div>
                                </div>
                    </section>
                    </div>
                    <div className="p-[25px] md:p-[48px]">
                        <h1 className="font-extrabold text-[24px]">Admin Login</h1>
                    <p className="font-normal text-[14px] mb-[40px] text-[#434655]"> Enter your credentials to manage the academic lifestyle</p>

                    <form action="" className="flex flex-col gap-[24px]">
                        <section className="flex flex-col gap-1">
                            <Label text="Email Address" />
                            <Input className="input" type="text" placeholder="student@university.edu" />
                        </section>
                        <section className="flex flex-col gap-1">
                            <section>
                                <Label text="Password" />
                                <a href="#" className="text-blue-500 font-bold text-[12px] float-right">Forgot Password?</a>
                            </section>
                            <Input className="input" type="password" placeholder="••••••••" />
                        </section>
                        <section className="flex flex-row gap-2">
                            
                                <input type="checkbox" />
                                <p className="text-[14px] text-[#434655]">Remember Me</p>
                           
                            
                        </section>
                        <button className="flex flex-row gap-2 items-center justify-center h-[52px] btn-linear px-6 py-3">Sign In to Portal <img src={Iconin} alt="" /></button>
                    </form>
                    <div className="flex flex-row gap-2 mt-[47px] items-center justify-center">
                        <img src={Iconcap} alt="" />
                        <Link to="/signup" className="text-[#434655] text-[14px] font-medium">Student Login</Link>
                    </div>
                    
                    </div>
                </section>
                
            </div>

                <Footer />
        </div>
    );
}
export default Adminlogin;