const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu-list");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("header__menu-list--active");
});

$(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><svg class="slick-arrow__svg" width="35" height="35" aria-label="next arrow"><use href="./images/icons/icons.svg#icon-arrow-right"></use></svg></button> ',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><svg class="slick-arrow__svg" width="35" height="35" aria-label="prev arrow"><use href="./images/icons/icons.svg#icon-arrow-left"></use></svg></button> ',
  });
});

var mixer = mixitup(".portfolio__box", {
  load: {
    filter: ".branding",
  },
});

