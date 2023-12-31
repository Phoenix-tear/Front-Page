import logo from '../../public/logo.jpg';
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
    return (
        <div className='flex w-screen justify-between px-20 absolute bottom-0 footer items-start pb-8 border pt-12 '>
            <div className='flex flex-col'>
                <h1>Contact :</h1>
                <div className='flex'>
                    <FaPhoneAlt size={30}/>
                    <h1>:</h1>
                </div>
                <h3>+91 9458896788</h3>
                <h3>+91 9458896088</h3>
                <div className='flex items-center'>
                    <IoMail size={30}/>
                    <h1>:</h1>
                </div>
                <h3>nscc.com</h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1>Follow us on:</h1>
                <div className='flex justify-between items-center py-5 w-40'>
                <FaInstagram size={35}/>
                <FaLinkedinIn size={35}/>
                <FaTwitter size={35}/>
                </div>
                <div className='box1 rounded-full flex'>
                    <img src={logo} className='logoimg'/>
                    <hr className=' border-cyan-50 border h-[10vh]'/>
                    <div>
                        <h2>Developed by:</h2>
                        <h2>NSCC SRM</h2>
                    </div>   
                </div>
            </div>
            <div>
                <h1 className='Navigate'>Navigate</h1>
                <h2>About us</h2>
                <h2>Events</h2>
                <h2>Gallery</h2>
                <h2>Contact us</h2>
            </div>
        </div>
    )
}