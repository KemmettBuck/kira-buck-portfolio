window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const greeting = document.getElementById('greeting');
  const originalGreeting = "Hi, I'm Kira Buck";
  const alternateGreeting = "Thanks for visiting my site!";
  const contactForm = document.getElementById('contact-form');

  console.log("JS file is running!");

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☼';
  }

  // Theme toggle handler
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeIcon.textContent = isDark ? '☼' : '☾';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Greeting toggle
  greeting?.addEventListener('click', () => {
    greeting.textContent = greeting.textContent === originalGreeting ? alternateGreeting : originalGreeting;
    greeting.classList.toggle('fade');
  });

  // Contact form handler
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('.error-message, .thank-you').forEach(else.remove());

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let hasError = false;

  //Validate name
  if (!name) {
    const error = document.createElement('div');
    error.textContent = "Please enter your name.";
    error.className = 'error-message';
    nameInput.after(error);
    hasError = true;
  }

  // Validate email
  if (!email) {
    const error = document.createElement('div');
    error.textContent = "Please enter your email.";
    error.className = 'error-message';
    emailInput.after(error);
    hasError = true;
  }

  if (hasError) return;

  // Show animated thank you message
  const message = document.createElement('p');
  message.textContent = 'Thanks, ${name}! I will be in touch soon.';
  message.className = 'thank you animated message';
  contactForm.appendChild(message);
  contactForm.requestFullscreen();
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
