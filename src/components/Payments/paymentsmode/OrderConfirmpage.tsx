import confirmimg from "../../../assets/images/confirmimg.png"

function OrderConfirmPage() {
    return(
        <div className="main_head p-12 md:w-3/6 mx-auto">
            <div className=" bg-[#FFD285] flex flex-col justify-center items-center gap-8 p-4 py-12">
                <img src={confirmimg} />
                <h1 className="text-xl md:text-2xl font-medium">Your Order is Confirmed</h1>
                <h1 className="text-lg text-center font-medium">Your Booking ID is : 9874563210123</h1>
            </div>
        </div>
    )
}
export default OrderConfirmPage;