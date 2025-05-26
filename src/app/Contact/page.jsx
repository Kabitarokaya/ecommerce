import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaViber } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Page() {
  return (
    <>
      <section className='bg-[#FAFAFA] py-5'>
        <div className="container mx-auto">
          <div className=" shadow-xl h-[700px] mt-4 py-4 w-[700px] px-4 mx-auto">
            <h2 className='text-[20px] font-bold py-4'>Get In Touch With Us</h2>

            <form action="">
              <div>
                <h2 className='text-[14px] '> Name*</h2>
                <br />
                <input type="text" name='name' className=' border  outline-orange-600 hover:outline-orange-600   w-[600px] h-[30px]' />
              </div>

              <div className='py-4'>
                <h2 className='text-[14px] '> Email Address*</h2>
                <br />
                <input type="email" name='email' className=' border  outline-orange-600 hover:outline-orange-600  w-[600px] h-[30px]' />
              </div>
              <div className='py-4'>
                <h2 className='text-[14px] '> Phone*</h2>
                <br />
                <input type="number" name='number' className=' border outline-orange-600  hover:outline-orange-600  w-[600px] h-[30px]' />
              </div>
              <div className='py-4'>
                <h2 className='text-[14px] '> Subject *</h2>
                <br />
                <input type="text" name='Subject ' className=' border  outline-orange-600 hover:outline-orange-600  w-[600px] h-[30px]' />
              </div>
              <div className='py-4'>
                <h2 className='text-[14px] '> Message</h2>
                <br />
                <input type="text" name='Message ' className=' border  outline-orange-600 hover:outline-orange-600  w-[600px] h-[30px]' />
              </div>


              <button className='w-[600px] h-[40px] bg-[#F6821F] text-white text-center mt-4 cursor-pointer'>Send Message</button>
            </form>

          </div>


          <div className="shadow-xl h-[400px] w-[700px] mt-12 text-center mb-8 px-4 mx-auto">
            <div className='py-4'>
              <h1 className='text-[28px] py-4 font-bold'>SY Bazzar</h1>
              <p>SYbazzar Pvt. Ltd.</p>
              <p>Pepsicola Chowk - 32, Kathmandu, Nepal</p>

              <p>01-5970455</p>

              <p>support@sybazzar.com</p>

            </div>
            <div className="py-4 text-center">
              <h2 className='text-[20px] font-bold py-4'>Social Links</h2>
              <ul className="flex gap-3 justify-center">
                <Link href=""> <li><FaLinkedin className='size-[20px] text-[#007BB5] ' /></li></Link>
                <Link href=""> <li><FaFacebook className='size-[20px]  text-[#1877F2]' /></li></Link>
                <Link href=""> <li><IoLogoYoutube className='size-[20px] text-[red] ' /></li></Link>
                <Link href=""> <li><FaTiktok className='size-[20px] text-[#292929]' /></li></Link>
                <Link href=""> <li><FaSquareInstagram className='size-[20px] text-[#B900AB]' /></li></Link>
                <Link href=""> <li><FaWhatsapp className='size-[20px] text-[#7F4DA0]' /></li></Link>
                <Link href=""> <li><FaViber className='size-[20px] text-[green]' /></li></Link>


              </ul>
            </div>
          </div>
        </div>
      </section>




    </>
  )
}

export default Page
