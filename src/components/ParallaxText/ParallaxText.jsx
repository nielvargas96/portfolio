import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxText({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  let yValues = useTransform(scrollYProgress, [0, 1], [`-15%`, `15%`]);

  return (
    <motion.div className='single-parallax' ref={ref}>
      <motion.div
        initial={{
          height: '100%',
          width: '100%',
        }}
        style={{
          y: yValues,
        }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ParallaxText;