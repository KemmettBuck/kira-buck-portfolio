window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const greeting = document.getElementById('greeting');
  console.log("JS file is running!");

  // Toggle dark mode
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const darkModeOn = document.body.classList.contains('dark-mode');
    themeIcon.textContent = darkModeOn ? '☀️' : '🌙';
  });

  // Toggle greeting text and fade
  greeting?.addEventListener('click', () => {
    const originalText = "Hi, I'm Kira Buck";
    const newText = "Thanks for visiting my site!";

    greeting.textContent = greeting.textContent === originalText ? newText : originalText;
    greeting.classList.toggle('fade');
  });
});
