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
  { label: "AI Lab", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  ".NET 8",
  "Blazor",
  "Clean Architecture",
  "Database Optimization",
  "Payment Gateways",
  "Cloud Deployment",
  "Node.js | React",
];

export const metrics = [
  {
    value: "10+",
    label: "Years of Enterprise Software Engineering",
  },
  {
    value: "100+",
    label: "REST APIs & Backend Services",
  },
  {
    value: "20+",
    label: "Enterprise Applications Delivered",
  },
  {
    value: "15+",
    label: "Enterprise Modules Developed",
  },
  {
    value: "15+",
    label: "Modern Frameworks & Technologies",
  },
  {
    value: "6+",
    label: "Enterprise Platforms",
  },
  {
    value: "4+",
    label: "Payment Gateway Integrations",
  },
  {
    value: "3",
    label: "Cloud & Deployment Platforms",
  },
];

export const achievements = [
  {
    title: "Enterprise Architecture",
    body: "Design scalable ERP, LMS, and government platforms using Clean Architecture, Microservices, and modern .NET technologies.",
    icon: Layers3,
  },
  {
    title: "Engineering Leadership",
    body: "Lead cross-functional teams through architecture, Agile delivery, code reviews, mentoring, deployment, and release management.",
    icon: Rocket,
  },
  {
    title: "Secure Software Engineering",
    body: "Develop secure, high-performance applications with authentication, RBAC, payment integrations, and optimized backend services.",
    icon: LockKeyhole,
  },
];

export const experience = [
  {
    company: "Sri Aurobindo Group",
    role: "Software Development Manager",
    period: "Jan 2018 - Jan 2026",

    summary:
      "Led architecture, engineering, modernization, and delivery of enterprise platforms spanning ERP, LMS, government applications, workflow systems, administrative portals, APIs, payment integrations, databases, and cloud-hosted environments.",

    responsibilityGroups: [
      {
        title: "Architecture & Engineering",
        items: [
          "Led end-to-end architecture, development, modernization, and production delivery of enterprise applications using .NET 8, ASP.NET Core, C#, Blazor, REST APIs, Microservices, React, Node.js, and modern architectural practices.",

          "Designed modular and maintainable application architectures using Clean Architecture, reusable backend services, separation of concerns, SOLID principles, and scalable coding standards.",

          "Designed, developed, and governed REST APIs and backend services supporting enterprise applications, frontend platforms, administrative systems, third-party integrations, and workflow-driven modules.",
        ],
      },

      {
        title: "Technical Leadership",
        items: [
          "Translated complex business and stakeholder requirements into scalable technical solutions, application workflows, database models, API contracts, administrative modules, and implementation roadmaps.",

          "Directed cross-functional engineering activities across requirements analysis, solution design, sprint planning, development, code reviews, integration, testing, deployment, and production release management.",

          "Managed engineering tasks and sprint execution through Jira, including task planning, prioritization, work distribution, progress tracking, and coordination across development team members.",

          "Managed source-code versioning and collaborative development workflows using Git and Bitbucket, including branching, code integration, change tracking, and release coordination.",

          "Conducted code reviews across backend, API, database, Blazor, React, and other application layers to maintain code quality, architectural consistency, security, performance, and maintainability.",

          "Conducted technical training and knowledge-sharing sessions for development teams, covering application architecture, coding standards, development practices, tools, and technology adoption.",

          "Established and enforced engineering standards through architecture reviews, multi-stack code reviews, source-control practices, API governance, database standards, performance optimization, and release readiness.",
        ],
      },

      {
        title: "Data & Security",
        items: [
          "Architected and optimized SQL Server, MySQL, and Azure-hosted databases, including schema design, stored procedures, queries, indexing, and data-access patterns for transactional and reporting workloads.",

          "Designed secure application and administrative workflows incorporating authentication, authorization, role-based access control (RBAC), validation, configurable permissions, and operational controls.",

          "Implemented and maintained Razorpay and PayU payment gateway integrations, supporting secure online transaction and payment workflows.",
        ],
      },

      {
        title: "Platforms & Delivery",
        items: [
          "Led engineering of ERP modules, Learning Management Systems, administrative portals, reporting dashboards, workflow automation, role-based systems, and data-intensive enterprise applications.",

          "Managed application deployments and production environments across AWS, Linux, IIS, and Plesk, including configuration management, release rollouts, environment readiness, troubleshooting, and production support.",

          "Worked across Blazor, React, Angular, Next.js, Node.js, and NestJS ecosystems while maintaining .NET as the primary enterprise backend and application platform.",
        ],
      },

      {
        title: "AI-Assisted Engineering",
        items: [
          "Applied AI-assisted engineering practices using GitHub Copilot, ChatGPT, and prompt-driven workflows to accelerate development, analysis, refactoring, modernization, and technical problem-solving.",
        ],
      },
    ],

    keyProjects: [
      "Project Inclusion",
      "Learning Management System (LMS)",
      "NCTE Platform",
      "Iguardian School ERP",
    ],

    technologies: [
      ".NET 8",
      "ASP.NET Core",
      "ASP.NET Framework",
      "C#",
      "Blazor",
      "REST APIs",
      "Microservices",
      "Clean Architecture",
      "React",
      "Angular",
      "Next.js",
      "Node.js",
      "NestJS",
      "SQL Server",
      "MySQL",
      "Azure SQL",
      "AWS",
      "Linux",
      "IIS",
      "Plesk",
      "In-house Server",
    ],
  },

  {
    company: "Mother Dairy Distribution",
    role: "Independent Distributor / Business Owner",
    period: "Apr 2017 - Jan 2018",

    summary:
      "Operated an independent Mother Dairy distribution business in the Sector 63, Noida region, managing end-to-end distribution operations, sales, retailer relationships, and daily supply coordination.",

    responsibilityGroups: [
      {
        title: "BUSINESS OPERATIONS",
        items: [
          "Managed day-to-day distribution operations for Mother Dairy products across the assigned Sector 63, Noida territory.",
          "Coordinated product availability, order fulfillment, and timely distribution to retailers and local customers.",
        ],
      },
      {
        title: "SALES & DISTRIBUTION",
        items: [
          "Managed territory-level sales and distribution while maintaining consistent product availability across the assigned market.",
          "Monitored daily sales, demand patterns, and inventory requirements to support efficient stock planning and minimize supply gaps.",
        ],
      },
      {
        title: "RETAILER & CUSTOMER RELATIONSHIPS",
        items: [
          "Built and maintained relationships with retailers and customers, addressing operational requirements and service-related concerns.",
          "Coordinated with retail partners to understand demand, manage orders, and maintain reliable distribution service.",
        ],
      },
      {
        title: "SUPPLY CHAIN & INVENTORY",
        items: [
          "Managed inventory movement, stock requirements, and distribution planning based on daily market demand.",
          "Coordinated supply and delivery activities to maintain operational continuity and timely product availability.",
        ],
      },
    ],

    keyProjects: ["Mother Dairy Distribution"],

    technologies: [
      "Business Operations",
      "Distribution",
      "Sales",
      "Customer Relationship Management",
      "Inventory Management",
      "Supply Chain",
    ],
  },

  {
    company: "Bharat Heavy Electricals Limited (BHEL)",
    role: "Software Developer",
    period: "Jan 2015 - Mar 2017",

    summary:
      "Developed enterprise applications, reporting systems, workflow automation solutions, and internal portals supporting operational, IT, HR, and management functions.",

    responsibilityGroups: [
      {
        title: "Application Development",
        items: [
          "Developed and maintained enterprise web applications using ASP.NET, C#, ADO.NET, and SQL Server to streamline operational and administrative workflows.",

          "Delivered user-facing applications including Online Quiz and Visitor Gate Pass portals to improve administrative efficiency and employee engagement.",

          "Implemented reusable application components, server-side business logic, form validations, and role-based functionality across internal enterprise applications.",
        ],
      },

      {
        title: "Database & Backend Development",
        items: [
          "Designed and maintained SQL Server database structures, including tables, relationships, stored procedures, functions, and views supporting enterprise applications.",

          "Developed optimized SQL queries and data-access components using ADO.NET for transactional processing, reporting, and application workflows.",

          "Handled data validation, transaction processing, and database-level business rules to maintain consistency and reliability across application modules.",
        ],
      },
      {
        title: "Reporting & Data",
        items: [
          "Built MIS dashboards and management reports for financial and operational reporting, including Proposed vs Actual Saving metrics to support leadership decision-making.",

          "Developed dynamic reporting modules with filtering, aggregation, and data presentation capabilities for operational and management applications.",

          "Translated business reporting requirements into SQL-driven reports and dashboards, enabling stakeholders to monitor operational information more effectively.",
        ],
      },

      {
        title: "Workflow Automation",
        items: [
          "Engineered IT and HR Helpdesk systems that automated request handling, workflow routing, status tracking, and administrative processes.",

          "Implemented workflow-driven modules for request submission, assignment, processing, status updates, and closure, reducing dependency on manual tracking.",

          "Developed role-based application workflows that provided appropriate functionality and information access to employees, administrators, and departmental users.",
        ],
      },

      {
        title: "Application Support & Optimization",
        items: [
          "Investigated and resolved application defects, database issues, and production incidents across deployed enterprise applications.",

          "Enhanced existing applications based on evolving departmental requirements, user feedback, and operational needs.",

          "Improved application performance through SQL query optimization, code-level enhancements, and database tuning for frequently used modules and reports.",
        ],
      },

      {
        title: "Deployment & Maintenance",
        items: [
          "Supported application deployment and configuration on IIS, including environment-specific application settings and production releases.",

          "Performed application maintenance, troubleshooting, and post-deployment validation to ensure reliable operation of internal business systems.",
        ],
      },
    ],

    keyProjects: [
      "Director Reporting Dashboard",
      "IT & HR Helpdesk",
      "Online Quiz Portal",
      "Visitor Gate Pass System",
    ],

    technologies: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "ADO.NET",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "IIS",
    ],
  },

  {
    company: "Tech Code Solutions",
    role: "Software Development Trainee",
    period: "Aug 2014 - Jan 2015",

    summary:
      "Began my professional software development career by contributing to existing web applications, backend logic, database queries, and frontend enhancements.",

    responsibilityGroups: [
      {
        title: "Development & Maintenance",
        items: [
          "Supported ASP.NET and MySQL-based web applications while implementing UI enhancements using HTML, CSS, JavaScript, and jQuery.",

          "Implemented functional improvements across existing applications to improve stability and user experience.",

          "Collaborated with development teams to update backend logic, optimize database queries, resolve defects, and deliver incremental feature enhancements.",
        ],
      },
    ],

    keyProjects: ["VedIPE"],

    technologies: [
      "ASP.NET",
      "C#",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
    ],
  },
];

export const skills = [
  {
    category: "Backend",
    items: [
      { name: "C#", level: 85 },
      { name: ".NET / .NET Core", level: 75 },
      { name: "Web API", level: 80 },
      { name: "Database", level: 86 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Blazor", level: 79 },
      { name: "React / Next.js", level: 52 },
      { name: "Angular", level: 45 },
      { name: "JavaScript / TypeScript", level: 61 },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "Clean Architecture", level: 77 },
      { name: "Microservices", level: 80 },
      { name: "Design Patterns", level: 52 },
      { name: "API Architecture", level: 86 },
    ],
  },
  {
    category: "AI Engineering",
    items: [
      { name: "GitHub Copilot", level: 79 },
      { name: "ChatGPT", level: 78 },
      { name: "Prompt Engineering", level: 77 },
      { name: "AI-Assisted Development", level: 86 },
    ],
  },
];

export const projects = [
  {
    name: "Project Inclusion (PI)",
    description:
      "A national Sri Aurobindo Group initiative empowering teachers and special educators to identify learning difficulties and support inclusive learning environments across India.",
    tech: [
      ".NET",
      ".NET Core",
      "Web API",
      "Microservices",
      "Clean Architecture",
      "React",
      "Node.js",
      "NestJS",
      "Blazor",
      "SQL Server",
      "MySQL",
      "AWS",
    ],
    architecture:
      "Multi-stack platform with .NET APIs, React/NestJS components, admin workflows, role logic, optimized databases, and cloud/IIS/Linux deployment.",
    challenge:
      "Multiple departments needed one scalable system that could support large user activity, inclusive education workflows, admin controls, and clean governance.",
    solution:
      "Consolidated requirements, designed scalable technical flows, reviewed .NET/Blazor/React/NestJS code, optimized SQL Server/MySQL/Azure Database structures, and configured admin access logic.",
    result:
      "Delivered a national-scale inclusion platform with stronger workflow visibility, scalable backend services, and maintainable multi-stack architecture.",
  },
  {
    name: "Learning Management System (LMS)",
    description:
      "A plug-and-play LMS integrated in parallel with Project Inclusion for custom course creation, delivery, and user progress tracking.",
    tech: [
      ".NET",
      ".NET Core",
      "Web API",
      "Microservices",
      "Clean Architecture",
      "Blazor",
      "SQL Server",
      "AWS",
      "IIS",
      "Linux",
    ],
    architecture:
      "Modular LMS services for courses, users, content, progress tracking, admin panels, and PI platform integration.",
    challenge:
      "The LMS needed to integrate smoothly with PI while remaining configurable for course, content, and user management.",
    solution:
      "Led API, workflow, and backend service design; built scalable admin panels and database schemas; managed staging-to-production releases.",
    result:
      "Enabled course delivery and progress tracking while maintaining uninterrupted rollout cycles and version stability.",
  },
  {
    name: "NCTE",
    description:
      "A government-oriented Sri Aurobindo Group application to evaluate and identify top-performing educational institutions based on Ministry scoring parameters.",
    tech: [".NET", "SQL Server", "Admin Panel", "Reporting", "Workflow Design"],
    architecture:
      "Evaluation workflow platform with scoring criteria, backend logic, database structures, admin configuration, and reporting interfaces.",
    challenge:
      "Stakeholders needed scoring parameters mapped accurately into application workflows and reliable reporting.",
    solution:
      "Gathered requirements, mapped evaluation metrics, developed the full application stack, and optimized platform performance.",
    result:
      "Supported institutional evaluation with structured workflows, scoring visibility, and administrative control.",
  },
  {
    name: "Director Reporting Dashboard",
    description:
      "A BHEL reporting dashboard that gave Directors and senior leaders direct access to real-time reports from departments and production units.",
    tech: ["ASP.NET", "C#", "MS SQL Server", "MIS Reporting", "Dashboard UI"],
    architecture:
      "Reporting web application with department data sources, KPI views, admin access modules, and performance-tuned backend workflows.",
    challenge:
      "Leadership needed direct, fast access to department and production-unit reporting, including Proposed vs Actual Saving views.",
    solution:
      "Interacted with department heads, defined KPIs and data sources, built the web framework, and tuned backend retrieval.",
    result:
      "Accelerated leadership decision cycles through high-speed data access and intuitive visualization.",
  },
  {
    name: "IT & HR Helpdesk",
    description:
      "A unified BHEL helpdesk system to automate IT hardware requests and HR service workflows across departments.",
    tech: [
      "ASP.NET",
      "C#",
      "MS SQL Server",
      "Workflow Routing",
      "Status Tracking",
    ],
    architecture:
      "Ticket lifecycle services with role queues, escalation rules, and notification hooks.",
    challenge:
      "HR and IT requests needed documented approval hierarchies, process dependencies, and reliable ownership.",
    solution:
      "Designed ticket creation, workflow routing, status tracking, optimized database structures, and efficient backend processing.",
    result:
      "Improved request handling, ticket resolution efficiency, and process visibility across IT and HR operations.",
  },
  {
    name: "Visitor Gate Pass",
    description:
      "A BHEL user-facing visitor management portal supporting administrative convenience and secure visit tracking.",
    tech: ["ASP.NET", "C#", "MS SQL Server", "Portal UI", "Security"],
    architecture:
      "Gate operations module connected to approval, visitor logs, and host communication.",
    challenge:
      "Security teams needed speed at entry points while maintaining accurate records.",
    solution:
      "Built streamlined capture forms, approval states, and searchable visit history.",
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
  {
    title: "B.Sc. (IT)",
    institution: "KUVEMPU University Bangalore",
    year: "2014",
  },
  {
    title: "Software Engineering",
    institution: "NIIT National Institute of Information Technology",
    year: "2014",
  },
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
  "Strategic & Executive Communication",
  "Stakeholder Management",
  "Cross-Functional Leadership",
  "Adaptability & Continuous Learning",
  "Client Relationship Management",
  "Problem Solving & Decision-Making",
];

export const techCloud = [
  {
    category: ".NET Competencies",
    items: [
      "C#",
      "ASP.NET",
      ".NET 8",
      ".NET 6",
      "ASP.NET MVC",
      "Web API",
      "ADO.NET",
      "EF Core",
      "Dapper",
      "LINQ",
      "REST APIs",
    ],
  },

  {
    category: "Frontend",
    items: [
      "Blazor",
      "React",
      "Next.js",
      "Angular",
      "JavaScript / TypeScript",
      "jQuery",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },

  {
    category: "Architecture",
    items: [
      "Microservices Architecture",
      "Clean Architecture",
      "Design Patterns",
      "API Architecture",
    ],
  },

  {
    category: "Database Engineering",
    items: [
      "SQL Server",
      "MySQL",
      "MongoDB",
      "Cosmos DB",
      "Stored Procedures",
      "SQL Functions",
      "Database Optimization",
    ],
  },

  {
    category: "AI-Assisted Engineering",
    items: [
      "AI-Assisted Development",
      "Prompt Engineering",
      "GitHub Copilot",
      "ChatGPT",
      "Prompt-Driven Workflows",
    ],
  },

  {
    category: "DevOps & Infrastructure",
    items: [
      "Git",
      "Bitbucket",
      "IIS",
      "Plesk",
      "AWS",
      "Linux",
      "On-Premises Infrastructure",
    ],
  },

  {
    category: "Payment Gateways",
    items: ["Razorpay", "PayU", "BillDesk"],
  },

  {
    category: "Project & Engineering Tools",
    items: [
      "Jira",
      "Visual Studio",
      "VS Code",
      "Postman",
      "Swagger / OpenAPI",
      "Figma",
      "Trello",
      "Slack",
      "Microsoft Teams",
      "SQL Server Management Studio",
      "MySQL Workbench",
      "Azure Data Studio",
      "GitHub Desktop",
      "RDP / SSH Clients",
    ],
  },

  {
    category: "Soft Skills",
    items: softSkills,
  },
];
