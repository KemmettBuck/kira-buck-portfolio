window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const greeting = document.getElementById('greeting');
  console.log("JS file is running!");

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      // Switch icon
      const darkModeOn = document.body.classList.contains('dark-mode');
      themeIcon.textContent = darkModeOn? '☀️' : '🌙';
    });
  }

  if (greeting) {
    greeting.addEventListener('click', () => {
      if (greeting.textContent === "Hi, I'm Kira Buck") {
        greeting.textContent = "Thanks for visiting my site!";
      } else {
        greeting.textContent = "Hi, I'm Kira Buck";
      }

      greeting.classList.toggle('fade');
    });
  }
});

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: Change button text based on mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = "Toggle Light Mode";
  } else {
    toggleButton.textContent = "Toggle Dark Mode";
  }
});

