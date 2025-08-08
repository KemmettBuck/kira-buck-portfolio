window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const greeting = document.getElementById('greeting');
  const contactForm = document.getElementById('contact-form');
  const yearSpan = document.getElementById('year');
  const originalGreeting = "Hi, I'm Kira Buck";
  const alternateGreeting = "Thanks for visiting my site!";

  console.log("JS file is running!");


  // Detect and apply saved or preferred theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  const html = document.documentElement;
  html.classList.toggle('dark-mode', isDark);

  if (themeIcon) {
    themeIcon.textContent = isDark ? '☼' : '☽';
  }

  // Toggle theme
  themeToggle?.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    const nowDark = html.classList.contains('dark-mode');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    if (themeIcon) {
      themeIcon.textContent = nowDark ? '☼' : '☽';
    }
  });

    // Theme toggle for menu
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle?.addEventListener('click', () => {
      mainNav?.classList.toggle('show');
});


    // Animate project cards on scroll
const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

  // Greeting toggle
  greeting?.addEventListener('click', () => {
    greeting.textContent = greeting.textContent === originalGreeting
      ? alternateGreeting
      : originalGreeting;
    greeting.classList.toggle('fade');
  });

  // Contact form handling
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll('.error-message, .thank-you').forEach(el => el.remove());

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    let hasError = false;

    if (!name) {
      const error = document.createElement('div');
      error.textContent = "Please enter your name.";
      error.className = 'error-message';
      nameInput?.after(error);
      hasError = true;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email || !emailPattern.test(email)) {
      const error = document.createElement('div');
      error.textContent = "Please enter a valid email address.";
      error.className = 'error-message';
      emailInput?.after(error);
      hasError = true;
    }

    if (hasError) return;

    const message = document.createElement('p');
    message.textContent = `Thanks, ${name}! I will be in touch soon.`;
    message.className = 'thank-you fade-in';
    contactForm.appendChild(message);

    nameInput.value = '';
    emailInput.value = '';
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn?.classList.add("show");
  } else {
    scrollTopBtn?.classList.remove("show");
  }
});

scrollTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  // Set footer year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
