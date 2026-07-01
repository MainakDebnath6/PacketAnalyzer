import { Shield } from "lucide-react";

function Navbar() {
    return (
        <nav className="bg-slate-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center gap-3">
                <Shield size={30} />
                <h1 className="text-2xl font-bold">
                    Packet Analyzer
                </h1>
            </div>
        </nav>
    );
}

export default Navbar;