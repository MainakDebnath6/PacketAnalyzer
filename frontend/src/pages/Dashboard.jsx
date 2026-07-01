import Navbar from "../components/Navbar";
import FileUpload from "../components/FileUpload";

function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">

            <div className="max-w-6xl mx-auto p-10">

                <FileUpload />

            </div>

        </div>
    );
}

export default Dashboard;