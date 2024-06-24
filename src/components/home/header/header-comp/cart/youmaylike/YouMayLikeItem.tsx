import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";
import { SqCardPropType } from "../../../../../../utils/types/Types";

export default function YouMayLikeItem({ item }: SqCardPropType) {
  const dispatch = useDispatch();
  function handleAddCartItem() {
    const cartItem = {
      ...item,
      quantity: 1,
    };
    // @ts-ignore
    dispatch(addItem(cartItem));
  }

  return (
    <div className=" relative rounded-lg">
      <img src={item.img} alt="" className="rounded-lg h-full w-full" />
      <div className="absolute bottom-0 right-0 left-0 bg-black opacity-80  text-white flex justify-between items-center px-2 md:px-4 py-3 rounded-lg">
        <p className="">&#8377;{item.itemOfferAmount}</p>
        <motion.button
          className="border border-white bg-transparent px-1 md:px-6 md:py-1 rounded-full "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            handleAddCartItem();
          }}
        >
          {item.btntext}
        </motion.button>
      </div>
    </div>
  );
}
