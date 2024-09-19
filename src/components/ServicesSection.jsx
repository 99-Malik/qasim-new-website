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
            title="Washing Machine Repair"
            image="/washing-repair.webp"
            description="Washing machines can develop issues over time. Our technicians are expert in repairing washing machines and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Machine not starting",
              "Machine not spinning",
              "Machine not draining",
              "Water leaking from the machine",
              "Excessive noise during operation",
              "Error codes on the display",
              "Unpleasant odors",
              "Incomplete wash cycles",
              "Water not draining properly",
              "Machine vibrating excessively",
              "Door not locking",
              "Water temperature issues",
              "Soap dispenser not working",
              "Electrical issues",
              "Blocked filters",
              "Overfilling",
              "Clothes coming out wet",
              "Clothes not rinsing properly",
              "Drum not filling with water",
              "Machine tripping the circuit breaker",
              "Slow wash cycles",
              "Control panel issues",
            ]}
          />
          <Service
            company={company}
            title="Dryer Repair"
            image="/dryer-repair.jpg"
            description="Dryers can develop issues over time. Our technicians are expert in repairing dryers and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Dryer not heating",
              "Dryer not turning on",
              "Dryer not spinning",
              "Dryer not drying clothes",
              "Dryer not completing cycles",
              "Dryer not tumbling",
              "Dryer making unusual noises",
              "Dryer not venting properly",
              "Dryer not starting",
              "Dryer not heating up",
              "Dryer not turning off",
              "Dryer not spinning properly",
              "Dryer not drying clothes completely",
              "Dryer not heating enough",
              "Dryer not heating at all",
              "Dryer not turning",
              "Dryer not heating properly",
              "Dryer not heating up enough",
              "Dryer not heating up at all",
              "Dryer not heating well",
              "Dryer not heating properly",
            ]}
          />
          <Service
            company={company}
            title="Refrigerator Repair"
            image="/fridge-repair.jpg"
            description="Refrigerators can develop issues over time. Our technicians are expert in repairing refrigerators and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "No power",
              "No picture",
              "No sound",
              "Lines on the screen",
              "Cracked screen",
              "TV turning off by itself",
              "Remote control not working",
              "TV not connecting to Wi-Fi",
              "TV not recognizing HDMI inputs",
              "TV not turning on",
              "TV displaying error messages",
              "TV displaying a blank screen",
              "TV displaying a distorted picture",
              "TV displaying a flickering picture",
              "TV displaying a frozen picture",
              "TV displaying a pixelated picture",
              "TV displaying a washed-out picture",
              "TV displaying colors incorrectly",
              "TV displaying lines on the screen",
              "TV displaying static",
              "TV displaying vertical lines",
            ]}
          />
          <Service
            company={company}
            title="Oven Repair"
            image="/oven-repair.jpeg"
            description="Ovens can develop issues over time. Our technicians are expert in repairing ovens and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Oven not heating",
              "Oven not reaching desired temperature",
              "Oven uneven cooking",
              "Oven door not closing properly",
              "Oven error codes displayed",
              "Unusual odors from oven",
              "Oven light not working",
              "Oven control panel issues",
              "Oven self-cleaning cycle not working",
              "Oven burners not igniting",
              "Gas smell from oven",
              "Oven overheating",
              "Oven not turning on",
              "Oven fan not working",
              "Oven door not opening",
              "Oven not maintaining temperature",
              "Oven broiler not working",
              "Oven timer not functioning",
              "Oven not cooking food evenly",
              "Oven not self-cleaning",
              "Oven not turning off",
            ]}
          />
          <Service
            company={company}
            title="Dishwasher Repair"
            image="/dishwasher-repair.jpg"
            description="Dishwashers can develop issues over time. Our technicians are expert in repairing dishwashers and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Dishwasher not starting",
              "Dishwasher water not draining",
              "Dishwasher dishes not cleaning properly",
              "Unusual noises during dishwasher operation",
              "Dishwasher water leakage",
              "Dishwasher door not closing properly",
              "Dishwasher error codes displayed",
              "Dishwasher control panel not responding",
              "Dishwasher not filling with water",
              "Dishwasher cycle not completing",
              "Dishwasher soap dispenser not opening",
              "Dishwasher spray arms not working",
              "Dishwasher electrical faults",
              "Unpleasant odors from dishwasher",
              "Dishwasher tripping the circuit breaker",
              "Dishwasher excessive vibration",
              "Dishwasher water temperature issues",
              "Dishwasher racks not sliding smoothly",
              "Detergent residue on dishwasher dishes",
              "Dishwasher not drying dishes",
            ]}
          />
          {(company == "Siemens" || company == "Bosch") && (
            <Service
              company={company}
              title="Stove / Cooker Repair"
              image="/stove-repair.jpg"
              description="Stoves can develop issues over time. Our technicians are expert in repairing stoves and can quickly diagnose the problem and fix it. Common issues include:"
              points={[
                "Burners not igniting",
                "Burners not heating properly",
                "Oven not heating",
                "Oven not reaching desired temperature",
                "Oven uneven cooking",
                "Oven error codes displayed",
                "Oven control panel issues",
                "Oven self-cleaning cycle not working",
                "Oven gas smell",
                "Oven overheating",
                "Oven not turning on",
                "Oven fan not working",
                "Oven door not opening",
                "Oven not maintaining temperature",
                "Oven broiler not working",
                "Oven timer not functioning",
                "Oven not cooking food evenly",
                "Oven not self-cleaning",
                "Oven not turning off",
              ]}
            />
          )}
          {(company === "Bosch" || company === "Siemens") && (
            <Service
              company={company}
              title="TV Repair"
              image="/tv-repair.jpeg"
              description="TVs can develop issues over time. Our technicians are expert in repairing TVs and can quickly diagnose the problem and fix it. Common issues include:"
              points={[
                "TV no power",
                "TV no picture",
                "TV no sound",
                "TV lines on screen",
                "TV cracked screen",
                "TV turning off by itself",
                "TV remote control not working",
                "TV not connecting to Wi-Fi",
                "TV not recognizing HDMI inputs",
                "TV not turning on",
                "TV displaying error messages",
                "TV blank screen",
                "TV distorted picture",
                "TV flickering picture",
                "TV frozen picture",
                "TV pixelated picture",
                "TV washed-out picture",
                "TV colors incorrect",
                "TV lines on screen",
                "TV static",
                "TV vertical lines",
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
