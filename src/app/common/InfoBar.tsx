import Image from "next/image";
import RightArrow from "../../../public/icons/right-arrow.svg";

const InfoBar = (): JSX.Element => {
  return (
    <div className="w-full px-2 py-2 sm:py-3 sm:px-52 bg-black text-white flex justify-center items-center flex-row">
      <p className="text-xs font-semibold hover:cursor-pointer">
        Pacing Together, Creating Stories
      </p>
      <Image
        className="ml-3"
        src={RightArrow}
        width={18}
        alt="right-arrow"
        priority
      />
    </div>
  );
};

export default InfoBar;
