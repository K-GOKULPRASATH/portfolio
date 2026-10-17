export const site = {
  name: "Gokul Prasath",
  role: "Software Engineer · Educator · Founder",
  headline: "I build software systems, teach problem-solving, and turn ideas into products.",
  description: "The engineering lab of Gokul Prasath — backend engineering, developer tools, DSA education, and AISDOP.",
  location: "Tamil Nadu, India",
  github: "https://github.com/K-GOKULPRASATH",
  email: "hello@example.com",
  resumePath: "/documents/resume.pdf",
};

export const projects = [
  {
    slug: "quantum-aerospace",
    name: "Quantum Aerospace",
    eyebrow: "Client product · CMS and operations",
    summary: "A multi-application web platform developed through AISDOP for Quantum Aerospace Tech, with a public content experience and an administration workspace.",
    status: "Active development",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "MongoDB", "Cloudinary"],
    problem: "A content-driven aerospace organization needs a public-facing experience while keeping content management, approvals, user permissions, and operational workflows in a controlled admin environment.",
    solution: "A separated public CMS and admin frontend backed by a Spring Boot API, with relational storage for users and permissions, document storage for posts and events, and managed media delivery.",
    architecture: ["Public CMS frontend", "Admin frontend with role-aware access", "Spring Boot REST API", "PostgreSQL for users and permissions", "MongoDB for posts and events", "Cloudinary for media"],
    highlights: ["Developed through AISDOP for Quantum Aerospace Tech", "Separate public and administrative experiences", "Content approval and publishing workflows", "Deployment configuration documented across frontend and backend services"],
    github: "https://github.com/K-GOKULPRASATH/Quantum-Aerospace"
  },
  {
    slug: "kpr-pip",
    name: "KPR PIP",
    eyebrow: "Student data and work tracking",
    summary: "An independently conceived student career and placement platform to organize student information, track work, and bring placement-related workflows into one system.",
    status: "In development · backend foundation",
    tags: ["Java", "Spring Boot", "Modular monolith", "PostgreSQL", "REST APIs"],
    problem: "Student records, career readiness, assigned work, learning activity, and placement operations can become fragmented across spreadsheets and separate tools.",
    solution: "Build a modular platform around student identity, profiles, career development, learning, placement, offers, and analytics, with clear access boundaries for students and staff.",
    architecture: ["Identity and access", "Student records and skills", "Career and learning workflows", "Placement drives and offers", "Analytics and reporting"],
    highlights: ["Product idea initiated independently", "Explicit modular backend boundaries", "Designed around student information and work tracking", "Implementation status is kept distinct from the longer-term product scope"],
    github: "https://github.com/K-GOKULPRASATH/KPR_PIP"
  },
  {
    slug: "kpr-coding-platform",
    name: "KPR Coding Platform",
    eyebrow: "Competitive programming for students",
    summary: "A LeetCode- and GeeksforGeeks-style practice platform for students, designed around coding problems, an editor, submissions, and execution feedback.",
    status: "In development",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis Streams", "AISDOP Compiler"],
    problem: "Students need a focused environment to practice algorithmic problems and receive repeatable feedback without exposing the application to unsafe submitted code.",
    solution: "Separate the student practice interface from API orchestration and code execution. The execution capability is provided by AISDOP Compiler, with the runner treated as a security boundary.",
    architecture: ["Problem library and coding editor", "FastAPI application API", "PostgreSQL problem and submission data", "Redis Streams execution queue", "AISDOP Compiler integration"],
    highlights: ["Built for student coding practice", "Designed for asynchronous submission processing", "Execution isolated behind a dedicated service", "Problem data and hidden tests should remain server-side"],
    github: "https://github.com/K-GOKULPRASATH/KPR-Coding-Platform-"
  },
  {
    slug: "aisdop-compiler",
    name: "AISDOP Compiler",
    eyebrow: "Compiler-as-a-Service",
    summary: "A standalone code-execution service intended to run programming submissions behind a stable API and support AISDOP products including KPR Coding Platform and AI-MAT.",
    status: "In development · security-focused",
    tags: ["Java 21", "Spring Boot", "Docker", "Kubernetes", "gVisor", "REST API"],
    problem: "Products that accept code submissions need a controlled execution service that treats user-provided source as untrusted input.",
    solution: "Provide an API boundary for submissions while designing execution with time and resource limits, non-root processes, restricted networking, and stronger isolation at deployment.",
    architecture: ["Authenticated execution API", "Language and request validation", "Ephemeral execution workspace", "Resource-limited isolated runner", "Product integrations through a stable API"],
    highlights: ["Shared execution capability for KPR Coding Platform and AI-MAT", "Explicitly documents the hostile-code threat model", "Designed around restricted networking and resource limits", "Production isolation requirements are documented separately from local development"],
    github: "https://github.com/K-GOKULPRASATH/AISDOP-Compiler"
  },
  {
    slug: "ai-mat",
    name: "AI-MAT",
    eyebrow: "AISDOP product · AI-monitored aptitude tests",
    summary: "An online aptitude-testing product that combines exam flow with browser-based AI-assisted monitoring and proctoring signals.",
    status: "Product in development",
    tags: ["Next.js", "React", "TensorFlow.js", "Firebase", "Web Workers", "AISDOP Compiler"],
    problem: "Online aptitude assessments need a clear candidate journey and tools to surface possible integrity concerns during a test.",
    solution: "Structure the test journey around consent, room scan, identity capture, assessment, and results, while using client-side models to detect selected visual signals and record review events.",
    architecture: ["Pre-exam consent and environment checks", "Identity capture flow", "Assessment and answer state", "TensorFlow.js models in a Web Worker", "Results and proctoring event summary"],
    highlights: ["Product of AISDOP", "Uses COCO-SSD and BlazeFace according to the repository documentation", "Separates AI inference from the main UI thread", "AISDOP Compiler is part of the wider product ecosystem"],
    github: "https://github.com/K-GOKULPRASATH/AI-MAT"
  },
  {
    slug: "mia",
    name: "MIA — May I Assist",
    eyebrow: "Campus student marketplace",
    summary: "A campus-focused marketplace for students to discover opportunities and task-based rewards within their college community.",
    status: "Early development · Flutter foundation",
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Row-level security"],
    problem: "Students can miss campus opportunities, small tasks, and peer activities when they are shared across disconnected channels.",
    solution: "Create a mobile-first campus experience where opportunities and tasks can be discovered and managed, backed by a data layer with explicit authentication and row-level access policies.",
    architecture: ["Flutter client", "Supabase authentication", "PostgreSQL data model", "Row-level security policies", "Realtime and storage capabilities"],
    highlights: ["Campus-specific student marketplace concept", "Flutter project initialized for mobile and web targets", "Backend integration is still in progress", "Never expose Supabase service-role credentials in the client"],
    github: "https://github.com/K-GOKULPRASATH/MIA"
  },
  {
    slug: "smart-matchmaking-engine",
    name: "SmartMatchmakingEngine",
    eyebrow: "SIH problem statement · candidate matching",
    summary: "A candidate-to-role matching project developed around an SIH problem statement, exploring how assessment performance, skills, and resume information can inform opportunity recommendations.",
    status: "Project prototype · verify integration status",
    tags: ["TypeScript", "Next.js", "Genkit", "Firebase", "Matching algorithms"],
    problem: "Recruitment and opportunity matching need a way to compare candidate evidence with role requirements rather than relying on a single score.",
    solution: "Explore a multi-factor matching pipeline that can normalize assessment results, extract skills from candidate profiles, compare them with role requirements, and present ranked recommendations.",
    architecture: ["Candidate and role inputs", "Score normalization", "Resume and skills extraction", "Weighted matching and ranking", "Recommendations and reporting"],
    highlights: ["Originated from an SIH problem statement", "Designed around explainable matching factors", "README describes AI-MAT assessment data as a potential input", "End-to-end integration and measured outcomes should be verified before claiming them"],
    github: "https://github.com/K-GOKULPRASATH/SmartMatchmakingEngine"
  },
  {
    slug: "document-management-dashboard",
    name: "Document Management Dashboard",
    eyebrow: "SWS AI · interview assignment",
    summary: "A document upload and notification application built as a task assigned during an SWS AI interview round.",
    status: "Interview assignment · prototype",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "Socket.IO", "Multer"],
    problem: "A document workflow needs to accept PDF uploads, persist document metadata, and communicate upload progress and notification state to the user.",
    solution: "Implement a Node/Express backend for single and multiple PDF uploads, persist metadata in PostgreSQL, and use Socket.IO events to report progress and completion to connected clients.",
    architecture: ["React/Vite frontend scaffold", "Express API and upload routes", "Multer PDF validation and local upload storage", "PostgreSQL document and notification tables", "Socket.IO progress and completion events"],
    highlights: ["Built in response to an interview-round task", "Includes single and multi-file upload flows", "Documents API routes and real-time event behavior", "Portfolio status reflects the assignment prototype rather than a production document platform"],
    github: "https://github.com/K-GOKULPRASATH/Document-Management-Dashboard"
  },
  {
    slug: "flinders-ai-medil",
    name: "Flinders AI MEDIL",
    eyebrow: "Hackathon project · Flinders University",
    summary: "A hackathon project developed for a Flinders University event; the team was shortlisted among the top 50 teams in the district, according to the team's account.",
    status: "Hackathon project · shortlisted",
    tags: ["AI", "Hackathon", "Prototype"],
    problem: "The project was developed in response to the hackathon's challenge. The public repository currently contains minimal documentation, so the detailed problem statement and implementation need to be confirmed from the team materials.",
    solution: "The portfolio entry records the project and selection milestone without inventing product features that are not yet documented in the repository.",
    architecture: ["Hackathon problem statement", "Team solution design", "Prototype implementation", "Shortlisting milestone"],
    highlights: ["Developed for a Flinders University hackathon", "Reported shortlist: top 50 in the district", "Detailed stack and personal contribution to be documented from project materials"],
    github: "https://github.com/K-GOKULPRASATH/Flinders-AI-MEDIL"
  },
  {
    slug: "aisdop",
    name: "AISDOP",
    eyebrow: "Founder · AI Software Development Orchestration Platform",
    summary: "A founder-led platform vision to coordinate software delivery workflows, with AISDOP Compiler as one concrete engineering capability in the ecosystem.",
    status: "Founder vision / evolving product",
    tags: ["AI workflows", "Developer tools", "Automation", "Cloud"],
    problem: "Software delivery connects requirements, planning, implementation, validation, deployment, and operations, but those activities often live in disconnected tools.",
    solution: "Explore a platform that coordinates delivery workflows while retaining human review, observable results, and clear operational boundaries.",
    architecture: ["Requirement intake", "Planning and orchestration", "Execution and validation", "Deployment integrations", "Operations and reporting"],
    highlights: ["Founder-led product direction", "AISDOP Compiler is a concrete related service", "Workflow orchestration is presented as an evolving product vision", "Planned capabilities are distinguished from shipped functionality"],
    github: "https://github.com/K-GOKULPRASATH"
  }
] as const;

export const skills = [
  { group: "Backend", items: ["Java", "Spring Boot", "REST APIs", "Python", "FastAPI"] },
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "HTML", "CSS"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { group: "Platform", items: ["Docker", "AWS", "GitHub Actions", "Linux"] },
  { group: "Foundations", items: ["DSA", "OOP", "System Design", "Testing"] }
] as const;
