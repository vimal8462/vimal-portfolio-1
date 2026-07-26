import {
  Braces,
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
  Server,
  ServerCog,
  Settings2,
  UsersRound,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "AI Engineering", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  ".NET 8 / Core",
  "Microservices",
  "Web APIs",
  "Blazor / React",
  "Clean Architecture",
  "Database Engineering",
  "Payment Gateways",
  "Cloud Deployment",
];

export const metrics = [
  {
    value: "10+",
    label: "Years of Software Engineering",
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
    value: "10+",
    label: "Core Technologies",
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
    title: "Enterprise Software Engineering",
    body: "Design and develop scalable ERP, LMS, administrative, and enterprise applications using modern .NET technologies, APIs, microservices, and maintainable engineering practices.",
    icon: LockKeyhole,
  },
  {
    title: "Engineering Leadership",
    body: "Lead cross-functional teams through technical planning, Agile delivery, code reviews, mentoring, deployment, production support, and release management.",
    icon: Rocket,
  },
  {
    title: "Enterprise Architecture",
    body: "Contribute to application architecture through Clean Architecture, modular design, service boundaries, integration patterns, database design, and scalable backend solutions",
    icon: Layers3,
  },
];

export const experience = [
  {
    company: "Sri Aurobindo Group",
    role: "Software Development Manager",
    period: "Jan 2018 - Jan 2026",

    summary:
      "Led engineering, technical delivery, modernization, and application architecture across enterprise platforms spanning ERP, LMS, government applications, workflow systems, administrative portals, APIs, payment integrations, databases, and cloud-hosted environments.",

    responsibilityGroups: [
      {
        title: "Engineering & Architecture",
        items: [
          "Led end-to-end engineering, development, modernization, application architecture, and production delivery of enterprise applications using .NET 8, ASP.NET Core, C#, Blazor, REST APIs, microservices, React, Node.js, and modern engineering practices.",

          "Designed modular and maintainable application architectures using Clean Architecture, reusable backend services, separation of concerns, SOLID principles, and scalable coding standards.",

          "Designed, developed, and governed REST APIs and backend services supporting enterprise applications, frontend platforms, administrative systems, third-party integrations, and workflow-driven modules.",
        ],
      },

      {
        title: "Technical & Team Leadership",
        items: [
          "Translated complex business and stakeholder requirements into scalable technical solutions, application workflows, database models, API contracts, administrative modules, and implementation roadmaps.",

          "Led engineering planning and sprint execution through Jira, including task planning, prioritization, work distribution, progress tracking, and coordination across development team members.",

          "Managed collaborative development and source-code versioning workflows using Git and Bitbucket, including branching, code integration, change tracking, and release coordination.",

          "Conducted multi-stack code and architecture reviews across backend, APIs, databases, Blazor, React, and other application layers to maintain coding standards, security, performance, architectural consistency, and maintainability.",

          "Conducted technical training and knowledge-sharing sessions for development teams, covering application architecture, coding standards, development practices, tools, and technology adoption.",

          "Established engineering governance across architecture, API design, database practices, development standards, performance optimization, quality assurance, and production readiness.",
        ],
      },

      {
        title: "Data, Security & Integrations",
        items: [
          "Designed and optimized SQL Server, MySQL, and Azure-hosted databases, including schema design, stored procedures, queries, indexing, and data-access patterns for transactional and reporting workloads.",

          "Designed secure application and administrative workflows incorporating authentication, authorization, role-based access control (RBAC), validation, configurable permissions, and operational controls.",

          "Implemented and maintained Razorpay and PayU payment gateway integrations, supporting secure online transaction and payment workflows.",
        ],
      },

      {
        title: "Platforms & Production Delivery",
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
      { name: ".NET / .NET Core", level: 85 },
      { name: "Web API", level: 85 },
      { name: "Database", level: 90 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Blazor", level: 75 },
      { name: "React / Next.js", level: 45 },
      { name: "Angular", level: 45 },
      { name: "JavaScript / TypeScript", level: 40 },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "Microservices", level: 80 },
      { name: "Design Patterns", level: 50 },
      { name: "Clean Architecture", level: 80 },
      { name: "API Architecture", level: 86 },
    ],
  },
  {
    category: "AI Engineering",
    items: [
      { name: "GitHub Copilot", level: 76 },
      { name: "ChatGPT", level: 77 },
      { name: "Prompt Engineering", level: 70 },
      { name: "AI-Assisted Development", level: 80 },
    ],
  },
];

export const projects = [
  //Project Inclusion (PI) - Sri Aurobindo Group
  {
    name: "Project Inclusion (PI)",
    organization: "Sri Aurobindo Group",
    description:
      "A nationwide inclusive-education initiative by Sri Aurobindo Society that equips teachers and parents to identify and support children with learning difficulties and neurodevelopmental disorders through structured training, screening, interventions, and digital platforms.",
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
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Multi-stack platform combining .NET APIs, React/NestJS components, Blazor administration modules, role-based workflows, optimized databases, and cloud and on-premises deployment environments.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Multiple functional teams required a scalable platform capable of supporting high user activity, inclusive education workflows, administrative controls, and structured access governance.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Consolidated requirements, designed scalable application workflows, reviewed .NET, Blazor, React, and NestJS implementations, optimized database structures, and configured role-based administrative access.",
        ],
      },
      {
        title: "Result",
        items: [
          "Delivered a maintainable national-scale platform with structured workflows, scalable backend services, centralized administration, and improved operational visibility.",
        ],
      },
    ],
  },

  //Learning Management System (LMS) - Sri Aurobindo Group
  {
    name: "Learning Management System (LMS)",
    organization: "Sri Aurobindo Group",
    description:
      "A configurable learning management platform integrated alongside Project Inclusion to support course creation, content delivery, user management, and learning progress tracking.",
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
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Modular LMS architecture supporting courses, users, learning content, progress tracking, administration, and integration with the Project Inclusion ecosystem.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "The LMS needed to integrate with Project Inclusion while remaining configurable and independently manageable for courses, content, users, and administrative workflows.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Led API, workflow, backend service, administration, and database design while coordinating staging and production releases.",
        ],
      },
      {
        title: "Result",
        items: [
          "Established an integrated learning platform supporting structured course delivery, progress tracking, centralized administration, and controlled release management.",
        ],
      },
    ],
  },

  //NCTE Platform - Sri Aurobindo Group
  {
    name: "NCTE Platform",
    organization: "Sri Aurobindo Group",
    description:
      "An institutional evaluation platform developed to assess educational institutions using defined Ministry scoring parameters and structured evaluation workflows.",
    tech: [".NET", "SQL Server", "Admin Panel", "Reporting", "Workflow Design"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Evaluation workflow platform combining scoring criteria, application logic, database structures, administrative configuration, and reporting interfaces.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Complex institutional evaluation parameters needed to be translated accurately into application workflows, scoring rules, and reliable reporting.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Gathered requirements, mapped evaluation parameters into system workflows, developed application modules and database logic, and optimized application performance.",
        ],
      },
      {
        title: "Result",
        items: [
          "Enabled structured institutional evaluation with configurable scoring workflows, reporting visibility, and centralized administrative control.",
        ],
      },
    ],
  },

  //ZIIEI - Sri Aurobindo Group
  {
    name: "ZIIEI",
    organization: "Sri Aurobindo Group",
    description:
      "A nationwide education initiative platform designed to collect and support innovative ideas aimed at improving teaching practices and educational outcomes across India.",
    tech: ["ASP.NET", "SQL Server", "JavaScript", "jQuery", "CSS"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Web-based education platform supporting idea submission, information management, administrative workflows, and centralized data processing.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "The initiative operated at a national scale and required a centralized platform to support education-improvement ideas and related administrative processes.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Contributed to application development and supporting workflows for managing educational innovation data and platform functionality.",
        ],
      },
      {
        title: "Result",
        items: [
          "Supported a nationwide digital initiative focused on collecting and managing ideas for improving education.",
        ],
      },
    ],
  },

  //iGuardian - School ERP - Sri Aurobindo Group
  {
    name: "iGuardian - School ERP",
    organization: "Sri Aurobindo Group",
    description:
      "A comprehensive school ERP platform deployed across 20+ schools to manage academic, administrative, attendance, transport, library, examination, fee, and staff operations.",
    tech: ["ASP.NET", "MySQL", "JavaScript", "jQuery", "CSS", "CoreFTP"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Multi-module school ERP integrating student and staff management, attendance, transport, admissions, library, examinations, fees, reporting, and administrative workflows within a centralized platform.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Multiple schools required a common platform capable of managing diverse academic and administrative processes while supporting institution-specific operational requirements.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Performed new development, application maintenance, interface design, backend development, database management, and deployment across multiple ERP modules.",
        ],
      },
      {
        title: "Result",
        items: [
          "Supported centralized academic and administrative operations across 20+ schools through an extensible multi-module ERP platform.",
        ],
      },
      {
        title: "Key Modules",
        items: [
          "Student and Staff Management",
          "Student, Staff, and Employee Attendance",
          "Transport Management",
          "Leave Management",
          "Library Management",
          "Admission Tracker",
          "Transfer Certificate (TC) Management",
          "Seating Arrangement",
          "Staff Duty and Period Management",
          "Live Fee Management",
          "Marks Entry and Report Card Management",
        ],
      },
    ],
  },

  //Online Fee Portal - Sri Aurobindo Group
  {
    name: "Online Fee Portal",
    organization: "Sri Aurobindo Group",
    description:
      "A web-based fee management portal developed to support online school fee-related operations and associated administrative processes.",
    tech: ["ASP.NET", "MySQL", "JavaScript", "jQuery", "CSS", "CoreFTP"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Web-based fee management application integrating user-facing interfaces, server-side processing, MySQL data management, and deployment workflows.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "School fee processes required a dedicated online platform capable of simplifying fee-related operations and centralized record management.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Designed and developed application functionality, managed database structures, and handled application deployment.",
        ],
      },
      {
        title: "Result",
        items: [
          "Provided a centralized digital platform for managing online fee-related workflows and administrative records.",
        ],
      },
    ],
  },

  //Director Reporting Dashboard - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "Director Reporting Dashboard",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "A management reporting platform providing Directors and senior leadership with centralized access to departmental and production-unit reports.",
    tech: ["ASP.NET", "C#", "SQL Server", "MIS Reporting", "Dashboard UI"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Reporting web application integrating departmental data sources, management reports, KPI views, administrative access, and optimized database retrieval.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Leadership required centralized and timely access to operational and departmental reporting without relying on fragmented reporting processes.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Collaborated with departmental stakeholders, mapped reporting requirements and data sources, developed reporting modules, and optimized backend data retrieval.",
        ],
      },
      {
        title: "Result",
        items: [
          "Improved management access to operational information through centralized reporting, structured dashboards, and streamlined data retrieval.",
        ],
      },
    ],
  },

  //IT & HR Helpdesk - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "IT & HR Helpdesk",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "An enterprise helpdesk platform developed to automate IT hardware requests and HR service workflows across departments.",
    tech: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "Workflow Routing",
      "Status Tracking",
    ],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Workflow-driven helpdesk platform supporting request lifecycles, role-based queues, routing, status management, and administrative tracking.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "IT and HR service requests required structured ownership, approval workflows, status visibility, and centralized tracking.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Developed request creation, workflow routing, status tracking, database structures, and backend processing for departmental service workflows.",
        ],
      },
      {
        title: "Result",
        items: [
          "Streamlined request handling and provided improved visibility into IT and HR service workflows and request status.",
        ],
      },
    ],
  },

  //Visitor Gate Pass System - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "Visitor Gate Pass System",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "An internal visitor management portal developed to support visitor registration, approval workflows, gate operations, and visit tracking.",
    tech: ["ASP.NET", "C#", "SQL Server", "JavaScript", "jQuery", "Bootstrap"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Visitor management application connecting registration, approval workflows, visitor records, gate operations, and administrative tracking.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Gate and administrative teams required an efficient process for recording visitors while maintaining accurate and searchable visit information.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Developed visitor registration forms, approval workflows, database records, administrative functionality, and searchable visit history.",
        ],
      },
      {
        title: "Result",
        items: [
          "Digitized visitor registration and tracking while improving administrative visibility and record accessibility.",
        ],
      },
    ],
  },

  //Online Quiz Portal - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "Online Quiz Portal",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "An internal web-based quiz platform developed to support online assessments and employee engagement activities.",
    tech: ["ASP.NET", "C#", "SQL Server", "JavaScript", "jQuery", "Bootstrap"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Web-based assessment application supporting quiz configuration, user participation, response processing, scoring, and result management.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "The organization required a centralized digital mechanism for conducting quizzes and managing participant responses and results.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Developed quiz interfaces, backend processing, database structures, scoring logic, and result-management functionality.",
        ],
      },
      {
        title: "Result",
        items: [
          "Enabled structured online quiz administration and centralized management of participation and results.",
        ],
      },
    ],
  },

  //Finance Proposed & Actual Saving - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "Finance Proposed & Actual Saving",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "A financial reporting application developed for the Finance Department to manage proposed budgets and compare them with actual savings and losses for a financial year.",
    tech: ["ASP.NET", "SQL Server"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Finance-focused web application combining budget data capture, financial calculations, SQL Server data management, and proposed-versus-actual reporting.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "The Finance Department required a structured mechanism to record proposed financial figures and compare them with actual savings and losses across a financial year.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Gathered requirements, coordinated with stakeholders, designed and developed the application, and managed the underlying database structures.",
        ],
      },
      {
        title: "Result",
        items: [
          "Centralized proposed-versus-actual financial information and provided clearer visibility into annual savings and losses.",
        ],
      },
    ],
  },

  //Services Dashboard - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "Services Dashboard",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "An internal BHEL dashboard developed to centralize service-related operational information and reporting.",
    tech: ["ASP.NET", "SQL Server"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Internal dashboard application designed around centralized service information, database-driven reporting, and departmental access.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Service-related operational information required a centralized interface for easier access and management reporting.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Contributed to the development and maintenance of the dashboard and its supporting database-driven functionality.",
        ],
      },
      {
        title: "Result",
        items: [
          "Provided a centralized dashboard for accessing and reviewing service-related operational information.",
        ],
      },
    ],
  },

  //Engineering Dashboard - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "Engineering Dashboard",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "An engineering application developed to support drawing-related calculations, blueprint management, measurement submission, cost estimation, and work-hour calculations.",
    tech: ["ASP.NET", "SQL Server"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Engineering workflow application combining drawing and blueprint management, measurement processing, calculation logic, and centralized database storage.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Engineering teams relied on manual processes for drawing calculations, blueprint handling, measurements, cost calculations, and work-hour estimation.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Developed workflows for blueprint uploads, drawing measurements, calculation processing, cost measurement, and work-hour management.",
        ],
      },
      {
        title: "Result",
        items: [
          "Reduced dependency on manual engineering calculations and centralized drawing-related information and measurement workflows.",
        ],
      },
    ],
  },

  //Project Group (PG) Portal - Bharat Heavy Electricals Limited (BHEL)
  {
    name: "Project Group (PG) Portal",
    organization: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "A large internal project management portal developed to replace fragmented Excel-based project tracking with a centralized platform for multiple BHEL project groups.",
    tech: ["ASP.NET", "SQL Server", "JavaScript", "jQuery", "CSS"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "Large-scale internal portal with 300+ pages covering project data entry, modification workflows, summary views, database management, and multi-level reporting.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Multiple project groups maintained project information independently in Excel files, making centralized tracking, reporting, and maintenance difficult.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Gathered requirements, coordinated with project groups, designed and developed centralized project workflows, implemented database structures and multi-level reports, and supported deployment.",
        ],
      },
      {
        title: "Result",
        items: [
          "Replaced fragmented spreadsheet-based tracking with a centralized project information platform, improving maintainability and cross-group reporting.",
        ],
      },
    ],
  },

  //VedIPE - Tech Code Solutions
  {
    name: "VedIPE",
    organization: "Tech Code Solutions",
    description:
      "A web application supported during the early stage of my software development career, involving application maintenance, backend enhancements, database queries, and frontend improvements.",
    tech: ["ASP.NET", "C#", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"],
    projectDetails: [
      {
        title: "Architecture",
        items: [
          "ASP.NET web application with server-side business logic, MySQL data access, and browser-based user interfaces.",
        ],
      },
      {
        title: "Challenge",
        items: [
          "Existing application modules required ongoing maintenance, defect resolution, and incremental functional improvements.",
        ],
      },
      {
        title: "Solution",
        items: [
          "Supported application enhancements, updated backend logic, optimized database queries, resolved defects, and implemented frontend improvements.",
        ],
      },
      {
        title: "Result",
        items: [
          "Contributed to application stability, usability, and incremental feature delivery while building foundational professional development experience.",
        ],
      },
    ],
  },
];

export const architectureNodes = [
  { title: "PRESENTATION", label: "Blazor / React / Next.js", icon: Code2 },
  {
    title: "API LAYER",
    label: ".NET 8 / ASP.NET Core Web APIs",
    icon: Network,
  },
  {
    title: "APPLICATION & SERVICES",
    label: "Microservices / Modular Services",
    icon: ServerCog,
  },
  {
    title: "INTEGRATIONS",
    label: "External Integrations / Payment Gateways",
    icon: GitBranch,
  },
  {
    title: "DATA",
    label: "SQL Server / MySQL / Cosmos DB / MongoDB",
    icon: Database,
  },
  {
    title: "INFRASTRUCTURE",
    label: "AWS / IIS / Linux / On-Premises",
    icon: Cloud,
  },
];

export const aiPractices = [
  {
    title: "GitHub Copilot",
    body: "Accelerates code generation, unit-test scaffolding, refactoring, and API integration while keeping engineering review and validation in the loop.",
    icon: Code2,
  },
  {
    title: "ChatGPT",
    body: "Supports technical exploration, architecture evaluation, debugging, documentation, and structured problem-solving across the development lifecycle.",
    icon: MessageSquareText,
  },
  {
    title: "Prompt Engineering",
    body: "Creates structured and reusable prompts for code review, SQL optimization, requirement analysis, debugging, documentation, and development workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise AI Workflow",
    body: "Integrates AI-assisted development with code review, validation, source control, security considerations, and human ownership for production systems.",
    icon: Workflow,
  },
];

export const certifications = [
  {
    title: "Software Engineering - NIIT",
    icon: Code2,
  },
  {
    title: "Virtualization Towards a Greener IT Infrastructure - NIIT",
    icon: Server,
  },
  {
    title: "Programming in C - NIIT",
    icon: Code2,
  },
  {
    title: "Object-Oriented Programming Using C++ - NIIT",
    icon: Braces,
  },
  {
    title: "Introduction - Cloud Computing - NIIT",
    icon: Cloud,
  },
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
  "Database engineering and performance optimization across SQL Server, Azure SQL Database, and MySQL",
  "RESTful API design, integration services, modular architecture, and microservices",
  "Scalable ERP system design, admin panels, LMS modules, and multi-module platform delivery",
  "Technical project leadership across the SDLC, architecture reviews, code governance, and deployment",
  "Payment gateway integration with Razorpay and PayU",
];

export const highlights = [
  {
    title: "Scalable REST APIs",
    body: "Designed and deployed scalable API ecosystems with a focus on performance, availability, maintainability, and seamless system integration.",
    icon: Network,
  },
  {
    title: "Database Performance",
    body: "Optimized SQL Server and MySQL databases, stored procedures, queries, and reporting workflows to improve application performance and data retrieval efficiency.",
    icon: Database,
  },
  {
    title: "Agile Team Leadership",
    body: "Led cross-functional Agile teams across sprint planning and execution, architecture reviews, code quality, release management, and production support.",
    icon: UsersRound,
  },
  {
    title: "ERP & Admin Platforms",
    body: "Designed and delivered scalable ERP modules and secure administrative platforms that streamlined business processes across multiple departments.",
    icon: Settings2,
  },
];

export const softSkills = [
  "Strategic & Executive Communication",
  "Stakeholder & Client Engagement",
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
    category: "DEVOPS, DEPLOYMENT & INFRASTRUCTURE",
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
    category: "LEADERSHIP & PROFESSIONAL SKILLS",
    items: softSkills,
  },
];
