import React from 'react'
import { UseIfMobile } from '../hooks/UseIfMobile'
import { Products } from './Main/Products' 
import { Sales } from './Main/Sales'
import { FreedomSale } from './Main/FreedomSale'
import { Featured } from './Main/Featured'
import { ProductDisplay } from './Product-main/ProductDisplay'
import { SponsoredRowTwo } from './Main/SponsoredRowTwo'
import { Sponsored } from './Main/Sponsored'
import { DesktopSpecialSales } from './Product-main/DesktopSpecialSales'
import { SpecialSale2 } from './Product-main/SpecialSale2'
import { SpecialSale3 } from './Product-main/SpecialSale3'
import { SpecialSale4 } from './Product-main/SpecialSale4'
import { SpecialSale5 } from './Product-main/SpecialSale5'
import { SpecialSale6 } from './Product-main/SpecialSale6'
// import { Trending } from './Main/Trending'
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
            {/* <Trending/> */}
            </>
        ):(
            <>
            <ProductDisplay/>
            <DesktopSpecialSales/>
            <SpecialSale2/>
            <SpecialSale3/>
            <SpecialSale4/>
            <SpecialSale5/>
            <SpecialSale6/>
            </>
        )
      }
      </>
  )
}
