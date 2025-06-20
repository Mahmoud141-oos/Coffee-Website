

const ContactUs = () => {
    return (
        <div className='bg-[#37151a]'>
            <div className="container mx-auto grid lgl:grid-cols-[2fr_1fr] gap-10 items-center py-20">
                <div className="p-10 gap-3 flex flex-col bg-[#1b1b1b] text-white w-full h-full">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold text-[#f39d1c]">Need Help? Open a Ticket</h1>
                        <p className="text-sm">Our support team will get back to you ASAP via email.</p>
                    </div>
                    <form action="" className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 sml:grid-cols-2 gap-10 sml:gap-10">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="your-name">Your Name</label>
                                <input className="py-3 px-2 bg-[#37151a] rounded-md outline-none focus:ring-2 focus:ring-orange-500 transition duration-200" type="text" id="your-name" placeholder="Enter Your name" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="your-email">Your Email</label>
                                <input className="py-3 px-2 bg-[#37151a] rounded-md outline-none focus:ring-2 focus:ring-orange-500 transition duration-200" type="email" id="your-email" placeholder="Enter Your Email" required />
                            </div>
                        </div>
                        <textarea className="py-3 px-2 bg-[#37151a] rounded-md outline-none w-full focus:ring-2 focus:ring-orange-500 transition duration-200" name="His message" maxLength={1000} rows={7} placeholder="Write Your Message here..."></textarea>
                        <input className="max-w-[150px] bg-[#fe7418] font-bold text-white py-2 rounded-full hover:bg-[#bb5309] transition duration-300" type="submit" value={"Submit Ticket"}/>
                    </form>
                </div>
                <div className="flex flex-col p-10 gap-3 bg-[#1b1b1b] text-white h-full w-full">
                        <div className="">
                            <h1 className="text-2xl font-bold text-[#f39d1c]">Subscribe to receive future updates</h1>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut saepe in enim numquam nobis nesciunt sapiente mollitia, quo excepturi similique adipisci atque vero deleniti natus, sit esse, debitis non! Vel?</p>
                        </div>

                        <hr className="h-[1px] w-full my-4 bg-gray-700" />

                        <div className="flex flex-col gap-5">
                            <input type="text" placeholder="Enter Your Name" className="py-3 px-2 bg-[#37151a] rounded-md outline-none w-full  text-gray-700 focus:ring-2 focus:ring-orange-500 transition duration-200" />
                            <input type="email" placeholder="Enter Your Name" className="py-3 px-2 bg-[#37151a] rounded-md outline-none w-full text-gray-700 focus:ring-2 focus:ring-orange-500 transition duration-200" />
                            <button className="w-full bg-[#fe7418] hover:bg-[#bb5309] transition duration-300 font-bold text-white py-2 rounded">Submit</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs