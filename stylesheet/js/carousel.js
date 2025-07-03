<script>
  const cards = document.querySelectorAll('.carousel-track .service-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 1;

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (index === current) {
        card.classList.add('active');
      }
    });
    const offset = (cards[0].offsetWidth + 10) * current;
    document.querySelector('.carousel-track').style.transform = `translateX(calc(50% - ${offset + cards[0].offsetWidth / 2}px))`;
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % cards.length;
    updateCarousel();
  });

  window.addEventListener('load', updateCarousel);
</script>