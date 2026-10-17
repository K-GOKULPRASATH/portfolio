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
    slug: "kpr-pip",
    name: "KPR PIP",
    eyebrow: "Placement intelligence platform",
    summary: "A placement platform concept bringing student readiness, learning, assessments, and placement operations into a unified experience.",
    status: "Project / prototype",
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    problem: "Placement preparation and drive operations can be fragmented across separate systems, spreadsheets, and communication channels.",
    solution: "A unified workflow for students, placement staff, and administrators, designed around clear modules and role-aware access.",
    architecture: ["Identity and access", "Student profile and skills", "Learning and assessments", "Placement drives and offers", "Analytics and reporting"],
    highlights: ["Modular domain boundaries", "Student and staff workflows", "Learning and assessment concepts", "Drive management and reporting"],
    github: "https://github.com/K-GOKULPRASATH/KPR_PIP"
  },
  {
    slug: "kpr-coding-platform",
    name: "KPR Coding Platform",
    eyebrow: "Code execution and learning",
    summary: "A coding-practice platform concept with an editor, asynchronous execution queue, and isolated judge boundary.",
    status: "Project / prototype",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Judge0"],
    problem: "Coding practice needs clear execution feedback and a controlled boundary between user-submitted code and the application.",
    solution: "Separate the learning interface from execution orchestration and judge workers, with explicit resource boundaries.",
    architecture: ["React / Monaco editor", "FastAPI application API", "PostgreSQL persistence", "Redis Streams queue", "Judge0 CE worker adapter"],
    highlights: ["Asynchronous execution pipeline", "Submission state and results", "Containerized judge boundary", "Resource limits and disabled submission networking"],
    github: "https://github.com/K-GOKULPRASATH/KPR-Coding-Platform"
  },
  {
    slug: "aisdop",
    name: "AISDOP",
    eyebrow: "AI software development orchestration",
    summary: "A founder-led product direction focused on coordinating software delivery workflows from requirements to deployment and maintenance.",
    status: "Founder vision / evolving product",
    tags: ["AI workflows", "Developer tools", "Automation", "Cloud"],
    problem: "Software delivery connects requirements, planning, implementation, validation, deployment, and operations.",
    solution: "Explore an orchestration platform coordinating these steps while retaining human review and clear operational boundaries.",
    architecture: ["Requirement intake", "Planning and orchestration", "Execution and validation", "Deployment integrations", "Operations and reporting"],
    highlights: ["Founder-led product vision", "Workflow orchestration", "Staged delivery roadmap", "Clear distinction between current and planned features"],
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