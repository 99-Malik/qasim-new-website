import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";

export default function MainBanner({ company }) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mainbanner.jpg"
          alt="Banner Background"
          className="object-cover w-full h-full md:object-cover md:h-full"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl p-2 text-center bg-gradient-to-r from-black to-transparent rounded-lg shadow-lg mx-6 lg:mx-12">
        {/* Header Text */}
        <h2 className="text-xl font-extrabold tracking-wide uppercase text-white">
        Appliances
          <span
            className={`ml-2 ${
              company === "Siemens"
                ? "text-siemensPrimary"
                : company === "Bosch"
                ? "text-boschPrimary"
                : company === "Samsung"
                ? "text-gray-400"
                : company === "LG"
                ? "text-[#A50034]"
                : "text-blue-500"
            }`}
          >
         Repairs Expert
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-md text-center text-gray-300">
          We provide top-notch repair services for {company} appliances with a
          team of certified and experienced technicians.
        </p>

        {/* Button Container with Responsive Horizontal Spacing */}
        <div className="mt-6 flex flex-row justify-center space-x-4">
          <CallAndWhatsappButton company={company} />
        </div>
      </div>
    </section>
  );
}