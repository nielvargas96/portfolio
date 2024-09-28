import { Link } from 'react-router-dom';
import './header.scss';
import { motion, useCycle, useInView, inView, animate, AnimatePresence } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import LogoContext from '../../context/LogoContext';
import { useLenis } from 'lenis/react';
import { FiLinkedin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";


function Header(props, ref) {
  const { logo } = useContext(LogoContext);
  const lenis = useLenis();

  const scrollToTop = () => {
    if (!lenis) return;
    lenis?.scrollTo(0, { duration: 1 })
  }

  const mainheaderVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const [toggle, setToggle] = useCycle(false, true);
  useEffect(() => {
    if (toggle) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [toggle]);


  const mainNavVariants = {
    initial: {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      }
    },
    exit: {
      clipPath: ' polygon(0 0, 100% 0%, 100% 0, 0 0)',
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: .5,
      }
    }
  }


  const socialVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: .75
      }
    }
  };


  return (
    <motion.header
      className='main-header'
      variants={mainheaderVariants}
      ref={ref}
      {...props}>
      <div className='container'>
        <Link className='header-logo' to='' onClick={scrollToTop}>
          {
            logo ? (
              <img src='./niel-logo.svg' alt='Niel Logo' />
            ) : (
              toggle ? (
                <img src='./niel-logo.svg' alt='Niel Logo' />
              ) : (
                <img src='./niel-logo-black.svg' alt='Niel Logo' />
              )
            )
          }
        </Link>
        <AnimatePresence>
          {toggle && (
            <motion.div
              variants={mainNavVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className='main-nav' data-lenis-prevent>
              <div className='overlay' />

              <motion.div
                variants={socialVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className='lets-talk-nav'>

                <h3>Let's have a talk!</h3>

                <div className='socials'>
                  <a href="mailto: nielvargas96@gmail.com" title='Email' target='_blank'><MdOutlineMailOutline size={'2rem'} /> <span>Email</span></a>
                  <a href="tel:+639167171278”" target='_blank' title='Phone' ><FiPhone size={'2rem'} /> <span>Phone</span></a>
                  <a href="https://www.linkedin.com/in/niel-tyron-vargas-455b5a27b/" target='_blank' title='LinkedIn'><FiLinkedin size={'2rem'} /> <span>LinkedIn</span></a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className='nav-toggle-container '>
          <NavToggle toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </motion.header>
  )
}
export default Header;

function NavToggle({ toggle, setToggle }) {
  const span1_variants = {
    initial: {
      rotate: 0,
      x: '0rem',
      y: '0rem',
    },
    animate: {
      rotate: 45,
      x: '0rem',
      marginBlock: '-2px'
    },
  };

  const span3_variants = {
    initial: {
      rotate: 0,
      y: '0rem',
    },
    animate: {
      rotate: -45,
      marginBlock: '-2px'
    },
  };

  return (
    <motion.button
      className='nav-toggle'
      animate={toggle ? 'animate' : 'initial'}
      onClick={() => {
        setToggle();
      }}>
      <motion.span variants={span1_variants}></motion.span>
      <motion.span variants={span3_variants}></motion.span>
    </motion.button>
  );
}
