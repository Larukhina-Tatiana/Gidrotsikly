// const menuBtn = document.querySelector(".header__menu-btn");
// const menu = document.querySelector(".header__menu-list");
// menuBtn.addEventListener("click", () => {
//   menu.classList.toggle("header__menu-list--active");
// });

$(function () {
  $(".hero__slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="hero__slider-arrow hero__slider-arrow-next"><svg class="hero__slider-svg" width="15" height="28" aria-label="next arrow"><use href="./images/icons.svg#next"></use></svg></button> ',
    prevArrow:
      '<button type="button" class="hero__slider-arrow hero__slider-arrow-prev"><svg class="hero__slider-svg" width="15" height="28" aria-label="prev arrow"><use href="./images/icons.svg#prev"></use></svg></button> ',
  });
});
// ! Tabs
$(".search__tabs-link").on('click', function (e) {
  e.preventDefault();

  $(".search__tabs-link").removeClass("search__tabs-link--active");
  $(".search__content-item").removeClass("search__content-item--active");

  $(this).addClass("search__tabs-link--active");
  $($(this).attr("href")).addClass("search__content-item--active");
});

// var mixer = mixitup(".portfolio__box", {
//   load: {
//     filter: ".branding",
//   },
// });

