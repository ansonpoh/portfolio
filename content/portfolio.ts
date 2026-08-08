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

export type ProjectLink = {
  label: string;
  href?: string;
  status?: string;
  external?: boolean;
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
};

export type AboutCard = {
  title: string;
  body: string;
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
  role: "Software Engineering student building full-stack products across web, backend, and applied AI.",
  location: "Singapore",
  availability:
    "Open to software engineering roles and collaborative full-stack product work.",
  intro:
    "Year 3 Software Engineering student at Singapore Management University, focused on full-stack development, AI-assisted systems, and automation.",
  tagline:
    "I turn clear user problems into practical web platforms, backend services, and AI-assisted workflows.",
  email: "ansonpoh0909@gmail.com",
  resumeHref: "/AnsonPoh_Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/ansonpoh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anson-poh/" },
  ],
  heroFacts: [
    { label: "Featured Projects", value: "7 featured projects" },
    { label: "Academic Standing", value: "GPA 3.62 / 4.0" },
    { label: "Graduation", value: "May 2028" },
  ],
};

export const portfolioNavItems: PortfolioNavItem[] = [
  { href: "/#hero", sectionId: "hero", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export const aboutCards: AboutCard[] = [
  {
    title: "Profile",
    body:
      "I build software around clear user problems, readable implementation, and dependable delivery. My work spans frontend experiences, backend services, integrations, and AI-assisted workflows.",
  },
  {
    title: "Education Snapshot",
    body:
      "Singapore Management University, Bachelor of Science in Software Engineering. Current GPA: 3.62 / 4.0. Expected graduation: May 2028.",
  },
  {
    title: "Working Style",
    body:
      "I work best in teams that value ownership, communication, and clean architecture. I contribute most through full-stack implementation, integrations, and turning rough ideas into usable product flows.",
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
    ],
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
    ],
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
    ],
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
    ],
  },
  {
    id: "focus-tracker-agent",
    title: "Focus Tracker Agent",
    tagline:
      "Local Windows productivity tracker with adaptive nudges, privacy-first monitoring, and scheduled reporting.",
    status: "Productivity system",
    summary:
      "Local-first Windows tracking tool that samples active-window usage, classifies focus versus distraction, stores activity in SQLite, sends gentle nudges, and generates daily, weekly, and monthly reports.",
    problem:
      "People trying to improve focus often rely on manual reflection or invasive trackers, making it hard to understand work habits without sacrificing privacy or adding friction.",
    role:
      "Built the end-to-end desktop tracking workflow, including activity observation, classification logic, SQLite persistence, adaptive coaching behaviors, and scheduled report generation.",
    challenge:
      "Balancing useful productivity insights with privacy-first local storage, while combining heuristic rules, optional OpenAI-assisted classification, and notification-driven interventions in a dependable Windows workflow.",
    outcome:
      "Delivered a practical personal productivity system that keeps all tracking local by default, avoids keystroke or screenshot capture, and turns foreground-window activity into actionable focus reports.",
    stack: [
      "Python",
      "SQLite",
      "OpenAI API",
      "Docker",
      "Windows APIs",
      "Desktop Notifications",
    ],
    metrics: [
      { label: "Storage", value: "Local SQLite" },
      { label: "Reports", value: "Daily to monthly" },
      { label: "Privacy", value: "No screenshots" },
    ],
    links: [
      {
        label: "Live Demo",
        status: "No verified public deployment for this local Windows application.",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ansonpoh/Focus_Tracker_Agent",
        external: true,
      },
    ],
  },
  {
    id: "gmail-agent-assistant",
    title: "Gmail Agent Assistant",
    tagline:
      "Telegram-operated Gmail workflow assistant for triage, digests, follow-up tracking, and safe draft generation.",
    status: "Workflow assistant",
    summary:
      "Backend-first Gmail assistant that runs through Telegram, syncs and analyzes emails, generates digests and draft replies, tracks follow-ups, and enforces a strict manual-send workflow.",
    problem:
      "Inbox management becomes slow and fragmented when important emails, follow-up tasks, and reply drafting all happen across separate tools without a structured review loop.",
    role:
      "Built the backend orchestration across FastAPI services, Gmail and Telegram integrations, background job processing, and AI-assisted analysis flows with explicit approval boundaries.",
    challenge:
      "Coordinating OAuth, Gmail read and draft workflows, async digest generation, follow-up tracking, and Telegram-based operations while maintaining clear safety constraints and no automatic email sending.",
    outcome:
      "Delivered a practical communication workflow assistant that improves inbox triage and reply preparation without removing the user from the final approval and send decision.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "Celery",
      "Telegram Bot API",
      "Gmail API",
      "OpenAI API",
      "Docker",
    ],
    metrics: [
      { label: "Interface", value: "Telegram-first" },
      { label: "Email Access", value: "Read + draft only" },
      { label: "Jobs", value: "Async processing" },
    ],
    links: [
      {
        label: "Live Demo",
        status: "No verified public deployment linked yet.",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ansonpoh/email_agent",
        external: true,
      },
    ],
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
    ],
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
      "FastAPI",
    ],
  },
  {
    title: "Engineering Workflow",
    items: [
      "Git",
      "Docker",
      "Kafka",
      "AWS",
      "Redis",
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
      "Current GPA: 3.62 / 4.0",
      "Expected graduation: May 2028",
      "Participant, SMU .HACKathon",
      "Participant, NTU Deep Learning Week",
    ],
  },
  {
    title: "Certifications",
    items: [
      "AWS Certified Solutions Architect – Associate",
      "Google Cybersecurity",
      "Google IT Automation with Python",
      "IBM DevOps and Software Engineering",
      "IBM Data Analyst",
    ],
  },
  {
    title: "Engineering Approach",
    items: [
      "Builds user-focused applications with scalable foundations",
      "Comfortable across frontend, backend, and product-level decision making",
      "Values clean code, communication, and iterative teamwork",
    ],
  },
];
