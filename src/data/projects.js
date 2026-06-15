// Professional experience / selected works.
// Shared by the Selected Works carousel and the Professional Experience list,
// and rendered in detail inside the project modal.

const projects = [
  {
    id: 10,
    title: 'Casino Plus',
    tag: 'Gaming',
    category: 'Mobile App & Web Development',
    description:
      'An online gaming platform serving thousands of daily players. I contributed to both the H5, mobile app and web experience, building responsive interfaces and optimizing performance for high-traffic, real-time gameplay.',
    tech: ['React', 'React Native', 'Posthog', 'JavaScript', 'WSS', 'Redux', 'SCSS', 'RESTful API'],
    contributions: [
      'Developed and maintained UI features for a large-scale, high-traffic gaming platform.',
      'Implemented promo logic and new features wired up to backend RESTful API integrations.',
      'Used React Native for ios and android to help build and maintain the casino gaming mobile application.',
      'Supported live production environments and resolved critical production incidents through troubleshooting.',
      'Developed responsive static and dynamic landing pages optimized for web, mobile, and H5 platforms, ensuring a seamless cross-device user experience.',
      'Built and maintained promotional campaigns and rewards systems powered by real-time API integrations and dynamic data-driven content.'
    ],
    features: [
      'Responsive game lobbies and landing pages across web and mobile.',
      'Promo and rewards system driven by live API data.',
      'Real-time game state updates built for high concurrency.',
    ],
    link: 'https://casinoplus.ph/',
    image: '/p11.png',
    tooltip: 'visit live website',
  },
  {
    id: 11,
    title: 'SNSoft - Official Website',
    tag: 'Corporate',
    category: 'Web Development & Design',
    description:
      'The official corporate website for SNSoft, designed and developed with a focus on a clean brand presence, smooth page transitions, and a fully responsive layout across devices.',
    tech: ['HTML', 'Gsap', 'ScrollTrigger', 'Lenis Scroll', 'JavaScript', 'SCSS'],
    contributions: [
      'Developed the corporate site with a clean, consistent brand presence.',
      'Built page-transition and scroll animations using Framer Motion.',
      'Implemented a fully responsive layout that adapts from mobile to desktop.',
    ],
    features: [
      'Animated hero and section reveals.',
      'Smooth route and page transitions.',
      'Responsive layout across all breakpoints.',
    ],
    link: 'https://www.snsoft.ph/',
    image: '/p12.png',
    tooltip: 'visit live website',
  },
  {
    id: 12,
    title: 'The Blanche Beauty',
    tag: 'E-commerce',
    category: 'Shopify Web Development & Design',
    description:
      'I built the frontend of a Shopify-powered beauty eCommerce store featuring custom theme development, conversion-focused product pages, and a polished shopping experience from browsing to checkout.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS'],
    contributions: [
      'Built a custom Shopify theme tailored to the brand’s look and feel.',
      'Developed conversion-focused product and collection pages.',
      'Refined the end-to-end shopping flow from browsing to checkout.',
    ],
    features: [
      'Custom product and collection templates.',
      'Mobile-first, conversion-oriented layouts.',
      'Polished cart and checkout experience.',
    ],
    link: 'https://theblanchebeauty.com/',
    image: '/p13.png',
    tooltip: 'visit live website',
  },
  {
    id: 1,
    title: 'SMC - Sustainability',
    tag: 'Sustainability',
    category: 'Web Development & Design',
    description:
      "I develop the San Miguel Corporation's sustainability microsite, showcasing environmental and social initiatives through rich storytelling, scroll-driven animations, and data-driven content sections.",
    tech: ['Next.js', 'GSAP', 'Framer Motion', 'SCSS'],
    contributions: [
      'Built scroll-driven storytelling sections to communicate sustainability initiatives.',
      'Developed reusable, data-driven content blocks for ongoing updates.',
      'Implemented timeline and stat animations with GSAP.',
    ],
    features: [
      'Scroll-triggered storytelling and reveals.',
      'Animated data and impact statistics.',
      'Modular, responsive content sections.',
    ],
    link: 'https://www.sanmiguel.com.ph/sustainability/',
    image: '/p1.png',
    tooltip: 'visit live website',
  },
  {
    id: 2,
    title: 'SMC - BetterRivers',
    tag: 'Campaign',
    category: 'Web Development & Design',
    description:
      "I built a campaign site for SMC's river rehabilitation program, built with engaging scroll-based storytelling to communicate the project's impact, progress, and milestones.",
    tech: ['React', 'GSAP', 'JavaScript', 'SCSS', 'RESTful API'],
    contributions: [
      'Built scroll-based storytelling to walk users through the program’s milestones.',
      'Developed animated sections highlighting progress and impact.',
      'Integrated Google Maps API to display the custom river locations and improve user engagement.',
      'Implemented Google Analytics to track page visits and user interactions.',
      'Ensured smooth performance of scroll animations across devices.',
    ],
    features: [
      'Scroll-triggered narrative flow.',
      'Milestone and progress timeline.',
      'Responsive, animation-rich layout.',
    ],
    link: 'https://betterrivers.com.ph/',
    image: '/p3.png',
    tooltip: 'visit live website',
  },
  {
    id: 3,
    title: 'SMC Main (Kaunlaran Pages)',
    tag: 'Editorial',
    category: 'Web Development & Design',
    description:
      'I built editorial pages within the San Miguel corporate website, developing flexible, CMS-friendly layouts that support feature stories and corporate publications.',
    tech: ['React', 'RESTful API', 'SCSS'],
    contributions: [
      'Developed flexible, CMS-friendly editorial layouts.',
      'Consumed RESTful APIs to render dynamic publication content.',
      'Built reusable article components for ongoing feature stories.',
    ],
    features: [
      'CMS-driven dynamic content.',
      'Reusable editorial and article layouts.',
      'Responsive reading experience.',
    ],
    link: 'https://sanmiguel.com.ph/corporate/kaunlaran',
    image: '/p10.png',
    tooltip: 'visit live website',
  },
  {
    id: 4,
    title: 'World We Want',
    tag: 'Campaign',
    category: 'Web Development & Design',
    description:
      'A purpose-driven campaign platform with interactive sections and responsive layouts crafted to drive awareness and public engagement for the initiative.',
    tech: ['React', 'Framer Motion', 'SCSS', 'RESTful API'],
    contributions: [
      'Built interactive campaign sections to drive awareness and engagement.',
      'Implemented responsive layouts for a wide range of devices.',
      'Added page transitions and micro-interactions with Framer Motion.',
      'Consumed RESTful APIs to render dynamic content.',
    ],
    features: [
      'Interactive, engagement-focused sections.',
      'Responsive campaign layout.',
      'Subtle motion and micro-interactions.',
    ],
    link: 'https://sanmiguelfoundation.org/',
    image: '/p9.png',
    tooltip: 'visit live website',
  },
  {
    id: 5,
    title: 'New NAIA',
    tag: 'Corporate',
    category: 'Web Development & Design',
    description:
      'Built the official website for the New NAIA international airport project, presenting development plans, milestones, and investor information through a modern, accessible UI.',
    tech: ['React', 'GSAP', 'SCSS', 'RESTful API'],
    contributions: [
      'Built a modern, accessible UI to present development plans and milestones.',
      'Developed sections for investor information and project progress.',
      'Implemented responsive, animated content sections.',
      'Consumed RESTful APIs to render dynamic content.',
    ],
    features: [
      'Development timeline and milestones.',
      'Investor information sections.',
      'Accessible, responsive UI.',
    ],
    link: 'https://newnaia.com.ph/',
    image: '/p8.png',
    tooltip: 'visit live website',
  },
  {
    id: 6,
    title: 'SMC - AR 2023',
    tag: 'Annual Report',
    category: 'Web Development & Design',
    description:
      "Built the San Miguel Corporation's 2023 digital annual report — a print-first report translated into an interactive web experience with smooth navigation and downloadable resources.",
    tech: ['React', 'GSAP', 'Framer Motion', 'SCSS'],
    contributions: [
      'Translated a print-first annual report into an interactive web experience.',
      'Built smooth in-page navigation across report chapters.',
      'Integrated downloadable resources and assets.',
    ],
    features: [
      'Interactive, chapter-based navigation.',
      'Animated report sections.',
      'Downloadable PDF resources.',
    ],
    link: 'https://sanmiguel.com.ph/smcannualreport2023/',
    image: '/p4.png',
    tooltip: 'visit live website',
  },
  {
    id: 7,
    title: 'SMC - K.ONLINE',
    tag: 'Editorial',
    category: 'Web Development & Design',
    description:
      'Built an internal digital publication platform for SMC. I developed reusable article layouts and a streamlined reading experience for company-wide communications.',
    tech: ['React', 'RESTful API', 'SCSS', 'Tailwind CSS', 'Framer Motion'],
    contributions: [
      'Developed reusable article layouts for company-wide communications.',
      'Built a streamlined, distraction-free reading experience.',
      'Consumed RESTful APIs to render dynamic publication content.',
    ],
    features: [
      'Reusable article and publication layouts.',
      'Clean, focused reading experience.',
      'Dynamic, API-driven content.',
    ],
    link: null,
    image: '/p2.png',
  },
  {
    id: 8,
    title: 'Solaire - Mini Ecommerce',
    tag: 'E-commerce',
    category: 'Web Development & Design',
    description:
      'Develop a mini eCommerce shop for Solaire Resort, with product browsing, cart, and checkout flows built to match the premium look and feel of the resort brand.',
    tech: ['Vue', 'RESTful API', 'JavaScript', 'SCSS'],
    contributions: [
      'Built product browsing, cart, and checkout flows.',
      'Matched the premium look and feel of the Solaire brand.',
      'Wired up product and order data through RESTful APIs.',
    ],
    features: [
      'Product browsing and detail pages.',
      'Cart and checkout flow.',
      'Premium, brand-aligned UI.',
    ],
    link: 'https://shop.solaireresort.com/',
    image: '/p5.png',
    tooltip: 'visit live website',
  },
  {
    id: 9,
    title: 'Solaire - Entertainment City',
    tag: 'Resort',
    category: 'Web Development & Design',
    description:
      'Developed the frontend of Solaire Entertainment City featuring venue highlights, events, and promotions delivered with immersive visuals and subtle animation.',
    tech: ['Drupal', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
    contributions: [
      'Built venue, events, and promotions sections with immersive visuals.',
      'Implemented subtle scroll and hover animations.',
      'Ensured a responsive, brand-aligned experience.',
    ],
    features: [
      'Venue and event highlights.',
      'Promotions and announcements.',
      'Immersive visuals with subtle motion.',
    ],
    link: 'https://sec.solaireresort.com/',
    image: '/p6.png',
    tooltip: 'visit live website',
  },
];

export default projects;
