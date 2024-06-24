import curelyDesignArrow from "../../../assets/images/curely-design.png";
import { HomeSquareCardData } from "../../home/square-card/square-card-comp/SquareCardData";
import SquareCardItem from "../../home/square-card/square-card-comp/SquareCardItem";
export default function DeliciousCombo() {
  return (
    <div className="flex flex-col gap-20 md:py-24 px-5">
      <div className="flex flex-col items-center">
        <img src={curelyDesignArrow} alt="designed-arrow" className="w-2/6" />
        <h1 className="text-2xl">Our Delicious Combo</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {HomeSquareCardData.map((item, index) => {
          return <SquareCardItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
}
