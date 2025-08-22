import React from 'react'
import { UseIfMobile } from '../hooks/UseIfMobile'
import { Products } from './Main/Products' 
import { Sales } from './Main/Sales'
import { FreedomSale } from './Main/FreedomSale'
import { Featured } from './Main/Featured'
import { ProductDisplay } from './Product-main/ProductDisplay'
import { SponsoredRowTwo } from './Main/SponsoredRowTwo'
import { Sponsored } from './Main/Sponsored'
import { Trending } from './Main/Trending'
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
            <Featured/>
            <Sponsored/>
            <SponsoredRowTwo/>
            <Trending/>
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
