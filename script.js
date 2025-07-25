window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');
  const greeting = document.getElementById('greeting');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const darkMode = document.body.classList.contains('dark-mode');
    iconSun.style.display = darkMode ? 'none' : 'inline';
    iconMoon.style.display = darkMode ? 'inline' : 'none';
  });

  if (greeting) {
    greeting.addEventListener('click', () => {
      greeting.textContent =
        greeting.textContent === "Hi, I'm Kira Buck"
          ? "Thanks for visiting my site!"
          : "Hi, I'm Kira Buck";

      greeting.classList.toggle('fade');
    });
  }
});
