
import React from 'react'
import ProductBycat from './Component/ProductBycat'
import Banner from './Component/Banner'

function page() {
  return (
    <>
      <Banner />
      <ProductBycat slug="beauty" />
      <ProductBycat slug="fragrances" />
      <ProductBycat slug="furniture" />
      <ProductBycat slug="mens-shoes" />
      <ProductBycat slug="groceries" />
      <ProductBycat slug="home-decoration" />
      <ProductBycat slug="kitchen-accessories" />
      <ProductBycat slug="laptops" />
      <ProductBycat slug="mens-shirts" />
      <ProductBycat slug="mens-watches" />


    </>
  )
}

export default page
