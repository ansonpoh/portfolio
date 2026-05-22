export type SocialLink = {
  label: string;
  href: string;
};

export type PortfolioNavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type HeroReadout = {
  label: string;
  text: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
  status?: string;
  external?: boolean;
};

export type ProjectPreview = {
  eyebrow: string;
  title: string;
  description: string;
};

export type SiteProfile = {
  name: string;
  role: string;
  location: string;
  availability: string;
  intro: string;
  tagline: string;
  email: string;
  resumeHref: string;
  socials: SocialLink[];
  heroFacts: ProjectMetric[];
  heroReadouts: HeroReadout[];
  signalTags: string[];
};

export type AboutCard = {
  title: string;
  body: string;
  accent: "primary" | "secondary" | "alert";
  span?: "normal" | "full";
};

export type FeaturedProject = {
  id: string;
  title: string;
  tagline: string;
  status: string;
  summary: string;
  problem: string;
  role: string;
  challenge: string;
  outcome: string;
  stack: string[];
  metrics?: ProjectMetric[];
  links: ProjectLink[];
  preview: ProjectPreview;
  visualTags: string[];
  accent: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type CredentialGroup = {
  title: string;
  items: string[];
};

export const siteProfile: SiteProfile = {
  name: "Anson Poh",
  role: "Software Engineering student building full-stack AI-enabled products.",
  location: "Singapore",
  availability:
    "Open to software engineering roles and collaborative full-stack product work.",
  intro:
    "Year 3 Software Engineering student at Singapore Management University, focused on Fullstack and AI Development.",
  tagline:
    "I build practical applications across public safety, volunteer matching, learning platforms, and computer-vision workflows.",
  email: "ansonpoh0909@gmail.com",
  resumeHref: "/AnsonPoh_Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/ansonpoh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anson-poh/" },
  ],
  heroFacts: [
    { label: "Featured Projects", value: "5 featured projects" },
    { label: "Academic Standing", value: "GPA 3.6 / 4.0" },
    { label: "Graduation", value: "May 2028" },
  ],
  heroReadouts: [
    {
      label: "Project Focused",
      text: "Featured projects across AI and Fullstack Systems.",
    },
    {
      label: "Technical Adaptability",
      text: "Comfortable moving between frontend delivery, backend systems, integrations, and product-facing execution in team projects.",
    },
  ],
  signalTags: [
    "React + Next.js",
    "Node.js + Spring Boot",
    "Supabase + SQL",
  ],
};

export const portfolioNavItems: PortfolioNavItem[] = [
  { href: "/#hero", sectionId: "hero", label: "Hero" },
  { href: "/#about", sectionId: "about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#capabilities", sectionId: "capabilities", label: "Skills" },
  { href: "/#credentials", sectionId: "credentials", label: "Credentials" },
  { href: "/#contact", sectionId: "contact", label: "Contact" },
];

export const aboutCards: AboutCard[] = [
  {
    title: "Profile",
    body:
      "I build recruiter-friendly software projects around clear user problems, practical delivery, and readable implementation. My focus is on shipping features that stay useful under real constraints.",
    accent: "secondary",
  },
  {
    title: "Education Snapshot",
    body:
      "Singapore Management University, Bachelor of Science in Software Engineering. Current GPA: 3.6 / 4.0. Expected graduation: May 2028.",
    accent: "primary",
  },
  {
    title: "Working Style",
    body:
      "I work best in fast-moving teams that value ownership, communication, and clean architecture. My strongest contributions are full-stack implementation, integration work, and turning rough ideas into usable product flows.",
    accent: "alert",
    span: "full",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-safety-hivemind",
    title: "AI Safety Hivemind",
    tagline:
      "AI-assisted public safety platform for routing reports and machine-detected risk signals.",
    status: "AI safety platform",
    summary:
      "End-to-end public safety workflow that ingests text, audio, image, and video reports, enriches them with AI, and routes incidents to the right agencies faster.",
    problem:
      "Public safety teams lose time when citizen reports, media evidence, and environmental signals arrive in fragmented formats that are hard to triage quickly.",
    role:
      "Built full-stack reporting and triage workflows across Next.js, Express, Python services, and Supabase-backed data handling.",
    challenge:
      "Coordinating speech-to-text, AI enrichment, media analysis, and agency-aware routing across multiple services while keeping reports structured and actionable.",
    outcome:
      "Demonstrated an end-to-end incident workflow that turns text, audio, image, video, and Telegram inputs into dispatch-ready safety reports.",
    stack: ["Next.js", "Node.js", "Express", "Python", "Supabase", "PostgreSQL"],
    metrics: [
      { label: "Inputs", value: "Text, audio, media" },
      { label: "Routing", value: "Agency-aware" },
      { label: "AI Flow", value: "Enriched triage" },
    ],
    links: [
      {
        label: "Live Demo",
        status: "No verified public deployment linked yet.",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ansonpoh/DLW_DNA",
        external: true,
      },
      {
        label: "Case Study",
        href: "/projects#ai-safety-hivemind",
      },
    ],
    preview: {
      eyebrow: "Project Evidence",
      title: "Report intake, AI enrichment, and operational routing.",
      description:
        "Use this area for future product screenshots or dashboard captures from the live reporting and admin workflow.",
    },
    visualTags: ["INCIDENT REPORTING", "AI ENRICHMENT", "AGENCY ROUTING"],
    accent: "#F5D300",
  },
  {
    id: "volunteerconnect-app",
    title: "VolunteerConnect App",
    tagline:
      "Volunteer matching platform with maps, analytics, and AI-assisted coordination features.",
    status: "Volunteer platform",
    summary:
      "Full-stack volunteer platform that helps users discover opportunities through AI-guided matching, map-based browsing, and organizer-facing analytics workflows.",
    problem:
      "Volunteer recruitment is often slow and fragmented, making it hard for people to find suitable opportunities and for NGOs to manage sign-ups efficiently.",
    role:
      "Contributed backend, database, authentication, and AI chat integration work while supporting the broader full-stack experience with Supabase and Express.",
    challenge:
      "Combining recommendation logic, dashboard analytics, mapping flows, and role-based platform workflows into one cohesive student-facing product.",
    outcome:
      "Delivered a full-stack volunteering platform that shows practical product thinking, collaboration, and integration of AI-assisted features into a real user workflow.",
    stack: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "JavaScript"],
    metrics: [
      { label: "Matching", value: "AI-guided" },
      { label: "Discovery", value: "Maps + dashboards" },
      { label: "Delivery", value: "Full-stack" },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://is-216-project.vercel.app",
        external: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ansonpoh/IS216_Project",
        external: true,
      },
      {
        label: "Case Study",
        href: "/projects#volunteerconnect-app",
      },
    ],
    preview: {
      eyebrow: "Preview Area",
      title: "Opportunity discovery, dashboards, and NGO coordination.",
      description:
        "Recommended screenshot targets: volunteer listing, map explorer, dashboard analytics, and AI-assisted chat flow.",
    },
    visualTags: ["VOLUNTEER MATCHING", "INTERACTIVE MAPS", "ANALYTICS"],
    accent: "#00E5FF",
  },
  {
    id: "alpha-67",
    title: "Alpha 67",
    tagline:
      "Game-based learning platform blending Gen Alpha culture with exploration, quests, and progression.",
    status: "Learning platform",
    summary:
      "Interactive learning product combining Phaser gameplay and Spring Boot services to deliver quests, quiz combat, progression systems, and social features.",
    problem:
      "Traditional learning experiences struggle to keep younger audiences engaged, especially when content lacks interactivity, progression, and feedback loops.",
    role:
      "Built game and platform features across the frontend and backend, including interactive progression systems, service integration, and AI-assisted learning support.",
    challenge:
      "Connecting a Phaser-based gameplay layer with Spring Boot microservices, social features, analytics, and AI-assisted content flows without losing usability.",
    outcome:
      "Produced a strong full-stack academic build that demonstrates system integration, game-oriented UX thinking, and team-scale delivery across frontend and backend layers.",
    stack: ["Phaser 3", "Vite", "Java 21", "Spring Boot", "Supabase", "Docker"],
    metrics: [
      { label: "Gameplay", value: "Quiz combat" },
      { label: "Backend", value: "Microservices" },
      { label: "Deployment", value: "Vercel-linked" },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://project-cicrt.vercel.app",
        external: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ansonpoh/CSD_Project",
        external: true,
      },
      {
        label: "Case Study",
        href: "/projects#alpha-67",
      },
    ],
    preview: {
      eyebrow: "Preview Area",
      title: "Maps, quests, and service-backed progression.",
      description:
        "Recommended screenshot targets: world map, NPC dialog, combat quiz flow, leaderboard, and admin content tools.",
    },
    visualTags: ["NPC QUESTS", "QUIZ COMBAT", "SERVICE INTEGRATION"],
    accent: "#FF4D6D",
  },
  {
    id: "rag-service",
    title: "RAG Service",
    tagline:
      "Production-style Retrieval-Augmented Generation backend with multi-tenant auth and streaming responses.",
    status: "RAG backend service",
    summary:
      "Production-style FastAPI RAG backend with tenant-scoped JWT auth, async ingestion, hybrid retrieval, Postgres plus pgvector persistence, and SSE streaming chat.",
    problem:
      "LLM applications often fail in production when retrieval quality, tenant isolation, and response latency are not handled as first-class backend concerns.",
    role:
      "Designed and built a FastAPI-based RAG service with JWT tenant scoping, async ingestion pipelines, and retrieval/chat APIs backed by PostgreSQL + pgvector.",
    challenge:
      "Balancing hybrid retrieval relevance, secure multi-tenant data isolation, and real-time streaming UX while keeping ingestion, indexing, and observability production-ready.",
    outcome:
      "Delivered an end-to-end backend architecture with hybrid vector/keyword search, SSE chat streaming, metrics instrumentation, and a Next.js test client for validation.",
    stack: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "Pytest",
      "Next.js",
      "TypeScript",
    ],
    metrics: [
      { label: "Auth", value: "Multi-tenant JWT" },
      { label: "Retrieval", value: "Hybrid search" },
      { label: "Streaming", value: "SSE chat" },
    ],
    links: [
      {
        label: "Live Demo",
        status: "No verified public deployment linked yet.",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ansonpoh/RAG",
        external: true,
      },
      {
        label: "Case Study",
        href: "/projects#rag-service",
      },
    ],
    preview: {
      eyebrow: "Project Evidence",
      title: "Ingestion, retrieval, and streamed tenant-safe generation.",
      description:
        "Recommended screenshot targets: ingestion queue, retrieval trace outputs, chat streaming interface, and tenant-scoped query or metrics dashboards.",
    },
    visualTags: ["MULTI-TENANT AUTH", "HYBRID RETRIEVAL", "SSE STREAMING"],
    accent: "#FFC857",
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance Management System",
    tagline:
      "JavaFX attendance platform with OpenCV-based face recognition and exportable reports.",
    status: "Attendance system",
    summary:
      "Desktop attendance system that automates enrollment and session tracking with OpenCV-based recognition, role-based access control, and exportable reports.",
    problem:
      "Manual attendance tracking is slow, repetitive, and prone to errors, especially when classes need both administrative oversight and accurate records.",
    role:
      "Built a desktop attendance workflow in JavaFX with OpenCV-based recognition, session handling, and SQLite-backed reporting support.",
    challenge:
      "Combining face-recognition workflows, role-based permissions, and dependable attendance records inside a desktop application with clean modular structure.",
    outcome:
      "Demonstrated practical computer-vision integration in a usable classroom system that reduces manual work and improves attendance tracking accuracy.",
    stack: ["Java", "JavaFX", "OpenCV", "SQLite"],
    metrics: [
      { label: "Recognition", value: "OpenCV-based" },
      { label: "Roles", value: "Admin / Prof / TA" },
      { label: "Reports", value: "CSV / PDF" },
    ],
    links: [
      {
        label: "Live Demo",
        status: "No verified public deployment for this desktop application.",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ansonpoh/smart-attendance-system-G2-group3",
        external: true,
      },
      {
        label: "Case Study",
        href: "/projects#smart-attendance-system",
      },
    ],
    preview: {
      eyebrow: "Preview Area",
      title: "Enrollment, recognition, and session tracking.",
      description:
        "Recommended screenshot targets: enrollment flow, attendance capture screen, session list, and export/report screens.",
    },
    visualTags: ["FACE RECOGNITION", "SESSION TRACKING", "EXPORT REPORTS"],
    accent: "#7CFF6B",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "PHP"],
  },
  {
    title: "Frameworks and Platforms",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Node.js",
      "Express.js",
      "Spring Boot",
    ],
  },
  {
    title: "Engineering Workflow",
    items: [
      "Git",
      "Docker",
      "Kafka",
      "Analytical problem solving",
      "Collaboration",
      "Communication",
    ],
  },
];

export const credentialGroups: CredentialGroup[] = [
  {
    title: "Education and Achievements",
    items: [
      "Singapore Management University, Bachelor of Science in Software Engineering",
      "Current GPA: 3.6 / 4.0",
      "Expected graduation: May 2028",
      "Participant, SMU .HACKathon",
      "Participant, NTU Deep Learning Week",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Google Cybersecurity",
      "Google IT Automation with Python",
      "IBM DevOps and Software Engineering",
      "IBM Data Analyst",
    ],
  },
  {
    title: "Team Sync",
    items: [
      "Builds user-focused applications with scalable foundations",
      "Comfortable across frontend, backend, and product-level decision making",
      "Values clean code, communication, and iterative teamwork",
    ],
  },
];
