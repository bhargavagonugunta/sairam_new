import GiftBox from "../../../../assets/images/big-gift-box.png";
import GiftBoxBackground from "../../../../assets/images/gift-box-background.png";
import BorderLineDown, { BorderLineUp } from "../../shop/BorderLine";
export default function GiftBoxPage() {
  return (
    <>
      <BorderLineUp />
      <div className="flex flex-col gap-16 md:gap-24 md:flex-row md:gap-4 items-center justify-center bg-[#FFD285] py-14 md:px-24 px-5">
      <div className="flex items-center relative justify-center w-1/5 md:w-3/6">
        <img
          src={GiftBox}
          alt=""
          className=" absolute -left-10 md:-left-16 lg:left-[30px] -bottom-4 md:-bottom-12 lg:-bottom-4"
        />
        <img
          src={GiftBoxBackground}
          alt=""
          className="shadow-lg "
        />
      </div>

      <div className="flex flex-col justify-self-center gap-y-6 w-full md:w-3/6 lg:w-4/6 p-2 px-4 md:p-0 md:px-0">
        <h1 className="text-2xl text-center md:text-left md:text-3xl font-medium">
          The Taste of Authentic India, perfected over generations SaiRam,
          sweetening celebrations since 1992.
        </h1>
        <p className="text-base text-center md:text-left">
          We work from the heart, with passion to craft authentic sweets and
          savories with an inimitable character that’s truly the taste of
          Authentic India. From lavish kaju sweets, to pure ghee delicacies andfreshly made savories, every morsel is imagined and created with a single intent, to deliver joy.
        </p>
      </div>
    </div>
      <BorderLineDown />
    </>
  );
}
