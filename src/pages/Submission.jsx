import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";  
import Shortheader from "../components/Innerheader";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";


function AdminSubmission() {
    const statusStyles = {
        approved: "bg-green-100 text-green-700 px-4 py-1 rounded-2xl",
        rejected: "bg-red-100 text-red-700 font-bold px-2 py-1 rounded-md",
        pending: "bg-orange-100 text-orange-600 px-2 py-1 rounded-md",
        };
    return (
        <div className="min-h-screen flex flex-row gap-0">
            <Sidebar 
            title="Admin Dashboard"
            />
            <main className="flex-1 flex flex-col">
                <Shortheader 
                title="Academic Project Review"
                user="John Doe"
                />
                
                <section className=" flex-1 p-[32px]">
                    <div className="flex flex-row justify-between items-end  ">
                        <section>
                            <h1 className="text-[36px] font-bold text-[#191C1E]">Submission Management</h1>
                            <p className="text-[16px] text-[#434655]">Review and manage academic academic artifacts.</p>
                        </section>
                        <section className="flex flex-row gap-3">
                            <button className="flex flex-row py-2 px-[16px] gap-2 text-[#004AC6] ">
                                <MdOutlineFileDownload size={20} />
                                <span className="text-[14px] font-medium">Bulk Download</span>
                            </button>
                            <button className="flex flex-row py-[10px] px-[16px] gap-2 text-[#FFFFFF] bg-[#004AC6] rounded-[12px]">
                                <MdCheckCircleOutline size={20} />
                                <span className="text-[14px] font-medium">Bulk Approve</span>
                            </button>
                        </section>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 p-[16px] mt-[32px] mb-[32px] bg-[#F3F4F6]">
                        <div>
                            <h2>DEPARTMENT</h2>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div> 
                    </div>
                    <div>
                        <section className="px-[32px] py-[24px] shadow">
                            <h1 className="text-[20px] font-bold text-[#191C1E]">All Submissions</h1>
                        </section>
                        <section>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">STUDENT NAME</th>
                                        <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">FILE NAME</th>
                                        <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">DEPARTMENT</th>
                                        <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">STATUS</th>
                                        <th className="text-left text-[12px] font-bold text-[#434655] tracking-[1.2px] px-[32px] py-[16px]">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-[14px] font-medium text-[#191C1E] p-[30px]">Bob Smith</td>
                                        <td className="text-[14px] font-medium text-[#191C1E] p-[30px]">Research_Paper_Final.pdf</td>
                                        <td className="text-[14px] font-medium text-[#191C1E] p-[30px]">Biology</td>
                                        <td className="text-[14px] font-medium p-[30px]">
                                            <div className={`${statusStyles.approved} inline-block`}>Approved</div>
                                        </td>
                                        <td className="text-[14px] font-medium text-[#191C1E] p-[30px] flex flex-row gap-4">
                                            <MdOutlineFileDownload size={20} />
                                            <MdCheckCircleOutline size={20} /> 
                                            <MdOutlineCancel size={20} />

                                        </td>
                                    </tr>
                                    
                                </tbody>

                                
                                    
                            </table>
                        </section>
                        <section className="flex flex-row justify-between px-[32px] py-[21px]">
                            <p className="text-[12px] font-medium text-[#434655]">Showing 1 to 10 of 25 results</p>
                            <section>
                                <button className="text-[#191C1E] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">Prev</button>
                                <button className="text-[#191C1E] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">1</button>
                                <button className="bg-[#004AC6] text-[#FFFFFF] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">2</button>
                                <button className=" text-[#191C1E] text-[12px] font-bold px-[12px] py-[4px] border border-[#C3C6D7]/20 rounded-md">Next</button>
                            </section>
                        </section>

                    </div>
                </section>
                <Footer />
            </main>
        </div>
    )
}

export default AdminSubmission;