import SpecialPageBanner from "../specials/specialspage/SpecialPagebanner";
import CategoriesPage from "../home/categories/CategoriesPage";
import OrderItems from "../home/order-items/OrderItems.tsx";
import SquareCard from "./square-card/SquareCard.tsx";

function Specials() {
  return (
    <div>
      <div className="mt-[40px] md:mt-[10px] pt-8 md:pt-14 lg:pt-24">
        <SpecialPageBanner />
      </div>
      <CategoriesPage />
      <OrderItems />
      <SquareCard />
    </div>
  );
}

export default Specials;
