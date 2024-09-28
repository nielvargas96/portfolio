import { useSpring } from "framer-motion";
import { useEffect, useState } from "react"

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({})

  const motionX = useSpring(mousePosition.x, { stiffness: 200, damping: 20 })
  const motionY = useSpring(mousePosition.y, { stiffness: 200, damping: 20 })

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }


  useEffect(() => {

    motionX.set(mousePosition.x);
    motionY.set(mousePosition.y);

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }

  }, [mousePosition.x, mousePosition.y])


  return {
    x: mousePosition.x,
    y: mousePosition.y,
    motionX,
    motionY
  }

}

export default useMousePosition