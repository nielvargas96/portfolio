import React, { Children } from 'react'
import { ReactLenis, useLenis } from 'lenis/react';


function Template({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll)
  })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default Template