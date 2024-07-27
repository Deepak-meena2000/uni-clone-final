import Image from "next/image";

const ApplyNow = () => {
  return (
    <div className="w-full bottom-0 z-40 fixed md:hidden py-8 css-1s4jw3r">
      <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
        <div className="flex flex-col transition-all ease-in">
          <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
            <span>Apply now</span>
            <Image
              src="https://www.uni.cards/images/right_arrow.svg"
              alt="right_arrow"
              width={21}
              height={21}
              className="inline ml-3"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
