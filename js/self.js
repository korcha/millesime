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
        coursesListElems = coursesCarousel.querySelectorAll(".courses__item"), coursesPosition = 0, sliderName, autoCarousel=true;

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
            if (coursesPosition == -840) {
                coursesPosition = 420;
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
    else if (coursesPosition == -840) {
        sliderName = sliderPrevCoursesAuto;
    }

    setInterval(sliderName, 5000);
}

var burger = document.querySelector(".burger"), menu = document.querySelector(".menu"),
    show = burger.querySelector(".show"), hide = burger.querySelector(".hide"), toggleClass = function () {
        burger.classList.toggle("burger--active"), menu.classList.toggle("menu--active"), document.body.classList.toggle("body--menu")
    };
show.onclick = toggleClass, hide.onclick = toggleClass;

var hover_block= function(){
    document.querySelector(".degustation_about").classList.add('active');
}
var out_block= function(){
    document.querySelector(".degustation_about").classList.remove('active');
}

var degustation=document.querySelector(".degustation_link");
if (degustation) {
    degustation.onmouseover = hover_block;
    degustation.onmouseout = out_block;
}

var changeLang= function(){
    document.querySelector(".lang_list").classList.toggle('active');
}

document.querySelector(".language").onclick=changeLang;


$(document).ready(function() {

    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();

            var click_item = $(this).attr("href"),
                scroll_item = $(click_item).offset().top;

            $('html, body').animate({scrollTop: scroll_item}, 1000);
        });
    });

    $('.courses__status a').bind('click', function() {
        $(this).parents().find('a').removeClass('active');
        $(this).addClass('active');
    });

    $('#form_other_date').bind('click', function() {
        $('.coursepage__form').find('input, textarea').removeAttr('hidden');
    });

    $('#form_sign_up').bind('click', function() {
        $('.coursepage__form').find('.date, .participant, .comments').attr('hidden', 'hidden');
    });

});




