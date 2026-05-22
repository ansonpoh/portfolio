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

export type SiteProfile = {
  name: string;
  role: string;
  location: string;
  availability: string;
  intro: string;
  tagline: string;
  email: string;
  socials: SocialLink[];
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
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
  summary: string;
  role: string;
  status: string;
  stack: string[];
  highlights: string[];
  metrics?: ProjectMetric[];
  links?: SocialLink[];
  visualKey: "signal" | "grid" | "trace";
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
  role: "Software Engineering Student and Full-Stack Web Developer",
  location: "Singapore",
  availability: "Open to software engineering internships and collaborative product builds.",
  intro:
    "Year 3 Software Engineering student at Singapore Management University with hands-on experience building scalable, user-focused web applications.",
  tagline:
    "I build practical full-stack products with modern frameworks, clear interfaces, and AI-assisted features that solve real user problems.",
  email: "ansonpoh0909@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/ansonpoh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anson-poh/" },
  ],
  ctaPrimaryLabel: "Email Anson",
  ctaSecondaryLabel: "View Projects",
  heroFacts: [
    { label: "Featured Projects", value: "3 shipped concepts" },
    { label: "Academic Standing", value: "GPA 3.6 / 4.0" },
    { label: "Graduation", value: "May 2028" },
  ],
  heroReadouts: [
    {
      label: "Strength",
      text: "Full-stack delivery across React, Next.js, Node.js, Express, Spring Boot, Supabase, and SQL-backed application flows.",
    },
    {
      label: "Edge",
      text: "Projects pair product thinking with AI-powered workflows, interactive experiences, and clean implementation discipline.",
    },
  ],
  signalTags: ["AI features", "Full-stack delivery", "Collaborative builds"],
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
      "Driven to solve complex problems through clean, efficient code and thoughtful collaboration. I focus on building products that stay useful under real user constraints.",
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
      "Analytical problem solving, fast iteration, and strong communication. I care about scalable architecture, readable code, and interfaces that stay intuitive as features grow.",
    accent: "alert",
    span: "full",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-safety-hivemind",
    title: "AI Safety Hivemind",
    tagline: "AI-powered public safety platform for routing incident reports to the right agencies.",
    summary:
      "Built an AI-driven public safety intelligence platform that combines human-reported incidents and machine-detected signals into a unified operational workflow. The system was developed with Next.js, Node.js/Express, Python microservices, Supabase, and PostgreSQL, integrating speech-to-text processing, OpenAI-powered report enrichment, and YOLO-based computer vision to analyze audio, image, and video inputs. It supports location-aware incident reporting, automated detection, intelligent triage, prioritization, and admin oversight to enable faster, more context-rich public safety decision-making.",
    role: "Full-stack web development with Python, Next.js, and Supabase",
    status: "Public safety platform",
    stack: ["Python", "Next.js", "Supabase"],
    highlights: [
      "Built an incident reporting flow that collects structured public safety inputs from users.",
      "Combined live submissions with risk signals to support smarter response decisions.",
      "Focused the product around clear routing and usable information handoff.",
    ],
    metrics: [
      { label: "Inputs", value: "Live reports" },
      { label: "Routing", value: "Agency-aware" },
      { label: "Signal", value: "Risk-based" },
    ],
    visualKey: "signal",
    visualTags: ["INCIDENT ROUTING", "RISK SIGNALS", "PUBLIC SAFETY"],
    accent: "#F5D300",
  },
  {
    id: "volunteerconnect",
    title: "VolunteerConnect App",
    tagline: "Volunteer matching platform with analytics, maps, and AI-assisted coordination.",
    summary:
      "Built VolunteerConnect, a full-stack volunteering platform that helps students and young adults discover suitable volunteer opportunities while enabling NGOs to manage events and sign-ups more efficiently. The system uses React, JavaScript, Node.js/Express, Supabase, and PostgreSQL, with features including secure authentication, AI-powered opportunity recommendations, an interactive Google Maps-based opportunity explorer, volunteer and organiser dashboards, community sharing, event registration tracking, and analytics visualisations for popular categories, regions, and volunteering trends.",
    role: "Frontend and backend implementation with React, Supabase, and Express",
    status: "Volunteer platform",
    stack: ["React", "Supabase", "Express"],
    highlights: [
      "Built AI-driven recommendations for volunteer matching and organiser workflows.",
      "Integrated analytics dashboards and interactive maps for stronger platform visibility.",
      "Added a custom LLM assistant to improve user engagement and decision-making.",
    ],
    metrics: [
      { label: "Matching", value: "AI-driven" },
      { label: "Maps", value: "Interactive" },
      { label: "Assistant", value: "Custom LLM" },
    ],
    visualKey: "grid",
    visualTags: ["VOLUNTEER MATCHING", "ANALYTICS", "MAP WORKFLOWS"],
    accent: "#00E5FF",
  },
  {
    id: "alpha-67",
    title: "Alpha 67",
    tagline: "Game-based learning platform blending Gen Alpha culture with interactive progression.",
    summary:
      "Designed and built an interactive game-based learning platform that teaches Gen Alpha culture through map exploration, NPC interactions, quests, and combat-style quiz encounters. The platform combines a Phaser 3 and Vite frontend with Java 21 Spring Boot microservices, supporting learner progression, quizzes, achievements, leaderboards, chat, admin moderation, analytics, content publishing, and AI-assisted narration, moderation, question generation, reflection review, chatbot support, and contextual learning hints.",
    role: "Game and platform development with Phaser 3, Spring Boot, Java 21, Vite, and Supabase",
    status: "Learning platform",
    stack: ["Phaser 3", "Vite", "Java 21", "Spring Boot", "Supabase"],
    highlights: [
      "Built interactive maps, NPC encounters, and quiz-based combat with progression systems.",
      "Supported social platform features on top of a microservices backend architecture.",
      "Applied AI for content generation, moderation, reflection review, chatbot support, and guided quiz hints.",
    ],
    metrics: [
      { label: "Gameplay", value: "Quiz combat" },
      { label: "World", value: "Interactive maps" },
      { label: "Backend", value: "Microservices" },
    ],
    visualKey: "trace",
    visualTags: ["NPC ENCOUNTERS", "QUIZ COMBAT", "AI MODERATION"],
    accent: "#FF4D6D",
  },
  {
    id: "smart-attendance-management-system",
    title: "Smart Attendance Management System",
    tagline:
      "JavaFX attendance platform that automates classroom tracking with OpenCV-based face recognition.",
    summary:
      "Built a smart attendance management system in JavaFX that automates classroom attendance through OpenCV-based face detection and recognition. The application supports student enrollment, class and session management, automatic and manual attendance marking, role-based access for admins, professors, and TAs, and exportable attendance reports using SQLite-backed data storage. Designed with modular OOP principles and a clean architecture, the system improves attendance tracking accuracy, reduces manual administrative work, and provides a more efficient workflow for managing class participation records.",
    role: "Desktop application engineering with JavaFX, OpenCV, and SQLite-backed attendance workflows",
    status: "Attendance platform",
    stack: ["Java", "JavaFX", "OpenCV", "SQLite"],
    highlights: [
      "Built face detection and recognition flows to automate classroom attendance capture.",
      "Supported student enrollment, class and session management, and both automatic and manual attendance marking.",
      "Implemented role-based access control and exportable reporting to streamline administrative workflows.",
    ],
    metrics: [
      { label: "Attendance", value: "Face-recognized" },
      { label: "Access", value: "Role-based" },
      { label: "Reports", value: "Exportable" },
    ],
    visualKey: "signal",
    visualTags: ["FACE RECOGNITION", "ROLE ACCESS", "ATTENDANCE REPORTS"],
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
    items: ["Git", "Docker", "Kafka", "Analytical problem solving", "Collaboration", "Communication"],
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
    title: "Collaboration Signal",
    items: [
      "Builds user-focused applications with scalable foundations",
      "Comfortable across frontend, backend, and product-level decision making",
      "Values clean code, communication, and iterative teamwork",
    ],
  },
];
