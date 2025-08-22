import React from 'react'
import { UseIfMobile } from '../../hooks/UseIfMobile'
import { Silder } from './Silder'
import { DesktopScroll } from './DesktopScroll'
import { DesktopSlider } from './DesktopSlider'
export const SliderRender = () => {
    const ifMobile=UseIfMobile()
  return (
    <div>
        {
            ifMobile?
            (<Silder/>)
            :
            (
              <>
              <DesktopScroll/>
              <DesktopSlider/>
              </>
          )
        }
    </div>
  )
}
