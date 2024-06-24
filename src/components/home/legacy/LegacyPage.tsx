import lines1 from "../../../assets/images/lines1.png";
import { LegacyData } from "./LegacyData";
import { motion } from "framer-motion";

function LegacyPage () {
    return (
        <div className="flex flex-col justify-center items-center md:gap-12  lg:h-screen lg:max-w-screen md:flex md:flex-row bg-[#FFF6F1] ">
            
            <div className="md:w-3/6 px-20 pt-20 md:p-16 md:px-0 md:pt-0  md: lg:p-0 flex md:flex-row relative lg:h-5/6 ">
                <div className="md:w-full md:p-12 lg:p-0 flex justify-center">
                <div className=" border-[16px] border-white">
                    <img src={LegacyData[0].img} className=" lg:h-full md:w-full"/>
                </div>
                <div className="">
                <h1 className="flex flex-col text-center text-xs md:text-sm lg:text-lg ml-2 md:ml-8 lg:ml-12">
                    <span >O</span>
                    <span >U</span>
                    <span >R</span>
                    <span >S</span>
                    <span >T</span>
                    <span >O</span>
                    <span >R</span>
                    <span >Y</span>
                </h1>
                </div>
                <div className=" absolute bottom-0 lg::bottom-8 right-16 md:bottom-28 lg:bottom-2 lg:right-28 md:h-2/6 lg:h-3/6 md:w-3/6 border-[16px] border-white" >
                    <img src={LegacyData[0].img} className="w-[150px] h-[100px] sm:w-[220px] sm:h-[150px] md:h-full md:w-full object-cover object-center" />
                </div>
                </div>
            </div>
           
            <div className="content p-8 flex gap-8 flex-col md:w-3/6  md:flex md:flex-col md:gap-8">
                <div className=" w-3/6 md:w-[175px] mx-auto md:mx-0"> 
                <img src={lines1} className=""/>
                </div>
                <h1 className=" text-center md:text-left text-2xl font-medium">
                    The Legacy Of <span className="text-3xl">Sai Ram</span>
                </h1>
                <p className=" text-center md:text-left text font-normal md:pr-14">{LegacyData[0].content}</p>
                <motion.button type="submit" className="border border-[#4A2E1F] rounded-full flex justify-center w-3/6 p-2 mx-auto md:mx-0 md:w-[160px] md:p-2 md:px-4"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                >Read more</motion.button>
            </div>
        </div>
    )
}

export default LegacyPage;