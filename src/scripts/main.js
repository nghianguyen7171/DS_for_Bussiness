// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else if (systemPrefersDark) {
    html.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    html.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }
  
  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
  
  // Update theme icon
  function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      }
    });
  }
}

// Smooth Scrolling for Anchor Links
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Don't prevent default for links that just point to #
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        history.pushState(null, '', href);
      }
    });
  });
}

// Active Navigation Highlighting
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Initial call
}

// Scroll to Top Button
function initScrollToTop() {
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-to-top';
  scrollButton.setAttribute('aria-label', 'Scroll to top');
  scrollButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--text-primary);
    color: var(--bg-primary);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  `;
  
  document.body.appendChild(scrollButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollButton.style.opacity = '1';
      scrollButton.style.visibility = 'visible';
    } else {
      scrollButton.style.opacity = '0';
      scrollButton.style.visibility = 'hidden';
    }
  });
  
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Table Responsive Enhancement
function enhanceTables() {
  const tables = document.querySelectorAll('table');
  
  tables.forEach(table => {
    if (!table.closest('.schedule-table-wrapper') && !table.closest('.assessment-table-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      wrapper.style.cssText = 'overflow-x: auto; margin: 1.5rem 0;';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });
}

// Lazy Load Images
function initLazyLoad() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// External Links Enhancement
function enhanceExternalLinks() {
  const links = document.querySelectorAll('a[href^="http"]');
  
  links.forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add external link indicator
      if (!link.querySelector('.external-icon')) {
        const icon = document.createElement('span');
        icon.className = 'external-icon';
        icon.innerHTML = ' ↗';
        icon.style.cssText = 'font-size: 0.75em; opacity: 0.6;';
        link.appendChild(icon);
      }
    }
  });
}

// Animation on Scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.card, .instructor-card, .quiz-card, .resource-card');
  
  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      animationObserver.observe(el);
    });
  }
}

// Handlebars Helper Polyfill (for eq comparison)
function registerHandlebarsHelpers() {
  if (typeof Handlebars !== 'undefined') {
    Handlebars.registerHelper('eq', function(a, b) {
      return a === b;
    });
  }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initSmoothScroll();
  initActiveNav();
  initScrollToTop();
  enhanceTables();
  initLazyLoad();
  enhanceExternalLinks();
  initScrollAnimations();
  registerHandlebarsHelpers();
  
  console.log('🎓 Data Science for Business - Course Website Initialized');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Refresh any dynamic content if needed
  }
});

