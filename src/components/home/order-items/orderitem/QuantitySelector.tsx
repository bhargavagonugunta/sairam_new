import ArrowDownHead from "./ArrowHeadSvg";
import { ArrowUpHead } from "./ArrowHeadSvg";
import { useState } from "react";
import { ArrowPropType } from "../../../../utils/types/Types";
export default function QuantitySelector({ item, }: ArrowPropType) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex gap-3 justify-start  items-center bg-[#FAFAFA] w-fit rounded-sm">
      <span className="p-3">
        <ArrowUpHead
          item={item}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </span>
      <span>{quantity}</span>
      <span className="p-3">
        <ArrowDownHead
          item={item}
          quantity={quantity}
          setQuantity={setQuantity}
        
              />
      </span>
    </div>
  );
}
