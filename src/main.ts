import './style.css';
import { ThreeScene } from './three-scene';


const canvas = document.querySelector('#three-canvas') as HTMLCanvasElement;
if (canvas) {
  new ThreeScene(canvas);
}


const portfolioData = {
  hero: {
    name: 'ARJAN BARUA',
    tagline: 'Full Stack Developer',
    photo: 'arjan-photo.jpg',
  },
  about: {
    title: 'About Me',
    description: `Full Stack Developer specializing in Website Development, Web Application Development, and Android App Development. 
    I create modern, scalable solutions with clean code and exceptional user experiences. 
    Passionate about building innovative applications that solve real-world problems.`,
  },
  skills: [
    {
      name: 'Frontend Development',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%; filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.6));">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>`,
      description: 'React, Vue, TypeScript, Three.js',
    },
    {
      name: 'UI/UX Design',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%; filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      </svg>`,
      description: 'Figma, Canva, Responsive Design',
    },
    {
      name: 'Backend & Database',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%; filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.6));">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>`,
      description: 'Node.js, Php, MongoDB, Supabase',
    },
  ],
  projects: [
    {
      title: 'Your Market',
      description: 'A premium full-stack e-commerce platform featuring dynamic product discovery, flash deals, and a seamless shopping experience.',
      image: 'project_your_market.png',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'E-commerce'],
      url: 'https://your-market.vercel.app/',
    },
    {
      title: 'Life Link',
      description: 'A comprehensive healthcare platform connecting patients with medical services',
      image: 'project_life_link.png',
      tags: ['React', 'Healthcare', 'Web App'],
      url: 'https://life-link-ashen.vercel.app/',
    },
    {
      title: 'Chillbrary',
      description: 'Modern digital library platform for book lovers and readers',
      image: 'project_chillbrary.png',
      tags: ['Next.js', 'Books', 'Library'],
      url: 'https://chillbrary.vercel.app/',
    },
  ],
  contact: {
    title: 'Let\'s Connect',
    description: 'Ready to bring your ideas to life? Let\'s create something amazing together.',
    links: [
      { icon: '📧', label: 'Email', url: 'mailto:Arjanbarua100@gmail.com' },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/arjan-barua-4a67a738b'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        label: 'GitHub',
        url: 'https://github.com/Arjthonian'
      },
    ],
  },
};

// Render Portfolio
function renderPortfolio() {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  app.innerHTML = `
    <!-- Hero Section -->
    <section class="hero section" id="home">
      <div class="container">
        <div class="hero-content">
          <img src="/${portfolioData.hero.photo}" alt="${portfolioData.hero.name}" class="hero-photo" />
          <h1 class="hero-title">${portfolioData.hero.name}</h1>
          <p class="hero-tagline">${portfolioData.hero.tagline}</p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">
              <span>View Projects</span>
            </a>
            <a href="/Black%20and%20Grey%20Simple%20Infographic%20Resume.pdf" target="_blank" class="btn btn-secondary" id="cv-download">
              <span>📄 Download CV</span>
            </a>
            <a href="#contact" class="btn btn-secondary">
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
      <div class="scroll-indicator"></div>
    </section>

    <!-- About Section -->
    <section class="section" id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${portfolioData.about.title}</h2>
        </div>
        <div class="glass-card float" style="max-width: 800px; margin: 0 auto;">
          <p style="font-size: var(--font-size-lg); line-height: 1.8; text-align: center;">
            ${portfolioData.about.description}
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Expertise</h2>
          <p class="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div class="skills-grid">
          ${portfolioData.skills
      .map(
        (skill, index) => `
            <div class="skill-card float${index % 2 === 0 ? '' : '-delayed'}" style="animation-delay: ${index * 0.1}s">
              <div class="skill-icon">
                ${skill.icon}
              </div>
              <h3 class="skill-name">${skill.name}</h3>
              <p class="skill-description">${skill.description}</p>
            </div>
          `
      )
      .join('')}
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">A showcase of my recent work</p>
        </div>
        <div class="projects-grid">
          ${portfolioData.projects
      .map(
        (project, index) => `
            <a href="${(project as any).url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
              <div class="project-card float-slow" style="animation-delay: ${index * 0.15}s">
                <img src="/${project.image}" 
                     alt="${project.title}" 
                     class="project-image" />
                <div class="project-content">
                  <h3 class="project-title">${project.title}</h3>
                  <p class="project-description">${project.description}</p>
                  <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
                  </div>
                </div>
              </div>
            </a>
          `
      )
      .join('')}
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section" id="contact">
      <div class="container">
        <div class="contact-container">
          <div class="section-header">
            <h2 class="section-title">${portfolioData.contact.title}</h2>
            <p class="section-subtitle">${portfolioData.contact.description}</p>
          </div>
          <div class="contact-links">
            ${portfolioData.contact.links
      .map(
        (link) => `
              <a href="${link.url}" class="contact-link float" target="${link.url.startsWith('mailto:') ? '_self' : '_blank'}" rel="noopener noreferrer" aria-label="${link.label}">
                <span>${link.icon}</span>
              </a>
            `
      )
      .join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  // Add smooth scroll behavior for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });

  // Handle CV download
  const cvButton = document.getElementById('cv-download');
  if (cvButton) {
    cvButton.addEventListener('click', function (e: Event) {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = '/Black%20and%20Grey%20Simple%20Infographic%20Resume.pdf';
      link.download = 'Arjan_Barua_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }


  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.glass-card, .skill-card, .project-card').forEach((el) => {
    observer.observe(el);
  });
}

// Initialize the portfolio
renderPortfolio();

// Add cursor glow effect
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: opacity 0.3s;
  opacity: 0;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});
