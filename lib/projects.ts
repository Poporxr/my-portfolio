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
      "A live learning platform for Nigerian university students: course notes, past questions and an AI study companion, organised by school, department and level.",
    longDescription:
      "Studora is a live learning platform for Nigerian university students, launched in November 2026 at studora.com.ng. Students find course notes and past questions organised by school, department and level, upload and share resources, and learn together through a realtime academic feed. At its centre is Sage, an AI study companion that answers questions and breaks difficult topics into simple steps using the student's real course materials. A dedicated Python PDF service (FastAPI on Modal, PyMuPDF extraction with OCR fallback) processes uploaded documents. Paid plans, Studora Plus (₦2,500/month) and Studora Pro (₦5,000/month), are billed through Paystack.",
    category: "SaaS / EdTech",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Convex",
      "FastAPI",
      "Modal",
      "Groq",
      "Paystack",
      "Cloudflare R2",
      "Resend",
    ],
    status: "Live",
    role: "Founder & Full-Stack Developer",
    timeframe: "2025 - Present",
    teamType: "Solo",
    contributionSummary:
      "Designed and built the entire product: data model, authentication, resource system, realtime feed, Sage AI tutor, the Python PDF processing service, and Paystack subscriptions.",
    problem:
      "Many Nigerian university students struggle with scattered course materials, poor access to past questions, unorganized academic resources, and limited collaboration across departments and universities.",
    solution:
      "Built and launched a centralised platform where students access notes and past questions by school, department and level, share resources, learn through a realtime feed, and study with Sage, an AI companion grounded in their own course materials.",
    impact:
      "Live and in use since 2 November 2026, giving Nigerian university students one organised home for course materials and AI-assisted study.",
    keyFeatures: [
      "Course notes and past questions organised by school, department and level",
      "Sage AI study companion that answers questions and simplifies topics using real course materials",
      "Upload and share resources with other students",
      "Realtime academic feed across universities",
      "Python PDF processing service (FastAPI, Modal, PyMuPDF, OCR fallback)",
      "Paid plans with Paystack subscriptions (Plus ₦2,500/mo, Pro ₦5,000/mo)",
      "University-based onboarding with Clerk authentication",
    ],
    challenges: [
      "Designing a scalable structure for multiple Nigerian universities",
      "Balancing academic resource management with social feed features",
      "Structuring the platform for high usage during exam periods",
    ],
    outcomes: [
      "Launched live at studora.com.ng on 2 November 2026",
      "Shipped a production AI study companion grounded in uploaded course materials",
      "Built a standalone Python PDF pipeline with OCR fallback",
      "Monetised with two Paystack subscription tiers",
    ],
    metrics: [
      { label: "Type", value: "Startup Product" },
      { label: "Market", value: "Nigerian Universities" },
      { label: "Focus", value: "AI + Academic Resources" },
      { label: "Launch Stage", value: "Live" },
    ],
    clientType: "Personal Startup / SaaS Product",
    projectContext:
      "AI-powered academic platform built to support students across Nigerian universities",
    image: undefined,
    screenshots: [],
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
      "High Dream Chasers is a client e-commerce platform built to help customers explore products, view details, and complete purchases through a smooth online shopping experience. The live store includes Google sign-in and customer accounts with order history, an admin operator dashboard for orders and fulfillment, Paystack checkout with server-side payment confirmation, and automated customer emails via Resend (order created, payment success, every status change).",
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
      "Google sign-in with customer accounts and order history",
      "Admin operator dashboard for orders and fulfillment",
      "Paystack checkout with server-side payment confirmation",
      "Automated customer emails via Resend (order, payment, status updates)",
      "Firebase backend integration",
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
      "Live store taking real orders with automated customer notifications",
    ],
    metrics: [
      { label: "Type", value: "Client Project" },
      { label: "Platform", value: "E-commerce Website" },
      { label: "Payment", value: "Paystack" },
    ],
    clientType: "Business / E-commerce Client",
    projectContext:
      "Client e-commerce website for online product visibility and checkout",
    image: undefined,
    screenshots: [],
    liveUrl: "https://highdreamchasers.com.ng/",
    githubUrl: undefined,
    featured: true,
    order: 2,
  },
  {
    id: "firstbookings",
    slug: "firstbookings",
    title: "FirstBookings",
    shortDescription:
      "A live road transport booking platform for Nigeria: search routes, compare live departures, pay online and board with a barcode e-ticket.",
    longDescription:
      "FirstBookings is a live road transport booking platform at firstbookins.com. Travellers search routes and see live departure boards with operators, departure times, vehicle types, available seats and fares. They pay securely through Paystack and receive a barcode e-ticket, which is verified at the terminal when boarding.",
    category: "Travel / Booking Platform",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Paystack",
    ],
    status: "Live",
    role: "Founder & Full-Stack Developer",
    timeframe: "2025 - Present",
    teamType: "Solo",
    contributionSummary:
      "Designed and built the full platform: route search, departure boards, seat and fare display, Paystack checkout, and the barcode e-ticket verification flow.",
    problem:
      "Road transport booking in Nigeria is mostly manual: travellers queue at terminals with no visibility of departure times, seat availability or fares in advance.",
    solution:
      "Built a booking platform with route search, live departure boards, online payment, and barcode e-tickets that terminal staff verify at boarding.",
    impact:
      "Live platform where travellers can book road trips in advance and board with a verified e-ticket.",
    keyFeatures: [
      "Route search across operators",
      "Live departure boards: times, vehicles, seats and fares",
      "Paystack checkout",
      "Barcode e-tickets verified at terminal boarding",
    ],
    outcomes: ["Live at firstbookins.com taking real bookings"],
    metrics: [
      { label: "Type", value: "Booking Platform" },
      { label: "Market", value: "Nigeria" },
      { label: "Payments", value: "Paystack" },
    ],
    clientType: "Personal Product",
    projectContext: "Road transport booking platform",
    liveUrl: "https://firstbookins.com/",
    featured: true,
    order: 3,
  },
  {
    id: "getaway",
    slug: "getaway",
    title: "Getaway",
    shortDescription:
      "A free time decision app that answers one question: what should I do with my free time right now? Swipe curated ideas near you, matched to your time and budget.",
    longDescription:
      "Getaway is a free time decision app built around one question: what should I do with my free time right now? Its tagline is 'A little less routine'. You swipe through curated inspiration cards matched to the time you have and your budget, browse an explore map of nearby ideas, and pull quick suggestions from Getaway AI when you do not want to browse. Collections cover Lagos and Abuja, inside a five-tab, mobile-style interface. It is a working prototype; real data is planned next.",
    category: "Lifestyle / Travel",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    role: "Founder & Developer",
    timeframe: "2026 - Present",
    teamType: "Solo",
    contributionSummary:
      "Designed and built the prototype end to end: the swipe deck, explore map, city collections and the AI helper, inside a five-tab mobile-style interface.",
    keyFeatures: [
      "Swipeable inspiration deck matched to time and budget",
      "Explore map of nearby ideas",
      "Getaway AI for quick suggestions",
      "Lagos and Abuja collections",
      "Five-tab mobile-style navigation: Home, Explore, AI, My time, More",
    ],
    metrics: [
      { label: "Type", value: "Lifestyle App" },
      { label: "Stage", value: "Working Prototype" },
      { label: "Cities", value: "Lagos & Abuja" },
    ],
    clientType: "Personal Product",
    projectContext: "Free time decision app (prototype)",
    liveUrl: "https://getaway-app-zeta.vercel.app/",
    githubUrl: "https://github.com/Poporxr/getaway",
    featured: true,
    order: 4,
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
    screenshots: ["/projects/prext-ecommerce.png"],
    liveUrl: "https://prext-ecommerce.netlify.app/",
    featured: false,
    order: 6,
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
    order: 5,
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
    featured: false,
    order: 7,
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
    order: 8,
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
    order: 9,
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
    order: 10,
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
