import { ImagesEnum } from "@/app/constants/images";
import Image from "next/image";

const BenifitsSection = () => {
  return (
    <section className="py-12 md:py-[150px]">
      <CashBackSection />
      <ImageSection />
    </section>
  );
};

export default BenifitsSection;

const CashBackSection = () => {
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4 undefined">
        <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
          <p>
            Earn 1% assured cashback
            <span className="text-[#9ea7ae] !font-normal">
              on your spends. Get
            </span>{" "}
            5X
          </p>
          <p>
            more value than cashback
            <span className="text-[#9ea7ae] !font-normal">
              {" "}
              at the Uni Store. Enjoy
            </span>
          </p>
          <p>
            <span className="text-[#9EA7AE] !font-normal">
              round the clock{" "}
            </span>
            Whatsapp support.{" "}
            <span className="text-[#9EA7AE] !font-normal">And it's</span>
          </p>
          <p>
            lifetime free{" "}
            <span className="text-[#9ea7ae] !font-normal">
              ; no joining fee, no annual charges.
            </span>
          </p>
        </div>
        <div className="flex md:justify-center py-12">
          <div
            style={{
              background:
                "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
            }}
            className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
          >
            <Image
              alt="down_arrow"
              src={ImagesEnum.DOWN_ARROW}
              loading="lazy"
              className="w-9 md:w-14"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-4 lg:px-8">
      <div className="flex justify-center flex-col">
        <div className="flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-full md:w-[300px] lg:w-[510px]">
              <div>
                <span className="font-bol">
                  1% assured cashback on your spends.
                </span>
                <span className="font-normal text-[#9EA7AE]">
                  The more you spend, the more you earn.
                </span>
              </div>
            </div>
            <div className="info-caption">
              <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
                Not applicable on fuel purchase, utility bills, rent &amp;
                wallet transfers, ATM withdrawals &amp; international
                transactions.
              </div>
            </div>
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center overflow-hidden">
              <div className="relative w-[280px] lg:w-[448px]">
                <Image
                  src={ImagesEnum.CASHBACK}
                  alt="1% Cashback"
                  width={448}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-full md:w-[300px] lg:w-[510px]">
              <div>
                <span className="font-bold">
                  5x more value than your cashback,
                </span>
                <span className="font-normal text-[#9EA7AE]">
                  {" "}
                  only at the Uni Store.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center overflow-hidden">
              <div className="relative w-[280px] lg:w-[448px]">
                <Image
                  src={ImagesEnum.REWARDS}
                  alt="5x Rewards"
                  width={448}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-full md:w-[300px] lg:w-[510px]">
              <div>
                <span className="font-bold">Zero Forex Markup.</span>
                <br />
                <span className="font-normal text-[#9EA7AE]">
                  {" "}
                  Go international, without any fees.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center overflow-hidden">
              <div className="relative w-[280px] lg:w-[448px]">
                <Image
                  src={ImagesEnum.FOREX_GLOBE}
                  alt="Zero Forex Markup"
                  width={448}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
          <p>
            Lifetime <span className="text-uni-green">free. </span>
            <span className="block sm:inline-block md:text-center">
              No joining fee.
            </span>
            <span className="block md:text-center"> No annual charges. </span>
          </p>
        </div>
      </div>
    </div>
  );
};
