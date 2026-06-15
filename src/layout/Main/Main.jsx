import { useRef, useContext, useEffect, useState } from 'react'
import './Main.scss'

import { useLenis } from 'lenis/react';
import ParallaxText from '../../components/ParallaxText/ParallaxText';
import { MdOutlineArrowOutward } from "react-icons/md";
import StickyCursorWrapper from '../../components/StickyCursor/StickyCursorWrapper';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Marquee from '../../components/Marquee/Marquee';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import ScrollCarousel from '../../components/ScrollCarousel/ScrollCarousel';
import projects from '../../data/projects';
import { FiLinkedin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import LogoContext from '../../context/LogoContext';


function Main() {
  const lenis = useLenis();
  const about = useRef(null);
  const contact = useRef(null);
  const landingRef = useRef(null);
  const selectedWorksRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const { setLogo } = useContext(LogoContext);

  const inView = useInView(landingRef);
  // White header logo while the dark "Selected Works" section sits behind it
  // (only count the top strip of the viewport, where the header lives).
  const selectedWorksInView = useInView(selectedWorksRef, {
    margin: '0px 0px -85% 0px',
  });

  useEffect(() => {
    if (!lenis) return;
    if (selectedProject) {
      lenis.stop();
    } else {
      lenis.start();
    }
    document.body.classList.toggle('active', !!selectedProject);
  }, [selectedProject, lenis])

  useEffect(() => {
    // Logo is white over the dark hero and the dark Selected Works section.
    setLogo(inView || selectedWorksInView)
  }, [inView, selectedWorksInView, setLogo])

  const scrollAboutMe = () => {
    if (!lenis) return;
    lenis?.scrollTo(about?.current, { duration: 1 })
  }

  const scrollContact = () => {
    if (!lenis) return;
    lenis?.scrollTo(contact?.current, { duration: 1 })
  }

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

  const heroWords = [
    { text: 'Pixels' },
    { text: 'in' },
    { text: 'Motion', highlight: true }
  ];

  const heroWordVariants = {
    initial: {
      y: '150%',
      rotate: 5
    },
    animate: (i) => ({
      y: '0%',
      rotate: 0,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 1,
        delay: 1 + i * 0.15
      }
    })
  };

  const heroBadgeVariants = {
    initial: {
      opacity: 0,
      y: -16,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 0.8,
        delay: 0.8
      }
    }
  };

  const fadeUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 0.7,
        delay: i * 0.1
      }
    })
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
            className='hero-orb hero-orb--1'
            animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className='hero-orb hero-orb--2'
            animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
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
          <div className='content'>
            <ParallaxText>
              <motion.div
                className='hero-badge'
                variants={heroBadgeVariants}
                initial="initial"
                animate="animate">
                <span className='hero-badge__dot' />
                Available for projects
              </motion.div>

              <h1 className='hero-title'>
                {heroWords.map((word, i) => (
                  <span className='word-mask' key={i}>
                    <motion.span
                      className={word.highlight ? 'highlight' : undefined}
                      custom={i}
                      variants={heroWordVariants}
                      initial="initial"
                      animate="animate">
                      {word.text}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                variants={landingTextVariants}
                initial="initial"
                animate="animate">
                Transforming static designs into dynamic, interactive, and responsive websites
              </motion.p>
            </ParallaxText>
          </div>
        </div>

        <motion.div
          className="icon-scroll icon-scroll--1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 2.4, ease: [0.33, 1, 0.68, 1] } }}
          whileHover={{ scale: 1.1 }}>
          <span className="scroll-icon" onClick={scrollAboutMe}>
            <span className="scroll-icon__wheel-outer">
              <span className="scroll-icon__wheel-inner"></span>
            </span>
          </span>
        </motion.div>
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

      <ScrollCarousel ref={selectedWorksRef} projects={projects} onSelect={setSelectedProject} />

      <section id="projects" className="projects">
        <div className="projects-wrapper">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}>
            Professional Experience
            <span className="highlight">.</span>
          </motion.h2>

          <motion.p
            className="short-desc"
            variants={fadeUp}
            custom={1}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}>
          This section highlights my professional work and industry experience in developing, designing, and supporting high-performing websites and applications. I have delivered digital solutions across gaming, corporate, sustainability, and eCommerce industries—focusing on scalability, performance optimization, and seamless user experience.
          </motion.p>

          <div className="project-list">
            {projects.map((project, index) => (
              <StickyCursorWrapper
                key={project.id}
                text="view project"
                img={project.image}
              >
                <motion.div
                  className="project-item"
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-40px" }}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}>
                  <motion.div
                    initial={{ padding: 0 }}
                    whileHover={{
                      padding: "0 0.5rem",
                      scale: 0.97,
                      opacity: 0.8
                    }}
                    className="item"
                  >
                    <h3>
                      <span>
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {project.title}
                    </h3>

                    <h4>
                      {project.category}
                      <MdOutlineArrowOutward className="item-arrow" />
                    </h4>
                  </motion.div>
                </motion.div>
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
            <motion.h3
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}>
              Let's have a chat!
            </motion.h3>

            <div className='socials'>
              <motion.a variants={fadeUp} custom={1} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }} href="mailto: nielvargas96@gmail.com" title='Email' target='_blank'><MdOutlineMailOutline size={'2rem'} /> <span>Email</span></motion.a>
              <motion.a variants={fadeUp} custom={2} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }} href="tel:+639455711314" target='_blank' title='Phone' ><FiPhone size={'2rem'} /> <span>Phone</span></motion.a>
              <motion.a variants={fadeUp} custom={3} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }} href="https://www.linkedin.com/in/niel-tyron-vargas-455b5a27b/" target='_blank' title='LinkedIn'><FiLinkedin size={'2rem'} /> <span>LinkedIn</span></motion.a>
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

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </main >
  )
}

export default Main