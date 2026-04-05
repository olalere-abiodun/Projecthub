import Sidebar from "../components/Sidebar";
import Shortheader from "../components/Innerheader";
function Reviews() {
    return (
      <div className="min-h-screen flex flex-row gap-0">
        <Sidebar title="Admin Dashboard" />
        <main className="flex-1 flex flex-col">
          <Shortheader title="Academic Project Review" user="John Doe" />

          <section className=" flex-1 p-[32px]">
            
            Reviews
          </section>
        </main>
      </div>
    );
}

export default Reviews;