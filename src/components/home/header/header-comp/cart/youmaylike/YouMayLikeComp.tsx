import YouMayLikeData from "./YouMayLikeData";
import YouMayLikeItem from "./YouMayLikeItem";

export default function YouMayLikeComp() {
    const n = 4;

    const shuffledData = YouMayLikeData.sort(() => Math.random() - 0.5);

    const selectedData = shuffledData.slice(0, n);

    return (
        <div className=" p-4">
        <div className=" flex flex-col gap-8 mx-auto">
      <div className="flex flex-col">
                 <h1 className="text-2xl">You May Like:</h1>
         </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
        {selectedData.map((item, index) => {
          return <YouMayLikeItem item={item} key={index} />;
        })}
      </ul>
    </div>
    </div>
    );
}
