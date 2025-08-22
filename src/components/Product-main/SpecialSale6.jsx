import React, { useEffect, useState } from 'react'
import './despro.css'
export const SpecialSale6 = () => {
    const [img,setImg]=useState([])
    useEffect(()=>{
        fetch('./data/product.json')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>setImg(data.hair))
    },[])
  return (
    <div className='des-special-sale-wrapper'>
        <div className='specialSale-inner'>
        <div className='specialSale-head'>
          <h1>Hair & Skin Care for Monsoon</h1>
          <div className='specialSale-nextbutton'>
            <svg width="16" height="16" fill="none" viewBox="0 0 17 17"><path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </div>
        <div className='specialsale-items-wrap'>
           {
            img.length>0?(
              img.map((item,index)=>(
                <div key={index} className='specialsale-items'>
                    <div className='specialsale-items-inner'>
                        <div className='s-i-w'>
                            <div className='Special-sale-addition'>
                               <div className='S-sale-img'>
                                 <img src={item.image} alt={item.name}  />
                               </div>
                            <div className='Special-item-des'>
                                <h1>{item.name}</h1>
                                <p>{item.des}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
              )) 
            ):
            (
                <p>Unable to fetch!!!!!</p>
            )
           }
        </div>
        </div>
    </div>
  )
}
