import DividerLine from "../common/DividerLine";
import Image from "next/image";
import events from "../../../public/event-info.json";

const Centre = (): JSX.Element => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center pb-6 pt-3 bg-[#F8F6F0]">
      {events.map((item, index) => (
        <div key={item.id}>
          <div className="text-xs sm:text-sm space-y-5 flex flex-col justify-center items-center text-center">
            <div className="font-bold">{item.id}</div>

            <div className="w-3/4">
              {item.src !== "" &&
                <Image src={item.src} width={600} height={600} alt={item.id} priority />
              }
            </div>

            <div className="space-y-3">
              <div>{item.date}</div>
              <div>{item.location}</div>
              {item.events.map((event) => (
                <div key={event}>{event}</div>
              ))}
              <div>
                <a
                  href={item.route}
                  target="_blank"
                >
                  <p className="underline hover:text-gray-500 duration-200">
                    route
                  </p>
                </a>
              </div>
            </div>
          </div>
          {index !== events.length - 1 && <DividerLine orientation={'horizontal'} />}
        </div>
      ))}
    </div>
  );
};

export default Centre;
