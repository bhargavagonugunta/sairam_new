
import { motion } from "framer-motion";


export function TriangleBig() {
  return (
    <div
      style={{
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderBottom: "8px solid #4A2E1F",
      }}
      className="w-0 h-0 mx-2 my-3"
    ></div>
  );
}
export function TriangleSmall() {
  return (
    <div
      style={{
        borderLeft: "2px solid transparent",
        borderRight: "2px solid transparent",
        borderBottom: "4px solid #C17E2A",
      }}
      className="w-0 h-0 mx-1 my-1"
    ></div>
  );
}

export const FallingTriangles = () => (
  <motion.div
    animate={{ y: 0 }}
    transition={{ duration: .5, type: "spring",  }}
    
  >
    <TriangleBig />
    <TriangleBig />
    <TriangleBig />
    <TriangleBig />
    <TriangleBig />
  </motion.div>
);
export function MovingDotsRight() {
  return (
    <div className="flex">
      <TriangleSmall />
      <TriangleSmall />
      <TriangleSmall />
      <TriangleSmall />
      <TriangleSmall />
    </div>
  );
}
export default function FallingDotsComponent() {
  return (
    <div className="flex">
      <motion.div animate={{ y: 120 }} transition={{ duration: 1.5 }}>
        <FallingTriangles />
      </motion.div>
      <motion.div
        animate={{ y: 120 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <FallingTriangles />
      </motion.div>
      <motion.div animate={{ y: 120 }} transition={{ duration: 1.5, delay: 3 }}>
        <FallingTriangles />
      </motion.div>
      <motion.div
        animate={{ y: 120 }}
        transition={{ duration: 1.5, delay: 4.5 }}
      >
        <FallingTriangles />
      </motion.div>
      <motion.div animate={{ y: 120 }} transition={{ duration: 1.5, delay: 6 }}>
        <FallingTriangles />
      </motion.div>
    </div>
  );
}

export function MovingDotsRightComp() {
  return (
    <div className="flex flex-col">
      <motion.div animate={{ x: 100 }} transition={{ duration: 1.5 }}>
        <MovingDotsRight />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <MovingDotsRight />
      </motion.div>
      <motion.div animate={{ x: 100 }} transition={{ duration: 1.5, delay: 3 }}>
        <MovingDotsRight />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ duration: 1.5, delay: 4.5 }}
      >
        <MovingDotsRight />
      </motion.div>
      <motion.div animate={{ x: 100 }} transition={{ duration: 1.5, delay: 6 }}>
        <MovingDotsRight />
      </motion.div>
    </div>
  );
}
