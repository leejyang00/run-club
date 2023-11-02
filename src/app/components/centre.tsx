import DividerLine from "./DividerLine";
import Image from "next/image";
import PMRC2 from "../../../public/event-photo/PMRC-2.png";
import PMRC3 from "../../../public/event-photo/PMRC-3.png";

const Centre: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center pb-6 pt-3">
      <div className="text-xs sm:text-sm space-y-5 flex flex-col justify-center items-center text-center">
        <div className="font-bold">PMRC-3</div>

        <div className="w-3/4">
          <Image src={PMRC3} width={600} alt="PMRC-3" priority />
        </div>


        <div className="space-y-3">
          <div>07 . 11 . 23</div>
          {/* <div>7 pm</div> */}
          <div>7PM @ BRISBANE SIGN, South Brisbane</div>
          <div>3km - Henry</div>
          <div>
            <a
              href="https://www.mapmyrun.com/routes/view/5789592190/"
              target="_blank"
            >
              <p className="underline hover:text-gray-500 duration-200">
                route
              </p>
            </a>
          </div>
        </div>
      </div>

      <DividerLine />

      <div className="text-xs sm:text-sm space-y-5 flex flex-col justify-center items-center text-center">
        <div className="font-bold">PMRC-2</div>

        <div className="w-3/4">
          <Image src={PMRC2} width={600} alt="PMRC-2" priority />
        </div>

        <div className="space-y-3">
          <div>31 . 10 . 23</div>
          {/* <div>7 pm</div> */}
          <div>7PM @ BRISBANE SIGN, South Brisbane</div>
          <div>3km - Henry</div>
          <div>5km - Jian</div>
          <div>
            <a
              href="https://www.mapmyrun.com/routes/view/5789592190/"
              target="_blank"
            >
              <p className="underline hover:text-gray-500 duration-200">
                route
              </p>
            </a>
          </div>
        </div>
      </div>

      <DividerLine />

      <div className="text-xs sm:text-sm space-y-5 flex flex-col justify-center items-center text-center">
        <p className="font-bold">PMRC-1</p>
        <div className="space-y-3">
          <p>24 . 10 . 23</p>
          <p>7PM @ BRISBANE SIGN, South Brisbane</p>
          {/* <p>7 pm</p> */}
          <div>
            <a
              href="https://www.mapmyrun.com/routes/view/5789592190/"
              target="_blank"
            >
              <p className="underline hover:text-gray-500 duration-200">
                route
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centre;
