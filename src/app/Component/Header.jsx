"use client"
import React, { useContext, useEffect, useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart3, BsCartCheck } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { useCart } from './CartContext';
// import CartContext from "./CartContext";
function Header() {
      const { state } = useCart();


    const [showLogin, setShowLogin] = useState(false);

    const [header, setHeader] = useState(false)
    const scrollHeader = () => {
        if (window.scrollY >= 100) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
    }, [])
    let [data, setData] = useState([])
    // let {state,dispatch}=useContext(CartContext)

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories').then(a => a.json()).then(b => setData(b))
    }, [])



    return (
        <>
            {/* hotline start */}
            <section className='py-3 lg:block sm:hidden text-white text-center text-[12px] font-[400] bg-[#1E3A8A]'>
                <div className="container-fluid flex justify-between px-6 mx-auto">

                    <div>
                        <ul className="flex gap-3 items-center">
                            <li className='flex items-center gap-2 border-r pr-3'><FaHeadphones /> Hotline: 01-5970455</li>

                            <li className='flex items-center gap-2'><IoIosMail />Email:<Link href='mailto:support@sybazzar.com'>support@sybazzar.com</Link> </li>
                            <li> <Link href="https://facebook.com/syandmarketnepal"><FaFacebook className='size-[16px]' /></Link></li>
                            <li> <Link href="https://instagram.com/@syandmarketnepal"><FaInstagram className='size-[16px]' /></Link></li>
                            <li> <Link href="https://youtube.com/@syandmarketnepal"><FaYoutube className='size-[16px]' /></Link></li>
                            <li> <Link href="https://tiktok.com/@syandmarketnepal"><FaTiktok className='size-[16px]' /></Link></li>
                            <li> <Link href="https://wa.me/9779827374"><FaWhatsapp className='size-[16px]' /></Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-4 sm:items-center">
                            <li className='hover:underline border-r pr-3 '><Link href="/faqs/">FAQ</Link> </li>
                            <li className='hover:underline border-r pr-3 '><Link href="/blog/">Blog</Link></li>
                            <li className='hover:underline border-r pr-3 '><Link href="https://sybazzar.com/page/career">Career</Link></li>
                            <li className='hover:underline '><Link href="/Contact/">Contact Us</Link></li>
                        </ul>
                    </div>

                </div>
            </section>
            {/* hotline end */}
            <div className={header ? "fixed w-full z-50 top-0 kala bg-white" : "bg-[transparent]"}>

                <header className="py-3 header  -z-50 ">
                    <div className="container-fluid shadow items-center  text-center flex gap-10 mx-auto">
                        <Link href="/"> <img className="w-[200px]" src="https://cdn.sybazzar.com/public/files/729FF4C08FF63B2-logo.png" alt="" /></Link>
                        <form action="" className='flex text-[#BDC0C8] gap-4 items-center'>
                            <GoSearch className='size-[20px] absolute  z-10   ' /><input type="text" className='bg-[#e3eefc] pl-4 px-8 outline-0 relative sm:w-[300px] lg:w-[800px] h-[40px]  hover:border-[#9fc4f5]' name='search' placeholder='Search For Products, Branch and More' />
                        </form>
                        <div className='w-[600px]'>
                            <ul className='flex gap-4 items-center'>
                                <Link href=""><li className="flex gap-3 items-center"> <FaRegUserCircle className='size-[20px]' /><button
                                    onClick={() => setShowLogin(prev => !prev)}
                                >Login
                                </button> <MdKeyboardArrowDown />

                                </li>
                                    <div className='fixed top-[100px] left-[70%] z-50'>


                                        {/* Login Page */}
                                        {showLogin && (
                                            <div className='block bg-white w-[180px] mt-4 shadow-md rounded'>
                                                <div className="flex gap-3 border-b py-3 px-2">
                                                    <p>New Customer?</p>
                                                    <p className='font-bold text-blue-700 cursor-pointer'>Sign Up</p>
                                                </div>
                                                <ul className="p-2">
                                                    <li className='flex gap-2 py-1 cursor-pointer'>My Profile</li>
                                                    <li className='flex gap-2 py-1 cursor-pointer'>Orders</li>
                                                    <li className='flex gap-2 py-1 cursor-pointer'>Wishlist</li>
                                                    <li className='flex gap-2 py-1 cursor-pointer'>Settings</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                                <li className='relative flex gap-2'>
                                    <span className='mt-[-12px] ml-[20%] w-[20px] h-[20px] text-[14px] rounded-full  bg-black text-white absolute'> {state.cart.length}</span>
                                    <BsCart3 className='size-[20px]' /><Link href="/cart">Cart</Link></li>

                                <Link href=""><li className='flex gap-3 lg:flex sm:hidden'><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM19 12.874C18.6804 12.9562 18.3453 13 18 13C16.8053 13 15.7329 12.4762 15 11.6458C14.2671 12.4762 13.1947 13 12 13C10.8053 13 9.73294 12.4762 9 11.6458C8.26706 12.4762 7.19469 13 6 13C5.6547 13 5.31962 12.9562 5 12.874V20H19V12.874ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z" /></svg>
                                    Become a Seller</li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </header></div>
            <section className='py-5 '>
                <div className="container flex justify-between items-center mx-auto">
                    <div className='flex items-center gap-1.5 text-sm font-bold'>
                        {data.slice(0, 10).map((a) => (
                            <Link href={`/category/${a.slug}`}><button key={a.slug} className={`border cursor-pointer border-[#9CCD9D] bg-[#e0f0e0] px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-[#3B9C3C] hover:border-[#3B9C3C] hover:text-white hoverEffect`}>{a.name}</button></Link>

                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header
