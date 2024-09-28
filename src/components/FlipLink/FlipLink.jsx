import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FlipLink.scss';

const FlipLink = ({ children, to }) => {
  const DURATION = 0.35;
  const STAGGER = 0.015;
  const EASE = [0.76, 0, 0.24, 1];

  const containerVariants = {
    initial: {},
    hovered: {},
  };

  const firstLineVariants = {
    initial: { y: 0 },
    hovered: { y: '-100%' },
  };

  const secondLineVariants = {
    initial: { y: '100%' },
    hovered: { y: 0 },
  };

  const cover_variants = {
    initial: { y: '101%' },
    hovered: {
      y: 0,
      transition: {
        ease: EASE,
        duration: 0.45,
        // delay: 0.25,
      },
    },
  };

  return (
    <Link to={to}>
      <motion.div
        className='flip-container'
        variants={containerVariants}
        initial='initial'
        whileHover='hovered'>
        <div className='flip-link'>
          <div className='flip-first'>
            {children.split('').map((l, i) => (
              <motion.span
                key={i}
                variants={firstLineVariants}
                transition={{
                  duration: DURATION,
                  ease: EASE,
                  delay: STAGGER * i,
                }}>
                {l}
              </motion.span>
            ))}
          </div>

          <div className='flip-second'>
            {children.split('').map((l, i) => (
              <motion.span
                key={i}
                variants={secondLineVariants}
                transition={{
                  duration: DURATION,
                  ease: EASE,
                  delay: STAGGER * i,
                }}>
                {l}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          variants={cover_variants}
          className='cover-absolute'></motion.div>
      </motion.div>
    </Link>
  );
};

export default FlipLink;
