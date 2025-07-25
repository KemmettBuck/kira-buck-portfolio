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

    const name = document.getElementById('name').value || 'there';
    const message = document.createElement('p');

    message.textContent = `Thanks, ${name}! I'll be in touch soon.`;
    message.style.marginTop = '1rem';
    message.style.fontWeight = 'bold';
    message.style.color = document.body.classList.contains('dark-mode') ? '#e0e0e0' : '#333';
    message.classList.add('thank-you');

    const existing = contactForm.querySelector('.thank-you');
    if (existing) existing.remove();

    contactForm.appendChild(message);
    contactForm.reset();
  });
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
