import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { CarouselArr } from "./CarouselArr"; 


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1, 
      }
    };
  },
  center: {
    zIndex: 0,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction > 0 ? "-100%" : "100%", 
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1, 
      }
    };
  }
};




const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const CarouselPage = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, CarouselArr.length, page);

  const paginate = (newDirection) => {
    const newIndex = page + newDirection;
    const directionValue = newDirection > 0 ? -1 : 1;
    setPage([page+ newDirection, directionValue]);
    
  };

  return (
    <div className={`w-screen h-screen flex overflow-hidden`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring",stiffness:300,damping:30,duration:2 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {CarouselArr[imageIndex]}
        </motion.div>
      </AnimatePresence>
      <button className="next absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 px-4 flex justify-center z-10" onClick={() => paginate(1)}>
        <span className="text-black text-2xl" role="img" aria-label="Next">‣</span>
      </button>
      <button className="prev absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 px-4 rotate-180 flex justify-center items-center"  onClick={() => paginate(-1)}>
        <span className="text-black text-2xl" role="img" aria-label="Previous">‣</span>
      </button>
    </div>
  );
};
