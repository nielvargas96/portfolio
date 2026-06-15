import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdClose, MdOutlineArrowOutward } from 'react-icons/md';
import './ProjectModal.scss';

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } },
};

const modalVariants = {
  initial: { opacity: 0, y: 80, scale: 0.94 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

const bodyVariants = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className='project-modal-backdrop'
      variants={backdropVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      onClick={onClose}>
      <motion.div
        className='project-modal'
        role='dialog'
        aria-modal='true'
        aria-label={project.title}
        data-lenis-prevent
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose} aria-label='Close modal'>
          <MdClose />
        </button>

        <div className='modal-media'>
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ scale: 1.15 }}
            animate={{
              scale: 1,
              transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] },
            }}
          />
        </div>

        <motion.div
          className='modal-body'
          variants={bodyVariants}
          initial='initial'
          animate='animate'>
          <motion.span className='modal-category' variants={itemVariants}>
            {project.category}
          </motion.span>

          <motion.h3 variants={itemVariants}>{project.title}</motion.h3>

          <motion.p variants={itemVariants}>{project.description}</motion.p>

          {project.tech?.length > 0 && (
            <motion.div className='modal-section' variants={itemVariants}>
              <h4 className='modal-section-title'>Tech stack</h4>
              <ul className='modal-tech'>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.contributions?.length > 0 && (
            <motion.div className='modal-section' variants={itemVariants}>
              <h4 className='modal-section-title'>What I did</h4>
              <ul className='modal-list'>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.features?.length > 0 && (
            <motion.div className='modal-section' variants={itemVariants}>
              <h4 className='modal-section-title'>Key features</h4>
              <ul className='modal-list'>
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            {project.link ? (
              <a
                className='modal-cta'
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'>
                Visit Live Site
                <MdOutlineArrowOutward />
              </a>
            ) : (
              <span className='modal-note'>
                Private / internal project — no public link available
              </span>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
