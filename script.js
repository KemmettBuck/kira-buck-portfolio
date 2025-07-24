window.addEventListener("DOMContentLoaded", () => {
  console.log("JS file is running!");

  const greeting = document.getElementById('greeting');

  if (greeting) {
    greeting.addEventListener('click', () => {
      if (greeting.textContent === "Hi, I'm Kira Buck") {
        greeting.textContent = "Thanks for visiting my site!";
      } else {
        greeting.textContent = "Hi, I'm Kira Buck";
      }

      greeting.classList.add('fade');
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

