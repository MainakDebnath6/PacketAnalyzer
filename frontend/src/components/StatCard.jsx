import React from "react";

function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
    gradient
}) {
    return (
        <div
            className={`
                ${gradient}
                rounded-2xl
                p-6
                border border-white/10
                shadow-lg
                hover:shadow-2xl
                hover:scale-[1.02]
                transition-all
                duration-300
            `}
        >
            <div className="flex justify-between items-start">

                <div>

                    <p className="text-white/90 text-base font-semibold">
                        {title}
                    </p>

                    <h2 className="text-5xl font-bold text-white mt-3">
                        {value}
                    </h2>

                    <p className="text-white/80 text-sm mt-3">
                        {subtitle}
                    </p>

                </div>

                <div className="bg-black/20 backdrop-blur-md p-4 rounded-xl">

                    <Icon
                        size={34}
                        className="text-white"
                    />

                </div>

            </div>

        </div>
    );
}

export default StatCard;