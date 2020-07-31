"use strict";


var newsCarousel = document.querySelector(".news");
if (newsCarousel) {
    var newsList = newsCarousel.querySelector(".news__list"),
        newsListElems = newsCarousel.querySelectorAll(".news__item"),
        newsStyle = window.getComputedStyle(document.querySelector(".news__item")), newsCount, newsPosition = 0,
        newsWidth=Number(parseFloat(newsStyle.width, 10)) + Number(parseFloat(newsStyle.marginRight, 10));

    if(document.body.offsetWidth<480){
            newsCount = 1;
     }
    else if(document.body.offsetWidth<800){
            newsCount = 2;
    }
    else{
        newsCount = 3;
    }

    newsCarousel.querySelector(".news__arrow.slider-arrow--prev").onclick = function () {
        newsPosition += newsWidth * newsCount, newsPosition = Math.min(newsPosition, 0), newsList.style.marginLeft = newsPosition + "px";
    }, newsCarousel.querySelector(".news__arrow.slider-arrow--next").onclick = function () {
        newsPosition -= newsWidth * newsCount, newsPosition = Math.max(newsPosition, -newsWidth * (newsListElems.length - newsCount)), newsList.style.marginLeft = newsPosition + "px"
    }
}

var coursesCarousel = document.querySelector(".courses");
if (coursesCarousel) {
    var coursesWidth = 420, coursesCount = 1, coursesList = coursesCarousel.querySelector(".courses__list"),
        coursesListElems = coursesCarousel.querySelectorAll(".courses__item"), coursesPosition = 0, sliderName, autoCarousel=true;

    if(document.body.offsetWidth<440){
        coursesWidth = 300;
    }
    else{
        coursesWidth = 420;
    }

    console.log(window.getComputedStyle(document.querySelector(".courses__item")).width);

    var sliderPrevCourses = function () {
        autoCarousel=false;
        coursesPosition += coursesWidth * coursesCount, coursesPosition = Math.min(coursesPosition, 0), coursesList.style.marginLeft = coursesPosition + "px";
    };

    var sliderNextCourses = function () {
        autoCarousel=false;
        coursesPosition -= coursesWidth * coursesCount, coursesPosition = Math.max(coursesPosition, -coursesWidth * (coursesListElems.length - coursesCount)), coursesList.style.marginLeft = coursesPosition + "px";
    }

    coursesCarousel.querySelector(".courses__arrow.slider-arrow--prev").onclick = sliderPrevCourses;
    coursesCarousel.querySelector(".courses__arrow.slider-arrow--next").onclick = sliderNextCourses;


    var sliderPrevCoursesAuto = function () {
        if(autoCarousel==true) {
            coursesPosition += coursesWidth * coursesCount, coursesPosition = Math.min(coursesPosition, 0), coursesList.style.marginLeft = coursesPosition + "px";

            if (coursesPosition == 0) {
                setInterval(sliderNextCoursesAuto, 5000);
            }
        }
        else{
            document.querySelector(".courses__timer").classList.remove('loading');
        }
    };

    var sliderNextCoursesAuto = function () {
        if (autoCarousel == true) {
            if (coursesPosition == -(coursesWidth*2)) {
                coursesPosition = coursesWidth;
            }
            coursesPosition -= coursesWidth * coursesCount, coursesPosition = Math.max(coursesPosition, -coursesWidth * (coursesListElems.length - coursesCount)), coursesList.style.marginLeft = coursesPosition + "px";
        }
        else{
            document.querySelector(".courses__timer").classList.remove('loading');
        }
    }


    if (coursesPosition == 0) {
        sliderName = sliderNextCoursesAuto;
    }
    else if (coursesPosition == -(coursesWidth*2)) {
        sliderName = sliderPrevCoursesAuto;
    }

    setInterval(sliderName, 5000);
}