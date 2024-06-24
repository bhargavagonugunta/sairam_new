import { SqCardPropType } from "../../../../utils/types/Types";

export default function SquareCardItem({ item }: SqCardPropType) {
  return (
    <div className=" relative rounded-lg min-w-[320px]">
      <img src={item.img} alt="" className="rounded-lg " />
      <div className="absolute bottom-1 right-1 left-1 bg-black opacity-80  text-white flex justify-between items-center px-4 py-3 rounded-lg">
        <p className="">{item.itemOfferAmount}</p>
        <button className="border border-white bg-transparent px-6 py-1 rounded-full">
          {item.btntext}
        </button>
      </div>
    </div>
  );
}
