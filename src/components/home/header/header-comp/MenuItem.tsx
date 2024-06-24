import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { NavTypes } from "../../../../utils/types/Types.ts";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100, velocity: -50 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { type: "spring", stiffness: 100 },
    },
  },
};
export const MenuItem = ({
  item,
  closeMenu,
}: {
  item: NavTypes;
  closeMenu: () => void;
}) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        to={item.route}
        className="nav-li shadow-xl px-4 py-2 text-md font-semibold text-[#4A2E1F] bg-[#FFD285] rounded-md"
        onClick={closeMenu}
      >
        {item.navLink}
      </NavLink>
    </motion.div>
  );
};