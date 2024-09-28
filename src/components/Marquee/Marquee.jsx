import { motion, transform } from "framer-motion";

import "./Marquee.scss";

export default function Marquee(props) {
  const marqueeVariants = {
    animate: {
      x: [0, "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="marquee">
      <div className="horizontal-marquee">
        <motion.div
          className="marquee-image"
          variants={marqueeVariants}
          animate="animate"
        >
          {props.children}
        </motion.div>

        <motion.div
          className="marquee-image"
          variants={marqueeVariants}
          animate="animate"
        >
          {props.children}
        </motion.div>
      </div>
    </div>
  );
}
