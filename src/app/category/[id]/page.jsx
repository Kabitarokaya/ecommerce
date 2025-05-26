"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
// import NoProductAvailable from './NoProductAvailable';
import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { useCart } from '../../Component/CartContext';
function page() {
      const { dispatch } = useCart();
    
    let { id } = useParams()
    let [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${id}`).then(a => a.json()).then(b => setData(b.products))
    }, [id])
    return (
        <>
            <section className='py-2 '>
                <div className="container mx-auto text-center">
                    <h2 className='text-xl font-bold uppercase'>Category Of  {id} </h2>
                    <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10'>
                        {data.map(a => (
                            <Link href={`/details/${a.id}`}>  <div className="shadow-xl -z-10 text-center  hover:border rounded-md bg-white border-gray-400">
                                <div key={a.slug} className='relative overflow-hidden  bg-[#d1cccc]'>
                                    <img className='w-[500px] h-[300px] overflow-hidden transition-transform hoverEffect hover:bg-white hover:scale-150 duration-300' src={a.thumbnail} />
                                    <p className='p-3 absolute top-2 right-2 rounded-full hover:bg-[#063C28] px-3 z-10'><CiHeart className='hover:text-white size-[24px]' /></p>
                                </div>
                                <h4 className='py-2 text-[16px] font-bold uppercase'>{a.title}</h4>
                                <div className="flex items-center justify-center">
                                    <p className='flex justify-center  m-2 py-3'><IoMdStar className='text-[#FB6C08] size-[20px]' /> <IoMdStar className='text-[#FB6C08] size-[20px]' /> <IoMdStar className='text-[#FB6C08] size-[20px]' /><IoMdStar className='text-[#FB6C08] size-[20px]' /><IoStarHalfSharp className='text-[#FB6C08] size-[20px]' />
                                    </p>
                                    <p className='text-center text-gray-600 text-[16px]'>5 Reviews</p>

                                </div>
                                <p className='text-blue-700 font-bold text-[20px]'>${a.price} </p>
                                <button className='rounded-full w-[200px] h-[40px] bg-[#FB6C08] text-white mt-2 mb-5'  onClick={() => dispatch({ type: "addtocart", payload: a })}>Add to Cart</button>
                            </div></Link>
                        ))}

                    </div>
                </div>

            </section>
        </>
    )
}

export default page
