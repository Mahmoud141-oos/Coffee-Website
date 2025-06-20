import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaTwitter } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Links = [
    { id: 1, page: "Home", path: '/' },
    { id: 2, page: "About", path: '/about' },
    { id: 3, page: "Contact", path: '/contact' },
    { id: 4, page: "Support", path: '/support' },
    { id: 5, page: "Pricing", path: '/pricing' }
]
const Footer = () => {
    return (
        <div className='bg-[#37151a]'>
            <div className="container mx-auto pb-10 grid md:grid-cols-[1fr_1fr_1fr] gap-10 pt-10">
                <div className="flex flex-col gap-4">
                    <h1 className='text-2xl font-bold text-[#f39d1c]'>About Us</h1>
                    <p className='text-sm text-white'>We are commited to delivering high-qaulity solutions and services to meet your needs. Our mission to empower your digital presence.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className='text-2xl font-bold text-[#f39d1c]'>Quick Links</h1>
                    <ul className='flex flex-col text-white text-sm gap-2'>
                        {
                            Links.map((item) => (
                                <li key={item.id}>
                                    <Link className="hover:text-[#f39d1c] transition duration-200" to={item.path}>{item.page}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className='text-2xl font-bold text-[#f39d1c]'>Contact Us</h1>
                    <div className='flex flex-col gap-3'>
                        <Link to={"#"} className='flex items-center gap-2 text-white text-sm'><span><FaLocationDot className='text-orange-500'/></span><span>123 Street Name, City, Country</span></Link>
                        <Link to={"#"} className='flex items-center gap-2 text-white text-sm'><span><IoMdCall className='text-orange-500'/></span><span>+123 456 7890</span></Link>
                        <Link to={"#"} className='flex items-center gap-2 text-white text-sm'><span><MdEmail className='text-orange-500'/></span><span>Support@example.com</span></Link>
                    </div>
                </div>

            </div>

            <hr className='h-[1px] w-full bg-gray-700' />

            <div className="container mx-auto pt-5 pb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <ul className='flex gap-4 items-center'>
                    <li className='flex items-center justify-center bg-orange-700 rounded-full p-2 w-8 h-8 text-white hover:scale-[1.2] transition duration-300'><FaFacebookF /></li>
                    <li className='flex items-center justify-center bg-orange-700 rounded-full p-2 w-8 h-8 text-white hover:scale-[1.2] transition duration-300'><FaTwitter /></li>
                    <li className='flex items-center justify-center bg-orange-700 rounded-full p-2 w-8 h-8 text-white hover:scale-[1.2] transition duration-300'><FaInstagram /></li>
                    <li className='flex items-center justify-center bg-orange-700 rounded-full p-2 w-8 h-8 text-white hover:scale-[1.2] transition duration-300'><FaLinkedinIn /></li>
                </ul>
                <p className='text-sm text-white'>Copyright &copy; 2025 Mahmoud AbdElgalil. All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer