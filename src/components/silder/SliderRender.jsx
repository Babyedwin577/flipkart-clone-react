import React from 'react'
import { UseIfMobile } from '../../hooks/UseIfMobile'
import { Silder } from './Silder'
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
              <DesktopSlider/>
              </>
          )
        }
    </div>
  )
}
