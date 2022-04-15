// Слайдер
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Табы
document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn-active')
    });
    e.currentTarget.classList.add('tabs-nav__btn-active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item-active');
  });
});

// Аккордеон
$(".accordion").accordion({
  heightStyle: "content"
});

// Меню
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#header__nav').classList.add('header__nav-active')
  })
  document.querySelector('#menu__icon').addEventListener('click', function(){
    document.querySelector('#header__nav').classList.remove('header__nav-active')
  })
})

//поиск
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#header__seach__btn').addEventListener('click', function(){
    document.querySelector('#seach-form').classList.add('seach-form__active')
  })
  document.querySelector('#seach-closed').addEventListener('click', function(){
    document.querySelector('#seach-form').classList.remove('seach-form__active')
  })
})
