import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";

export default function ContactSection() {
  return (
    <section
      className="w-full flex items-center justify-center bg-primary"
      id="contact"
    >
      <div
        className="max-w-7xl w-full flex items-center overflow-hidden justify-center bg-fixed bg-[url(/contact.png)] bg-cover bg-center bg-no-repeat"
        style={{
          clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        <div className="bg-black/75 w-full gap-5 h-full text-center flex items-center justify-center flex-col px-5 py-20 text-white">
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-lg font-semibold text-primary">Contact us</h4>
            <h1 className="text-xl md:text-4xl max-w-3xl font-bold">
              <span className="text-primary text-2xl md:text-5xl">Premium</span>{" "}
              Appliances Care Coupled With Exceptional{" "}
              <span className="text-primary text-2xl md:text-5xl">
                Worksmanship
              </span>
            </h1>
          </div>
          <p className="text-white font-light max-w-2xl">
            Issues with your appliances? We are here to help. Contact us today
            for premium appliance repair services.
          </p>
          <CallAndWhatsappButton />
        </div>
      </div>
    </section>
  );
}
