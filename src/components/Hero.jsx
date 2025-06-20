import React from 'react'
import { Image_hero } from '../assets'

const Hero = () => {
    return (
        <div className="bg-[#37151a] min-h-screen flex items-center">
            <div className="container mx-auto w-full text-white grid grid-cols-1 md:grid-cols-2 items-center gap-10 h-full">

                {/* left section */}
                <div className="text-white flex flex-col gap-6 max-w-lg pt-20">
                    <h1 className='text-5xl font-bold font-mono text-[#F3961C]'>Best Coffee</h1>
                    <h2 className='text-4xl font-bold'>Make Your Day Great With Our Special Coffe</h2>
                    <p className='text-lg'>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                    <div className="flex gap-4">
                        <button className='px-6 py-3 rounded-full font-medium border border-orange-500 bg-orange-500 hover:bg-transparent hover:border hover:border-orange-500 hover:text-orange-300 transition duration-300'>Order Now</button>
                        <button className='px-6 py-3 rounded-full font-medium border border-white bg-transparent'>Contact Us</button>
                    </div>
                </div>

                {/* right section */}
                <div className="flex justify-center items-center h-full overflow-hidden">
                    <img src={Image_hero} alt="Coffee" className="h-[90%] object-contain" />
                </div>

            </div>
        </div>
    )
}

export default Hero