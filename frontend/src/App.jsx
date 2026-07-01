import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import FirewallRules from "./pages/FirewallRules";
import EngineLogs from "./pages/EngineLogs";
import About from "./pages/About";

function App() {

    return (

        <BrowserRouter>

            <div className="min-h-screen bg-slate-900 text-white">

                <Navbar />

                <div className="max-w-7xl mx-auto p-8">

                    <Routes>

                        <Route
                            path="/"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/firewall"
                            element={<FirewallRules />}
                        />

                        <Route
                            path="/logs"
                            element={<EngineLogs />}
                        />

                        <Route
                            path="/about"
                            element={<About />}
                        />

                    </Routes>

                </div>

            </div>

        </BrowserRouter>

    );

}

export default App;