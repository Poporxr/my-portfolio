export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectStatus = "Live" | "In Progress" | "Private";

export type TeamType = "Solo" | "Team";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  techStack: string[];
  status: ProjectStatus;
  role: string;
  timeframe: string;
  longDescription?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  teamType?: TeamType;
  contributionSummary?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  keyFeatures?: string[];
  challenges?: string[];
  outcomes?: string[];
  metrics?: ProjectMetric[];
  clientType?: string;
  projectContext?: string;
  screenshots?: string[];
  order?: number;
  slug?: string;
};

export const projects: Project[] = [
  {
    id: "studora",
    slug: "studora",
    title: "Studora",
    shortDescription:
      "An AI-powered academic platform for Nigerian university students.",
    longDescription:
      "Studora is a modern academic platform designed to help students access organized course resources, use AI study tools, manage academic productivity, and connect through a social academic feed across universities in Nigeria.",
    category: "SaaS / EdTech",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Cloudflare R2",
      "Resend",
    ],
    status: "In Progress",
    role: "Founder & Full-Stack Developer",
    timeframe: "2025 - Present",
    teamType: "Solo",
    contributionSummary:
      "Designed the product vision, user experience, database structure, authentication flow, resource system, AI tools, and waitlist launch strategy.",
    problem:
      "Many Nigerian university students struggle with scattered course materials, poor access to past questions, unorganized academic resources, and limited collaboration across departments and universities.",
    solution:
      "Built a centralized academic platform where students can access resources, interact with AI study tools, follow academic feeds, manage productivity, and discover useful materials from their university and other universities across Nigeria.",
    impact:
      "Studora aims to make academic resources easier to access, improve study productivity, and create a connected academic network for Nigerian students.",
    keyFeatures: [
      "University-based student onboarding",
      "Course resources and academic materials",
      "AI note summarizer",
      "PDF chat",
      "Flashcard generator",
      "Quiz generator",
      "GPA calculator",
      "Timetable planner",
      "Academic feed for university-based posts",
      "Cross-university academic discovery",
      "Waitlist system for early users",
    ],
    challenges: [
      "Designing a scalable structure for multiple Nigerian universities",
      "Balancing academic resource management with social feed features",
      "Creating a premium student-focused UI without making it feel crowded",
      "Planning access control for students, course reps, lecturers, and admins",
      "Structuring the platform for high usage during exam periods",
    ],
    outcomes: [
      "Built a strong product foundation for a Nigerian EdTech platform",
      "Created a waitlist-based launch strategy",
      "Designed a scalable multi-university experience",
      "Developed core academic tools and resource workflows",
    ],
    metrics: [
      { label: "Type", value: "Startup Product" },
      { label: "Market", value: "Nigerian Universities" },
      { label: "Focus", value: "AI + Academic Resources" },
      { label: "Launch Stage", value: "Waitlist" },
    ],
    clientType: "Personal Startup / SaaS Product",
    projectContext:
      "AI-powered academic platform built to support students across Nigerian universities",
    image: "/projects/studora.png",
    screenshots: ["/projects/studora.png"],
    liveUrl: "https://studora.com.ng/",
    githubUrl: undefined,
    featured: true,
    order: 1,
  },
  {
    id: "high-dream-chasers",
    slug: "high-dream-chasers",
    title: "High Dream Chasers",
    shortDescription:
      "A modern e-commerce website for product browsing, online visibility, and customer checkout.",
    longDescription:
      "High Dream Chasers is a client e-commerce platform built to help customers explore products, view details, and complete purchases through a smooth online shopping experience.",
    category: "E-commerce",
    techStack: ["Next.js", "Firebase", "Paystack", "Tailwind CSS"],
    status: "Live",
    role: "Full-Stack Developer",
    timeframe: "2025",
    teamType: "Solo",
    contributionSummary:
      "Designed and built the frontend, product browsing experience, backend integration, and payment flow.",
    problem:
      "The business needed a stronger online presence and a reliable way for customers to view products and make purchases without depending only on social media or manual conversations.",
    solution:
      "Built a responsive e-commerce website with product listing, product details, Firebase-powered data handling, and Paystack payment integration for online checkout.",
    impact:
      "Improved the business’s digital presence and created a more professional shopping experience for customers.",
    keyFeatures: [
      "Responsive e-commerce interface",
      "Product listing and product detail pages",
      "Firebase backend integration",
      "Paystack payment integration",
      "Mobile-friendly shopping experience",
      "Clean and modern product presentation",
    ],
    challenges: [
      "Creating a smooth product browsing experience across mobile and desktop",
      "Integrating payment flow in a simple and reliable way",
      "Structuring the project to be maintainable as products increase",
    ],
    outcomes: [
      "Delivered a live client e-commerce website",
      "Created a reusable structure for product-based businesses",
      "Improved confidence working with real client requirements",
    ],
    metrics: [
      { label: "Type", value: "Client Project" },
      { label: "Platform", value: "E-commerce Website" },
      { label: "Payment", value: "Paystack" },
    ],
    clientType: "Business / E-commerce Client",
    projectContext:
      "Client e-commerce website for online product visibility and checkout",
    image: "/projects/high-dream-chasers.png",
    screenshots: ["/projects/high-dream-chasers.png"],
    liveUrl: "https://highdreamchasers.com.ng/",
    githubUrl: undefined,
    featured: true,
    order: 2,
  },
  {
    id: "prext-ecommerce",
    slug: "prext-ecommerce",
    title: "Prext E-commerce",
    shortDescription:
      "A modern e-commerce storefront focused on clean product presentation, smooth browsing experience, and scalable UI structure.",
    longDescription:
      "Prext E-commerce is a frontend-focused commerce application built to explore product discovery, clean layout systems, and responsive shopping experiences. The project emphasizes structured product grids, intuitive navigation, and reusable UI patterns that can scale into a full commerce system.",
    category: "Frontend",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    role: "Frontend Developer",
    timeframe: "2026",
    teamType: "Solo",
    contributionSummary:
      "Designed and implemented the full user interface, structured reusable components, and handled layout logic for product display and navigation.",
    problem:
      "E-commerce interfaces often become cluttered and difficult to scale while maintaining a clean user experience.",
    solution:
      "Built a structured layout system with reusable product components, clear spacing, and consistent visual hierarchy to improve browsing and usability.",
    impact:
      "The result is a clean and scalable storefront foundation that improves product visibility and creates a smoother user experience.",
    keyFeatures: [
      "Responsive product grid layout",
      "Reusable product card components",
      "Structured navigation and layout system",
    ],
    challenges: [
      "Maintaining clean layout structure across different screen sizes",
      "Balancing simplicity with functional product display",
    ],
    outcomes: [
      "Improved visual consistency",
      "Scalable component-based structure",
    ],
    metrics: [{ label: "Responsive Layout Coverage", value: "Mobile to Desktop" }],
    clientType: "E-commerce",
    projectContext: "Frontend commerce implementation",
    image: "/projects/prext-ecommerce.png",
    screenshots: ["/projects/prext-ecommerce.svg"],
    liveUrl: "https://prext-ecommerce.netlify.app/",
    featured: true,
    order: 3,
  },
  {
    id: "schola-hub-erp",
    slug: "schola-hub-erp",
    title: "Schola Hub ERP",
    shortDescription:
      "A school management and administration platform built to centralize academic operations, staff workflows, student records, and institutional reporting in one system.",
    longDescription:
      "Schola Hub ERP is an education-focused management platform designed to help schools handle core administrative and academic processes from a unified interface.",
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    status: "Live",
    role: "Full-Stack Developer",
    timeframe: "2026",
    teamType: "Solo",
    contributionSummary:
      "Designed and implemented the application structure, built the admin-facing interface, and organized academic and administrative modules.",
    problem:
      "School processes are often fragmented across spreadsheets and manual records.",
    solution:
      "Built an integrated ERP-style platform that centralizes school data and workflows.",
    impact:
      "More organized administrative workflow and clearer academic visibility.",
    keyFeatures: [
      "Admin dashboard",
      "Student and teacher management",
      "Results and attendance tracking",
      "Notices and communication",
    ],
    challenges: [
      "Structuring multiple modules into one system",
      "Balancing data-heavy screens with usability",
    ],
    outcomes: [
      "Centralized operations",
      "Reusable system modules",
    ],
    metrics: [{ label: "Core Modules", value: "8+" }],
    clientType: "Education",
    projectContext: "School management ERP",
    image: "/projects/schola-hub.png",
    screenshots: ["/projects/schola-hub.png"],
    liveUrl: "https://schola-hub-erp.vercel.app/",
    featured: true,
    order: 4,
  },
  {
    id: "qlink-mobility-power",
    slug: "qlink-mobility-power",
    title: "QLINK Mobility & Power",
    shortDescription:
      "A product-driven brand website built to present motorcycles, solar solutions, and home appliances.",
    longDescription:
      "QLINK Mobility & Power is a multi-category product website designed to showcase mobility and energy solutions within one cohesive digital experience.",
    category: "Frontend",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    role: "Frontend Developer",
    timeframe: "2026",
    teamType: "Solo",
    contributionSummary:
      "Built the interface structure and implemented the landing experience and navigation.",
    problem:
      "The brand needed a digital presence for multiple product categories.",
    solution:
      "Created a structured marketing website with clear navigation and product storytelling.",
    impact:
      "Stronger product presentation and clearer brand positioning.",
    keyFeatures: [
      "Multi-category navigation",
      "Hero-driven storytelling",
      "Featured product sections",
    ],
    challenges: [
      "Unifying multiple product categories",
    ],
    outcomes: [
      "Clearer product messaging",
    ],
    metrics: [{ label: "Categories", value: "3+" }],
    clientType: "Mobility & Energy",
    projectContext: "Marketing website",
    image: "/projects/qlink.png",
    screenshots: ["/projects/qlink.png"],
    liveUrl: "https://qlink-seven.vercel.app/",
    featured: true,
    order: 5,
  },
  {
    id: "dev-events-platform",
    slug: "dev-events-platform",
    title: "Dev Events Platform",
    shortDescription:
      "A developer-focused events platform for discovering and organizing tech events.",
    longDescription:
      "Dev Events Platform is a web application built to centralize developer-related events into a single interface.",
    category: "Frontend",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    role: "Frontend Developer",
    timeframe: "2025",
    teamType: "Solo",
    contributionSummary:
      "Built UI and structured event display components.",
    problem:
      "Lack of centralized event discovery for developers.",
    solution:
      "Created a structured event listing platform.",
    impact:
      "Improved discoverability of events.",
    keyFeatures: [
      "Event listings",
      "Detail views",
    ],
    challenges: [
      "Designing scalable event layouts",
    ],
    outcomes: [
      "Reusable event UI patterns",
    ],
    metrics: [{ label: "Views", value: "List + Detail" }],
    clientType: "Developer Platform",
    projectContext: "Event platform",
    image: "/projects/dev-events.png",
    screenshots: ["/projects/dev-events.png"],
    liveUrl: "https://popor-dev-events.vercel.app/",
    githubUrl: "https://github.com/Poporxr/Popor-devEvents",
    order: 6,
  },
  {
    id: "react-chatbot",
    slug: "react-chatbot",
    title: "React Chatbot",
    shortDescription:
      "An interactive chatbot interface simulating conversational flows.",
    longDescription:
      "React Chatbot explores chat-based interaction patterns in a lightweight frontend application.",
    category: "Frontend",
    techStack: ["React", "JavaScript", "CSS"],
    status: "Live",
    role: "Frontend Developer",
    timeframe: "2025",
    teamType: "Solo",
    contributionSummary:
      "Built chat UI and interaction flow.",
    problem:
      "Need for simple conversational interfaces.",
    solution:
      "Implemented chat-based UI with dynamic messages.",
    impact:
      "Demonstrates conversational UI design.",
    keyFeatures: [
      "Chat interface",
      "Message flow",
    ],
    challenges: [
      "Maintaining readable chat flow",
    ],
    outcomes: [
      "Reusable chat patterns",
    ],
    metrics: [{ label: "Type", value: "Conversational UI" }],
    clientType: "Interactive App",
    projectContext: "Chat UI experiment",
    image: "/projects/chat-bot.png",
    screenshots: ["/projects/chat-bot.png"],
    liveUrl: "https://popor-chatbot.netlify.app/",
    githubUrl: "https://github.com/Poporxr/Chatbot-React",
    order: 7,
  },
  {
    id: "recipe-finder",
    slug: "recipe-finder",
    title: "Recipe Finder",
    shortDescription:
      "A search-based application for discovering recipes dynamically.",
    longDescription:
      "Recipe Finder allows users to search and explore recipes through API-driven data.",
    category: "Frontend",
    techStack: ["React", "JavaScript", "CSS", "API Integration"],
    status: "Live",
    role: "Frontend Developer",
    timeframe: "2025",
    teamType: "Solo",
    contributionSummary:
      "Handled UI and API integration.",
    problem:
      "Need for simple recipe discovery.",
    solution:
      "Built search-driven UI with API.",
    impact:
      "Improved data-driven UI handling.",
    keyFeatures: [
      "Search functionality",
      "Dynamic data",
    ],
    challenges: [
      "Handling async data",
    ],
    outcomes: [
      "Reusable search patterns",
    ],
    metrics: [{ label: "Source", value: "API" }],
    clientType: "Consumer App",
    projectContext: "Recipe search app",
    image: "/projects/recipe-finder.png",
    screenshots: ["/projects/recipe-finder.png"],
    liveUrl: "https://popor-recipie-finder.netlify.app/",
    order: 8,
  },
];

export const sortProjects = (items: Project[]) =>
  [...items].sort((left, right) => {
    const leftOrder = left.order ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = right.order ?? Number.MAX_SAFE_INTEGER;

    if (left.featured !== right.featured) {
      return left.featured ? -1 : 1;
    }

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return left.title.localeCompare(right.title);
  });

export const getAllProjects = () => sortProjects(projects);
export const getFeaturedProjects = () => getAllProjects().filter((project) => project.featured);
export const getStandardProjects = () => getAllProjects().filter((project) => !project.featured);
export const getProjectCategories = () =>
  Array.from(new Set(getAllProjects().map((project) => project.category)));
export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
