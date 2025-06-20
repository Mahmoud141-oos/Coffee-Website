import React from 'react'
import { gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6 } from '../assets'


const Images = [
    {id : 1, img : gallery_1},
    {id : 2, img : gallery_2},
    {id : 3, img : gallery_3},
    {id : 4, img : gallery_4},
    {id : 5, img : gallery_5},
    {id : 6, img : gallery_6}
]

const Gallery = () => {
    return (
        <div className='bg-[#37151a]'>
            <div className="container mx-auto pt-20 pb-20 flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-5">
                    <h1 className='text-4xl font-bold text-white text-center'>Gallery</h1>
                    <hr className="border-[3px] w-[90px] mx-auto border-[#f1952c] rounded" />
                </div>
                <div className="grid grid-cols-1 lgl:grid-cols-3 md:grid-cols-2 gap-8">
                    {
                        Images.map((item) => (
                            <div className="max-w-[25rem] h-[17rem] overflow-hidden rounded-xl" key={item.id}>
                                <img src={item.img} alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-[1.3] hover:cursor-zoom-in' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery