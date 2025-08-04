window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const greeting = document.getElementById('greeting');
  const contactForm = document.getElementById('contact-form');
  const yearSpan = document.getElementById('year');

  const originalGreeting = "Hi, I'm Kira Buck";
  const alternateGreeting = "Thanks for visiting my site!";

  console.log("JS file is running!");

  // Apply saved theme to <html>
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkPreferred = savedTheme === 'dark' || (!savedTheme && prefersDark);

  if (isDarkPreferred) {
    document.documentElement.classList.add('dark-mode');
    if (themeIcon) themeIcon.textContent = '☼';
  } else {
    if (themeIcon) themeIcon.textContent = '☽';
  }

  // Theme toggle button
  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    themeIcon.textContent = isDark ? '☼' : '☽';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Greeting toggle on click
  greeting?.addEventListener('click', () => {
    greeting.textContent = greeting.textContent === originalGreeting ? alternateGreeting : originalGreeting;
    greeting.classList.toggle('fade');
  });

  // Contact form validation and thank-you message
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll('.error-message, .thank-you').forEach(el => el.remove());

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let hasError = false;

    if (!name) {
      const error = document.createElement('div');
      error.textContent = "Please enter your name.";
      error.className = 'error-message';
      nameInput.after(error);
      hasError = true;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email || !emailPattern.test(email)) {
      const error = document.createElement('div');
      error.textContent = "Please enter a valid email address.";
      error.className = 'error-message';
      emailInput.after(error);
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

  // Update footer year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
