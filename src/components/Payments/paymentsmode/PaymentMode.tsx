import visa from "../../../assets/images/visa.png";
import mastercard from "../../../assets/images/mastercard.png";
import rupay from "../../../assets/images/rupay.png";
import creditcard from "../../../assets/images/creditcard.png"
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import CardDetailsPage from "./CardDetailsPage";
import AddDeliveryPage from "./AddDeliveryPage";
import { motion } from "framer-motion";
import { CartState } from "../../../utils/types/Types";
import { useDispatch, useSelector } from "react-redux";

function PaymentMode () {
    const navigate = useNavigate();
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const cardDetailsRef = useRef(null);
  const addAddressRef = useRef(null);
  const { totalAmount, totalQuantity, deliveryCharge, total } = useSelector((state: CartState) => state);

  const handleEnterCardDetails = () => {
    setShowCardDetails(true);
  };

  const handleCloseCardDetails = () => {
    setShowCardDetails(false);
  };

  const handleEnterAddAddress = () => {
    setShowAddAddress(true);
  };

  const handleCloseAddAddress = () => {
    setShowAddAddress(false);
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (cardDetailsRef.current && !cardDetailsRef.current.contains(event.target as Node)) {
      setShowCardDetails(false);
    }
    if (addAddressRef.current && !addAddressRef.current.contains(event.target as Node)) {
      setShowAddAddress(false);
    }
  };

  const handlePopupClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
    return (
        <div className="w-full">
        <div className="main_head flex  flex-col px-6 md:px-10 lg:px-16 gap-8 p-4 pt-16 md:pt-0 mx-auto w-full md:w-3/6 shadow-xl">

            <div className="flex flex-col gap-8 ">

                <div className="">
                    <h1 className="text-2xl font-medium ">Delivery Address: </h1>
                </div>
                <div className="flex flex-col md:flex lg:flex-row gap-10  ">

                    <div className="flex flex-col w-3/6 text-left gap-2 md:gap-4 md:order-2">
                        <h1 className=" text-xl font-semibold underline underline-offset-4">Default Address: </h1>
                        <p className="text-lg font-normal w-[300px]">Plot No: 60, Road NO: 5 , Ayyappa Society , Madhapur,Hyderabad - 500081,Telangana, India. </p>
                    </div>

                    <div className="lg:w-2/5 md:order-1">
                        <motion.button onClick={handleEnterAddAddress} 
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        className="bg-[#fca120] border border-slate-900 rounded-lg p-2 px-6 md:px-4 md:p-2 ">
            Add New Address
          </motion.button>
          {showAddAddress && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
              <div ref={addAddressRef} onClick={handlePopupClick}>
                <AddDeliveryPage onClose={handleCloseAddAddress} />
              </div>
            </div>
          )}
                    </div>  
                </div>
            </div>

             <div className=" flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Payment Mode: </h1>
            
            <div className="flex flex-col">
            <form className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 md:gap-0">
                    <div className="flex gap-2 ">
                       <input type="radio" id="card"  name="options"/>
                       <label htmlFor="card" className="text-lg font-medium border border-slate-800 px-4 rounded-lg"> Credit / Debit card </label>
                    </div>
                    <div className="flex-col gap-6 pl-4">
                    <div className=" flex items-center gap-4">
                        <img src={mastercard} alt="mastercard" className="w-[50px] md:w-[80px] "/>
                        <img src={visa} alt="visa" className="w-[50px] md:w-[80px] "/>
                        <img src={rupay} alt="rupay" className=" w-[50px] md:w-[80px] "/>
                        <button type="submit" className="h-[35px] md:h-[50px] bg-[#f7f7f7] px-4 ">See More</button>
                    </div>
                    <div className="flex gap-4 pl-2">
                        <img src={creditcard} alt="cardimg" className=" md:w-[70px]"/>
                        <a href="#" onClick={handleEnterCardDetails} className="flex justify-center items-center text-[#158ca6]">Enter Card Details</a>
                        {showCardDetails && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
                                <div ref={cardDetailsRef} onClick={handlePopupClick}>
                                    <CardDetailsPage onClose={handleCloseCardDetails} />
                                </div>
                            </div>
                        )}

                    </div>
                    </div>
                 </div>


                 <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                       <input type="radio" id="banking"  name="options"/>
                       <label htmlFor="card" className="text-lg font-medium border border-slate-800 px-4 rounded-lg"> Net Banking </label>
                    </div>
                    <div className="pl-4">
                        <select id="banks" className="bg-[#e8e8e8] rounded-full p-2">
                            <option value={"Choose"}>Choose an option</option>
                            <option value={"SBI"}>SBI</option>
                            <option value={"Indian"}>Indian</option>
                            <option value={"HDFC"}>HDFC</option>
                            <option value={"Canara"}>Canara</option>
                            <option value={"IDBI"}>IDBI</option>

                        </select>
                    </div>

                 </div>


                 <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                       <input type="radio" id="upi" name="options"/>
                       <label htmlFor="card" className="text-lg font-medium border border-slate-800 px-4 rounded-lg">UPI</label>
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                        <h1>Enter your UPI ID</h1>
                        <div className="space-x-4">
                            <input  placeholder="Enter UPI ID" className="text-black rounded-full p-2 bg-[#e8e8e8] outline-none"/>
                            <button type="submit" className="bg-[#fca120] border border-slate-700 rounded-lg px-4">Verify</button>
                        </div>
                    </div>

                </div>

                 <div className="flex flex-col gap-6">
                 <div className="flex gap-2">
                       <input type="radio" id="cod"  name="options"/>
                       <label htmlFor="card" className="text-lg font-medium border border-slate-800 px-4 rounded-lg">Cash On Delivery</label>
                </div>
                 </div>
                </form>
                </div>
             </div>

             <hr className=" border-gray-800"></hr>

             <div className="flex flex-col text-xl font-semibold gap-2">
                <div className="flex justify-between">
                    <p>Total Items</p>
                    <p>{totalQuantity}</p>
                </div>
                <div className="flex justify-between">
                    <p>SubTotal</p>
                    <p>{totalAmount}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>{deliveryCharge}</p>
                </div>
                <div className="flex justify-between">
                    <p>{"Total (incl tax)"}</p>
                    <p>{total}</p>
                </div>
                
             </div>
             
             <div >
                <motion.button onClick={ () => {navigate("/ordersuccess")}}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="border border-slate-900 w-full rounded-full md:rounded-lg bg-[#fca120] text-xl font-semibold p-6">
                    <div className="flex w-full justify-between">
                        <p>&#x20B9; amount</p>
                        <p className="text-xl font-semibold">checkout &rarr;</p>
                    </div>
                </motion.button>
                
             </div>
            
        </div>
        </div>
    )
}

export default PaymentMode;