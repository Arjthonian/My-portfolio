import './style.css';
import { ThreeScene } from './three-scene';
import { supabase } from './supabase';

const canvas = document.querySelector('#three-canvas') as HTMLCanvasElement;
if (canvas) {
  new ThreeScene(canvas);
}

const AUTHORIZED_EMAIL = 'Arjanbarua100@gmail.com';
const AUTHORIZED_UID = '24ac7106-6a10-4693-a3eb-350656274b31';

// Project Interface
interface Project {
  id?: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  created_at?: string;
}

// The "Featured" projects for the Home Page
const INITIAL_PROJECTS: Project[] = [
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
];

// Global State
let dbProjects: Project[] = [];
let allProjects: Project[] = [];
let isLoading = false;

let currentAuthView: 'login' | 'signup' = 'login';
let currentDashboardTab: 'projects' | 'security' = 'projects';

async function fetchProjects() {
  isLoading = true;
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
    dbProjects = [];
  } else {
    dbProjects = data || [];
  }

  const uniqueInitial = INITIAL_PROJECTS.filter(ip =>
    !dbProjects.some(dbp => dbp.title.toLowerCase() === ip.title.toLowerCase())
  );
  allProjects = [...dbProjects, ...uniqueInitial];
  isLoading = false;
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        label: 'GitHub',
        url: 'https://github.com/Arjthonian'
      },
    ],
  },
};

const navbarHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <a href="#/" class="nav-logo">AB</a>
      <div class="nav-links">
        <a href="#/" class="nav-link">Home</a>
        <a href="#/projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    </div>
  </nav>
`;

function renderLoading() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <div style="height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: var(--space-md);">
      <div style="width: 40px; height: 40px; border: 3px solid rgba(0, 240, 255, 0.1); border-top-color: var(--color-accent-cyan); border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <p style="color: var(--color-accent-cyan); font-family: var(--font-primary);">Loading Experience...</p>
    </div>
    <style> @keyframes spin { to { transform: rotate(360deg); } } </style>
  `;
}

// Render Home Page
function renderHomePage() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    ${navbarHTML}
    <!-- Hero Section -->
    <section class="hero section" id="home">
      <div class="container">
        <div class="hero-content">
          <img src="/${portfolioData.hero.photo}" alt="${portfolioData.hero.name}" class="hero-photo" />
          <h1 class="hero-title">${portfolioData.hero.name}</h1>
          <p class="hero-tagline">${portfolioData.hero.tagline}</p>
          <div class="hero-cta">
            <a href="#/projects" class="btn btn-primary">
              <span>View My Projects</span>
            </a>
            <a href="/Arjan%20Barua%20Resume.pdf" target="_blank" class="btn btn-secondary" id="cv-download">
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

    <!-- Featured Projects (Home Page Only) -->
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Selected Works</h2>
          <p class="section-subtitle">Excellence in web architecture and design</p>
        </div>
        <div class="projects-grid">
          ${INITIAL_PROJECTS.map((p, i) => renderProjectCard(p, i)).join('')}
        </div>
        <div style="text-align: center; margin-top: var(--space-3xl);">
          <a href="#/projects" class="btn btn-secondary">
            <span>Explore All Projects →</span>
          </a>
        </div>
      </div>
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

  attachCommonListeners();
}

// Render Project Card
function renderProjectCard(project: Project, index: number) {
  const imageUrl = project.image.startsWith('data:image') || project.image.startsWith('http') ? project.image : `/${project.image}`;
  return `
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
      <div class="project-card float-slow" style="animation-delay: ${index * 0.15}s">
        <div style="height: 240px; overflow: hidden; position: relative;">
          <img src="${imageUrl}" 
               onerror="this.src='https://placehold.co/600x400/080810/ffffff?text=${encodeURIComponent(project.title)}'"
               alt="${project.title}" 
               class="project-image" />
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag: string) => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </a>
  `;
}

// Render Projects Page
function renderProjectsPage() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    ${navbarHTML}
    <section class="section" style="padding-top: var(--space-3xl);">
      <div class="container">
        <div class="section-header" style="margin-top: var(--space-xl);">
          <h1 class="section-title">All Projects</h1>
          <p class="section-subtitle">A collection of my recent work and experiments</p>
        </div>
        ${isLoading ?
      `<div style="text-align: center; color: var(--color-accent-cyan);">Fetching projects...</div>` :
      `<div class="projects-grid">
              ${allProjects.map((project, index) => renderProjectCard(project, index)).join('')}
            </div>`
    }
        <div style="text-align: center; margin-top: var(--space-3xl);">
          <a href="#/" class="btn btn-secondary">
            <span>← Back to Home</span>
          </a>
        </div>
      </div>
    </section>
  `;

  attachCommonListeners();
  window.scrollTo(0, 0);
}

// Render Admin Login Page
function renderAdminLoginPage() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="admin-container glass-card" style="text-align: center; max-width: 450px; margin: 0 auto;">
          <div style="display: flex; gap: 10px; margin-bottom: 20px; justify-content: center;">
            <button id="tab-login" class="btn ${currentAuthView === 'login' ? 'btn-primary' : 'btn-secondary'}" style="flex: 1;">Login</button>
            <button id="tab-signup" class="btn ${currentAuthView === 'signup' ? 'btn-primary' : 'btn-secondary'}" style="flex: 1;">Sign Up</button>
          </div>

          <h1 class="section-title" style="font-size: var(--font-size-2xl); margin-bottom: var(--space-xl);">
            Admin ${currentAuthView === 'login' ? 'Access' : 'Registration'}
          </h1>
          
          <form id="admin-auth-form">
            <div class="admin-form-group" style="text-align: left;">
              <label for="admin-email">Email Address</label>
              <input type="email" id="admin-email" class="admin-input" placeholder="email@example.com" required>
            </div>
            <div class="admin-form-group" style="text-align: left; margin-top: 15px;">
              <label for="admin-password">Password</label>
              <input type="password" id="admin-password" class="admin-input" placeholder="••••••••" required>
            </div>
            <button type="submit" id="btn-auth-submit" class="btn btn-primary" style="width: 100%; margin-top: var(--space-lg);">
              <span>${currentAuthView === 'login' ? 'Enter Dashboard' : 'Create Account'}</span>
            </button>
          </form>
          <p id="auth-error" style="color: #ef4444; font-size: var(--font-size-sm); margin-top: var(--space-md); display: none; background: rgba(239, 68, 68, 0.1); padding: 10px; border-radius: 8px;">
          </p>
        </div>
      </div>
    </section>
  `;

  document.getElementById('tab-login')?.addEventListener('click', () => { currentAuthView = 'login'; renderAdminLoginPage(); });
  document.getElementById('tab-signup')?.addEventListener('click', () => { currentAuthView = 'signup'; renderAdminLoginPage(); });

  const form = document.querySelector('#admin-auth-form') as HTMLFormElement;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = (document.querySelector('#admin-email') as HTMLInputElement).value;
    const password = (document.querySelector('#admin-password') as HTMLInputElement).value;
    const btn = document.querySelector('#btn-auth-submit') as HTMLButtonElement;
    const errorMsg = document.querySelector('#auth-error') as HTMLParagraphElement;

    errorMsg.style.display = 'none';

    // Check for authorization before even attempting Supabase auth
    if (email.toLowerCase() !== AUTHORIZED_EMAIL.toLowerCase()) {
      errorMsg.innerText = 'Unauthorized email address.';
      errorMsg.style.display = 'block';
      return;
    }

    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span>${currentAuthView === 'login' ? 'Authenticating...' : 'Creating...'}</span>`;

    let result;
    if (currentAuthView === 'signup') {
      result = await supabase.auth.signUp({ email, password });
    } else {
      result = await supabase.auth.signInWithPassword({ email, password });
    }

    if (result.error) {
      errorMsg.innerText = result.error.message;
      errorMsg.style.display = 'block';
      btn.disabled = false;
      btn.innerHTML = originalText;
    } else {
      const user = result.data.user;
      // FINAL UID CHECK
      if (user && (user.id === AUTHORIZED_UID || user.email?.toLowerCase() === AUTHORIZED_EMAIL.toLowerCase())) {
        if (currentAuthView === 'signup') {
          alert('Account created! Please check your email for verification.');
          currentAuthView = 'login';
          renderAdminLoginPage();
        } else {
          window.location.hash = '#/admin/dashboard';
        }
      } else {
        await supabase.auth.signOut();
        errorMsg.innerText = 'Unauthorized UID/Email.';
        errorMsg.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    }
  });
}

// Render Admin Dashboard
async function renderAdminDashboard() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session || session.user.id !== AUTHORIZED_UID) {
    await supabase.auth.signOut();
    window.location.hash = '#/admin';
    return;
  }

  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <section class="section" style="padding-top: var(--space-3xl); display: block; height: auto;">
      <div class="container" style="max-width: 1200px;">
        <div class="admin-header">
          <div>
            <h1 class="section-title" style="font-size: var(--font-size-3xl);">Dashboard</h1>
            <p class="section-subtitle" style="margin: 0; text-align: left;">Welcome, Arjan</p>
          </div>
          <div style="display: flex; gap: var(--space-md); align-items: center;">
            <div class="dashboard-tabs" style="display: flex; gap: 10px; margin-right: 20px;">
                <button id="dash-tab-projects" class="btn ${currentDashboardTab === 'projects' ? 'btn-primary' : 'btn-secondary'}">Projects</button>
                <button id="dash-tab-security" class="btn ${currentDashboardTab === 'security' ? 'btn-primary' : 'btn-secondary'}">Security</button>
            </div>
            <button id="btn-logout" class="btn btn-secondary">
              <span>Logout</span>
            </button>
          </div>
        </div>

        ${currentDashboardTab === 'projects' ? renderProjectsTab() : renderSecurityTab()}

      </div>
    </section>

    <!-- Modal for adding/editing project -->
    <div id="project-modal" class="modal-overlay">
      <div class="modal-content glass-card">
        <div style="margin-bottom: var(--space-xl); text-align: center;">
          <h2 id="modal-title" style="font-family: var(--font-primary); font-size: var(--font-size-3xl); background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Add New Project</h2>
          <div style="width: 50px; height: 3px; background: var(--gradient-primary); margin: var(--space-sm) auto; border-radius: var(--radius-full);"></div>
        </div>
        
        <form id="project-form">
          <input type="hidden" name="id">
          
          <div class="admin-form-group">
            <label>Project Title</label>
            <input type="text" name="title" class="admin-input" placeholder="Enter project name" required>
          </div>
          
          <div class="admin-form-group">
            <label>Description</label>
            <textarea name="description" class="admin-input" style="height: 150px; resize: none;" placeholder="Briefly describe your work..." required></textarea>
          </div>
          
          <div class="admin-form-group">
            <label>Project URL</label>
            <input type="url" name="url" class="admin-input" placeholder="https://..." required>
          </div>
          
          <div class="admin-form-group">
            <label>Project Image</label>
            <div id="image-preview-container" style="margin-bottom: 10px; display: none;">
                <img id="image-preview" src="" style="width: 100%; height: 150px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.1);">
            </div>
            <input type="file" id="project-image-file" class="admin-input" accept="image/*" style="padding: 10px;">
            <input type="hidden" name="image">
            <small style="color: var(--color-text-muted); font-size: 10px; margin-top: 4px; display: block;">Choose a picture from your computer.</small>
          </div>
          
          <div class="admin-form-group">
            <label>Tags (comma separated)</label>
            <input type="text" name="tags" class="admin-input" placeholder="React, TypeScript, Three.js">
          </div>
          
          <div class="modal-button-grid">
            <button type="submit" id="btn-save-project" class="btn btn-primary"><span>Save Project</span></button>
            <button type="button" id="btn-cancel-modal" class="btn btn-secondary"><span>Cancel</span></button>
          </div>
        </form>
      </div>
    </div>
  `;

  // Dashboard Tab Listeners
  document.getElementById('dash-tab-projects')?.addEventListener('click', () => { currentDashboardTab = 'projects'; renderAdminDashboard(); });
  document.getElementById('dash-tab-security')?.addEventListener('click', () => { currentDashboardTab = 'security'; renderAdminDashboard(); });

  // Common Listeners
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.hash = '#/';
  });

  if (currentDashboardTab === 'projects') {
    attachProjectTabListeners();
  } else {
    attachSecurityTabListeners();
  }
}

function renderProjectsTab() {
  return `
    <div style="display: flex; justify-content: flex-end; gap: var(--space-md); margin-bottom: var(--space-xl);">
        <button id="btn-add-project" class="btn btn-primary">
            <span>+ Add New Project</span>
        </button>
    </div>
    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${isLoading ? `<tr><td colspan="4" style="text-align: center;">Loading...</td></tr>` :
      dbProjects.map((p) => `
            <tr>
              <td>
                <div style="font-weight: 600; color: var(--color-text-primary);">${p.title}</div>
                <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">${p.url}</div>
              </td>
              <td style="max-width: 300px; font-size: var(--font-size-sm);">${p.description}</td>
              <td>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  ${p.tags.map(t => `<span class="project-tag" style="padding: 2px 6px; font-size: 10px;">${t}</span>`).join('')}
                </div>
              </td>
              <td>
                <div style="display: flex; gap: 8px;">
                  <button class="btn-edit" onclick="editProject('${p.id}')">Edit</button>
                  <button class="btn-delete" onclick="deleteProject('${p.id}')">Delete</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderSecurityTab() {
  return `
    <div class="glass-card" style="max-width: 500px; margin: 40px auto; padding: 40px;">
        <h2 class="section-title" style="font-size: var(--font-size-2xl); margin-bottom: var(--space-xl); text-align: center;">Change Password</h2>
        <form id="change-password-form">
            <div class="admin-form-group">
                <label>Old Password</label>
                <input type="password" id="old-password" class="admin-input" placeholder="Enter current password" required>
            </div>
            <div class="admin-form-group" style="margin-top: 15px;">
                <label>New Password</label>
                <input type="password" id="new-password" class="admin-input" placeholder="Minimum 6 characters" required minlength="6">
            </div>
            <div class="admin-form-group" style="margin-top: 15px;">
                <label>Confirm New Password</label>
                <input type="password" id="confirm-password" class="admin-input" placeholder="Repeat new password" required minlength="6">
            </div>
            <button type="submit" id="btn-change-pwd-submit" class="btn btn-primary" style="width: 100%; margin-top: 30px;">
                <span>Update Password</span>
            </button>
        </form>
        <p id="password-feedback" style="margin-top: 15px; text-align: center; display: none; padding: 10px; border-radius: 8px;"></p>
    </div>
  `;
}

function attachProjectTabListeners() {
  const modal = document.getElementById('project-modal')!;
  const form = document.getElementById('project-form') as HTMLFormElement;
  const imageFileInput = document.getElementById('project-image-file') as HTMLInputElement;
  const imagePreviewContainer = document.getElementById('image-preview-container') as HTMLDivElement;
  const imagePreview = document.getElementById('image-preview') as HTMLImageElement;
  const imageHiddenInput = form.querySelector('input[name="image"]') as HTMLInputElement;

  document.getElementById('btn-add-project')?.addEventListener('click', () => {

    form.reset();
    (form.querySelector('input[name="id"]') as HTMLInputElement).value = '';
    imagePreviewContainer.style.display = 'none';
    imagePreview.src = '';
    imageHiddenInput.value = '';
    document.getElementById('modal-title')!.innerText = 'Add New Project';
    modal.classList.add('active');
  });

  document.getElementById('btn-cancel-modal')?.addEventListener('click', () => modal.classList.remove('active'));

  // Image Preview Logic
  imageFileInput.addEventListener('change', () => {
    const file = imageFileInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        imagePreview.src = base64;
        imageHiddenInput.value = base64; // Store as text string
        imagePreviewContainer.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-save-project') as HTMLButtonElement;
    btn.disabled = true;
    btn.innerHTML = '<span>Saving...</span>';

    const formData = new FormData(form);
    const id = formData.get('id') as string;
    const imageUrl = imageHiddenInput.value;

    if (!imageUrl) {
      alert('Please select an image for the project.');
      btn.disabled = false;
      btn.innerHTML = '<span>Save Project</span>';
      return;
    }

    const projectData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      url: formData.get('url') as string,
      image: imageUrl,
      tags: (formData.get('tags') as string).split(',').map(t => t.trim()).filter(t => t !== ''),
    };

    let error;
    if (id) {
      const result = await supabase.from('projects').update(projectData).eq('id', id);
      error = result.error;
    } else {
      const result = await supabase.from('projects').insert([projectData]);
      error = result.error;
    }

    if (error) {
      alert('Error saving project: ' + error.message);
      btn.disabled = false;
      btn.innerHTML = '<span>Save Project</span>';
    } else {
      await fetchProjects();
      renderAdminDashboard();
    }
  });

  (window as any).editProject = (id: string) => {
    const project = dbProjects.find(p => p.id === id);
    if (project) {

      document.getElementById('modal-title')!.innerText = 'Edit Project';
      (form.querySelector('input[name="id"]') as HTMLInputElement).value = project.id || '';
      (form.querySelector('input[name="title"]') as HTMLInputElement).value = project.title;
      (form.querySelector('textarea[name="description"]') as HTMLTextAreaElement).value = project.description;
      (form.querySelector('input[name="url"]') as HTMLInputElement).value = project.url;

      imageHiddenInput.value = project.image || '';
      if (project.image) {
        imagePreview.src = project.image.startsWith('data:image') || project.image.startsWith('http') ? project.image : `/${project.image}`;
        imagePreviewContainer.style.display = 'block';
      } else {
        imagePreviewContainer.style.display = 'none';
      }

      (form.querySelector('input[name="tags"]') as HTMLInputElement).value = project.tags.join(', ');
      modal.classList.add('active');
    }
  };

  (window as any).deleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) {
        alert('Error deleting project: ' + error.message);
      } else {
        await fetchProjects();
        renderAdminDashboard();
      }
    }
  };
}

function attachSecurityTabListeners() {
  const form = document.getElementById('change-password-form') as HTMLFormElement;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const oldPwd = (document.getElementById('old-password') as HTMLInputElement).value;
    const newPwd = (document.getElementById('new-password') as HTMLInputElement).value;
    const confirmPwd = (document.getElementById('confirm-password') as HTMLInputElement).value;
    const btn = document.getElementById('btn-change-pwd-submit') as HTMLButtonElement;
    const feedback = document.getElementById('password-feedback') as HTMLParagraphElement;

    feedback.style.display = 'none';

    if (newPwd !== confirmPwd) {
      feedback.innerText = 'New passwords do not match.';
      feedback.style.color = '#ef4444';
      feedback.style.background = 'rgba(239, 68, 68, 0.1)';
      feedback.style.display = 'block';
      return;
    }

    btn.disabled = true;
    btn.innerHTML = '<span>Verifying...</span>';

    // Verify old password by re-authenticating
    const { error: reAuthError } = await supabase.auth.signInWithPassword({
      email: AUTHORIZED_EMAIL,
      password: oldPwd
    });

    if (reAuthError) {
      feedback.innerText = 'Incorrect old password.';
      feedback.style.color = '#ef4444';
      feedback.style.background = 'rgba(239, 68, 68, 0.1)';
      feedback.style.display = 'block';
      btn.disabled = false;
      btn.innerHTML = '<span>Update Password</span>';
      return;
    }

    btn.innerHTML = '<span>Updating...</span>';
    const { error } = await supabase.auth.updateUser({ password: newPwd });

    if (error) {
      feedback.innerText = error.message;
      feedback.style.color = '#ef4444';
      feedback.style.background = 'rgba(239, 68, 68, 0.1)';
      btn.disabled = false;
      btn.innerHTML = '<span>Update Password</span>';
    } else {
      feedback.innerText = 'Password updated successfully!';
      feedback.style.color = '#10b981';
      feedback.style.background = 'rgba(16, 185, 129, 0.1)';
      form.reset();
      btn.disabled = false;
      btn.innerHTML = '<span>Update Password</span>';
    }
    feedback.style.display = 'block';
  });
}

function attachCommonListeners() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLElement, e: Event) {
      const href = this.getAttribute('href');
      if (window.location.hash !== '#/' && href && href.startsWith('#') && !href.startsWith('#/')) {
        return;
      }
      if (href && !href.startsWith('#/')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const cvButton = document.getElementById('cv-download');
  if (cvButton) {
    cvButton.addEventListener('click', function (e: Event) {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = '/Arjan%20Barua%20Resume.pdf';
      link.download = 'Arjan_Barua_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
  }, observerOptions);

  document.querySelectorAll('.glass-card, .skill-card, .project-card').forEach((el) => {
    observer.observe(el);
  });
}

// Router
async function router() {
  const path = window.location.pathname;
  const hash = window.location.hash;
  const { data: { session } } = await supabase.auth.getSession();

  // Redirect path to hash for SPA compatibility
  if (path !== '/' && !hash) {
    window.location.hash = `#${path}`;
    window.history.replaceState(null, '', '/');
    return;
  }

  const route = hash || '#/';

  if (allProjects.length === 0 && (route === '#/projects' || route === '#/admin/dashboard' || route === '#/')) {
    renderLoading();
    await fetchProjects();
  }

  if (route === '#/projects') {
    renderProjectsPage();
  } else if (route === '#/admin') {
    // Force sign out to ensure credentials are required every time
    await supabase.auth.signOut();
    renderAdminLoginPage();
  } else if (route === '#/admin/dashboard') {
    if (!session || session.user.id !== AUTHORIZED_UID) {
      await supabase.auth.signOut();
      window.location.hash = '#/admin';
    } else {
      await renderAdminDashboard();
    }
  } else if (route === '#/' || route.startsWith('#')) {
    // Check if it's a known home section vs a bad route
    const isFragment = route.startsWith('#') && !route.startsWith('#/');

    if (route === '#/' || isFragment) {
      renderHomePage();
      if (isFragment) {
        setTimeout(() => {
          const target = document.querySelector(route);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else {
      render404();
    }
  } else {
    render404();
  }
}

function render404() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    ${navbarHTML}
    <div style="height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: var(--space-md); text-align: center; padding: 20px;">
      <h1 class="section-title" style="font-size: 8rem; margin: 0; filter: blur(2px); opacity: 0.5;">404</h1>
      <h2 style="font-family: var(--font-primary); color: var(--color-text-primary);">Page Not Found</h2>
      <p style="color: var(--color-text-muted); max-width: 400px;">The link you followed may be broken, or the page may have been removed.</p>
      <a href="#/" class="btn btn-primary" style="margin-top: 20px;"><span>Back to Safety</span></a>
    </div>
  `;
}

// Initialize
window.addEventListener('hashchange', router);
router();

// Cursor glow
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `position: fixed; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%); pointer-events: none; transform: translate(-50%, -50%); z-index: 9999; transition: opacity 0.3s; opacity: 0;`;
document.body.appendChild(cursorGlow);
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  cursorGlow.style.opacity = '1';
});
document.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; });
