import React, { useEffect, useState } from 'react'
import './product.css'
export const Products = () => {
    const [products,setProducts]=useState({ row1: [], row2: [] })
    useEffect(()=>{
       fetch("/data/product.json")
       .then((response)=>{return response.json()})
       .then((data)=>{return setProducts(data)})
    },[])
    console.log(products)
  return (
    <>
     <div className='product-wrapper'>
     <div className='product-row1'>
       <div className='filpkart-minutes padding-minutes'>
        <div className='minutes-backgound'></div>
        <div className='products-font'>Filpkart Minutes</div>
       </div>
       {
        products.row1.length>0?
          products.row1.map((item)=>(
            <div className='filpkart-minutes' key={item.id}>
                <div className='product-img-wrapper'><img className='product-img' src={item.images} alt={item.name} /></div>
                <span className='products-font'>{item.name}</span>
             </div>
          )):
          <p>Unable to fetch</p>
          }
     </div>
     <div className='row2'>
      {
        products.row2.length>0?
          products.row2.map((item)=>(
            <div className='filpkart-minutes' key={item.id}>
                <div className='product-img-wrapper'><img className='product-img' src={item.images} alt={item.name} /></div>
                <span className='products-font'>{item.name}</span>
             </div>
          )):
          <p>Unable to fetch</p>
          }
     </div>
    </div>
    <div className='ad-wrapper'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/880/200/image/ebb42ab4c3eaf3a5.jpeg?q=60" className='ad-image' alt="" />
    </div>
    </>
  )
}
