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


//토너먼트페이지

document.addEventListener('DOMContentLoaded', function () {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // 모든 탭을 비활성화
      tabLinks.forEach(link => link.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // 클릭된 탭을 활성화
      this.classList.add('active');
      const targetPanel = document.getElementById(this.dataset.tab);
      targetPanel.classList.add('active');
    });
  });
});



//토너먼트페이지 2-2 gallery 카드 넘김 기능 구현
window.addEventListener('load', function () {
  const prevB = document.querySelector('.prevB');
  const nextB = document.querySelector('.nextB');
  const caro = document.querySelector('.caro');
  const cardWidth = document.querySelector('.gallery-card').offsetWidth; // 카드 한 개의 너비 계산
  console.log(cardWidth);

  
    let scrollAmount = 0;

    nextB.addEventListener('click', () => {
      const maxScrollLeft = caro.scrollWidth - caro.clientWidth;
      if (scrollAmount < maxScrollLeft) {
        scrollAmount += cardWidth; // 카드 한 개 너비만큼 이동
        caro.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    });

    prevB.addEventListener('click', () => {
      if (scrollAmount > 0) {
        scrollAmount -= cardWidth; // 카드 한 개 너비만큼 이동
        caro.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    });

});
