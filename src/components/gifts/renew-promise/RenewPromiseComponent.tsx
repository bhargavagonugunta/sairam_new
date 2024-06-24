import GiftBox from "../../../assets/images/big-gift-box.png";
import GiftBoxBackground from "../../../assets/images/gift-box-background.png";
import { motion } from "framer-motion";

export default function RenewPromiseComponent() {
  return (
    <div className=" w-full flex flex-col gap-14 py-8  justify-between items-center bg-[#FFD285] md:flex-row md:p-14">
      <div className=" flex flex-col gap-8 md:w-5/6 md:pl-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">Renew the Promises of Love</h1>
        <h5 className="text-2xl font-normal  md:text-3xl lg:text-4xl">with Heartwarming Anniversary Gifts</h5>
        <motion.button className=" px-5 py-2 bg-[#C17E2A] text-black rounded-md w-3/6 md:w-[250px] text-2xl"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}>
          Plan Surprises
        </motion.button>
      </div>
      <div className="  relative mb-14 md:mb-0 md:w-1/6">
        <img src={GiftBox} className="h-[100px] md:h-[100px] lg:h-[150px] absolute -left-16  md:-left-18 lg:-left-28 -bottom-4 lg:-bottom-6" />
        <img src={GiftBoxBackground} alt="" className="h-[150px] lg:h-[200px] " />
      </div>
    </div>
  );
}
