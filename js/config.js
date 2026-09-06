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
        email: "mubashir.farooq.dev@example.com", // User can replace with real email
    },
    
    socials: {
        github: "https://github.com/github_link_here",
        linkedin: "https://linkedin.com/in/linkedin_link_here",
        upwork: "https://upwork.com/freelancers/upwork_profile_here",
        email: "mailto:mubashir.farooq.dev@example.com"
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
            id: "thermorail",
            title: "ThermoRail / RailGuard",
            subtitle: "Railway Heatwave Monitoring & Speed Restriction Analytics",
            category: "Database & IoT Backend",
            featured: true,
            badge: "Featured Prototype",
            description: "A comprehensive prototype system designed to monitor railway track heatwave risks. Computes real-time thermal stress calculation models, predicts track buckling risks, and automatically triggers speed restriction analytics for safety compliance.",
            tags: ["Python", "SQL / Relational DB", "Backend Analytics", "Risk Modeling", "Data Viz"],
            highlights: [
                "Real-time mathematical heat stress and risk calculation model",
                "Automated speed restriction recommendation engine based on temperature thresholds",
                "Relational database schema optimized for time-series thermal sensor data",
                "Interactive telemetry dashboard with alert triggers"
            ],
            githubUrl: "github_link_here",
            liveUrl: "live_demo_link_here",
            accentColor: "emerald"
        },
        {
            id: "fortyguard",
            title: "FortyGuard Hackathon Project",
            subtitle: "Climate Risk Assessment & Heat Analytics Platform",
            category: "Hackathon & Data Solutions",
            featured: true,
            badge: "Hackathon Submission",
            description: "An innovative risk-assessment and heat-monitoring platform engineered under strict competitive hackathon constraints. Built to evaluate urban heat island impacts and provide data-driven mitigation insights.",
            tags: ["Data Extraction", "Python", "Spatial Analytics", "SQL", "Rapid Prototyping"],
            highlights: [
                "Rapidly developed under tight 48-hour competitive hackathon deadlines",
                "Integrated spatial data points to analyze local temperature anomalies",
                "Engineered scalable data ingestion handlers for rapid analysis",
                "Presented high-impact visualization metrics for urban climate risk"
            ],
            githubUrl: "github_link_here",
            liveUrl: "live_demo_link_here",
            accentColor: "cyan"
        },
        {
            id: "ecommerce",
            title: "E-Commerce System Platform",
            subtitle: "Full-Stack E-Commerce Solution with Robust DB Schema",
            category: "Full-Stack & Database",
            featured: true,
            badge: "Full-Stack App",
            description: "A fully functional e-commerce web application featuring inventory management, relational product schemas, cart processing, and admin order fulfillment controls. Fully version-controlled via GitHub.",
            tags: ["JavaScript / Node.js", "SQL Database", "REST APIs", "E-Commerce", "Admin Panel"],
            highlights: [
                "Normalized database design supporting multi-category inventory & orders",
                "Secure RESTful API endpoints for user authentication & checkout logic",
                "Admin dashboard section for inventory management & order status updates",
                "Clean modular architecture with clean Git commit history"
            ],
            githubUrl: "github_link_here",
            liveUrl: "live_demo_link_here",
            accentColor: "indigo"
        },
        {
            id: "scraping-suite",
            title: "Web Scraping & Automation Suite",
            subtitle: "Automated Data Harvesting & ETL Pipeline Tooling",
            category: "Data & Automation",
            featured: true,
            badge: "Python Tooling",
            description: "A custom Python-powered data scraping and extraction suite built for automated web crawling, multi-threaded request processing, pagination handling, and structured data output (JSON/CSV/SQL DB).",
            tags: ["Python", "BeautifulSoup / Selenium", "Data Extraction", "ETL Pipelines", "Automation"],
            highlights: [
                "Custom anti-rate limiting & header rotation mechanics",
                "Automated data cleaning, deduplication, and database insertion",
                "Export pipelines supporting JSON, CSV, and direct SQL table sync",
                "CLI & GUI options for non-technical execution"
            ],
            githubUrl: "github_link_here",
            liveUrl: "live_demo_link_here",
            accentColor: "teal"
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
