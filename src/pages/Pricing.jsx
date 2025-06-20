import React from 'react';

const Pricing = () => {
    return (
        <div className="bg-[#37151a] min-h-screen text-white px-6 py-12">
            <h1 className="text-4xl font-bold text-[#F3961C] text-center mb-10">Our Pricing</h1>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {["Basic", "Standard", "Premium"].map((plan, index) => (
                    <div key={index} className="bg-[#442021] rounded-xl p-6 shadow-md text-center hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold mb-2">{plan}</h2>
                        <p className="text-4xl font-bold text-[#F3961C] mb-4">${(index + 1) * 10}/mo</p>
                        <ul className="mb-6 space-y-2">
                            <li>✓ 1 Coffee per day</li>
                            <li>✓ Free Delivery</li>
                            <li>✓ Premium Support</li>
                        </ul>
                        <button className="bg-[#F3961C] text-white py-2 px-4 rounded hover:bg-transparent hover:ring-2 hover:ring-[#F3961C] hover:text-[#F3961C] transition duration-300">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
