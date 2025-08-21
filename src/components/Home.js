import React from 'react'
import { UseIfMobile } from '../hooks/UseIfMobile'
import { Products } from './products/Products'  
import { Sales } from './Sales/Sales'
import { FreedomSale } from './Freedoms-sale/FreedomSale'
import { ProductDisplay } from './Product-main/ProductDisplay'
import { Main } from './Main/Main'
export const Home = () => {
    const responsive=UseIfMobile()
  return (
      <>
      {
        responsive?
        (
            <>
            <Products/>
            <Sales/>
            <FreedomSale/>
            <Main/>
            </>
        ):(
            <>
            <ProductDisplay/>
            </>
        )
      }
      </>
  )
}
