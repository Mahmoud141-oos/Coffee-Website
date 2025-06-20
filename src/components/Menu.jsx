import { burger_frenchfries, cold_beverages, dessert, hot_beverages, refreshment, special_combos } from '../assets/index'

const Data = [
    {
        id: 1,
        title: "Hot Beverages",
        desc: "Wide range of Steaming hot coffee to make you fresh and light.",
        img: hot_beverages
    },
    {
        id: 2,
        title: "Cold Beverages",
        desc: "reamy and frothy cold coffee to make you cool.",
        img: cold_beverages
    },
    {
        id: 3,
        title: "Refreshment",
        desc: "Fruit and icy refreshing drink to make feel refresh.",
        img: refreshment
    },
    {
        id: 4,
        title: "Special Combos",
        desc: "Your favorite eating and drinking combations.",
        img: special_combos
    },
    {
        id: 5,
        title: "Dessert",
        desc: "Satiate your palate and take you on a culinary treat.",
        img: dessert
    },
    {
        id: 6,
        title: "Burger & French Fries",
        desc: "Quick bites to satisfy your small size hunger.",
        img: burger_frenchfries
    }
]
const Menu = () => {
    return (
        <div className="bg-[#252525]">
            <div className='container mx-auto pt-20 pb-20 flex flex-col items-center gap-10'>
                <div className="flex flex-col items-center gap-5">
                    <h1 className='text-4xl font-bold text-white text-center'>OUR MENU</h1>
                    <hr className="border-[3px] w-[100px] mx-auto border-[#f1952c] rounded" />
                </div>
                <div className="grid grid-cols-1 lgl:grid-cols-3 md:grid-cols-2 gap-8">
                    {
                        Data.map((item) => (
                            <div className="flex flex-col items-center gap-5 p-5 bg-[#1b1b1b] rounded-2xl hover:scale-[1.1] transition duration-300" key={item.id}>
                                <div className="max-w-[17rem] h-[260px]"><img src={item.img} alt="" className='w-full' /></div>
                                <div className="flex flex-col gap-5 items-center">
                                    <h1 className='text-3xl font-bold text-white'>{item.title}</h1>
                                    <p className='text-lg font-medium text-white text-center'>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu