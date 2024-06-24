import curelyDesignArrow from "../../../../assets/images/curely-design.png";
import { HomeSquareCardData } from "./SquareCardData";
import SquareCardItem from "./SquareCardItem";
export default function SquareCard() {
  return (
    <div className="flex flex-col gap-8 md:gap-20">
      <div className="flex flex-col items-center">
        <img src={curelyDesignArrow} alt="designed-arrow" className="w-2/6" />
        <h1 className="text-2xl">New Arrivals</h1>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {HomeSquareCardData.map((item, index) => {
          return <SquareCardItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
}
