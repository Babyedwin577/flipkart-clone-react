import React,{useEffect, useState} from 'react'
import './silder.css'
export const DesktopScroll = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
        fetch('/data/product.json')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            return setImages(data.scrollnav)
        })
    },[])
    console.log(images)
  return (
    <div className='des-main-wrapper'>
      <div className='des-main-inner'>
        <div className='des-scroll-wrapper'>
            {
               images.map((item,index)=>(
                <div className={`des-item-wrap ${index===0?'change':''}`}>
                  <div className='des-scroll-inner' key={index}>
                    <div className='des-scroll-img'> 
                       <img src={item.image} alt={item.id} />
                    </div>
                    <div className='des-scroll-font'>
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                </div>
               ))
            }
        </div>
      </div>
    </div>
  )
}




