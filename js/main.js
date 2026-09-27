/**
 * Main UI Script
 * Muhammad Mubashir Farooq - Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderSkillsFromConfig();
    renderProjectsFromConfig();
    initSkillsFilter();
    initProjectModal();
    initContactForm();
    initTypewriterEffect();
    initScrollAnimations();
});

// Mobile Navigation & Scrollspy
function initNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = navLinks.classList.contains('active') ? 'lucide-x' : 'lucide-menu';
            }
        });
    }

    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(9, 13, 22, 0.95)';
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(9, 13, 22, 0.85)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Render Categorized Skills
function renderSkillsFromConfig() {
    const container = document.getElementById('skills-container');
    if (!container || !window.PORTFOLIO_CONFIG) return;

    let html = '';
    const skillsData = window.PORTFOLIO_CONFIG.skills;

    skillsData.forEach(cat => {
        cat.items.forEach(skill => {
            html += `
                <div class="glass-card skill-card" data-category="${cat.category}">
                    <div class="skill-header">
                        <span class="skill-name">
                            <i class="lucide-${skill.icon || 'code'}"></i>
                            ${skill.name}
                        </span>
                        <span class="skill-badge">${skill.level}%</span>
                    </div>
                    <div class="skill-bar-container">
                        <div class="skill-bar-fill" style="width: 0%" data-target-width="${skill.level}%"></div>
                    </div>
                    <div class="skill-exp">${skill.exp}</div>
                </div>
            `;
        });
    });

    container.innerHTML = html;
}

// Render Projects
function renderProjectsFromConfig() {
    const container = document.getElementById('projects-container');
    if (!container || !window.PORTFOLIO_CONFIG) return;

    let html = '';
    const projects = window.PORTFOLIO_CONFIG.projects;

    projects.forEach(project => {
        let badgeClass = "badge-cyan";
        if (project.accentColor === "emerald") badgeClass = "badge-emerald";
        if (project.accentColor === "indigo") badgeClass = "badge-purple";
        if (project.accentColor === "teal") badgeClass = "badge-amber";

        html += `
            <div class="glass-card project-card" id="project-${project.id}">
                <div class="project-card-header">
                    <div>
                        <span class="badge ${badgeClass} mb-2">${project.badge}</span>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-subtitle">${project.subtitle}</p>
                    </div>
                </div>
                
                <div class="project-body">
                    <p class="project-desc">${project.description}</p>
                    
                    <ul class="project-highlights-list">
                        ${project.highlights.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-footer">
                    <button class="btn btn-outline btn-sm view-project-btn" data-project-id="${project.id}">
                        <i class="lucide-layers"></i> Details
                    </button>
                    <div class="project-links">
                     ${project.githubUrl && project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" title="View Source Code"><i class="lucide-github"></i> GitHub</a>` : ''}
${project.liveUrl && project.liveUrl !== '#' ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" title="View Live Demo"><i class="lucide-external-link"></i> Live</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Skill Filter Tabs
function initSkillsFilter() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');
            const skillCards = document.querySelectorAll('.skill-card');

            skillCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Project Detail Modal
function initProjectModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContentContainer = document.getElementById('modal-body-content');
    const modalClose = document.getElementById('modal-close');

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.view-project-btn');
        if (btn && modalOverlay && modalContentContainer) {
            const projectId = btn.getAttribute('data-project-id');
            const project = window.PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);

            if (project) {
                modalContentContainer.innerHTML = `
                    <span class="badge badge-cyan" style="margin-bottom: 1rem;">${project.category}</span>
                    <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${project.title}</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 1.25rem;">${project.subtitle}</p>
                    
                    <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">${project.description}</p>

                    <h4 style="color: var(--accent-cyan); margin-bottom: 0.75rem;">Key Architecture Highlights</h4>
                    <ul class="project-highlights-list" style="margin-bottom: 1.5rem;">
                        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>

                    <h4 style="color: var(--accent-cyan); margin-bottom: 0.75rem;">Technologies & Frameworks</h4>
                    <div class="project-tags" style="margin-bottom: 2rem;">
                        ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
                    </div>

                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <a href="${project.githubUrl}" target="_blank" class="btn btn-outline" style="flex: 1;">
                            <i class="lucide-github"></i> GitHub Repository
                        </a>
                        <a href="${project.liveUrl}" target="_blank" class="btn btn-primary" style="flex: 1;">
                            <i class="lucide-external-link"></i> Launch Demo
                        </a>
                    </div>
                `;
                modalOverlay.classList.add('active');
            }
        }
    });

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
}

// Contact Form Validation & Toast Notification
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const message = document.getElementById('form-message').value.trim();

            if (!name || !email || !message) {
                showToast("Please fill out all required fields.", "warn");
                return;
            }

            // Simulate submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const origText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="lucide-loader-2 spin"></i> Sending...`;

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origText;
                form.reset();
                showToast("Thank you! Your message has been sent successfully to Muhammad Mubashir Farooq.", "success");
            }, 1200);
        });
    }
}

function showToast(msg, type = "success") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'warn') toast.style.borderColor = 'var(--accent-amber)';

    toast.innerHTML = `
        <i class="lucide-${type === 'success' ? 'check-circle-2' : 'alert-circle'}" style="color: ${type === 'success' ? 'var(--accent-emerald)' : 'var(--accent-amber)'}"></i>
        <span>${msg}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Typewriter effect in Hero terminal
function initTypewriterEffect() {
    const typingElem = document.getElementById('typewriter-text');
    if (!typingElem) return;

    const phrases = [
        "SELECT * FROM developer WHERE focus = 'Backend & Database';",
        "python -m thermorail.analytics --calculate-risk",
        "java -jar ECommercePlatform.jar --db-sync",
        "scrapy crawl market_spider -o json_output.db"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIdx];

        if (isDeleting) {
            typingElem.innerText = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typingElem.innerText = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIdx === currentPhrase.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    type();
}

// Intersection Observer for Skill Bar Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                skillBars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-target-width');
                    if (targetWidth) bar.style.width = targetWidth;
                });
            }
        });
    }, { threshold: 0.2 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
}
