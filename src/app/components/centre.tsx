import { Divider } from "@mui/material";

const Centre: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <div className="text-sm sm:text-base space-y-5 flex flex-col justify-center items-center text-center">
        <div className="font-bold">PMRC-2</div>
        <div className="space-y-3">
          <div>31 . 10 . 23</div>
          <div>7 pm</div>
          <div>BRISBANE SIGN, South Brisbane QLD 4101</div>
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

      <div
        id="divider"
        className="flex justify-center items-center w-full py-10"
      >
        <Divider
          variant="middle"
          sx={{
            width: "75%",
            bgColor: "#000000",
            borderBottomWidth: 2,
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="text-sm sm:text-base space-y-5 flex flex-col justify-center items-center text-center">
        <p className="font-bold line-through">PMRC-1</p>
        <div className="space-y-3 line-through">
          <p>24 . 10 . 23</p>
          <p>BRISBANE SIGN, South Brisbane QLD 4101</p>
          <p>7 pm</p>
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
