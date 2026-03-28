import Nav from "./Nav";

function Header() {
    return (
        <header className="bg-white-800 px-[60px] shadow-md">
            <h1 className="text-2xl font-bold">ProjectHub</h1>
            <Nav />
            <div className="flex space-x-4">
                <a href="#" className="px-5 py-2 hover:underline">Login</a>
                <button className="btn-linear px-4 py-2">Get Started</button>
                
            </div>
        </header>
    );
}

export default Header;