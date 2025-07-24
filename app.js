// PM Portfolio Template - Complete JavaScript
// ===========================================
// Holds all interactive functionality & data rendering

/*****************
 *  DATA MODELS  *
 *****************/
const portfolioData = {
  caseStudies: [
    {
      id: 1,
      title: "B2B SaaS Dashboard Launch",
      company: "TechCorp Solutions",
      thumbnail: "dashboard-project.jpg",
      brief: "Led the development of an analytics dashboard that increased user engagement by 45%",
      context: "TechCorp's enterprise clients were struggling with data visibility across their operations, leading to delayed decision-making and customer churn.",
      role: "Lead Product Manager",
      research: "Conducted 50+ user interviews, analyzed competitor solutions, and identified key pain points in current workflow",
      solution: "Designed a real-time analytics dashboard with customizable widgets, automated reporting, and predictive insights",
      implementation: "Worked with a team of 8 engineers and 2 designers using Agile methodology over 6 months",
      results: {
        userEngagement: "+45%",
        churnReduction: "-30%",
        revenue: "+$2.3M ARR",
        nps: "+32 points"
      },
      learnings: "The importance of continuous user feedback and iterative design in B2B products"
    },
    {
      id: 2,
      title: "Mobile App Feature Redesign",
      company: "FoodDelivery Pro",
      thumbnail: "mobile-redesign.jpg",
      brief: "Redesigned checkout flow resulting in 25% increase in conversion rate",
      context: "High cart abandonment rate (68%) was impacting revenue growth and customer satisfaction",
      role: "Senior Product Manager",
      research: "A/B tested 5 different checkout flows, conducted usability studies with 100+ users",
      solution: "Streamlined 5-step checkout to 2-steps with smart defaults and one-click ordering",
      implementation: "Phased rollout over 3 sprints with continuous monitoring and optimization",
      results: {
        conversionRate: "+25%",
        cartAbandonment: "-40%",
        avgOrderValue: "+15%",
        checkoutTime: "-60%"
      },
      learnings: "Small UX improvements can have massive business impact when applied to high-traffic features"
    },
    {
      id: 3,
      title: "Marketplace Growth Strategy",
      company: "LocalServices Inc",
      thumbnail: "marketplace-growth.jpg",
      brief: "Scaled two-sided marketplace from 10K to 100K active users in 12 months",
      context: "New marketplace struggling with chicken-and-egg problem - needed both service providers and customers",
      role: "Product Manager - Growth",
      research: "Market analysis, cohort analysis, and supply-demand dynamics study",
      solution: "Implemented referral program, tiered pricing, and geographic expansion strategy",
      implementation: "Cross-functional collaboration with marketing, ops, and engineering teams",
      results: {
        userGrowth: "10x in 12 months",
        gmv: "+$15M",
        retention: "70% monthly",
        supplySide: "+5000 providers"
      },
      learnings: "Balancing supply and demand requires different strategies at different growth stages"
    }
  ],
  skills: {
    technical: ["SQL", "Python", "HTML/CSS", "Google Analytics", "Mixpanel"],
    product: ["User Research", "A/B Testing", "Roadmapping", "Agile/Scrum", "Data Analysis"],
    tools: ["Jira", "Figma", "Notion", "Amplitude", "Segment", "Tableau"],
    soft: ["Leadership", "Communication", "Problem Solving", "Strategic Thinking"]
  },
  projects: [
    {
      name: "PM Interview Prep App",
      type: "Side Project",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Built a web app to help aspiring PMs practice case interviews with AI feedback"
    },
    {
      name: "Market Analysis Tool",
      type: "Hackathon Winner",
      tech: ["Python", "Streamlit", "APIs"],
      description: "Created a tool that aggregates market data for competitive analysis"
    }
  ],
  testimonials: [
    {
      quote: "One of the most data-driven and user-focused PMs I've worked with. Their ability to balance business goals with user needs is exceptional.",
      author: "Sarah Chen",
      role: "VP of Product",
      company: "TechCorp Solutions"
    },
    {
      quote: "A strategic thinker who can also dive deep into technical details. They transformed our product development process.",
      author: "Michael Rodriguez",
      role: "Engineering Manager",
      company: "FoodDelivery Pro"
    },
    {
      quote: "Their marketplace growth strategies were instrumental in our success. A true product leader.",
      author: "Amanda Johnson",
      role: "CEO",
      company: "LocalServices Inc"
    }
  ]
};

const experienceData = [
  {
    role: "Senior Product Manager",
    company: "TechCorp Solutions",
    duration: "2022 - Present",
    accomplishments: [
      "Led B2B dashboard launch increasing user engagement by 45%",
      "Managed product roadmap for $5M+ ARR product line",
      "Built cross-functional relationships with engineering and design"
    ]
  },
  {
    role: "Product Manager",
    company: "FoodDelivery Pro",
    duration: "2020 - 2022",
    accomplishments: [
      "Redesigned checkout flow improving conversion by 25%",
      "Launched A/B testing framework used across 5+ product teams",
      "Reduced customer support tickets by 30% through UX improvements"
    ]
  },
  {
    role: "Associate Product Manager",
    company: "LocalServices Inc",
    duration: "2018 - 2020",
    accomplishments: [
      "Scaled marketplace from 10K to 100K active users",
      "Implemented growth strategy generating $15M+ GMV",
      "Collaborated with operations team on supply-side growth"
    ]
  }
];

/**********************
 *  DOM REFERENCES    *
 **********************/
const headerEl = document.getElementById('header');
const navEl = document.getElementById('nav');
const hamburgerEl = document.getElementById('hamburger');

/********************
 *  INITIALISATION  *
 ********************/
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderCaseStudies();
  renderSkills();
  renderProjects();
  renderExperience();
  renderTestimonials();
  initContactForm();
  initScrollAnimations();
  setCurrentYear();
});

/***********************
 *  NAVIGATION & HEADER*
 ***********************/
function initNavigation() {
  // Hamburger toggle
  if (hamburgerEl) {
    hamburgerEl.addEventListener('click', () => {
      navEl.classList.toggle('nav--open');
      hamburgerEl.classList.toggle('hamburger--active');
    });
  }

  // Auto-close mobile nav after click
  navEl.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navEl.classList.remove('nav--open');
      hamburgerEl.classList.remove('hamburger--active');
    });
  });

  // Header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      headerEl.classList.add('header--scrolled');
    } else {
      headerEl.classList.remove('header--scrolled');
    }
  });
}

/*****************
 *  CASE STUDIES *
 *****************/
function renderCaseStudies() {
  const container = document.getElementById('caseGrid');
  if (!container) return;

  portfolioData.caseStudies.forEach(cs => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.innerHTML = `
      <div class="case-card__body">
        <h3 class="case-card__title">${cs.title}</h3>
        <p class="case-card__meta">${cs.company}</p>
        <p>${cs.brief}</p>
        <button class="btn btn--secondary case-card__btn" data-toggle="${cs.id}">View Details</button>
        <div class="case-details" id="case-details-${cs.id}">
          ${buildCaseDetails(cs)}
        </div>
      </div>`;
    container.appendChild(card);
  });

  // Delegated toggle listener
  container.addEventListener('click', e => {
    const btn = e.target.closest('[data-toggle]');
    if (!btn) return;
    const id = btn.getAttribute('data-toggle');
    toggleCaseDetails(id, btn);
  });
}

function buildCaseDetails(cs) {
  return `
    <div class="detail-section"><h4>Context & Problem</h4><p>${cs.context}</p></div>
    <div class="detail-section"><h4>My Role</h4><p>${cs.role}</p></div>
    <div class="detail-section"><h4>Research & Discovery</h4><p>${cs.research}</p></div>
    <div class="detail-section"><h4>Solution & Strategy</h4><p>${cs.solution}</p></div>
    <div class="detail-section"><h4>Implementation</h4><p>${cs.implementation}</p></div>
    <div class="detail-section"><h4>Results & Impact</h4><ul>${Object.entries(cs.results).map(([k,v])=>`<li><strong>${formatKey(k)}:</strong> ${v}</li>`).join('')}</ul></div>
    <div class="detail-section"><h4>Key Learnings</h4><p>${cs.learnings}</p></div>`;
}

function toggleCaseDetails(id, btnEl) {
  const details = document.getElementById(`case-details-${id}`);
  if (!details) return;
  const card = details.closest('.case-card');
  card.classList.toggle('case-card--open');
  btnEl.textContent = card.classList.contains('case-card--open') ? 'Hide Details' : 'View Details';
}

/***********
 *  SKILLS *
 ***********/
function renderSkills() {
  const wrapper = document.getElementById('skillsWrapper');
  if (!wrapper) return;

  Object.entries(portfolioData.skills).forEach(([category, skills]) => {
    const section = document.createElement('div');
    section.className = 'skill-category';
    section.innerHTML = `<h3 class="skill-category__title">${formatKey(category)} Skills</h3>` +
      skills.map(skill => `
        <div class="skill-item">
          <span>${skill}</span>
          <div class="skill-bar"><div class="skill-bar__fill"></div></div>
        </div>`).join('');
    wrapper.appendChild(section);
  });
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar__fill').forEach((bar, idx) => {
    setTimeout(() => {
      const pct = 70 + Math.floor(Math.random() * 30); // 70-100%
      bar.style.width = pct + '%';
    }, idx * 120);
  });
}

/*************
 *  PROJECTS *
 *************/
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  portfolioData.projects.forEach(prj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${prj.name}</h3>
      <p class="project-tech">${prj.type} • ${prj.tech.join(', ')}</p>
      <p>${prj.description}</p>`;
    grid.appendChild(card);
  });
}

/****************
 *  EXPERIENCE  *
 ****************/
function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;

  experienceData.forEach(exp => {
    const li = document.createElement('li');
    li.className = 'timeline-item';
    li.innerHTML = `
      <h3 class="timeline-item__role">${exp.role}</h3>
      <p class="timeline-item__company">${exp.company} • ${exp.duration}</p>
      <ul>${exp.accomplishments.map(a=>`<li>${a}</li>`).join('')}</ul>`;
    timeline.appendChild(li);
  });
}

/****************
 * TESTIMONIALS *
 ****************/
function renderTestimonials() {
  const track = document.getElementById('testimonialTrack');
  if (!track) return;
  portfolioData.testimonials.forEach(t => {
    const slide = document.createElement('div');
    slide.className = 'testimonial';
    slide.innerHTML = `
      <blockquote class="testimonial__quote">“${t.quote}”</blockquote>
      <cite><strong>${t.author}</strong><br>${t.role}, ${t.company}</cite>`;
    track.appendChild(slide);
  });

  let idx = 0;
  const prev = document.getElementById('testimonialPrev');
  const next = document.getElementById('testimonialNext');
  const total = portfolioData.testimonials.length;

  const update = () => track.style.transform = `translateX(-${idx * 100}%)`;

  prev.addEventListener('click', () => {
    idx = idx === 0 ? total - 1 : idx - 1;
    update();
  });
  next.addEventListener('click', () => {
    idx = idx === total - 1 ? 0 : idx + 1;
    update();
  });
}

/*****************
 * CONTACT FORM  *
 *****************/
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData);

    // Validation
    if (!values.name || !values.email || !values.subject || !values.message) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate successful submit
    showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
    form.reset();
  });

  function showStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = `form-status status status--${type}`;
    statusEl.classList.remove('hidden');
    setTimeout(()=>statusEl.classList.add('hidden'), 5000);
  }
}

/********************
 *  SCROLL ANIMATIONS*
 *********************/
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        if (entry.target.id === 'skills') animateSkillBars();
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll('.section').forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(24px)';
    sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(sec);
  });
}

/*****************
 *  UTILITIES    *
 *****************/
function formatKey(str) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, ch => ch.toUpperCase());
}

function setCurrentYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

// Expose toggle (for inline  attribute fallback)
window.toggleCaseDetails = toggleCaseDetails;
