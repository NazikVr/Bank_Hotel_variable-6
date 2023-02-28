let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: "swiper-pagination",
  },
  loop: true,
  mousewhell: true,
  keyboard: true,

  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },

  speed: 1000,
  spaceBetween: 0,
});


$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        }
      }
    ]
  });
});

const tabs = document.querySelectorAll(".placement-scheme__tab");
const contents = document.querySelectorAll(".placement-scheme__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(tab => tab.classList.remove("active"))
    tab.classList.add("active");

    contents.forEach((c) => c.classList.remove("active"));

    contents[index].classList.add("active");
  })
});

tabs[1].click();

// $('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
  
// })