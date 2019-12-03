"use strict";
var newsCarousel = document.querySelector(".news");
if (newsCarousel) {
    var newsWidth = 450, newsCount = 3, newsList = newsCarousel.querySelector(".news__list"),
        newsListElems = newsCarousel.querySelectorAll(".news__item"), newsPosition = 0;
    newsCarousel.querySelector(".news__arrow.slider-arrow--prev").onclick = function () {
        newsPosition += newsWidth * newsCount, newsPosition = Math.min(newsPosition, 0), newsList.style.marginLeft = newsPosition + "px"
    }, newsCarousel.querySelector(".news__arrow.slider-arrow--next").onclick = function () {
        newsPosition -= newsWidth * newsCount, newsPosition = Math.max(newsPosition, -newsWidth * (newsListElems.length - newsCount)), newsList.style.marginLeft = newsPosition + "px"
    }
}
var coursesCarousel = document.querySelector(".courses");
if (coursesCarousel) {
    var coursesWidth = 420, coursesCount = 1, coursesList = coursesCarousel.querySelector(".courses__list"),
        coursesListElems = coursesCarousel.querySelectorAll(".courses__item"), coursesPosition = 0;
    coursesCarousel.querySelector(".courses__arrow.slider-arrow--prev").onclick = function () {
        coursesPosition += coursesWidth * coursesCount, coursesPosition = Math.min(coursesPosition, 0), coursesList.style.marginLeft = coursesPosition + "px"
    }, coursesCarousel.querySelector(".courses__arrow.slider-arrow--next").onclick = function () {
        coursesPosition -= coursesWidth * coursesCount, coursesPosition = Math.max(coursesPosition, -coursesWidth * (coursesListElems.length - coursesCount)), coursesList.style.marginLeft = coursesPosition + "px"
    }
}
var burger = document.querySelector(".burger"), menu = document.querySelector(".menu"),
    show = burger.querySelector(".show"), hide = burger.querySelector(".hide"), toggleClass = function () {
        burger.classList.toggle("burger--active"), menu.classList.toggle("menu--active"), document.body.classList.toggle("body--menu")
    };
show.onclick = toggleClass, hide.onclick = toggleClass;