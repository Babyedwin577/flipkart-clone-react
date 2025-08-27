import React, { useEffect, useState } from 'react'
import '../Styles/TopDeals.css'
export const TopDeals5 = () => {
    const [img,setImg]=useState([])
    useEffect(()=>{
        fetch('/data/product.json')
        .then((data)=>data.json())
        .then((response)=>setImg(response.topdeals))
    },[])
  return (
    <div className='top-deals-wrap'>
       <div className='top-deals-inner'>
        <div className='topdeals-heading'>
            <h1>dsdad</h1>
            <div className='recent-nextbtn'>
                <svg width="16" height="16" fill="none" viewBox="0 0 17 17"><path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
        </div>
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