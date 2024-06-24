import shopimg from "../../../assets/images/shopimg.jpeg";
import lines1 from "../../../assets/images/lines1.png";

import BorderLineDown, { BorderLineUp } from "./BorderLine";

export default function ShopPage() {
  return (
    <div>
      <BorderLineUp />
      <div className="relative w-full h-[237px] md:h-[437px]">
        <div className="diva w-full h-full border border-slate-900 relative ">
          <img
            src={shopimg}
            alt=""
            className="w-full h-full absolute inset-0 object-cover"
          />
        </div>

        <div className="divb absolute top-0 left-0 bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <img src={lines1} alt="lines" className=" mb-4" />
          <h1 className="text-white text-4xl font-light">Shop</h1>
        </div>
      </div>
      <BorderLineDown />
    </div>
  );
}
