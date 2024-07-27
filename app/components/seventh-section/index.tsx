import Image from "next/image";

const SeventhSection = () => {
  return (
    <>
      <section className="py-12 lg:py-[100px] bg-background-gradient bg-cover gradient-background">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex md:justify-around items-center my-4">
          <p className="mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight">
            Download now to get started
          </p>
          <div className="flex">
            <a
              href="https://unicards.onelink.me/KRuW/"
              className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black google-btn-2"
            >
              Google Play
            </a>
            <a
              href="https://uni-growth.onelink.me/v6cm/"
              className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black apple-btn-2"
            >
              App Store
            </a>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-[#222222]">
        <div className="flex items-center justify-center p-4 text-[#8d8d95]">
          <p>Uni maintains the highest level of security standards</p>
          <Image
            src="https://www.uni.cards/images/pcidss_cert.svg"
            className="ml-3 w-20"
            alt="PCI DSS Certification"
            width={80}
            height={20}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default SeventhSection;
