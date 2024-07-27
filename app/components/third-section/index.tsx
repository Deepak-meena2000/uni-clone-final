"use client";

import Image from "next/image";

const ThirdSection = () => {
  return (
    <section className="py-12 lg:py-[100px] bg-black relative">
      <Image
        src="https://www.uni.cards/images/circles.png"
        alt="circles"
        className="absolute top-0 h-auto w-[70%]"
        width={1200}
        height={800}
      />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex relative py-6">
        <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
          <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
            We’ve all heard of instant groceries, now say hello to
            <span className="primary-gradient-background">
              {" "}
              instant credit.
            </span>
          </p>
          <p className="text-[#BFC9CC] text-[14px] md:text-2xl">
            0% hassle, 100% paperless. Get your Uni Card instantly.
          </p>
        </div>
        <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]">
          <Image
            src="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
            alt="App Screen 1"
            loading="lazy"
            className="m-auto w-[80%] h-auto"
            width={450}
            height={800}
          />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex relative py-6">
        <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
          <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
            With Uni,{" "}
            <span className="primary-gradient-background">
              you’re always in control.
            </span>
          </p>
          <p className="text-[#BFC9CC] text-[14px] md:text-2xl">
            Set your own payment limits. Choose how and where you spend. Lock
            and unlock your card. All right from the app.{" "}
          </p>
        </div>
        <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]">
          <Image
            src="https://www.uni.cards/images/nx-wave/app_screen_2.webp"
            alt="App Screen 2"
            loading="lazy"
            className="m-auto w-[80%] h-auto"
            width={450}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
