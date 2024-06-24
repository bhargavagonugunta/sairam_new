import { CarouselData } from "../CarouselData";
import bgimg from "../../../../assets/images/bgimg.png";
import lines1 from "../../../../assets/images/lines1.png";

function CarouselA() {
  return (
    <div className="mt-[70px] md:mt-0 overflow-hidden md:h-screen max-w-screen" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex flex-col h-full md:flex md:flex-row md:justify-between">

        <div className="imgs md:w-3/6 h-[270px] md:h-full flex relative order-first md:order-last">
          <div className="">
            <img src={CarouselData[0].imgs[1].img} alt="img2" className="w-2/6 absolute bottom-36 md:top-20 transform md:translate-y-3/4 translate-x-1/4 " />
            <img src={CarouselData[0].imgs[2].img} alt="img3" className="w-2/5 md:w-2/6 absolute md:top-8 bottom-42 md:bottom-1 left-2/4 transform -translate-x-1/4 md:translate-y-3/4 w-2/6" />
            <img src={CarouselData[0].imgs[0].img} alt="img1" className="absolute md:left-8 w-full md:w-[956px] bottom-4 md:bottom-8 z-10" />
          </div>
        </div>

        <div className="para w-full md:w-3/6 min-h-[285px] md:h-full md:pl-12 flex flex-col justify-center items-center gap-4 md:gap-10 p-4 md:p-6 ">
          <div className="w-[246px]">
            <img src={lines1} alt="line" />
            <h1 className="w-[246px] flex justify-center text-xl text-medium">{CarouselData[0].label}</h1>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 md:items-start md:p-4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl">{CarouselData[0].title}</h1>
            <button className="border border-slate-800 rounded-full p-2 md:p-2 md:px-10 w-2/6 mx-auto md:mx-0">Shop Now</button> 
          </div>
        </div>

      </div>
    </div>
  );
}

export default CarouselA;
