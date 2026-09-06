# Muhammad Mubashir Farooq - Developer Portfolio & Database Admin Panel

A modern, dark-themed, responsive developer portfolio website for **Muhammad Mubashir Farooq** featuring an interactive **Database & Backend Admin Panel Dashboard** mockup.

## 🚀 Key Features

- **Sleek Dark Slate Design System**: Built with CSS custom properties, glassmorphism cards (`backdrop-filter`), neon cyan & emerald green accents, and clean typography (*Inter* & *JetBrains Mono*).
- **Terminal Code Typewriter**: Dynamic hero section widget simulating live SQL & Python backend execution commands.
- **Categorized Skills**: Filterable skill cards (*Core Programming*, *Backend & Database*, *Specialized & Automation*) with animated proficiency bars.
- **Featured Projects Showcase**:
  - **ThermoRail / RailGuard**: Railway heatwave monitoring, thermal stress models & speed restriction analytics.
  - **FortyGuard Hackathon Project**: Climate risk assessment & urban heat analytics platform.
  - **E-Commerce Platform**: Full-stack application with normalized SQL database design.
  - **Web Scraping & Automation Suite**: Custom Python multi-threaded data harvesting tools.
- **Interactive Admin Panel Mockup**:
  - **SQL Query Simulator**: Preset query execution (*ThermoRail Logs*, *Scraping Queue*, *E-Commerce Orders*, *DB Audit*) and custom SQL query execution outputting styled data tables.
  - **Live Metrics Telemetry**: Real-time updating gauges (DB pool connections, query latency, extraction throughput).
  - **Scraper Pipeline Controller**: Pause/resume toggle and streaming log monitor.
- **Academics & Certifications**: BSCS at **Ilma University** & Data Science Training Course Certification at **NED University** (PITP Phase II).
- **Centralized Configuration**: All profile data, GitHub links (`github_link_here`), and live demo URLs are stored in `js/config.js` for instant updates.

---

## 📁 Project Structure

```text
my-portfolio/
├── index.html        # Main HTML layout with all portfolio sections
├── server.js         # Node.js / Express static web server
├── package.json      # Dependencies and npm start scripts
├── .gitignore        # Ignores node_modules, env files, and OS artifacts
├── css/
│   └── style.css     # CSS custom design system, glassmorphism & dashboard styling
└── js/
    ├── config.js     # Editable personal details, project metadata & links
    ├── dashboard.js  # Interactive SQL simulator & telemetry engine
    └── main.js       # Navigation, skill filtering, modals & contact validation
```

---

## 🛠️ Local Installation & Run

1. Clone or download this repository:
   ```bash
   git clone https://github.com/github_link_here/my-portfolio.git
   cd my-portfolio
   ```

2. Start the local development server:
   ```bash
   npm start
   ```

3. Open your browser at:
   `http://localhost:3000`

---

## ⚙️ Updating GitHub Links & Portfolio Data

All project links, social URLs, and bio text can be edited in [`js/config.js`](js/config.js):

```javascript
const PORTFOLIO_CONFIG = {
    socials: {
        github: "https://github.com/YOUR_GITHUB_USERNAME",
        linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
        upwork: "https://upwork.com/freelancers/YOUR_UPWORK_ID"
    }
};
```

---

## 📄 License
Created by Muhammad Mubashir Farooq.
