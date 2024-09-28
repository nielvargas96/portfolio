import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './MaskText.scss';

function MaskText({
  textPhrase,
  duration = 0.45,
  delay = 0.15,
  isInView,
  once = true,
}) {
  // const text = textPhrase.split(/[\\n\r]/g);
  // const text = textPhrase?.split('\\n');

  const ref = useRef(null);
  const isInView_self = useInView(ref, { once: once, amount: 0.75 });

  const finalView = isInView ? isInView : isInView_self;

  const variants = {
    initial: { y: '100%' },
    animate: (i) => ({
      y: '0',
      transition: {
        duration: duration,
        ease: [0.33, 1, 0.68, 1],
        delay: delay + 0.045 * i,
      },
    }),
  };

  return (
    <div className='container-mask'>
      <div ref={ref} className='body-mask'>
        {text?.map((text, index) => {
          return (
            <div key={index} className='line-mask'>
              <motion.p
                custom={index}
                variants={variants}
                initial='initial'
                animate={isInView_self ? 'animate' : ''}>
                {text}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MaskText;
