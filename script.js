// Select the element
const greeting = document.getElementById('greeting');

// Change text on click
greeting.addEventListener('click', () => {
  greeting.textContent = "Thanks for visiting my site!";
});