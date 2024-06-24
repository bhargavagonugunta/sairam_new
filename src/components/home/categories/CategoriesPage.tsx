import { CategoriesData } from "./CategoriesData";
import lines1 from "../../../assets/images/lines1.png"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CategoriesPage () {
  const navigate = useNavigate();
      return (
        <div className="p-10 md:p-24 flex flex-col justify-center items-center gap-8">
  <div className="flex flex-col justify-center items-center">
    <img src={lines1} className="w-[250px] md:w-[300px]" alt="Lines" />
    <h1 className="text-4xl">Categories</h1>
  </div>

  <div className="grid grid-cols-2 md:grid md:grid-cols-4 justify-center gap-4 md:gap-4 md:w-full max-w-[900px]">
    {CategoriesData.map((item) => (
      <div key={item.id} className="w-full p-8 md:p-8 lg:p-4 flex flex-col justify-center items-center gap-2 md:gap-4" style={{ backgroundColor: item.color, borderRadius: '130px 10px 10px 10px' }} > 
        <div className={`border-4 rounded-full overflow-hidden`} style={{ borderColor: item.bgcolor }}>
          <img src={item.img} className={`object-cover object-relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32`} alt={item.title} />
        </div>
        <h1 className="text-md font-normal md:font-normal md:text-xl lg:text-3xl font-light">{item.title}</h1>
        <motion.button onClick={() => {navigate(`${item.route}`)}} className="border border-[#4A2E1F] md:p-1 p-2 md:px-4 rounded-full"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        >View All</motion.button>
      </div>
    ))}
  </div>
</div>

    )
}

export default CategoriesPage;