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
    order: 1,
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
    metrics: [
      { label: "Core Modules", value: "8+" },
    ],
    clientType: "Education",
    projectContext: "School management ERP",
    image: "/projects/schola-hub.png",
    screenshots: ["/projects/schola-hub-erp.png"],
    liveUrl: "https://schola-hub-erp.vercel.app/",
    order: 2,
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
    metrics: [
      { label: "Categories", value: "3+" },
    ],
    clientType: "Mobility & Energy",
    projectContext: "Marketing website",
    image: "/projects/qlink.png",
    screenshots: ["/projects/qlink-mobility-power.png"],
    liveUrl: "https://qlink-seven.vercel.app/",
    order: 3,
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
    metrics: [
      { label: "Views", value: "List + Detail" },
    ],
    clientType: "Developer Platform",
    projectContext: "Event platform",
    image: "/projects/dev-events.png",
    screenshots: ["/projects/dev-events.png"],
    liveUrl: "https://popor-dev-events.vercel.app/",
    githubUrl: "https://github.com/Poporxr/Popor-devEvents",
    order: 4,
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
    metrics: [
      { label: "Type", value: "Conversational UI" },
    ],
    clientType: "Interactive App",
    projectContext: "Chat UI experiment",
    image: "/projects/chat-bot.png",
    screenshots: ["/projects/chat-bot.png"],
    liveUrl: "https://popor-chatbot.netlify.app/",
    githubUrl: "https://github.com/Poporxr/Chatbot-React",
    order: 5,
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
    metrics: [
      { label: "Source", value: "API" },
    ],
    clientType: "Consumer App",
    projectContext: "Recipe search app",
    image: "/projects/recipe-finder.png",
    screenshots: ["/projects/recipe-finder.png"],
    liveUrl: "https://popor-recipe-finder.netlify.app/",
    order: 6,
  },
];;

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
