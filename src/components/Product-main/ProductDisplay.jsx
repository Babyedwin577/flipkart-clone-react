import React, { useEffect, useState } from 'react'
import './despro.css'
export const ProductDisplay = () => {
    const [details,setDetails]=useState({
        beauty:[],
        electronics:[],
        sports:[]
    })
    useEffect(()=>{
        fetch('/data/product.json')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
           setDetails({
            beauty:data.beauty,
            electronics:data.electronics,
            sports:data.sports
           })
        })
    },[])
    console.log(details)
  return (
    <>
    <div className='des-pro-wrapper'>
        <div className='des-pro-inner'>
            <div className='des-pro-head'>
                <h1>Best of Electronics</h1>
            </div>
            <div className='des-pro-scroll-wrapper'>
                <div className='des-pro-scroll'>
                    {
                        details.electronics.map((item,index)=>(
                           <div className='des-pro-item-wrap' key={index}>
                            <div className='des-pro-item-inner'>
                                <div className='des'>
                                <img className='' src={item.image} alt={item.name} />
                                <div className='des-pro-details'>
                                    <p className='des-pro-name'>{item.name}</p>
                                    <p className='des-pro-offer'>{item.descreption}</p>
                                </div>
                                </div>
                            </div>
                           </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    <div className='des-pro-wrapper'>
        <div className='des-pro-inner'>
            <div className='des-pro-head'>
                <h1>Beauty, Food, Toys & more</h1>
            </div>
            <div className='des-pro-scroll-wrapper'>
                <div className='des-pro-scroll'>
                    {
                        details.beauty.map((item,index)=>(
                           <div className='des-pro-item-wrap' key={index}>
                            <div className='des-pro-item-inner'>
                                <div className='des'>
                                <img className='' src={item.image} alt={item.name} />
                                <div className='des-pro-details'>
                                    <p className='des-pro-name'>{item.name}</p>
                                    <p className='des-pro-offer'>{item.descreption}</p>
                                </div>
                                </div>
                            </div>
                           </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    <div className='des-pro-wrapper'>
        <div className='des-pro-inner'>
            <div className='des-pro-head'>
                <h1>Sports, Healthcare & more</h1>
            </div>
            <div className='des-pro-scroll-wrapper'>
                <div className='des-pro-scroll'>
                    {
                        details.sports.map((item,index)=>(
                           <div className='des-pro-item-wrap' key={index}>
                            <div className='des-pro-item-inner'>
                                <div className='des'>
                                <img className='' src={item.image} alt={item.name} />
                                <div className='des-pro-details'>
                                    <p className='des-pro-name'>{item.name}</p>
                                    <p className='des-pro-offer'>{item.descreption}</p>
                                </div>
                                </div>
                            </div>
                           </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

