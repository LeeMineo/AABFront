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

/*
document.addEventListener('DOMContentLoaded', function() {
  // 팝업창 관련 요소들 선택
  const openPopupBtn = document.getElementById('open-popup-btn');
  const signupModal = document.getElementById('signup-modal');
  const closeBtn = document.querySelector('.signup-close-btn');

  // 팝업 열기
  openPopupBtn.addEventListener('click', function() {
    signupModal.classList.remove('hidden');  // 팝업 창 표시
  });

  // 팝업 닫기
  closeBtn.addEventListener('click', function() {
    signupModal.classList.add('hidden');  // 팝업 창 숨김
  });

  // 팝업 외부 클릭 시 팝업 닫기
  signupModal.addEventListener('click', function(event) {
    if (event.target === signupModal) {
      signupModal.classList.add('hidden');  // 배경 클릭 시 팝업 닫기
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // 로그인 팝업창 관련 요소들 선택
  const openLoginPopupBtn = document.getElementById('open-login-popup-btn');
  const loginModal = document.getElementById('login-modal');
  const closeLoginBtn = document.querySelector('.login-close-btn');

  // 로그인 팝업 열기
  openLoginPopupBtn.addEventListener('click', function(event) {
    event.preventDefault();  // 링크 기본 동작(페이지 이동) 막기
    loginModal.classList.remove('hidden');  // 팝업 창 표시
  });

  // 로그인 팝업 닫기
  closeLoginBtn.addEventListener('click', function() {
    loginModal.classList.add('hidden');  // 팝업 창 숨김
  });

  // 팝업 외부 클릭 시 팝업 닫기
  loginModal.addEventListener('click', function(event) {
    if (event.target === loginModal) {
      loginModal.classList.add('hidden');  // 배경 클릭 시 팝업 닫기
    }
  });
});
*/

document.addEventListener('DOMContentLoaded', function () {
  const openLoginPopupBtn = document.getElementById('open-login-popup-btn');
  const popupContainer = document.getElementById('popup-container');

  if (openLoginPopupBtn && popupContainer) {
    // 팝업 열기 버튼 클릭 이벤트
    openLoginPopupBtn.addEventListener('click', function (event) {
      event.preventDefault();

      // AJAX로 login.html 불러오기
      fetch('login.html')
        .then(response => response.text())
        .then(data => {
          // login.html 내용을 popupContainer에 삽입
          popupContainer.innerHTML = data;
          popupContainer.classList.remove('hidden');

          // 팝업 닫기 버튼 이벤트 추가
          const closeLoginBtn = popupContainer.querySelector('.login-close-btn');
          closeLoginBtn.addEventListener('click', function () {
            popupContainer.classList.add('hidden');
          });

          // 팝업 외부 클릭 시 닫기
          popupContainer.addEventListener('click', function (event) {
            if (event.target === popupContainer) {
              popupContainer.classList.add('hidden');
            }
          });
        })
        .catch(err => console.error('Failed to load login popup:', err));
    });
  }
});

