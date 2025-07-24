window.addEventListener("DOMContentLoaded", () => {
  console.log("JS file is running!");

  const greeting = document.getElementById('greeting');

  if (greeting) {
    greeting.addEventListener('click', () => {
      greeting.textContent = "Thanks for visiting my site!";
      greeting.classList.add('fade');
    });
  }
});
