import { forwardRef, useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { MdOutlineArrowOutward } from 'react-icons/md';
import './ScrollCarousel.scss';

const ScrollCarousel = forwardRef(function ScrollCarousel(
  { projects = [], onSelect },
  forwardedRef
) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Attach the section node to both the internal scroll ref and the ref
  // forwarded from the parent (used to flip the header logo to white here).
  const setSectionRef = (node) => {
    sectionRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  // Distance (px) the track must travel so its end aligns with the viewport.
  // Measured from the real DOM so it stays correct on every screen size.
  const [maxScroll, setMaxScroll] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const distance = track.scrollWidth - window.innerWidth;
      setMaxScroll(distance > 0 ? distance : 0);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Translate the track from 0 to -maxScroll as the section scrolls past.
  const x = useTransform(smoothProgress, [0, 1], [0, -maxScroll]);

  return (
    <section
      className='scroll-carousel'
      ref={setSectionRef}
      // Vertical scroll distance is matched to the horizontal travel so the
      // speed feels consistent regardless of viewport / number of cards.
      style={{ height: `calc(100vh + ${maxScroll}px)` }}>
      <div className='carousel-sticky'>
        <div className='carousel-heading'>
          <motion.h2
            initial={{ opacity: 0, y: 30, x: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}>
            Selected Works
            <span className='highlight'>.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}>
            A scroll through projects I&apos;ve shipped — tap a card for details
          </motion.p>
          <motion.div className='carousel-progress'>
            <motion.div
              className='carousel-progress-bar'
              style={{ scaleX: smoothProgress }}
            />
          </motion.div>
        </div>

        <motion.div className='carousel-track' ref={trackRef} style={{ x }}>
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type='button'
              className='carousel-card'
              onClick={() => onSelect?.(project)}
              aria-label={`View ${project.title}`}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
              <span className='card-index'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='card-media'>
                <img src={project.image} alt={project.title} loading='lazy' />
              </div>
              <div className='card-meta'>
                <span className='card-tag'>{project.tag || project.category}</span>
                <h3>{project.title}</h3>
                <span className='card-view'>
                  View project
                  <MdOutlineArrowOutward />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default ScrollCarousel;
