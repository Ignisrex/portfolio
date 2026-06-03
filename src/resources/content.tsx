import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Keane",
  lastName: "DaSilva",
  name: `Keane DaSilva`,
  role: "Software Engineer",
  avatar: "/images/linkedinpropic.jpg", // Path to avatar image
  email: "dasilvakeaned@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false, // Disabled for now
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on software engineering and cloud architecture</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ignisrex",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/keane-dasilva-00556910b/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the systems behind fast-moving products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">EcoSight</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/ecosight-biodiversity-platform",
  },
  subline: (
    <>
      I’m Keane, a senior software engineer with 9+ years of experience creating
      <br /> backend services, APIs, and cloud infrastructure for teams moving from idea to scale.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/dasilvakeaned/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Keane is a New York-based software engineer with over 7 years of experience designing and 
        scaling cloud-based systems. Skilled in building resilient microservices and refactoring 
        complex legacy code to improve performance, reliability, and maintainability.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kee Farms Foundation",
        timeframe: "Mar 2025 - Present",
        role: "Lead Software Engineer",
        achievements: [
          <>
            Leading development of EcoSight, a biodiversity data platform for assessing ecosystem
            damage and supporting environmental policy decisions.
          </>,
          <>
            Architected and implemented Golang and Python microservices to ingest, transform, and
            aggregate global ecosystem services datasets.
          </>,
          <>
            Developed a modular job orchestration engine using a bounded worker pool to execute
            InVEST model workloads with concurrency control, retry limits, and failure handling.
          </>,
          <>
            Designed the data pipeline used to execute ecosystem service models and aggregate
            outputs into environmental indicators.
          </>,
        ],
        images: [],
      },
      {
        company: "Ritchie Bros Auctioneer",
        timeframe: "Jan 2023 - Mar 2025",
        role: "Staff Software Engineer",
        achievements: [
          <>
            Led effort to refactor and modernization of legacy backend systems powering simulcast 
            auctions, improving maintainability and system clarity within a distributed architecture.
          </>,
          <>
            Implemented a virtual waiting room system to handle traffic surges during peak login periods, 
            using rate-limiting, queuing, and request deferral strategies.
          </>,
          <>
            Collaborated cross-functionally with product and legal to adapt platform logic and data flow 
            for GDPR compliance, refactoring core data handling pipelines.
          </>,
        ],
        images: [],
      },
      {
        company: "Xcira",
        timeframe: "Feb 2022 - Jan 2023",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Led and mentored junior devs; conducted 1:1s and performance reviews.
          </>,
          <>
            Designed and shipped full-stack features using React and Spring Boot for mission-critical 
            operations, including a virtual waiting room system.
          </>,
          <>
            Played a key role in identifying and scheduling tech debt-removal initiatives alongside 
            feature work, earning a reputation as a pragmatic technical leader.
          </>,
          <>
            Boosted deployment throughput by 40% via CI/CD automation and DevOps improvements.
          </>,
        ],
        images: [],
      },
      {
        company: "Xcira",
        timeframe: "Sept 2018 - Feb 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Implemented feature enhancements and updates to mission-critical back-end applications 
            leveraging Java and PHP.
          </>,
          <>
            Developed customer facing features and components using widget based Javascript.
          </>,
          <>
            Delivered and maintained core backend modules in Java and PHP, improving auction 
            stability and client integrations.
          </>,
        ],
        images: [],
      },
      {
        company: "It's Pixel Perfect",
        timeframe: "Jan 2017 - April 2018",
        role: "Backend Web Developer",
        achievements: [
          <>
            Created a chatbot-powered Progressive web app using Node.js and NLP; reached 2,000+ 
            users in the first month.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of the West Indies",
        description: <>Computer Science focus (2014-2016)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>Building scalable microservices and APIs using Java, Python, and Node.js.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>Deploying and managing applications on AWS with Docker, Kubernetes, and CI/CD pipelines.</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
        ],
        images: [],
      },
      {
        title: "Frontend Development", 
        description: (
          <>Creating responsive web applications with React, TypeScript, and modern frameworks.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
