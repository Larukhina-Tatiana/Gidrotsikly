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
$(".tabs__link").on('click', function (e) {
  e.preventDefault();

  $(".tabs__link").removeClass("tabs__link--active");
  $(".tabs__content").removeClass("tabs__content--active");

  $(this).addClass("tabs__link--active");
  $($(this).attr("href")).addClass("tabs__content--active");
});

// Иконка фаворит становиться залитой

$(".products__card-favorite").on("click", function () {
  $(this).toggleClass("products__card-favorite--active");
});


$(function () {
  $(".products__slider").slick({
    //     dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="products__slider-arrow products__slider-arrow-next"><svg class="products__slider-svg" width="15" height="28" aria-label="next arrow"><use href="./images/icons.svg#next"></use></svg></button> ',
    prevArrow:
      '<button type="button" class="products__slider-arrow products__slider-arrow-prev"><svg class="products__slider-svg" width="15" height="28" aria-label="prev arrow"><use href="./images/icons.svg#prev"></use></svg></button> ',
  });
});

// var mixer = mixitup(".portfolio__box", {
//   load: {
//     filter: ".branding",
//   },
// });

