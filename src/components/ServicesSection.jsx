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
        <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 pr-5 gap-10">
          <Service
            company={company}
            title="Washing Machine Repair"
            image="/washing-repair.webp"
            description="Washing machines can develop issues over time. Our technicians are expert in repairing washing machines and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Machine not turning on",
              "Machine not spinning",
              "Machine not draining",
              "Machine not filling with water",
              "Control panel issues",
              "Overfilling",
              "Electrical issues",
              "Error codes on display",
              "Slow washing cycles",
              "Soap dispenser not working",
            ]}
          />
          <Service
            company={company}
            title="Dryer Repair"
            image="/dryer-repair.jpg"
            description="Dryers can develop issues over time. Our technicians are expert in repairing dryers and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Dryer not turning on",
              "Dryer not spinning",
              "Dryer not heating",
              "Dryer not drying clothes",
              "Control panel issues",
              "Overfilling",
              "Electrical issues",
              "Error codes on display",
              "Slow drying cycles",
              "Dryer not draining",
            ]}
          />
          <Service
            company={company}
            title="Refrigerator Repair"
            image="/fridge-repair.jpg"
            description="Refrigerators can develop issues over time. Our technicians are expert in repairing refrigerators and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Refrigerator not turning on",
              "Refrigerator not cooling",
              "Refrigerator not freezing",
              "Refrigerator not making ice",
              "Control panel issues",
              "Overfilling",
              "Electrical issues",
              "Error codes on display",
              "Slow cooling cycles",
              "Refrigerator not draining",
            ]}
          />
          <Service
            company={company}
            title="Oven Repair"
            image="/oven-repair.jpeg"
            description="Ovens can develop issues over time. Our technicians are expert in repairing ovens and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Oven not turning on",
              "Oven not heating",
              "Oven not cooking food evenly",
              "Oven not self-cleaning",
              "Control panel issues",
              "Overfilling",
              "Electrical issues",
              "Error codes on display",
              "Slow cooking cycles",
              "Oven not draining",
            ]}
          />
          <Service
            company={company}
            title="Dishwasher Repair"
            image="/dishwasher-repair.jpg"
            description="Dishwashers can develop issues over time. Our technicians are expert in repairing dishwashers and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Dishwasher not turning on",
              "Dishwasher not cleaning dishes",
              "Dishwasher not draining",
              "Dishwasher not filling with water",
              "Control panel issues",
              "Overfilling",
              "Electrical issues",
              "Error codes on display",
              "Slow washing cycles",
              "Dishwasher not draining",
            ]}
          />
          <Service
            company={company}
            title="Stove / Cooker Repair"
            image="/stove-repair.jpg"
            description="Stoves can develop issues over time. Our technicians are expert in repairing stoves and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "Stove not turning on",
              "Stove not heating",
              "Stove not cooking food evenly",
              "Stove not self-cleaning",
              "Control panel issues",
              "Overfilling",
              "Electrical issues",
              "Error codes on display",
              "Slow cooking cycles",
              "Stove not draining",
            ]}
          />
          <Service
            company={company}
            title="TV Repair"
            image="/tv-repair.jpeg"
            description="TVs can develop issues over time. Our technicians are expert in repairing TVs and can quickly diagnose the problem and fix it. Common issues include:"
            points={[
              "TV not turning on",
              "TV not displaying picture",
              "TV not displaying sound",
              "TV not connecting to internet",
              "Control panel issues",
              "Overfilling",
              "Electrical issues",
              "Error codes on display",
              "Slow display cycles",
              "TV not draining",
            ]}
          />
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
        className="w-full h-[10rem] z-[1] bg-cover bg-no-repeat bg-center"
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
