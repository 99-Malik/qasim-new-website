import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";

export default function AboutSection({ company }) {
  return (
    <section
      className="bg-white w-full flex items-center justify-center"
      id="about"
    >
      <div className="w-full max-w-7xl px-5 py-10 gap-5 grid place-items-center lg:grid-cols-[1fr_0.67fr]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span
              className={cn(
                "font-semibold text-lg",
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
              Who are we?
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Proudly providing home appliance repair services
            </h1>
          </div>
          <span className="text-black/50 max-w-[80%]">
            Approaching every repair with the same level of professionalism and
            care. With years of dedicated experience, we are experts in our
            field.
          </span>
          <CallAndWhatsappButton company={company} />
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="flex flex-col shadow-lg rounded-md p-5 gap-2">
              <span
                className={cn(
                  "font-semibold text-lg",
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
                Mission
              </span>
              <span className="text-black/50 text-xs lg:text-sm">
                Our mission is to provide the highest quality appliance repair
                services to our customers. We strive to exceed customer
                expectations by delivering exceptional service and value.
              </span>
            </div>
            <div
              className={cn(
                "flex flex-col shadow-lg rounded-md text-white p-5 gap-2",
                company === "Siemens"
                  ? "shadow-siemensPrimary/50 bg-siemensPrimary"
                  : company === "Bosch"
                  ? "shadow-boschPrimary/50 bg-boschPrimary"
                  : company === "Samsung"
                  ? "shadow-samsungPrimary/50 bg-samsungPrimary"
                  : company === "LG"
                  ? "shadow-lgPrimary/50 bg-lgPrimary"
                  : "shadow-primary/50 bg-primary"
              )}
            >
              <span className="font-semibold text-lg">Vision</span>
              <span className="text-white/80 text-xs lg:text-sm">
                Our vision is to be the leading appliance repair service
                provider in the industry. We aim to achieve this by providing
                superior service and value to our customers.
              </span>
            </div>
            <div className="flex flex-col shadow-lg rounded-md p-5 gap-2">
              <span
                className={cn(
                  "font-semibold text-lg",
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
                Values
              </span>
              <span className="text-black/50 text-xs lg:text-sm">
                Our values are integrity, honesty, and professionalism. We
                believe in treating our customers with respect and honesty,
                providing them with the best possible service.
              </span>
            </div>
          </div>
        </div>
        <Image
          src="/about.webp"
          width={500}
          height={500}
          alt="about"
          className="rounded-lg w-full"
        />
      </div>
    </section>
  );
}
