import React, { forwardRef, useRef, useContext, useEffect } from 'react'
import './Main.scss'
import { LuArrowDownToDot } from "react-icons/lu"; ``

import { useLenis } from 'lenis/react';
import ParallaxText from '../../components/ParallaxText/ParallaxText';
import MaskText from '../../components/MaskText/MaskText';
import { MdOutlineArrowOutward } from "react-icons/md";
import StickyCursorWrapper from '../../components/StickyCursor/StickyCursorWrapper';
import { animate, delay, motion, useInView } from 'framer-motion';
import Marquee from '../../components/Marquee/Marquee';
import { FiLinkedin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import LogoContext from '../../context/LogoContext';


function Main() {
  const lenis = useLenis();
  const about = useRef(null);
  const contact = useRef(null);
  const landingRef = useRef(null);

  const { logo, setLogo } = useContext(LogoContext);

  const inView = useInView(landingRef);

  useEffect(() => {
    if (inView === true) {
      setLogo(true)
    } else {
      setLogo(false)
    }
  }, [inView, logo])

  const scrollAboutMe = () => {
    if (!lenis) return;
    lenis?.scrollTo(about?.current, { duration: 1 })
  }

  const scrollContact = () => {
    if (!lenis) return;
    lenis?.scrollTo(contact?.current, { duration: 1 })
  }

  const phrase = [
    'Transforming ideas ',
    'into innovative',
    'solutions.'
  ];

  const slideUp = {
    initial: {
      y: "100%"
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.02 * i }
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 }
    },
    exit: {
      y: "100%"
    }
  }

  const variantsHover = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  const childVariants = {
    initial: { x: 0 },
    hover: { x: 10 }, // Child animation on parent hover
  };

  const MarqueeText = [
    'ReactJS',
    'NextJS',
    'JavaScript',
    'HTML',
    'CSS',
    'SCSS',
    'GSAP',
    'FramerMotion',
    'TailWindCSS',
    'Figma'
  ]

  const landingVariants = {
    initial: {
      clipPath: 'circle(15% at 50% 50%)',
    },
    animate: {
      clipPath: 'circle(100% at 50% 50%)',
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 2
      }
    },
    exit: {
      // clipPath: 'circle(70.7% at 50% 50%)'
    }
  }

  const linesVariants = {
    initial: {
      clipPath: 'polygon(0 0, 100% 0%, 100% 0, 0 0)',
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 1.5
      }
    },
  }

  const landingTextVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1.2,
        delay: 1
      }
    }
  };

  return (
    <main>
      <motion.section
        className='landing'
        variants={landingVariants}
        initial="initial"
        animate="animate"
        ref={landingRef}>
        <div>
          <div className='overlay' />
          <motion.div
            variants={linesVariants}
            initial="initial"
            animate="animate"

            className='bg-lines'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </motion.div>
          <motion.div
            variants={landingTextVariants}
            initial="initial"
            animate="animate"
            className='content'>
            <ParallaxText>
              <h1>
                Transforming ideas into <span className='highlight'>innovative</span> solutions.
              </h1>
              <p>A passionate frontend developer, crafting trending and innovative designs.</p>
            </ParallaxText>
          </motion.div>
        </div>

        <div className="icon-scroll icon-scroll--1">
          <span className="scroll-icon" onClick={scrollAboutMe}>
            <span className="scroll-icon__wheel-outer">
              <span className="scroll-icon__wheel-inner"></span>
            </span>
          </span>
        </div>
      </motion.section>

      <section id='about-me' className='about-me' ref={about}>
        <div className='about-wrapper'>

          <StickyCursorWrapper img="/niel-ey.png" shape={'circle'}>
            <div className='img-container'>
              <img src="/niel_pp.png" alt="Niel PP" width={380} />
            </div>
          </StickyCursorWrapper>
          <ParallaxText>
            <div className='desc-container'>
              <h2>Hi I’m <span className='highlight'>Niel</span>,</h2>
              <p>
                I believe in a user centered design approach, ensuring that every project I work on is tailored to  meet the specific needs of its users.
              </p>

              <div className="btn-wrapper">
                <div className="btn-content">
                  <button onClick={scrollContact}>
                    <MdOutlineArrowOutward />
                    Get in Touch
                  </button>
                </div>
              </div>

            </div>
          </ParallaxText>
        </div>
      </section>

      <section className='skills'>
        <div className="skills-wrapper">
          <div className="infinite-text">
            <Marquee>
              {MarqueeText.map((item, idx) => {
                return (
                  <div key={idx} className='text'>
                    <p>
                      {item}
                    </p>
                    <svg width="100px" height="100px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#c9d940" >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </section>

      <section id='projects' className='projects'>
        <div className='projects-wrapper'>
          <h2>Work<span className='highlight'>.</span></h2>

          <div className='project-list'>
            <StickyCursorWrapper text={'visit live website'} img="/p1.png">
              <div className='project-item'>
                <motion.div
                  initial={{
                    padding: 0
                  }}
                  whileHover={{
                    padding: '0 0.5rem',
                    scale: 0.97,
                    opacity: 0.8
                  }}
                  className='item'>
                  <a target='_blank' href="https://www.sanmiguel.com.ph/sustainability/" className='absolute-link' title='sustainability'></a>
                  <h3>
                    <span>01.</span>
                    SMC - Sustainability
                  </h3>

                  <h4>Web Development / Design</h4>
                </motion.div>
              </div>
            </StickyCursorWrapper>

            <StickyCursorWrapper img="/p2.png">
              <div className='project-item'>
                <motion.div
                  initial={{
                    padding: 0
                  }}
                  whileHover={{
                    padding: '0 0.5rem',
                    scale: 0.97,
                    opacity: 0.8
                  }}
                  className='item'>
                  <h3>
                    <span>02.</span>
                    SMC - KOL
                  </h3>

                  <h4>Web Development / Design</h4>
                </motion.div>
              </div>
            </StickyCursorWrapper>

            <StickyCursorWrapper text={'visit live website'} img="/p3.png">
              <div className='project-item'>
                <motion.div
                  initial={{
                    padding: 0
                  }}
                  whileHover={{
                    padding: '0 0.5rem',
                    scale: 0.97,
                    opacity: 0.8
                  }}
                  className='item'>
                  <a target='_blank' href="https://betterrivers.com.ph/" className='absolute-link' title='betterrivers'></a>
                  <h3>
                    <span>03.</span>
                    SMC - BetterRivers
                  </h3>

                  <h4>Web Development / Design</h4>
                </motion.div>
              </div>
            </StickyCursorWrapper>

            <StickyCursorWrapper img="/p4.png">
              <div className='project-item'>
                <motion.div
                  initial={{
                    padding: 0
                  }}
                  whileHover={{
                    padding: '0 0.5rem',
                    scale: 0.97,
                    opacity: 0.8
                  }}
                  className='item'>
                  <h3>
                    <span>04.</span>
                    SMC - AR 2023
                  </h3>

                  <h4>Web Development / Design</h4>
                </motion.div>
              </div>
            </StickyCursorWrapper>

            <StickyCursorWrapper text={'visit live website'} img="/p5.png">
              <div className='project-item'>
                <motion.div
                  initial={{
                    padding: 0
                  }}
                  whileHover={{
                    padding: '0 0.5rem',
                    scale: 0.97,
                    opacity: 0.8
                  }}
                  className='item'>
                  <a target='_blank' href="https://shop.solaireresort.com/" className='absolute-link' title='shop.solaireresort'></a>
                  <h3>
                    <span>05.</span>
                    Solaire - Ecommerce
                  </h3>

                  <h4>Web Development / Design</h4>
                </motion.div>
              </div>
            </StickyCursorWrapper>

            <StickyCursorWrapper text={'visit live website'} img="/p6.png">
              <div className='project-item'>
                <motion.div
                  initial={{
                    padding: 0
                  }}
                  whileHover={{
                    padding: '0 0.5rem',
                    scale: 0.97,
                    opacity: 0.8
                  }}
                  className='item'>
                  <a target='_blank' href="https://sec.solaireresort.com/" className='absolute-link' title='sec.solaireresort'></a>
                  <h3>
                    <span>06.</span>
                    Solaire - Entertainment City
                  </h3>

                  <h4>Web Development / Design</h4>
                </motion.div>
              </div>
            </StickyCursorWrapper>

          </div>
        </div>
      </section >


      <section className='contact' ref={contact}>
        <div className="bg-overlay"></div>
        <div className="bg-overlay2"></div>

        <div className='contact-content'>
          <div className='lets-talk'>
            <h3>Let's have a talk!</h3>

            <div className='socials'>
              <a href="mailto: nielvargas96@gmail.com" title='Email' target='_blank'><MdOutlineMailOutline size={'2rem'} /> <span>Email</span></a>
              <a href="tel:+639167171278”" target='_blank' title='Phone' ><FiPhone size={'2rem'} /> <span>Phone</span></a>
              <a href="https://www.linkedin.com/in/niel-tyron-vargas-455b5a27b/" target='_blank' title='LinkedIn'><FiLinkedin size={'2rem'} /> <span>LinkedIn</span></a>
            </div>
          </div>
          <div className='reserved'>
            <div>
              &copy; Niel Tyron Vargas 2024. All rights reserved <br />
              This site showcase my personal projects and professional work. <br />
              Content may not be used without permission.
            </div>
          </div>
        </div>
      </section>

    </main >
  )
}

export default Main