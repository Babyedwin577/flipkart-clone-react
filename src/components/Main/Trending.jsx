// import React, { useEffect, useState } from 'react'
// import '../Styles/Trending.css'
// export const Trending = () => {
//   const [images,setImages]=useState([])
//   useEffect(()=>{
//      fetch('/data/product.json')
//      .then((response)=>response.json())
//      .then((img)=>setImages(img.trending))
//   },[])
//   return (
//     <div className='trending-main-wrapper'>
//          <div className='Trending'>
//           <div className='trending-head-wrap'>
//             <h1>Trending in Home Furnishing</h1>
//             <div className='next-button'>
//                 <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M1 8H14" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 3.5L14.5 8L10 12.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
//             </div>
//           </div>
//           <div className='Trending-items'>
//             <div className='trending-items-inner'>
//               {
//                 images.length>0?(
//                   images.map((item,index)=>(
//                     <div className='t-item-wrap' key={index}>
//                           <img src={item.image} alt="" /> 
//                     </div>
//                   ))
//                 ):(
//                   <p>Unabel to Fetch!!!!!!!</p>
//                 )
//               }
//             </div>
//           </div>
//          </div>
//     </div>
//   )
// }


