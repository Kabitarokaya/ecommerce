"use client"
import Link from 'next/link'

function HomeCategories() {

  return (
    <>
      <section className="py-4 bg-white ">
        <div className="container p-5  border-gray-400 lg:p-5 rounded-md md:my-20 mx-auto">
          <h2 className='text-2xl pb-3 mb-4 px-3 border-b font-bold'>Popular Categories</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1   px-4  py-3">
            <div className='flex gap-4 bg-[#cccccc6e]  mb-5 hover:transition-transform hover:scale-110 overflow-hidden rounded-[10px] py-4 mx-4 px-4'>
              < Link href=""><div className=' overflow-hidden'>
                <img className='w-[80px] h-[80px] object-cover overflow-hidden transition-transform  hover:bg-white hover:scale-110 duration-300 border bg-white border-red-600' src="https://shopcart.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foe6m9gg8%2Fproduction%2Fe6e530baa444f7804472a5d905288ebe2e7949bd-86x88.png&w=1080&q=75" alt="" />

              </div></Link>
              <div>
                <h4 className='text-xl font-bold '>Kitchen Accessories</h4>
                <p className='text-[18px] text-[#8a8989dd]'>(1) items Available</p>
              </div>
            </div>
            <div className='flex gap-4 bg-[#cccccc6e] mb-5  hover:transition-transform hover:scale-110 overflow-hidden  rounded-[10px]  py-4 mx-4 px-4'>
              < Link href=""><div className=' overflow-hidden'>
                <img className='w-[80px] h-[80px] object-cover overflow-hidden transition-transform  hover:bg-white hover:scale-110 duration-300 border bg-white border-red-600' src="https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp" alt="" />

              </div></Link>
              <div>
                <h4 className='text-xl font-bold '>Laptos</h4>
                <p className='text-[18px] text-[#8a8989dd]'>(7) items Available</p>
              </div>
            </div>
            <div className='flex gap-4  sm:my-3 bg-[#cccccc6e] hover:transition-transform hover:scale-110 overflow-hidden  rounded-[10px] mb-5 py-4 mx-4 px-4'>
              < Link href=""><div className=' overflow-hidden'>
                <img className='w-[80px] h-[80px] object-cover overflow-hidden transition-transform  hover:bg-white hover:scale-110 duration-300 border bg-white border-red-600' src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp" alt="" />

              </div></Link>
              <div>
                <h4 className='text-xl font-bold '>Fragrances</h4>
                <p className='text-[18px] text-[#8a8989dd]'>(5) items Available</p>
              </div>
            </div>
            <div className='flex gap-4 sm:my-3  bg-[#cccccc6e]  hover:transition-transform hover:scale-110 overflow-hidden  rounded-[10px]  py-4 mx-4 px-4'>
              < Link href=""><div className=' overflow-hidden'>
                <img className='w-[80px] h-[80px] object-cover overflow-hidden transition-transform  hover:bg-white hover:scale-110 duration-300 border bg-white border-red-600' src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp" alt="" />

              </div></Link>
              <div>
                <h4 className='text-xl font-bold '>Furniture</h4>
                <p className='text-[18px] text-[#8a8989dd]'>(4) items Available</p>
              </div>
            </div>
            <div className='flex gap-4 sm:my-3  bg-[#cccccc6e]  hover:transition-transform hover:scale-110 overflow-hidden   rounded-[10px]  py-4 mx-4 px-4'>
              < Link href=""><div className=' overflow-hidden'>
                <img className='w-[80px] h-[80px] object-cover overflow-hidden transition-transform  hover:bg-white hover:scale-110 duration-300 border bg-white border-red-600' src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />

              </div></Link>
              <div>
                <h4 className='text-xl font-bold '>Beauty</h4>
                <p className='text-[18px] text-[#8a8989dd]'>(3) items Available</p>
              </div>
            </div>
            <div className='flex gap-4 sm:my-3  bg-[#cccccc6e]  hover:transition-transform hover:scale-110 overflow-hidden  rounded-[10px]  py-4 mx-4 px-4'>
              < Link href=""><div className=' overflow-hidden'>
                <img className='w-[80px] h-[80px] object-cover overflow-hidden transition-transform  hover:bg-white hover:scale-110 duration-300 border bg-white border-red-600' src="https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp" alt="" />

              </div></Link>
              <div>
                <h4 className='text-xl font-bold '>Groceries</h4>
                <p className='text-[18px] text-[#8a8989dd]'>(0) items Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="py-2 px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Top Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer relative">
              <div className="aspect-square rounded-full overflow-hidden mx-auto">
                <img src="https://cdn.sybazzar.com/public/200-200/ImportProducts/4300B9224514023-b4613dcf7bdeb5e28bc814a614269264.jpg" alt="product1" className="h-full w-full object-cover object-top rounded-lg" />
              </div>
              <div className="mt-3 text-center">

                <h2 className='text-slate-900 text-sm font-semibold py-2'>Kitchen Accessories</h2>
                <h4 className="text-slate-900 text-sm font-semibold">Up To 20% OFF</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer relative">
              <div className="aspect-square rounded-full overflow-hidden mx-auto">
                <img src="https://cdn.sybazzar.com/public/200-200/files/D68AED11CF7320A-Screenshot%202024-03-25%20161947.png" alt="product1" className="h-full w-full object-cover object-top rounded-lg" />
              </div>
              <div className="mt-3 text-center">
                <h2 className='text-slate-900 text-sm font-semibold py-2'>Beauty</h2>

                <h4 className="text-slate-900 text-sm font-semibold">Up To 10% OFF</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer relative">
              <div className="aspect-square rounded-full overflow-hidden mx-auto">
                <img src="https://cdn.sybazzar.com/public/files/5CCC9AB383193F9-71sCJ2CRb7L._SS1000_.jpg" alt="product1" className="h-full w-full object-cover object-top rounded-lg" />
              </div>
              <div className="mt-3 text-center">
                <h2 className='text-slate-900 text-sm font-semibold py-2'>Furnitures</h2>
                <h4 className="text-slate-900 text-sm font-semibold">Up To 30% OFF</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer relative">
              <div className="aspect-square rounded-full overflow-hidden mx-auto">
                <img src="https://img.drz.lazcdn.com/g/kf/Sa4e0e004f8b94980a230bf2b89cf98afh.jpg_400x400q75.avif" alt="product1" className="h-full w-full object-cover object-top rounded-lg" />
              </div>
              <div className="mt-3 text-center">
                <h2 className='text-slate-900 text-sm font-semibold py-2'>Mens Shirt</h2>
                <h4 className="text-slate-900 text-sm font-semibold">Up To 40% OFF</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer relative">
              <div className="aspect-square rounded-full overflow-hidden mx-auto">
                <img src="https://img.drz.lazcdn.com/static/np/p/cfafa0f5f20c1b25cb781a1a302dcc84.jpg_400x400q75.avif" alt="product1" className="h-full w-full object-cover object-top rounded-lg" />
              </div>
              <div className="mt-3 text-center">
                <h2 className='text-slate-900 text-sm font-semibold py-2'>Mens Watches</h2>
                <h4 className="text-slate-900 text-sm font-semibold">Up To 40% OFF</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer relative">
              <div className="aspect-square rounded-full overflow-hidden mx-auto">
                <img src="https://img.drz.lazcdn.com/static/np/p/d0f55e7eadf04dc5f8db4de8505b359b.png_400x400q75.avif" alt="product1" className="h-full w-full object-cover object-top rounded-lg" />
              </div>
              <div className="mt-3 text-center">
                <h2 className='text-slate-900 text-sm font-semibold py-2'>Fragrance</h2>
                <h4 className="text-slate-900 text-sm font-semibold">Up To 40% OFF</h4>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='border-t py-3'>
        <div className="container mx-auto">
          <h2 className='text-2xl py-3 font-bold'>Latest Blog</h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2">
            <Link href=""><div className='w-[300px] h-[360px] hover:border border-orange-600 py-3'>
              <img className='w-[300px] pb-3' src="https://shopcart.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foe6m9gg8%2Fproduction%2F46337e7fdcb85e58ec7f05bda7f6cba6fd9bb806-820x580.jpg&w=1080&q=75" alt="" />
              <div className="flex gap-10  px-3">
                <p className='border-b border-gray-400 text-gray-400 pb-1'>Lifestyle</p>
                <p className='border-b border-gray-400 text-gray-400 pb-1'>February 19, 2024</p>
              </div>
              <h3 className='text-xl font-bold'>Office rental agency or direct? Which is best when renting an office in London?</h3>
            </div></Link>
            <Link href=""><div className='w-[300px] h-[360px] hover:border border-orange-600 py-3'>
              <img className='w-[300px] pb-3' src="https://shopcart.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foe6m9gg8%2Fproduction%2F467c6b11b2b22d1d3823289b3e3c498097c0fe66-820x580.jpg&w=1080&q=75" alt="" />
              <div className="flex gap-10  px-3">
                <p className='border-b border-gray-400 text-gray-400 pb-1'>Lifestyle</p>
                <p className='border-b border-gray-400 text-gray-400 pb-1'>February 19, 2024</p>
              </div>
              <h3 className='text-xl font-bold'>Lotus Electronics – New Store Launch in Bhilai, Chhattisgarh</h3>
            </div></Link>
            <Link href=""><div className='w-[300px] h-[360px] hover:border border-orange-600 py-3'>
              <img className='w-[300px] pb-3' src="https://shopcart.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foe6m9gg8%2Fproduction%2F155da172677166e565ec4aad95efb3855769d293-820x580.jpg&w=1080&q=75" alt="" />
              <div className="flex gap-10  px-3">
                <p className='border-b border-gray-400 text-gray-400 pb-1'>Lifestyle</p>
                <p className='border-b border-gray-400 text-gray-400 pb-1'>February 19, 2024</p>
              </div>
              <h3 className='text-xl font-bold'>
                We Invite You to These Wonderful Wine Tasting Events</h3>
            </div></Link>
            <Link href=""><div className='w-[300px] h-[360px] hover:border border-orange-600 py-3'>
              <img className='w-[300px] pb-3' src="https://shopcart.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foe6m9gg8%2Fproduction%2F07d0227deaebc8aca5dca95f2eb917ba73e329b5-820x580.jpg&w=1080&q=75" alt="" />
              <div className="flex gap-10  px-3">
                <p className='border-b border-gray-400 text-gray-400 pb-1'>Lifestyle</p>
                <p className='border-b border-gray-400 text-gray-400 pb-1'>February 19, 2024</p>
              </div>
              <h3 className='text-xl font-bold'>10 French Wine Regions to Visit for Amazing Views and Delicious Vinos</h3>
            </div></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeCategories
