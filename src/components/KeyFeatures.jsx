import Image from "next/image";

export default function KeyFeatures() {
  return (
    <section className="bg-white w-full flex items-center justify-center">
      <div className="w-full max-w-7xl px-5 py-10 gap-10 grid place-items-center lg:grid-cols-[0.67fr_1fr]">
        <Image
          src="/key-features.jpg"
          width={500}
          height={500}
          alt="about"
          className="rounded-lg w-full"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-primary">
              Key Features
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Our Key Company Principles
            </h1>
          </div>
          <span className="font-light max-w-[80%]">
            We are a team of highly skilled professionals with years of
            experience in the appliance repair industry. Our key company
            principles include:
          </span>
          <ol className="list-inside list-decimal">
            <li>Expertise and Experience</li>
            <li>Reputation</li>
            <li>Range of Services</li>
            <li>Response Time</li>
            <li>Genuine Repair Parts</li>
            <li>Customer Service</li>
            <li>Safety and Compliance</li>
            <li>Honesty of Service</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
