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

/* 모달 관련 */
document.addEventListener('DOMContentLoaded', function () {
  const loginModal = document.getElementById('login-modal');
  const kakaoModal = document.getElementById('kakao-modal');
  const openLoginPopupBtn = document.querySelector('.btn-signin');
  const openKakaoPopupBtn = document.querySelector('.social-btn img');
  const closeLoginBtn = document.querySelector('.login-close-btn');
  const openSubscribeImage = document.querySelector('.footer-image-container img'); // 이미지 선택
  const openBannerButton = document.querySelector('.banner-button'); // 배너 버튼 선택

  // 팝업 열기 - 로그인 모달 (Sign In 버튼 클릭 시)
  if (openLoginPopupBtn) {
    openLoginPopupBtn.addEventListener('click', function (event) {
      event.preventDefault();
      loginModal.style.display = 'flex';
      kakaoModal.style.display = 'none'; // 카카오 모달을 숨김
    });
  }

  // 팝업 열기 - 카카오 회원가입 모달
  if (openKakaoPopupBtn) {
    openKakaoPopupBtn.addEventListener('click', function (event) {
      event.preventDefault();
      kakaoModal.style.display = 'flex';
      loginModal.style.display = 'none'; // 로그인 모달을 숨김
    });
  }

  // 팝업 열기 - 로그인 모달 (구독 이미지 클릭 시)
  if (openSubscribeImage) {
    openSubscribeImage.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 이미지 클릭 동작 방지
      loginModal.style.display = 'flex'; // 로그인 모달을 표시
      kakaoModal.style.display = 'none'; // 카카오 모달을 숨김
    });
  }

  // 팝업 열기 - 로그인 모달 (배너 버튼 클릭 시)
  if (openBannerButton) {
    openBannerButton.addEventListener('click', function (event) {
      event.preventDefault();
      loginModal.style.display = 'flex'; // 로그인 모달을 표시
      kakaoModal.style.display = 'none'; // 카카오 모달을 숨김
    });
  }

  // 팝업 닫기
  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', function () {
      loginModal.style.display = 'none';
      kakaoModal.style.display = 'none';
    });
  }

  // 배경 클릭 시 팝업 닫기 - 로그인 모달
  loginModal.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // 배경 클릭 시 팝업 닫기 - 카카오 모달
  kakaoModal.addEventListener('click', function (event) {
    if (event.target === kakaoModal) {
      kakaoModal.style.display = 'none';
    }
  });
});



/* 스크롤 관련 */
document.addEventListener("DOMContentLoaded", function () {
  const tournamentListContainer = document.querySelector('.tournament-list-container');
  const toggleUpButton = document.getElementById("toggleUpButton");
  const toggleDownButton = document.getElementById("toggleDownButton");

  // 스크롤 다운 버튼 클릭
  toggleDownButton.addEventListener("click", function () {
    tournamentListContainer.scrollBy({
      top: 150, // Amount to scroll down
      behavior: "smooth"
    });
  });

  // 스크롤 업 버튼 클릭
  toggleUpButton.addEventListener("click", function () {
    tournamentListContainer.scrollBy({
      top: -150, // Amount to scroll up
      behavior: "smooth"
    });
  });

  // 스크롤 이벤트
  tournamentListContainer.addEventListener('scroll', function () {
    const scrollTop = tournamentListContainer.scrollTop;
    const scrollHeight = tournamentListContainer.scrollHeight;
    const clientHeight = tournamentListContainer.clientHeight;

    // 스크롤이 끝에 도달했을 때 Down 버튼 숨기기
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      toggleDownButton.style.display = "none";
    } else {
      toggleDownButton.style.display = "block";
    }

    // 스크롤이 상단을 벗어났을 때 Up 버튼 보이기
    if (scrollTop > 0) {
      toggleUpButton.style.display = "block";
    } else {
      toggleUpButton.style.display = "none";
    }
  });
});
