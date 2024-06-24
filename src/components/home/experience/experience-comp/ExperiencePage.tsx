import { motion } from "framer-motion";
import firstImg from "../../../../assets/images/first-1.png";
import FallingDotsComponent from "./SingleDot";
import { MovingDotsRightComp } from "./SingleDot";
import curleyDesign from "../../../../assets/images/curely-design.png";
export default function ExperienceSairam() {
  return (
    <div className="flex flex-col gap-8 md:gap-0 md:h-4/6 justify-center items-center relative p-8 md:p-24 sm:flex-row">
      <div className="sm:w-2/6 flex justify-center items-center ">
        <div className="absolute -left-20 md:left-14 top-4 md:top-14 ">
          <MovingDotsRightComp />     
        </div>
        <div className="flex justify-center items-center md:h-4/6 md:pt-0 "> 
          <img src={firstImg} className="w-4/6 md:w-full lg:w-5/6 lg:h-4/6" alt="firstImg" />
        </div>
      </div>
      <div className="sm:w-3/6 h-full flex md:justify-between items-center ">
        <div className="absolute right-2 md:right-10 md:bottom-[120px] hidden md:block">
          <FallingDotsComponent />
        </div>
        <div className="flex flex-col md:flex md:flex-row items-center gap-4 md:gap-0">
        <motion.div 
          
          transition={{ duration: 1 }}
          className="w-4/6 md:w-2/6 m-0 p-0  md:rotate-90"
        >
          <img className="" src={curleyDesign} alt="curely" />
        </motion.div>
        <h1 className="text-2xl md:text-3xl text-center md:text-left  text-[#4A2E1F] ">
          Experience SaiRam's Delectable Ensemble. Savor the Taste of Authentic India.
        </h1>
        </div>
      </div>
    </div>
  );
}
