import Input from "./Input";
import Label from "./Label";
import arrow from "../assets/Iconwhite.svg";
function Form() {
  return (
    <form className="flex flex-col gap-[24px]">
        <section className="flex flex-col gap-1">
            <Label text="FULL NAME" />
            <Input className="input" type="text" placeholder="John Doe" />
        </section>
        <section className="flex flex-col gap-1">
            <Label text="EMAIL" />
            <Input className="input" type="email" placeholder="john.doe@example.com" />
        </section>
        <section className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1">
                <Label text="PASSWORD" />
                <Input className="shortinput" type="password" placeholder="••••••••" />
            </div>
            <div className="flex flex-col gap-1">
                <Label text="CONFIRM" />
                <Input className="shortinput" type="password" placeholder="••••••••" />
            </div>
        </section>
        <section className="flex flex-col gap-1">
            <Label text="DEPARTMENT" />
            <select className="input" placeholder="Select Department">
                <option value="">Select Your Department</option>
                <option value="cs">Computer Science</option>
                <option value="ee">Electrical Engineering</option>
                <option value="me">Mechanical Engineering</option>
            </select>
        </section>
        <button className="flex flex-row gap-2 items-center justify-center h-[52px] btn-linear px-6 py-3 mt-[16px]">Sign Up <img src={arrow} alt="" /></button>

    </form>
  );
}

export default Form;