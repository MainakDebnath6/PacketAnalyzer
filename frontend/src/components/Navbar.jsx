import { Shield } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const navClass = ({ isActive }) =>
        isActive
            ? "text-cyan-400 font-semibold"
            : "text-gray-300 hover:text-white transition";

    return (

        <nav className="bg-slate-800 border-b border-slate-700">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <div className="flex items-center gap-3">

                    <Shield size={32} />

                    <h1 className="text-3xl font-bold">
                        Packet Analyzer
                    </h1>

                </div>

                <div className="flex gap-8">

                    <NavLink
                        to="/"
                        className={navClass}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/firewall"
                        className={navClass}
                    >
                        Firewall Rules
                    </NavLink>

                    <NavLink
                        to="/logs"
                        className={navClass}
                    >
                        Engine Logs
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={navClass}
                    >
                        About
                    </NavLink>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;