import { useEffect, useState } from "react";

import {
    getRules,
    addBlockedIP,
    removeBlockedIP,
    addBlockedDomain,
    removeBlockedDomain,
    addBlockedPort,
    removeBlockedPort,
    addBlockedApp,
    removeBlockedApp
} from "../services/firewallApi";

const APPS = [
    "Facebook",
    "Instagram",
    "YouTube",
    "Google",
    "GitHub",
    "Discord",
    "Telegram",
    "Twitter/X",
    "TikTok",
    "Spotify",
    "Amazon",
    "Cloudflare",
    "Zoom",
    "Apple"
];

export default function FirewallRules() {

    const [rules, setRules] = useState(null);

    const [ip, setIp] = useState("");
    const [domain, setDomain] = useState("");
    const [port, setPort] = useState("");

    const refresh = async () => {
        setRules(await getRules());
    };

    useEffect(() => {
        refresh();
    }, []);

    if (!rules)
        return <h2 className="text-white">Loading...</h2>;

    return (

        <div className="space-y-8">

            <div className="bg-slate-800 rounded-xl p-8">

                <h1 className="text-3xl font-bold mb-8">

                    Firewall Policy Manager

                </h1>

                {/* IP */}

                <div className="mb-8">

                    <h2 className="font-semibold mb-3">
                        Block IP Address
                    </h2>

                    <div className="flex gap-3">

                        <input
                            className="flex-1 bg-slate-700 p-3 rounded-lg"
                            placeholder="8.8.8.8"
                            value={ip}
                            onChange={(e)=>setIp(e.target.value)}
                        />

                        <button
                            className="bg-blue-600 px-5 rounded-lg"
                            onClick={async()=>{
                                if(!ip.trim()) return;
                                setRules(await addBlockedIP(ip));
                                setIp("");
                            }}
                        >
                            Add
                        </button>

                    </div>

                </div>

                {/* Domain */}

                <div className="mb-8">

                    <h2 className="font-semibold mb-3">
                        Block Domain
                    </h2>

                    <div className="flex gap-3">

                        <input
                            className="flex-1 bg-slate-700 p-3 rounded-lg"
                            placeholder="*.facebook.com"
                            value={domain}
                            onChange={(e)=>setDomain(e.target.value)}
                        />

                        <button
                            className="bg-blue-600 px-5 rounded-lg"
                            onClick={async()=>{
                                if(!domain.trim()) return;
                                setRules(await addBlockedDomain(domain));
                                setDomain("");
                            }}
                        >
                            Add
                        </button>

                    </div>

                </div>

                {/* Port */}

                <div className="mb-8">

                    <h2 className="font-semibold mb-3">
                        Block Port
                    </h2>

                    <div className="flex gap-3">

                        <input
                            className="flex-1 bg-slate-700 p-3 rounded-lg"
                            placeholder="443"
                            value={port}
                            onChange={(e)=>setPort(e.target.value)}
                        />

                        <button
                            className="bg-blue-600 px-5 rounded-lg"
                            onClick={async()=>{
                                if(!port.trim()) return;
                                setRules(await addBlockedPort(port));
                                setPort("");
                            }}
                        >
                            Add
                        </button>

                    </div>

                </div>

                {/* Applications */}

                <div>

                    <h2 className="font-semibold mb-4">

                        Block Applications

                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                        {APPS.map(app=>{

                            const active =
                                rules.blockedApps?.includes(app);

                            return (

                                <button
                                    key={app}
                                    onClick={async()=>{

                                        if(active){

                                            setRules(
                                                await removeBlockedApp(app)
                                            );

                                        }else{

                                            setRules(
                                                await addBlockedApp(app)
                                            );

                                        }

                                    }}
                                    className={`rounded-lg p-3 transition ${
                                        active
                                        ? "bg-red-600"
                                        : "bg-slate-700 hover:bg-slate-600"
                                    }`}
                                >

                                    {app}

                                </button>

                            );

                        })}

                    </div>

                </div>

            </div>

            {/* Active Rules */}

            <div className="bg-slate-800 rounded-xl p-8">

                <h2 className="text-2xl font-bold mb-6">

                    Active Rules

                </h2>

                <div className="space-y-4">

                    {(rules.blockedIPs||[]).map(ip=>(

                        <Rule
                            key={ip}
                            label="IP"
                            value={ip}
                            remove={()=>removeBlockedIP(ip).then(setRules)}
                        />

                    ))}

                    {(rules.blockedDomains||[]).map(domain=>(

                        <Rule
                            key={domain}
                            label="Domain"
                            value={domain}
                            remove={()=>removeBlockedDomain(domain).then(setRules)}
                        />

                    ))}

                    {(rules.blockedPorts||[]).map(port=>(

                        <Rule
                            key={port}
                            label="Port"
                            value={port}
                            remove={()=>removeBlockedPort(port).then(setRules)}
                        />

                    ))}

                    {(rules.blockedApps||[]).map(app=>(

                        <Rule
                            key={app}
                            label="Application"
                            value={app}
                            remove={()=>removeBlockedApp(app).then(setRules)}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

}

function Rule({label,value,remove}){

    return(

        <div className="flex justify-between items-center bg-slate-700 rounded-lg p-4">

            <span>

                <b>{label}</b> : {value}

            </span>

            <button
                onClick={remove}
                className="text-red-400 hover:text-red-300"
            >

                Remove

            </button>

        </div>

    );

}