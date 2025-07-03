document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
  } else {
    console.warn("Burger or nav not found in DOM");
  }
});
