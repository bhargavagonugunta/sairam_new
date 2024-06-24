import Logo from "../../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import FooterHomeImg from "../../../../assets/images/footer-home.jpeg";
import FooterCategoryImg from "../../../../assets/images/footer-categories.jpeg";
import FooterAcImg from "../../../../assets/images/footer-account.jpeg";
import FooterCartImg from "../../../../assets/images/footer-cart.jpeg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
export default function FooterPage() {
  const orderItems = useSelector((store:any) => {
    return store.cart.items;
  });

  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="flex flex-col justify-between h-1/6 pt-5 w-full lg:flex-row">
      <div className="flex flex-col gap-2 w-full lg:w-2/6 bg-gradient-to-br from-[#754B34] to-[#4A2E1F] p-8">
        <img src={Logo} alt="" className="w-2/6 lg:w-4/6 mx-auto" />
        <div className="text-sm text-white flex justify-center items-center gap-3">
          <p>Timings:</p>
          <div>
            <p>Sunday to Saturday</p>
            <p>7:30 AM to 11:00 PM</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between lg:w-4/6 ">
        <div className="grid grid-cols-2 gap-6 justify-items-center text-sm bg-[#FFF6F1] p-8 lg:grid-cols-4">
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Shop</h3>
            </li>
            <li>Dry Fruits</li>
            <li>Gifting</li>
            <li>Indian Biscotti</li>
            <li>Indian Bakery</li>
            <li>Sweets</li>
            <li>Savories</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Account</h3>
            </li>
            <li>Login</li>
            <li>Track Your Order</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">About Us</h3>
            </li>
            <li>Company</li>
            <li>Our Brands</li>
            <li>Global Footprint</li>
            <li>Contact Us</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Legal</h3>
            </li>
            <li>Terms & conditions</li>
            <li>Shipping Policy</li>
            <li>Return and Exchange Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex-col justify-center items-center bg-gradient-to-br from-[#4A2E1F] to-[#754B34] text-white p-2 md:flex-row md:justify-between md:items-center">
          <div className="w-full lg:w-2/6">
            <p className="text-sm">Email:Sairamfoods.gmail.com</p>
          </div>
          <div className="w-full lg:w-3/6 mb-16 sm:mb-0">
            <p className="text-sm">
              &copy; 2024 Copyright.Sai Ram Foods All Rights Reserved
            </p>
          </div>
        </div>
        <div>
        <ul className="icons flex items-center justify-around py-2 w-full h-[72px] fixed bottom-0 right-0 left-0 bg-[#F8B919] sm:hidden">
        <NavLink to="/" onClick={() => setActiveIndex(0)}>
        <motion.div className={`footer-icon ${activeIndex === 0 ? 'active border-[#ffbc1c] rounded-full border-[8px] -translate-y-3' : ''}`} 
       animate={activeIndex === 0 ? { y: -10, scale: 1.4 } : { y: 0, scale: 1 }}
       transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
        >
      <div className={`w-12 h-12 flex items-center justify-center ${activeIndex === 0 ? 'border-white border-white rounded-full border-[6px]' : ''}`}>
        <img
          src={FooterHomeImg}
          alt="FooterHomeImg"
          className="w-10 bg-transparent"
        />
      </div>
    </motion.div>
  </NavLink>
        <NavLink to="/shop" onClick={() => setActiveIndex(1)}>
        <motion.div className={`footer-icon ${activeIndex === 1 ? 'active border-[#ffbc1c] rounded-full border-[8px] -translate-y-3' : ''}`} 
       animate={activeIndex === 1 ? { y: -10, scale: 1.4 } : { y: 0, scale: 1 }}
       transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
        >
      <div className={`w-12 h-12 flex items-center justify-center ${activeIndex === 1 ? 'border-white border-white rounded-full border-[6px]' : ''}`}>
        <img
          src={FooterCategoryImg}
          alt="FooterCategoryImg"
          className="w-10 bg-transparent"
        />
      </div>
    </motion.div>
  </NavLink>
        <NavLink to="/" onClick={() => setActiveIndex(2)}>
        <motion.div className={`footer-icon ${activeIndex === 2 ? 'active border-[#ffbc1c] rounded-full border-[8px] -translate-y-3' : ''}`} 
       animate={activeIndex === 2 ? { y: -10, scale: 1.4 } : { y: 0, scale: 1 }}
       transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
        >
      <div className={`w-12 h-12 flex items-center justify-center ${activeIndex === 2 ? 'border-white border-white rounded-full border-[6px]' : ''}`}>
        <img
          src={FooterAcImg}
          alt="FooterAcImg"
          className="w-10 bg-transparent"
        />
      </div>
    </motion.div>
  </NavLink>
        <NavLink to="/cart" onClick={() => setActiveIndex(3)}>
        <motion.div className={`footer-icon ${activeIndex === 3 ? 'active border-[#ffbc1c] rounded-full border-[8px] -translate-y-3' : ''}`} 
       animate={activeIndex === 3 ? { y: -10, scale: 1.4 } : { y: 0, scale: 1 }}
       transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
        >
          <div className="w-12 h-12 flex items-center justify-center">
      <div className={`w-12 h-12 relative flex items-center justify-center ${activeIndex === 3 ? 'border-white border-white rounded-full border-[6px]' : ''}`}>
        <img
          src={FooterCartImg}
          alt="footercartimg"
          className="w-10 bg-transparent"
        />
        {orderItems.length ? (<span className=" bg-[#593827] px-1 font-medium rounded-full text-white text-lg absolute -right-2 -top-4">{orderItems.length}</span>) : ""}
      </div>
      </div>

    </motion.div>
  </NavLink>
  
  
  {/* <NavLink to="/cart" onClick={() => setActiveIndex(3)}>
  <motion.div className={`footer-icon ${activeIndex === 3 ? 'active border-[#ffbc1c] rounded-full border-[8px] -translate-y-3' : ''}`}
  animate={activeIndex === 3 ? { y: -10, scale: 1.3 } : { y: 0, scale: 1 }}
  transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
  >
    <div className={`footer-icon ${activeIndex === 3 ? 'active border-white rounded-full border-[6px] scale-icon' : ''}`}>
      <div className="w-12 h-12 flex items-center justify-center">
        <div className={`w-10 h-10 rounded-full border-4 border-transparent relative transition-transform duration-300 ${activeIndex === 3 ? 'scale-icon' : ''}`}>
          <img
            src={FooterCartImg}
            alt="FooterCartImg"
            className="w-10 transition-transform duration-300"
          />
          {orderItems.length ? (<span className=" bg-[#593827] px-1 font-medium rounded-full text-white text-lg absolute -right-2 -top-4">{orderItems.length}</span>) : ""}

        </div>
      </div>
    </div>
    </motion.div>
  </NavLink> */}
</ul>


        </div>
      </div>
    </div>
  );
}
