/**
 * Developer Portfolio Configuration
 * Muhammad Mubashir Farooq
 * 
 * Edit this file to easily update your links, social media profiles,
 * project details, and core information across the portfolio.
 */

const PORTFOLIO_CONFIG = {
    personal: {
        name: "Muhammad Mubashir Farooq",
        title: "Database & Backend Developer | Software Engineering Student",
        shortTagline: "Database & Backend Developer | Software Engineering Student | Web Scraping & Data Solutions Specialist",
        bioHeading: "Architecting Robust Databases, Scalable Backends & Automated Data Pipelines",
        aboutText: `I am an enthusiastic Computer Science (BSCS) undergraduate at Ilma University with a strong core focus on database management architecture, backend systems development, and data-driven software solutions. Combining academic rigor with practical problem-solving, I also engage in part-time teaching which refines my analytical foundations and ability to break down complex technical paradigms into clear, efficient systems.`,
        university: "Ilma University",
        degree: "Bachelor of Science in Computer Science (BSCS)",
        semester: "Currently Enrolled (2nd Semester Onwards)",
        location: "Karachi, Pakistan",
        email: "mubashir.farooq.dev@example.com",
    },
    
 socials: {
    github: "https://github.com/muhammadmubashirfarooq",
    linkedin: "https://linkedin.com/in/muhammad-mubashir-709489405/",
    upwork: "https://www.upwork.com/freelancers/~01ffc5c0e631593d30?mp_source=share",
    email: "mailto:muhammadmubashirf2006@gmail.com"
},

    skills: [
        {
            category: "Core & Programming",
            icon: "code-2",
            items: [
                { name: "C", level: 85, exp: "Core Syntax & Pointers", icon: "c" },
                { name: "C++", level: 90, exp: "OOP & Algorithmic Problem Solving", icon: "cpp" },
                { name: "Java", level: 88, exp: "Object-Oriented Programming & Core Systems", icon: "java" },
                { name: "Python", level: 92, exp: "Data Extraction, Automation & Scripting", icon: "python" },
                { name: "JavaScript", level: 82, exp: "ES6+, Node.js & Async Programming", icon: "javascript" }
            ]
        },
        {
            category: "Backend & Database",
            icon: "database",
            items: [
                { name: "Database Architecture", level: 92, exp: "Relational Modeling, Normalization & ERD", icon: "database" },
                { name: "SQL & Query Optimization", level: 95, exp: "Complex Joins, Indexing, Triggers & Stored Procedures", icon: "sql" },
                { name: "Backend Systems", level: 86, exp: "REST API Design, Node.js, Express & Architecture", icon: "backend" },
                { name: "Admin Panel Integration", level: 88, exp: "Custom Dashboard Mockups, Dynamic Data Tables & Metrics", icon: "layout" }
            ]
        },
        {
            category: "Specialized & Automation",
            icon: "cpu",
            items: [
                { name: "Web Scraping & Extraction", level: 94, exp: "BeautifulSoup, Selenium, Scrapy & Anti-bot handling", icon: "spider" },
                { name: "Data Automation", level: 90, exp: "Custom Python ETL Scripts, Task Schedulers & Pipelines", icon: "workflow" },
                { name: "Data Science Workflows", level: 84, exp: "NumPy, Pandas, Data Cleaning & Analytics (NED Certified)", icon: "bar-chart" },
                { name: "Agentic AI & Future Paradigms", level: 80, exp: "LLM Orchestration, Prompt Engineering & AI Workflows", icon: "bot" }
            ]
        }
    ],

    projects: [
        {
            id: "ecommerce-fullstack",
            title: "Full-Stack E-Commerce Platform",
            subtitle: "Scalable Online Store with Admin & Checkout Systems",
            category: "Full-Stack & Database",
            featured: true,
            badge: "Full-Stack App",
            description: "A complete backend-driven e-commerce platform built with Node.js and Express, integrated with relational SQL database schemas for order tracking, inventory management, and secure API auth flows.",
            tags: ["Node.js", "Express", "SQL / MySQL", "REST APIs", "E-Commerce"],
            highlights: [
                "Normalized database design for orders, users, and product catalog",
                "Secure RESTful authentication and user cart session handling",
                "Admin panel endpoints for inventory management and fulfillment"
            ],
            githubUrl: "https://github.com/muhammadmubashirfarooq/ecommerce-nodejs-api",
            liveUrl: null,
            accentColor: "indigo"
        },
        {
            id: "shop-co",
            title: "Shop.co E-Commerce Platform",
            subtitle: "Pixel-Complete Full-Stack Application",
            category: "Full-Stack & Database",
            featured: true,
            badge: "Full-Stack App",
            description: "A pixel-complete e-commerce application inspired by Shop.co design, featuring product filtering, cart management, dynamic checkout logic, and normalized database architecture.",
            tags: ["JavaScript", "Node.js", "Express", "SQL Database", "Tailwind CSS"],
            highlights: [
                "Modular RESTful API endpoints for products and user checkout",
                "Clean database schemas for inventory and dynamic categories",
                "Full Git version control with structured commit workflows"
            ],
            githubUrl: "https://github.com/muhammadmubashirfarooq/shop_co-ecommerce",
            liveUrl: "https://shop-co-ecommerce.vercel.app",
            accentColor: "purple"
        },
        {
            id: "thermorail",
            title: "ThermoRail / RailGuard",
            subtitle: "Railway Heatwave Monitoring & Speed Restriction Analytics",
            category: "Database & IoT Backend",
            featured: true,
            badge: "Featured Prototype",
            description: "A customized prototype system designed to monitor railway track heatwave risks using mathematical thermal calculations, predicting track buckling, and executing speed restriction alerts.",
            tags: ["Python", "SQL / Relational DB", "Backend Analytics", "Risk Modeling"],
            highlights: [
                "Real-time mathematical heat stress and risk calculation engine",
                "Automated speed restriction recommendation triggers based on thermal thresholds",
                "Relational schema optimized for time-series sensor telemetry data"
            ],
            githubUrl:"https://github.com/muhammadmubashirfarooq/Thermorail-",
            liveUrl: "https://thermo-rail.vercel.app/",
            accentColor: "emerald"
        },
        {
            id: "web-scraping-suite",
            title: "Automated Web Scraping & Extraction Suite",
            subtitle: "Multi-Threaded Data Harvesting Engine",
            category: "Web Scraping & Automation",
            featured: true,
            badge: "Python Tooling",
            description: "Custom Python automated scraping solution built for harvesting structured datasets from complex websites, bypassing anti-bot measures, and transforming raw unstructured web data into clean tabular formats.",
            tags: ["Python", "BeautifulSoup", "Selenium", "Data Extraction", "Anti-Bot"],
            highlights: [
                "Custom rate limiting, proxy management, and user-agent rotation",
                "Automated data parsing, deduplication, and data transformation scripts",
                "Exports directly to structured JSON, CSV, and SQL database tables"
            ],
            githubUrl: null,
            liveUrl: null,
            accentColor: "cyan"
        },
        {
            id: "database-design-architecture",
            title: "Enterprise Relational Database Architecture",
            subtitle: "3NF Schema Design & SQL Optimization",
            category: "Database Engineering",
            featured: true,
            badge: "Database System",
            description: "Comprehensive relational database design featuring complete 3NF normalization, optimized indexing, custom triggers, stored procedures, and dynamic view queries for high-throughput transactional applications.",
            tags: ["MySQL", "Database Normalization", "Indexing", "Stored Procedures", "Triggers"],
            highlights: [
                "3NF schema normalization minimizing redundant data storage",
                "B-Tree index tuning reducing complex multi-table query latencies",
                "Automated audit logging triggers for data integrity and security"
            ],
            githubUrl: null,
            liveUrl: null,
            accentColor: "teal"
        },
        {
            id: "rest-api-microservices",
            title: "RESTful API & Microservice Backend",
            subtitle: "Scalable API Design & Middleware Pipeline",
            category: "Backend Systems",
            featured: true,
            badge: "Backend API",
            description: "Modular Express.js backend architecture delivering structured REST APIs, custom middleware for rate limiting and logging, JWT authentication, and structured error-handling pipelines.",
            tags: ["Node.js", "Express.js", "REST API", "JWT Auth", "Middleware"],
            highlights: [
                "Standardized JSON error-handling and request validation middlewares",
                "JWT-based stateless authentication and role-based access control",
                "Optimized database query handlers for fast request fulfillment"
            ],
            githubUrl: null,
            liveUrl: null,
            accentColor: "indigo"
        },
        {
            id: "etl-data-pipeline",
            title: "Custom ETL & Data Automation Pipeline",
            subtitle: "Automated Data Ingestion & Transformation Engine",
            category: "Data Engineering",
            featured: true,
            badge: "Data Pipeline",
            description: "An automated ETL (Extract, Transform, Load) processing script designed to clean messy datasets, execute mathematical data validation, and populate analytical databases on scheduled interval triggers.",
            tags: ["Python", "Pandas", "ETL Pipelines", "Data Cleaning", "Automation"],
            highlights: [
                "Automated scheduled ingestion of raw external data sources",
                "Robust null-value handling, type casting, and schema validation",
                "Seamless pipeline integration into centralized relational data stores"
            ],
            githubUrl: null,
            liveUrl: null,
            accentColor: "amber"
        }
    ],

    education: [
        {
            institution: "Ilma University",
            degree: "Bachelor of Science in Computer Science (BSCS)",
            period: "Currently Enrolled (2nd Semester Onwards)",
            status: "Enrolled",
            highlights: [
                "Focusing on Object-Oriented Programming (C++/Java), Data Structures & Database Management Systems",
                "Engaging in peer mentoring and foundational CS core projects",
                "Active participation in coding clubs and backend system design workshops"
            ]
        },
        {
            institution: "NED University of Engineering & Technology",
            degree: "Data Science Training Course Certification",
            period: "PITP Phase II Batch I",
            status: "Certified",
            highlights: [
                "Comprehensive hands-on training in Data Science methodology, Python for Data Analysis & SQL",
                "Explored predictive modeling, statistics, data manipulation with Pandas & NumPy",
                "Completed practical capstone dataset analytics project"
            ]
        }
    ],

    continuousLearning: [
        "Agentic AI Frameworks & LLM Automation Paradigms",
        "Advanced Database Indexing, Query Optimization & Sharding",
        "Enterprise Backend Architecture & Microservices Foundations",
        "Systemic Teaching & Technical Pedagogy"
    ]
};

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;