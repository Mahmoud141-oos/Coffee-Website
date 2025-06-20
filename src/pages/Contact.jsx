import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[#37151a] min-h-screen text-white px-6 flex items-center justify-center">
            <div className="max-w-md w-full">
                <h1 className="text-4xl font-bold text-[#F3961C] mb-6 text-center">Contact Us</h1>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="p-3 rounded bg-transparent border border-gray-400 text-white placeholder-gray-300" />
                    <input type="email" placeholder="Your Email" className="p-3 rounded bg-transparent border border-gray-400 text-white placeholder-gray-300" />
                    <textarea placeholder="Your Message" className="p-3 h-32 rounded bg-transparent border border-gray-400 text-white resize-none placeholder-gray-300"></textarea>
                    <button className="bg-[#F3961C] text-white py-3 rounded hover:bg-transparent hover:ring-2 hover:ring-[#F3961C] hover:text-[#F3961C] transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
