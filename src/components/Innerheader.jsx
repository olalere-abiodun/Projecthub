import profile from "../assets/profile.svg";
function Shortheader(props) {
    return (
        <header className="px-[32px] shadow-[0_7px_5px_-8px_rgba(0,0,0,0.3)]">
                    
                        <h1 className="text-[20px] font-bold">{props.title}</h1>
                    
                    <div className="flex flex-row gap-[24px]">
                        <input className="w-[255px] h-[36px] rounded-[12px] border-none px-[16px] py-[10px] bg-[#F3F4F6] " type="search" placeholder="Quick find submissions..." />
                        <div className="flex flex-row gap-[6px] items-center">
                            <img src={profile} alt="" />
                            <h3 className="text-[14px] text-[#191C1E] font-semibold">{props.user}</h3>
                        </div>
                    </div>
        </header>
    )
}

export default Shortheader;