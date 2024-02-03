"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Selection2 Swiper
  var selection2Swipers = document.querySelectorAll(".selection2Swiper");

  selection2Swipers.forEach(function (element) {
    var selection2Swiper = new Swiper(element, {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    element.addEventListener("mouseenter", function () {
      console.log("Mouse entered");
      selection2Swiper.autoplay.stop();
    });

    element.addEventListener("mouseleave", function () {
      console.log("Mouse left");
      selection2Swiper.autoplay.start();
    });
  });

  // Switch selection2
  const selectionItems2 = document.querySelectorAll(".selection2Item");
  const activeLinks2 = document.querySelectorAll(".selection2Item .btn");
  const bannerItems2 = document.querySelectorAll(".banner-item2");

  selectionItems2.forEach((item, index) => {
    item.addEventListener("click", function () {
      console.log("Item clicked");

      // Remove the 'active' class from all menu items and banner items
      selectionItems2.forEach((selectionItem) => {
        selectionItem.classList.remove("active");
      });

      bannerItems2.forEach((bannerItem) => {
        bannerItem.classList.remove("active");
      });

      activeLinks2.forEach((activeLink) => {
        activeLink.classList.remove("active");
      });

      // Add the 'active' class to the clicked menu item and corresponding banner item
      item.classList.add("active");
      bannerItems2[index].classList.add("active");
      activeLinks2[index].classList.add("active");
    });
  });

  // Opening hours Swiper
  var imageSwiper = new Swiper(".myImageSwiper", {
    spaceBetween: 80,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Mobile Menu Icon
  let menu = document.querySelector(".mobile-menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
  };
  window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
  };

  // Hero Swiper JS Code
  var heroSwiper = new Swiper(".heroContent", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2600,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Pause autoplay on mouse enter
  document
    .querySelector(".heroContent")
    .addEventListener("mouseenter", function () {
      heroSwiper.autoplay.stop();
    });

  // Resume autoplay on mouse leave
  document
    .querySelector(".heroContent")
    .addEventListener("mouseleave", function () {
      heroSwiper.autoplay.start();
    });

  // Selection Menu Swiper
  var selectionSwipers = document.querySelectorAll(".selectionSwiper");

  selectionSwipers.forEach(function (element) {
    var selectionSwiper = new Swiper(element, {
      spaceBetween: 60,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    element.addEventListener("mouseenter", function () {
      console.log("Mouse entered");
      selectionSwiper.autoplay.stop();
    });

    element.addEventListener("mouseleave", function () {
      console.log("Mouse left");
      selectionSwiper.autoplay.start();
    });
  });

  // Switch selection
  const selectionItems = document.querySelectorAll(".selectionItem");
  const activeLinks = document.querySelectorAll(".selectionItem .btn");
  const bannerItems = document.querySelectorAll(".banner-item");

  selectionItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      console.log("Item clicked");

      // Remove the 'active' class from all menu items and banner items
      selectionItems.forEach((selectionItem) => {
        selectionItem.classList.remove("active");
      });

      bannerItems.forEach((bannerItem) => {
        bannerItem.classList.remove("active");
      });

      activeLinks.forEach((activeLink) => {
        activeLink.classList.remove("active");
      });

      // Add the 'active' class to the clicked menu item and corresponding banner item
      item.classList.add("active");
      bannerItems[index].classList.add("active");
      activeLinks[index].classList.add("active");
    });
  });

  // testimonial Menu Swiper
  var testimonialSwiper = new Swiper(".testimonialSwiper", {
    spaceBetween: 60,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addLeadingZero,
      formatFractionTotal: addLeadingZero,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
  }
  document
    .querySelector(".testimonialSwiper")
    .addEventListener("mouseenter", function () {
      testimonialSwiper.autoplay.stop();
    });
  document
    .querySelector(".testimonialSwiper")
    .addEventListener("mouseleave", function () {
      testimonialSwiper.autoplay.start();
    });

  // Date at page bottom
  function loadDate() {
    const display = document.getElementById("year");
    const year = new Date().getFullYear();
    display.innerHTML = year;
  }
  window.onload = () => {
    loadDate();
  };
});
