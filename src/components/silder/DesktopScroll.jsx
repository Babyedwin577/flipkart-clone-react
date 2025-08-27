import React,{useEffect, useState} from 'react'
import './silder.css'
export const DesktopScroll = () => {
    const [images,setImages]=useState([])
   const [fashion,setFashion]=useState([])
   const [activeIndex,setActiveIndex]=useState(null)
   const [subActiveIndex,setSubActiveIndex]=useState(0)
    useEffect(()=>{
        fetch('/data/product.json')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            return setImages(data.scrollnav)
        })
        fetch('/data/product.json')
        .then((response)=>response.json())
        .then((item)=>setFashion(item.fashionMenus))
    },[])
    const specialIndex=[2,3,4,7]
  return (
    <div className='des-main-wrapper'>
      <div className='des-main-inner'>
        <div className='des-scroll-wrapper'>
            {
               images.map((item,index)=>(
                <div 
                key={index}
                className={`des-item-wrap ${index===0?'change':''}`}
                onMouseEnter={()=>{
                  if(specialIndex.includes(index)){
                    setActiveIndex(index)
                    setSubActiveIndex(0)
                  }
                }}
                onMouseLeave={()=>{
                  setActiveIndex(null)
                  setSubActiveIndex(0)
                }}
                >
                  <div className='des-scroll-inner'>
                    <div className='des-scroll-img'> 
                       <img src={item.image} alt={item.id} />
                    </div>
                    <div className={`des-scroll-font ${specialIndex.includes(index)?"with-arrow":""}`}>
                      <h1>{item.name}</h1>
                       {/* dropdown */}
                      {specialIndex.includes(index)&&index===activeIndex&&(
                        <div className='scroll-dropdown'>
                          <div className='scroll-drop1'>
                            {
                               fashion.map((menu,menuIndex)=>(
                                  <div className={`drop1-item ${menuIndex===subActiveIndex?"slotActive":""}`}
                                  key={menuIndex}
                                  onMouseEnter={()=>{setSubActiveIndex(menuIndex)}}
                                   >
                                     <span className=''>{menu.title}</span>
                                   </div>
                               ))
                            }
                          </div>
                          <div className='scroll-drop2'>
                            {
                              fashion[subActiveIndex]?.subOptions.map((sub)=>(
                                <div key={sub.id} className='drop1-item'>
                                   <span className='drop1-main'>{sub.title}</span>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                    )}   
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
