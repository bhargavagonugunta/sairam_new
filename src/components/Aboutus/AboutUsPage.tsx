import { AboutUsData } from "./AboutUsData";
import lines1 from "../../assets/images/lines1.png"
import { motion } from "framer-motion";

function LegacyPage () {
    return (
        <div className="main_head flex flex-col justify-center items-center md:gap-12 md:h-screen md:w-screen md:flex md:flex-row bg-[#FFF6F1]">
            
            <div className="md:w-3/6 px-20 pt-20 md:p-16 md:px-0 md:pt-0 lg:p-8 flex md:flex-row relative md:h-5/6 ">
                <div className="md:p-14 lg:p-0 md:w-full flex justify-center ">
                <div className=" border-[8px] md:border-[12px] lg:border-[16px] border-white ">
                    <img src={AboutUsData[0].img} className=" h-full w-full "/>
                </div>
    
                <h1 className="absolute right-16 md:right-8 lg:right-16 top-20 md:top-14 lg:top-8 flex flex-col text-center text-xs md:text-sm lg:text-lg ml-2 lg:ml-12 ">
                    <span >O</span>
                    <span >U</span>
                    <span >R</span>
                    <span >S</span>
                    <span >T</span>
                    <span >O</span>
                    <span >R</span>
                    <span >Y</span>
                </h1>
                
                <div className=" absolute bottom-0 md:bottom-32 lg:bottom-8 right-16 md:right-8 lg:right-18 lg:h-3/6 lg:w-3/6 border-[8px] md:border-[12px] lg:border-[16px] border-white" >
                    <img src={AboutUsData[0].img} className="w-[110px] h-[80px] md:w-[180px] md:h-[120px] lg:h-full lg:w-full object-cover object-center" />
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
                <p className=" text-center md:text-left text font-normal md:pr-14">{AboutUsData[0].content}</p>
                <motion.button type="submit" className="border border-[#4A2E1F] rounded-full flex justify-center w-3/6 p-2 mx-auto md:mx-0 md:w-[160px] md:p-2 md:px-4" 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                >Read more</motion.button>
                
            </div>
        </div>
    )
}

export default LegacyPage;