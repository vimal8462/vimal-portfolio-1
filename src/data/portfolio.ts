import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Network,
  Rocket,
  ServerCog,
  Settings2,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "AI", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  ".NET 8",
  "Blazor",
  "Clean Architecture",
  "SQL Server",
  "Razorpay / PayU",
  "AWS + IIS",
];

export const metrics = [
  { value: "11+", label: "Years in software engineering and delivery" },
  { value: "8+", label: "Years leading Sri Aurobindo Group platforms" },
  { value: "2", label: "Payment gateways integrated: Razorpay and PayU" },
  { value: "6", label: "Flagship platforms showcased" },
];

export const achievements = [
  {
    title: "Solution Architecture",
    body: "Translate ERP, LMS, reporting, and workflow requirements into maintainable application, API, and data architectures.",
    icon: Layers3,
  },
  {
    title: "Delivery Leadership",
    body: "Own requirements engineering, sprint execution, architecture validation, code governance, deployment, and release readiness.",
    icon: Rocket,
  },
  {
    title: "Secure Engineering",
    body: "Design secure admin panels, role-aware workflows, payment integrations, validation rules, and operational controls.",
    icon: LockKeyhole,
  },
];

export const experience = [
  {
    company: "Sri Aurobindo Group",
    role: "Manager - Software Development",
    period: "Jan 2018 - Jan 2026",
    responsibilities: [
      "Spearheaded architecture, development, and enhancement of enterprise applications built on .NET 8, .NET Core, Blazor, and RESTful API frameworks.",
      "Led cross-functional development teams across requirements, sprint execution, code quality, architecture reviews, version control, and release management.",
      "Designed optimized SQL Server, Azure Database, and MySQL schemas and performance-focused queries for high-traffic systems.",
      "Implemented Razorpay and PayU payment gateway integrations for secure, high-volume online transactions.",
      "Managed deployments across AWS, Linux, IIS, and Plesk with stable configuration and smooth rollout practices.",
      "Modernized applications through Clean Architecture, reusable API frameworks, scalable coding standards, and AI-assisted development workflows.",
    ],
    technologies: [
      ".NET 8",
      ".NET Core 6",
      "Blazor",
      "Web API",
      "React",
      "Next.js",
      "NestJS",
      "SQL Server",
      "MySQL",
      "AWS",
      "IIS",
      "Plesk",
    ],
  },
  {
    company: "Bharat Heavy Electricals Limited (BHEL)",
    role: "Software Developer",
    period: "2015 - 2017",
    responsibilities: [
      "Developed and maintained internal business applications using ASP.NET, C#, and MS SQL Server to streamline operational workflows.",
      "Built MIS dashboards for financial reporting, including Proposed vs Actual Saving metrics for leadership decision-making.",
      "Engineered IT and HR Helpdesk systems that automated request handling and improved ticket resolution efficiency.",
      "Delivered Online Quiz and Visitor Gate Pass portals to improve engagement and administrative convenience.",
    ],
    technologies: ["ASP.NET", "C#", "MS SQL Server", "MIS Dashboards", "jQuery", "IIS"],
  },
  {
    company: "Tech Code Solutions",
    role: "Software Development Trainee",
    period: "2014",
    responsibilities: [
      "Supported ASP.NET and MySQL-based web modules with HTML, CSS, JavaScript, and jQuery UI enhancements.",
      "Implemented functional improvements across existing applications to improve stability and user experience.",
      "Collaborated with backend teams to update core logic, optimize queries, and deliver minor feature enhancements.",
    ],
    technologies: ["ASP.NET", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export const skills = [
  {
    category: "Backend",
    items: [
      { name: ".NET 8 / Core", level: 96 },
      { name: "C#", level: 95 },
      { name: "Web API", level: 94 },
      { name: "Microservices", level: 88 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Blazor UI", level: 90 },
      { name: "React / Next.js", level: 86 },
      { name: "Angular", level: 82 },
      { name: "Bootstrap", level: 84 },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "SQL Server", level: 93 },
      { name: "MySQL", level: 88 },
      { name: "Clean Architecture", level: 90 },
      { name: "AWS / IIS", level: 82 },
    ],
  },
  {
    category: "AI Workflow",
    items: [
      { name: "GitHub Copilot", level: 90 },
      { name: "ChatGPT", level: 92 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Prompt-based Dev", level: 86 },
    ],
  },
];

export const projects = [
  {
    name: "Project Inclusion (PI)",
    description:
      "A national Sri Aurobindo Group initiative empowering teachers and special educators to identify learning difficulties and support inclusive learning environments across India.",
    tech: [".NET", ".NET Core", "Web API", "Microservices", "Clean Architecture", "React", "Node.js", "NestJS", "Blazor", "SQL Server", "MySQL", "AWS"],
    architecture: "Multi-stack platform with .NET APIs, React/NestJS components, admin workflows, role logic, optimized databases, and cloud/IIS/Linux deployment.",
    challenge: "Multiple departments needed one scalable system that could support large user activity, inclusive education workflows, admin controls, and clean governance.",
    solution: "Consolidated requirements, designed scalable technical flows, reviewed .NET/Blazor/React/NestJS code, optimized SQL Server/MySQL/Azure Database structures, and configured admin access logic.",
    result: "Delivered a national-scale inclusion platform with stronger workflow visibility, scalable backend services, and maintainable multi-stack architecture.",
  },
  {
    name: "Learning Management System (LMS)",
    description:
      "A plug-and-play LMS integrated in parallel with Project Inclusion for custom course creation, delivery, and user progress tracking.",
    tech: [".NET", ".NET Core", "Web API", "Microservices", "Clean Architecture", "Blazor", "SQL Server", "AWS", "IIS", "Linux"],
    architecture: "Modular LMS services for courses, users, content, progress tracking, admin panels, and PI platform integration.",
    challenge: "The LMS needed to integrate smoothly with PI while remaining configurable for course, content, and user management.",
    solution: "Led API, workflow, and backend service design; built scalable admin panels and database schemas; managed staging-to-production releases.",
    result: "Enabled course delivery and progress tracking while maintaining uninterrupted rollout cycles and version stability.",
  },
  {
    name: "NCTE",
    description:
      "A government-oriented Sri Aurobindo Group application to evaluate and identify top-performing educational institutions based on Ministry scoring parameters.",
    tech: [".NET", "SQL Server", "Admin Panel", "Reporting", "Workflow Design"],
    architecture: "Evaluation workflow platform with scoring criteria, backend logic, database structures, admin configuration, and reporting interfaces.",
    challenge: "Stakeholders needed scoring parameters mapped accurately into application workflows and reliable reporting.",
    solution: "Gathered requirements, mapped evaluation metrics, developed the full application stack, and optimized platform performance.",
    result: "Supported institutional evaluation with structured workflows, scoring visibility, and administrative control.",
  },
  {
    name: "Director Reporting Dashboard",
    description:
      "A BHEL reporting dashboard that gave Directors and senior leaders direct access to real-time reports from departments and production units.",
    tech: ["ASP.NET", "C#", "MS SQL Server", "MIS Reporting", "Dashboard UI"],
    architecture: "Reporting web application with department data sources, KPI views, admin access modules, and performance-tuned backend workflows.",
    challenge: "Leadership needed direct, fast access to department and production-unit reporting, including Proposed vs Actual Saving views.",
    solution: "Interacted with department heads, defined KPIs and data sources, built the web framework, and tuned backend retrieval.",
    result: "Accelerated leadership decision cycles through high-speed data access and intuitive visualization.",
  },
  {
    name: "IT & HR Helpdesk",
    description:
      "A unified BHEL helpdesk system to automate IT hardware requests and HR service workflows across departments.",
    tech: ["ASP.NET", "C#", "MS SQL Server", "Workflow Routing", "Status Tracking"],
    architecture: "Ticket lifecycle services with role queues, escalation rules, and notification hooks.",
    challenge: "HR and IT requests needed documented approval hierarchies, process dependencies, and reliable ownership.",
    solution: "Designed ticket creation, workflow routing, status tracking, optimized database structures, and efficient backend processing.",
    result: "Improved request handling, ticket resolution efficiency, and process visibility across IT and HR operations.",
  },
  {
    name: "Visitor Gate Pass",
    description:
      "A BHEL user-facing visitor management portal supporting administrative convenience and secure visit tracking.",
    tech: ["ASP.NET", "C#", "MS SQL Server", "Portal UI", "Security"],
    architecture: "Gate operations module connected to approval, visitor logs, and host communication.",
    challenge: "Security teams needed speed at entry points while maintaining accurate records.",
    solution: "Built streamlined capture forms, approval states, and searchable visit history.",
    result: "Improved front-desk throughput and strengthened audit readiness.",
  },
];

export const architectureNodes = [
  { label: "Blazor / React / Next.js", icon: Code2 },
  { label: ".NET 8 API Gateway", icon: Network },
  { label: "Microservices + Modular Services", icon: ServerCog },
  { label: "Integrations + Payment Gateways", icon: GitBranch },
  { label: "SQL Server / MySQL / Azure DB", icon: Database },
  { label: "AWS / IIS / Plesk / Linux", icon: Cloud },
];

export const aiPractices = [
  {
    title: "GitHub Copilot",
    body: "Accelerates boilerplate, unit-test scaffolds, refactors, and API integration work while keeping senior review in the loop.",
    icon: Code2,
  },
  {
    title: "ChatGPT",
    body: "Supports discovery notes, architecture alternatives, debugging hypotheses, and stakeholder-friendly documentation.",
    icon: MessageSquareText,
  },
  {
    title: "Prompt Engineering",
    body: "Creates reusable prompts for code review, SQL tuning, user-story breakdowns, and release checklists.",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise AI Workflow",
    body: "Balances speed with privacy, validation, source control, and human ownership for production systems.",
    icon: Workflow,
  },
];

export const certifications = [
  { title: "Programming in C - NIIT", icon: Code2 },
  { title: "Object-Oriented Programming Using C++ - NIIT", icon: ShieldCheck },
  { title: "Introduction - Cloud Computing - NIIT", icon: Cloud },
];

export const education = [
  { title: "MCA", institution: "SHIATS (Allahabad University)", year: "2019" },
  { title: "B.Sc. (IT)", institution: "KUVEMPU University Bangalore", year: "2014" },
  { title: "Software Engineering", institution: "NIIT National Institute of Information Technology", year: "2014" },
];

export const coreCompetencies = [
  ".NET 8 / .NET Core backend engineering and API ecosystem development",
  "Database and performance optimization across SQL Server, Azure Database, and MySQL",
  "RESTful API design, integration services, modular architecture, and microservices readiness",
  "Scalable ERP system design, admin panels, LMS modules, and multi-module platform delivery",
  "Technical project leadership across SDLC, architecture reviews, code governance, and deployment",
  "Payment gateway integrations with Razorpay and PayU",
];

export const highlights = [
  {
    title: "Scalable REST APIs",
    body: "Designed and deployed API ecosystems that supported user growth while keeping system availability and maintainability in focus.",
    icon: Network,
  },
  {
    title: "Database Performance",
    body: "Optimized SQL Server and MySQL structures, stored procedures, and reporting queries to reduce transaction load and improve reporting efficiency.",
    icon: Database,
  },
  {
    title: "Agile Team Leadership",
    body: "Directed cross-functional Agile teams through sprint execution, architecture validation, release management, and production defect reduction.",
    icon: UsersRound,
  },
  {
    title: "ERP and Admin Platforms",
    body: "Built high-availability ERP modules and secure admin panels that automated manual processes across departments.",
    icon: Settings2,
  },
];

export const softSkills = [
  "Strategic and executive engagement",
  "Stakeholder and client engagement",
  "Collaborative and cross-functional leadership",
  "Adaptability in fast-paced environments",
  "Client relationship building and retention",
  "Creative problem solving",
];

export const techCloud = [
  "C#",
  ".NET 8",
  ".NET Core 6",
  "ASP.NET MVC",
  "Web API",
  "Blazor",
  "EF Core",
  "Dapper",
  "ADO.NET",
  "LINQ",
  "Next.js",
  "React",
  "Angular",
  "Node.js",
  "NestJS",
  "SQL Server",
  "MySQL",
  "Stored Procedures",
  "Razorpay",
  "PayU",
  "AWS",
  "IIS",
  "Plesk",
  "Git",
  "Bitbucket",
  "Jira",
  "Prompt Engineering",
];
