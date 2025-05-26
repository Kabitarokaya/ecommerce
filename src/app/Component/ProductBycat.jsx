"use client"
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
// import NoProductAvailable from './NoProductAvailable';
import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { useCart } from './CartContext';

// import CartContext from "CartContext";
function ProductBycat(props) {

  //   const [products, setProducts] = useState([])
  //   const [loading, setLoading] = useState(false);
  //  let {state,dispatch}=useContext(CartContext)


  let [data, setData] = useState([])
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${props.slug}`).then(a => a.json()).then(b => setData(b.products))
  }, [])
  return (
    <>

      <section className='py-2'>
        <div className="container mx-auto">

          <h2 className='text-xl font-bold text-center'>{props.slug}</h2>
          <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10'>

            {data.map(a => (
              <Link href={`/details/${a.id}`}>  <div className="shadow-xl z-0 text-center  hover:border rounded-md bg-white border-gray-400">
                <div key={a.slug} className='relative overflow-hidden  bg-[#d1cccc]'>

                  <div className='overflow-hidden '><img className='w-[500px] h-[300px] transition-transform hoverEffect hover:bg-white hover:scale-150 duration-300' src={a.thumbnail} />
                  </div>                  <p className='p-3 absolute top-2 right-2 rounded-full hover:bg-[#063C28] px-3 z-10'><CiHeart className='hover:text-white size-[24px] ' /></p>
                </div>
                <h4 className='py-2 text-[16px] font-bold uppercase'>{a.title}</h4>
                <div className="flex items-center justify-center">
                  <p className='flex justify-center  m-2 py-3'><IoMdStar className='text-[#FB6C08] size-[20px]' /> <IoMdStar className='text-[#FB6C08] size-[20px]' /> <IoMdStar className='text-[#FB6C08] size-[20px]' /><IoMdStar className='text-[#FB6C08] size-[20px]' /><IoStarHalfSharp className='text-[#FB6C08] size-[20px]' />
                  </p>
                  <p className='text-center text-gray-500 text-[16px]'>5 Reviews</p>

                </div>

                <p className='text-blue-700 font-bold text-[20px]'>${a.price} </p>

                <button className='rounded-full w-[200px] h-[40px] cursor-pointer bg-[#FB6C08] text-white mt-2 mb-5' onClick={() => dispatch({ type: "addtocart", payload: a })}>Add to Cart</button>
              </div></Link>
            ))}

          </div>
        </div>

      </section>
      {/* <NoProductAvailable /> */}

    </>
  )
}

export default ProductBycat
