import React, { useEffect, useState } from 'react'
import '../Styles/TopDeals.css'
export const TopDeals4 = () => {
    const [img,setImg]=useState([])
    useEffect(()=>{
        fetch('/data/product.json')
        .then((data)=>data.json())
        .then((response)=>setImg(response.topdeals))
    },[])
  return (
    <div className='top-deals-wrap'>
       <div className='top-deals-inner'>
        <h1>Top Deals On TVs & Appliances</h1>
        <div className='top-deals-scrollwrapper'>
            {
                img.length>0?(
                    img.map((item,index)=>(
                        <div className='topdeals-item-wrapper' key={index}>
                          <img
                           src={item.image}
                           alt={item.name} 
                          />
                          <div className='topdeals-deswrap'>
                            <h1>{item.name}</h1>
                            <p>{item.des}</p>
                          </div>
                        </div>
                    ))
                ):(
                    <p>Unable to fetch!!!!</p>
                )
            }  
            
        </div>
       </div>
    </div>
  )
}

