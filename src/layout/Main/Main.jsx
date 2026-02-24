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

  const projects = [
    {
      id: 10,
      title: "Casino Plus",
      category: "Mobile App & Web Development",
      link: "https://casinoplus.ph/",
      image: "/p11.png",
      tooltip: "visit live website"
    },
    {
      id: 11,
      title: "SNSoft - Official Website",
      category: "Web Development & Design",
      link: "https://www.snsoft.ph/",
      image: "/p12.png",
      tooltip: "visit live website"
    },
    {
      id: 12,
      title: "The Blanche Beauty",
      category: "Shopify Web Development & Design",
      link: "https://theblanchebeauty.com/",
      image: "/p13.png",
      tooltip: "visit live website"
    },
    {
      id: 1,
      title: "SMC - Sustainability",
      category: "Web Development & Design",
      link: "https://www.sanmiguel.com.ph/sustainability/",
      image: "/p1.png",
      tooltip: "visit live website"
    },
    {
      id: 2,
      title: "SMC - BetterRivers",
      category: "Web Development & Design",
      link: "https://betterrivers.com.ph/",
      image: "/p3.png",
      tooltip: "visit live website"
    },
    {
      id: 3,
      title: "SMC Main (Kaunlaran Pages)",
      category: "Web Development & Design",
      link: "https://sanmiguel.com.ph/corporate/kaunlaran",
      image: "/p10.png",
      tooltip: "visit live website"
    },
    {
      id: 4,
      title: "World We Want",
      category: "Web Development & Design",
      link: "https://worldwewant.ph/",
      image: "/p9.png",
      tooltip: "visit live website"
    },
    {
      id: 5,
      title: "New NAIA",
      category: "Web Development & Design",
      link: "https://newnaia.com.ph/",
      image: "/p8.png",
      tooltip: "visit live website"
    },
    {
      id: 6,
      title: "SMC - AR 2023",
      category: "Web Development & Design",
      link: "https://sanmiguel.com.ph/smcannualreport2023/",
      image: "/p4.png",
      tooltip: "visit live website"
    },
    {
      id: 7,
      title: "SMC - K.ONLINE",
      category: "Web Development & Design",
      link: null, // no live link in your markup
      image: "/p2.png"
    },
    {
      id: 8,
      title: "Solaire - Mini Ecommerce",
      category: "Web Development & Design",
      link: "https://shop.solaireresort.com/",
      image: "/p5.png",
      tooltip: "visit live website"
    },
    {
      id: 9,
      title: "Solaire - Entertainment City",
      category: "Web Development & Design",
      link: "https://sec.solaireresort.com/",
      image: "/p6.png",
      tooltip: "visit live website"
    }, 
  ];

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
            <h1>Pixels in <span class="highlight">Motion</span></h1>
            <p>Transforming static designs into dynamic, interactive, and responsive websites</p>
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
              Frontend Developer with 6+ years of experience building high-performance, scalable web applications using React and Next.js. I specialize in creating user-centered interfaces and contributing to production-grade systems.
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

      <section id="projects" className="projects">
        <div className="projects-wrapper">
          <h2>
            Professional Experience
            <span className="highlight">.</span>
          </h2>

          <p class="short-desc">
          This section highlights my professional work and industry experience in developing, designing, and supporting high-performing websites and applications. I have delivered digital solutions across gaming, corporate, sustainability, and eCommerce industries—focusing on scalability, performance optimization, and seamless user experience.
          </p>

          <div className="project-list">
            {projects.map((project, index) => (
              <StickyCursorWrapper
                key={project.id}
                text={project.tooltip}
                img={project.image}
              >
                <div className="project-item">
                  <motion.div
                    initial={{ padding: 0 }}
                    whileHover={{
                      padding: "0 0.5rem",
                      scale: 0.97,
                      opacity: 0.8
                    }}
                    className="item"
                  >
                    {project.link && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link}
                        className="absolute-link"
                        title={project.title}
                      />
                    )}

                    <h3>
                      <span>
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {project.title}
                    </h3>

                    <h4>{project.category}</h4>
                  </motion.div>
                </div>
              </StickyCursorWrapper>
            ))}
          </div>
        </div>
      </section>


      <section className='contact' ref={contact}>
        <div className="bg-overlay"></div>
        <div className="bg-overlay2"></div>

        <div className='contact-content'>
          <div className='lets-talk'>
            <h3>Let's have a chat!</h3>

            <div className='socials'>
              <a href="mailto: nielvargas96@gmail.com" title='Email' target='_blank'><MdOutlineMailOutline size={'2rem'} /> <span>Email</span></a>
              <a href="tel:+639455711314" target='_blank' title='Phone' ><FiPhone size={'2rem'} /> <span>Phone</span></a>
              <a href="https://www.linkedin.com/in/niel-tyron-vargas-455b5a27b/" target='_blank' title='LinkedIn'><FiLinkedin size={'2rem'} /> <span>LinkedIn</span></a>
            </div>
          </div>
          <div className='reserved'>
            <div>
              &copy; Niel Tyron Vargas 2025. All rights reserved <br />
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