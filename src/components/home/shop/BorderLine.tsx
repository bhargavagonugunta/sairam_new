import borderimg from "../../../assets/images/borderimg.png";

export default function BorderLineDown() {
  return (
    <div className="flex  overflow-hidden">
      <div className="flex md:w-[65px] ">
        {Array(140)
          .fill(0)
          .map((_, index: number) => {
            return (
              <img
                key={index}
                src={borderimg}
                alt=""
                className=" rotate-90 w-[30px] md:w-[40px] lg:w-[50px]"
              />
            );
          })}
      </div>
    </div>
  );
}

export function BorderLineUp() {
  return (
    <div className="flex overflow-hidden">
      <div className="flex md:w-[65px] ">
        {Array(40)
          .fill(0)
          .map((_, index: number) => {
            return (
              <img
                key={index}
                src={borderimg}
                alt=""
                className=" -rotate-90 w-[30px] md:w-[40px] lg:w-[50px]"
              />
            );
          })}
      </div>
    </div>
  );
}
