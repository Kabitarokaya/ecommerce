import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className='bg-white border-t border-gray-400 py-4'>
                <div className="container grid mx-auto lg:grid-cols-4 sm:grid-cols-2">
                    <div className=' m-2 hover:bg-gray-100  hover:rounded-[8px] p-2'>
                        <div className="flex gap-4 sm:pt-6">
                            <FaMapMarkerAlt className='size-[28px]' /><h4 className='text-[16px] font-bold'>Visit Us</h4>

                        </div>
                        <p className='text-gray-500 '>New Orlean, USA</p>
                    </div>
                    <div className=' hover:bg-gray-100  hover:rounded-[8px] p-2'>
                        <div className="flex gap-4 sm:pt-6"><IoCallSharp className='size-[28px]' /><h4 className='text-[16px] font-bold'>Call Us</h4></div>
                        <p className='text-gray-500 '>+12 958 648 597</p>
                    </div>
                    <div className='m-2 hover:bg-gray-100  hover:rounded-[8px] p-2'>
                        <div className="flex gap-4 sm:pt-6"><IoTime className='size-[28px]' /><h4 className='text-[16px] font-bold'>Working Hours</h4></div>
                        <p className='text-gray-500 '>Mon - Sat: 10:00 AM - 7:00 PM</p>
                    </div>
                    <div className=' m-2 hover:bg-gray-100  hover:rounded-[8px] p-2'>
                        <div className="flex gap-4 sm:pt-6"><IoMdMail className='size-[28px]' /><h4 className='text-[16px] font-bold'>Email Us</h4></div>
                        <p className='text-gray-500 '>Shopcart@gmail.com</p>
                    </div>
                </div>
            </footer>
            <section className='border-t border-gray-400 py-4'>
                <div className="container grid py-5 sm:grid-cols-1 lg:grid-cols-4 mx-auto">
                    <div className='logo  '>
                        <Link href="/">  <img className='w-[200px]' src="https://cdn.sybazzar.com/public/files/729FF4C08FF63B2-logo.png" alt="" /></Link>
                        <p className='pt-4'>Discover curated furniture collections at Shopcart, blending style and comfort to elevate your living spaces.</p>
                        <ul className="flex gap-3 items-center mt-3 justify-start px-4 ">
                           <Link href=""> <li className='border border-gray-500 hover:border-black rounded-full p-2'><FaFacebook  className='hover:text-black text-gray-500'/></li></Link>
                            <li className='border border-gray-500 hover:border-black  rounded-full p-2'><FaYoutube className='hover:text-black text-gray-500'/></li>
                            <li className='border border-gray-500 hover:border-black  rounded-full p-2'><FiLinkedin className='hover:text-black text-gray-500'/></li>
                            <li className='border border-gray-500 hover:border-black  rounded-full p-2'><FaGithub className='hover:text-black text-gray-500'/></li>
                            <li className='border border-gray-500 hover:border-black  rounded-full p-2'><svg className='hover:text-black text-gray-500' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="3" height="8" x="13" y="2" rx="1.5"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect width="3" height="8" x="8" y="14" rx="1.5"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect width="8" height="3" x="14" y="13" rx="1.5"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect width="8" height="3" x="2" y="8" rx="1.5"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg></li>
                        </ul>
                    </div>
                    <div className=' mx-3 '>
                        <h2 className='text-xl font-[500]'>Quick Links</h2>
                        <ul className='pt-3 px-3'>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>About us</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Contact us</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Terms & Conditions</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Privacy Policy</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>FAQs</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Help</li></Link>
                        </ul>
                    </div>

                    <div className=' mx-3 sm:mt-4'>
                        <h2 className='text-xl font-[500]'>Categories</h2>
                        <ul className='pt-3 px-3'>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Mobiles</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Appliances</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Smartphones</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Air Conditional</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Washing Machine</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>Kitchen Appliances</li></Link>
                            <Link href=""><li className='py-1 text-gray-600 hover:text-black'>gadget accessories </li></Link>

                        </ul>
                    </div>
                    <div className='mx-3 sm:mt-4'>
                        <h2 className='text-xl font-bold'>Newsletter</h2>
                          <p className='py-3'>Subscribe to our newsletter to receive updates and exclusive offers.</p>
                          <input type="email" name='email' placeholder='Enter Your Email' className='border w-[300px] sm:w-full px-3 border-gray-400 h-[40px] mb-3' />
                          <button className='bg-black sm:w-full cursor-pointer text-white rounded-[10px] w-[300px] h-[40px] mt-3'><Link href="">Subscribe</Link></button>
                    </div>
                </div>
            </section>
            <section className='border-t pt-4 border-gray-400'>
                <div className="container mx-auto text-center py-2">
                    <p>© 2025 <span className='text-xl font-bold'>SYBAZZAR</span>. All rights reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Footer
