import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { user_1, user_2, user_3, user_4, user_5 } from '../../assets';

const CardSlider = [
    {
        id: 1,
        img: user_1,
        desc: "'' Loved the French roast Perfectly balanced and rich. Will order again! ''",
        name: "- Sarah Johnson"
    },
    {
        id: 2,
        img: user_2,
        desc: "'' Great espresso blend! Smooth and bold flavor. Fast shipping too! ''",
        name: "- James Wilson"
    },
    {
        id: 3,
        img: user_3,
        desc: "'' Fantastic mocha flavor. Fresh and aromatic. Quick shipping! ''",
        name: "- Michael Brown"
    },
    {
        id: 4,
        img: user_4,
        desc: "'' Excellent quality! Fresh beans and quick delivery.Highly recommend. ''",
        name: "- Emily Harris"
    },
    {
        id: 5,
        img: user_5,
        desc: "'' Best decaf I've tried! Smooth and flavorful. Arrived promptly. ''",
        name: "- Anthony Thompson"
    },
]

const Testimonials = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='bg-[#252525]'>
            <div className="container mx-auto flex flex-col items-center pb-10">
                <div className="flex flex-col items-center gap-5 py-20">
                    <h1 className='text-4xl font-bold text-white text-center uppercase'>Testimonials</h1>
                    <hr className="border-[3px] w-[120px] mx-auto border-[#f1952c] rounded" />
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {
                        CardSlider.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col items-center gap-5">
                                    <div className="max-w-[12rem] h-[160px] rounded-[50%] overflow-hidden"><img src={item.img} alt="" className='w-full' /></div>
                                    <div className="flex flex-col gap-5 items-center">
                                        <p className='text-lg font-medium text-white text-center'>{item.desc}</p>
                                        <h1 className='text-2xl font-bold text-white'>{item.name}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials