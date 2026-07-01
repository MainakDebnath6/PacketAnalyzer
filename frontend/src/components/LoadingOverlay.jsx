import { Loader2 } from "lucide-react";

function LoadingOverlay({ loading }) {

    if (!loading) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-10 w-[420px] shadow-2xl">

                <div className="flex justify-center">

                    <Loader2
                        className="animate-spin text-blue-500"
                        size={60}
                    />

                </div>

                <h2 className="text-2xl font-bold text-center mt-6">
                    Deep Packet Inspection
                </h2>

                <p className="text-center text-gray-400 mt-3">
                    Analyzing network traffic...
                </p>

                <div className="w-full bg-slate-700 rounded-full h-3 mt-8">

                    <div className="bg-blue-500 h-3 rounded-full w-full animate-pulse rounded-full"></div>

                </div>

            </div>

        </div>
    );
}

export default LoadingOverlay;