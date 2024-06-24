function ContactUsPage () {
    return (
        <div className="main_head p-8 lg:p-16 flex flex-col md:gap-4 justify-center items-center md:flex-row">

            <div className="p-8 md:w-2/6 md:flex-col space-y-6 ">

                <h1 className="font-semibold text-center md:text-left underline underline-offset-2">STORE:</h1>

                <h1 className="text-orange-600 text-2xl font-bold text-center md:text-left	">SAI RAM FOODS</h1>

                <p className="font-medium text-center md:text-left text-lg">Brindavan Gardens 2nd Line, Opposite SBI Bank, near Spenser's, Guntur. Andhra Pradesh - 522002, India.</p>

                <p className="font-medium text-center md:text-left text-lg">Email: sairamfoods@gmail.com Phone no: 9999999999</p>
                
            </div>

            <div className="w-full md:w-3/6 flex flex-col gap-4  items-center">
    <h1 className="text-2xl font-semibold underline underline-offset-2">WRITE TO US:</h1>

    <form className="flex flex-col  justify-center items-center w-full md:w-[250px]">
        <input type="text" placeholder="Name" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none w-full md:w-full"/>
        <input type="text" placeholder="Phone Number" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none w-full md:w-full"/>
        <input type="text" placeholder="Email ID" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none w-full md:w-full"/>
        <input type="text" placeholder="Message" className="border border-black border-opacity-30 opacity-70 bg-gray-300 p-2 outline-none md:h-[60px] w-full md:w-full"/>
        <button type="submit" className="bg-[#FCA120] border border-black border-opacity-30 p-2 w-full ">Submit</button>
    </form>
</div>


        </div>
    ) 
}

export default ContactUsPage; 