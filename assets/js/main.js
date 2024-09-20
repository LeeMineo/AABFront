document.addEventListener('DOMContentLoaded', function () {
  // Scroll Up/Down 버튼 기능 구현
  const scrollUpBtn = document.getElementById('home-scroll-up');
  const scrollDownBtn = document.getElementById('home-scroll-down');

  if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', function () {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    });
  }

  // 뉴스 카드 넘김 기능 구현
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const carousel = document.querySelector('.carousel');
  const cardWidth = document.querySelector('.news-card').offsetWidth; // 카드 한 개의 너비 계산
  let scrollAmount = 0;

  nextBtn.addEventListener('click', () => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (scrollAmount < maxScrollLeft) {
      scrollAmount += cardWidth; // 카드 한 개 너비만큼 이동
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  });

  prevBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
      scrollAmount -= cardWidth; // 카드 한 개 너비만큼 이동
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  });
});
