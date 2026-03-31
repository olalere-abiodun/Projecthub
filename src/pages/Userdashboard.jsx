import Sidebar from "../components/Sidebar";
function Userdashboard() {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">User Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </main>
        </div>
    )
}

export default Userdashboard;