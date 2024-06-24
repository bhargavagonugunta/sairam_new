import curelyDesignArrow from "../../../../assets/images/curely-design.png";
import { HomeSquareCardData } from "./SquareCardData";
import SquareCardItem from "./SquareCardItem";
import { Leftdouble } from "../../../../assets/svgs/Leftdouble";
import { Rightdouble } from "../../../../assets/svgs/Rightdouble";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";





export default function SquareCard() {
  const[currentIndex, setCurrentIndex] = useState(0);

  const nextPage= () => {
      setCurrentIndex((currentIndex + 1) % (HomeSquareCardData.length - 3)) 

  }

  const prevpage = () => {
    setCurrentIndex((currentIndex - 1 + (HomeSquareCardData.length - 3)) % (HomeSquareCardData.length - 3))
  }

  const visibleItems = HomeSquareCardData.slice(currentIndex, currentIndex + 4);

  return (
    <div className="flex flex-col gap-20 ">
      
      <div className="flex flex-col items-center">
        <img src={curelyDesignArrow} alt="designed-arrow" className="w-2/6" />
        <h1 className="text-2xl">New Arrivals</h1>
      </div>
      <div className="flex">
      <button onClick={prevpage}> <Leftdouble /> </button>
      <ul className="flex w-full overflow-hidden gap-4" key={currentIndex}>
          {visibleItems.map((item, index) => (
            <AnimatePresence key={index}>
              <motion.li
                initial={{ opacity: 1, x: '100%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 1, x:'0%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <SquareCardItem item={item} />
              </motion.li>
            </AnimatePresence>
          ))}
        </ul>
      <button onClick={nextPage}> <Rightdouble /> </button>
      </div>
    </div>
  );
}
