import { cn } from "@/lib/utils";
import ServiceCallButtons from "./buttons/ServiceCallButtons";

export default function ServicesSection({ company }) {
    return (
        <section
            id="services"
            className="flex items-center justify-center bg-white w-full"
        >
            <div className="w-full max-w-7xl py-20 px-5 flex flex-col gap-10 items-center justify-center">
                <div className="flex flex-col text-center gap-2">
                    <h4
                        className={cn(
                            "font-semibold",
                            company === "Siemens"
                                ? "text-siemensPrimary"
                                : company === "Bosch"
                                    ? "text-boschPrimary"
                                    : company === "Samsung"
                                        ? "text-samsungPrimary"
                                        : company === "LG"
                                            ? "text-lgPrimary"
                                            : "text-primary"
                        )}
                    >
                        Our Services
                    </h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-center">
                        We Provide The Best Services
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 pr-5 gap-10">
                    <Service
                        company={company}
                        title="Solar Water Heater Repair"
                        image="/solar-1.jpg"
                        description="Solar water heaters can encounter various issues over time. Our technicians are skilled in diagnosing and repairing solar water heaters efficiently. Common issues include:"
                        points={[
                            "No hot water production",
                            "Insufficient water heating",
                            "Leaking pipes or connections",
                            "Solar panel damage or cracks",
                            "Blocked or clogged pipes",
                            "Faulty temperature sensors",
                            "Corrosion in the tank",
                            "Airlocks in the system",
                            "Malfunctioning circulation pump",
                            "Scale buildup in pipes or tank",
                            "Pressure valve issues",
                            "Low water pressure",
                            "Electrical component failures",
                            "Inefficient energy conversion",
                            "Faulty insulation causing heat loss",
                            "Overheating of water",
                            "Water contamination or discoloration",
                            "Unusual noises from the system",
                            "Collector panel not absorbing sunlight",
                            "System freezing during cold weather",
                            "Improper installation issues",
                            "Controller or display malfunctions",
                        ]}
                    />
                    <Service
                        company={company}
                        title="Insufficient water heating"
                        image="/solar-2.jpg"
                        description="Solar water heaters can encounter various issues over time. Our technicians are experts in repairing solar water heaters and can quickly diagnose the problem and fix it. Common issues include:"
                        points={[
                            "No hot water production",
                            "Insufficient water heating",
                            "Water not reaching the desired temperature",
                            "Leaking pipes or connections",
                            "Blocked or clogged pipes",
                            "Damaged solar panels",
                            "Faulty temperature sensors",
                            "Airlocks in the system",
                            "Malfunctioning circulation pump",
                            "Scale buildup in pipes or tank",
                            "Pressure valve issues",
                            "Low water pressure",
                            "Electrical component failures",
                            "Heat loss due to poor insulation",
                            "Overheating of water",
                            "Water contamination or discoloration",
                            "Unusual noises from the system",
                            "Solar collector panel not absorbing sunlight",
                            "System freezing during cold weather",
                            "Improper installation issues",
                            "Controller or display malfunctions",
                        ]}
                    />
                    <Service
                        company={company}
                        title="Leaking pipes or connections"
                        image="/solar-3.webp"
                        description="Solar water heaters can develop issues over time. Our technicians are experts in repairing solar water heaters and can quickly diagnose the problem and fix it. Common issues include:"
                        points={[
                            "No hot water production",
                            "Insufficient water heating",
                            "Leaking pipes or connections",
                            "Damaged or worn-out pipe fittings",
                            "Cracks in the water storage tank",
                            "Faulty temperature sensors",
                            "Blocked or clogged pipes",
                            "Airlocks in the system",
                            "Corrosion in pipes or tank",
                            "Loose or improperly sealed connections",
                            "Pressure valve issues",
                            "Scale buildup causing leaks",
                            "Malfunctioning circulation pump",
                            "Water dripping from joints",
                            "Collector panel leaks",
                            "Heat loss due to poor insulation",
                            "Water not reaching the desired temperature",
                            "System freezing during cold weather",
                            "Improper installation causing leaks",
                            "Rust stains near connections",
                            "Water dripping from the storage tank",
                        ]}
                    />
                    <Service
                        company={company}
                        title="Faulty temperature sensors"
                        image="/solar-4.jpg"
                        description="Solar water heaters can develop issues over time. Our technicians are experts in repairing solar water heaters and can quickly diagnose the problem and fix it. Common issues include:"
                        points={[
                            "Water not reaching desired temperature",
                            "Inconsistent water heating",
                            "System not detecting temperature changes",
                            "Overheating of water due to sensor malfunction",
                            "Cold water despite sunny conditions",
                            "Temperature sensor error codes displayed",
                            "Temperature readings fluctuating",
                            "System shutting down unexpectedly",
                            "Sensors not communicating with the controller",
                            "Incorrect water temperature display",
                            "Water overheating during operation",
                            "Failure to activate heating system",
                            "Delayed response in temperature adjustment",
                            "Sensor wiring issues",
                            "Sensor corrosion or wear",
                            "Sensors not detecting hot water availability",
                            "Faulty calibration of sensors",
                            "Incorrect signals sent to the circulation pump",
                            "System operating without heating water properly",
                            "Inability to adjust water temperature settings",
                        ]}
                    />
                    <Service
                        company={company}
                        title="Improper installation issues"
                        image="/solar-5.jpg"
                        description="Solar water heaters can develop issues over time. Our technicians are experts in repairing solar water heaters and can quickly diagnose the problem and fix it. Common issues include:"
                        points={[
                            "Solar water heater not starting to heat water",
                            "Water not draining from the system properly",
                            "Insufficient water heating",
                            "Unusual noises during operation",
                            "Water leakage from pipes or tank",
                            "Solar panel damage or cracks",
                            "System error codes displayed",
                            "Controller or control panel not responding",
                            "System not filling with water properly",
                            "Incomplete heating cycles",
                            "Blocked or clogged pipes",
                            "Circulation pump not working",
                            "Electrical faults in the system",
                            "Unpleasant odors from the water tank",
                            "System tripping the circuit breaker",
                            "Excessive vibration in the system",
                            "Water temperature fluctuations",
                            "Collector panels not absorbing sunlight effectively",
                            "Scale or sediment buildup in the tank or pipes",
                            "Water not reaching the desired temperature",
                        ]}
                    />
                    {(company == "Siemens" || company == "Bosch") && (
                        <Service
                            company={company}
                            title="Circulation pump not working"
                            image="/solar-6.jpg"
                            description="Solar water heaters can develop issues over time. Our technicians are experts in repairing solar water heaters and can quickly diagnose the problem and fix it. Common issues include:"
                            points={[
                                "Circulation pump not turning on",
                                "Pump running but not circulating water",
                                "System not heating water due to pump failure",
                                "Unusual noises from the circulation pump",
                                "Pump overheating during operation",
                                "Airlocks preventing proper circulation",
                                "Pump leaking water",
                                "Electrical faults in the pump motor",
                                "Pump operating intermittently",
                                "Controller not sending signals to the pump",
                                "Insufficient water flow through the system",
                                "Blocked or clogged pump inlet",
                                "Pump vibration during operation",
                                "Pump seals or bearings worn out",
                                "System pressure issues affecting pump operation",
                                "Pump not responding to temperature changes",
                                "Faulty wiring or connections to the pump",
                                "Pump malfunction due to sediment buildup",
                                "Pump not compatible with system requirements",
                                "Inconsistent water temperature due to pump failure",
                            ]}
                        />
                    )}
                    {(company === "Bosch" || company === "Siemens") && (
                        <Service
                            company={company}
                            title="Blocked or clogged pipes"
                            image="/solar-7.jpg"
                            description="Solar water heaters can develop issues over time. Our technicians are experts in repairing solar water heaters and can quickly diagnose the problem and fix it. Common issues include:"
                            points={[
                                "Pipes blocked with sediment or scale buildup",
                                "Reduced water flow due to clogs",
                                "Cold water despite sunny conditions",
                                "Airlocks causing blockages in the system",
                                "Pump unable to push water through clogged pipes",
                                "System not filling with water properly",
                                "Leaks caused by pressure buildup in blocked pipes",
                                "Pipes freezing in cold weather conditions",
                                "Rust or corrosion inside pipes",
                                "Improper water drainage from the system",
                                "No hot water due to restricted flow",
                                "Temperature fluctuations due to uneven flow",
                                "Pipes making unusual noises during operation",
                                "Blockages at pipe joints or bends",
                                "Inconsistent heating due to partial clogs",
                                "Water heater shutting down unexpectedly",
                                "System overheating due to restricted flow",
                                "Frequent pipe maintenance required",
                                "Damaged pipes from prolonged blockages",
                                "Water pressure too low for efficient heating",
                            ]}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

const Service = ({ title, image, description, points, company }) => {
    return (
        <div className="flex flex-col w-full relative h-full">
            <div
                className={cn(
                    "absolute w-[70%] h-full -right-5 -top-5 z-0",
                    company === "Siemens"
                        ? "bg-siemensPrimary"
                        : company === "Bosch"
                            ? "bg-boschPrimary"
                            : company === "Samsung"
                                ? "bg-samsungPrimary"
                                : company === "LG"
                                    ? "bg-lgPrimary"
                                    : "bg-primary"
                )}
                style={{
                    clipPath: "polygon(51% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
            ></div>
            <div
                className="w-full h-[20rem] z-[1] bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            ></div>
            <div className="flex flex-col z-[1] h-full bg-white p-5 gap-2 justify-between shadow-md">
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-bold text-secondary">{title}</h1>
                    <span className="text-sm">{description}</span>
                    <ul className="text-xs list-disc list-inside">
                        {points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                <ServiceCallButtons company={company} />
            </div>
        </div>
    );
};
