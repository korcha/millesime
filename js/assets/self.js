const newsCarousel = document.querySelector(".news");
if (newsCarousel) {
  let newsWidth = 450;
  let newsCount = 3;
  let newsList = newsCarousel.querySelector(".news__list");
  let newsListElems = newsCarousel.querySelectorAll(".news__item");
  let newsPosition = 0;

  newsCarousel.querySelector(
    ".news__arrow.slider-arrow--prev"
  ).onclick = function() {
    newsPosition += newsWidth * newsCount;
    newsPosition = Math.min(newsPosition, 0);
    newsList.style.marginLeft = newsPosition + "px";
  };

  newsCarousel.querySelector(
    ".news__arrow.slider-arrow--next"
  ).onclick = function() {
    newsPosition -= newsWidth * newsCount;
    newsPosition = Math.max(
      newsPosition,
      -newsWidth * (newsListElems.length - newsCount)
    );
    newsList.style.marginLeft = newsPosition + "px";
  };
}
const coursesCarousel = document.querySelector(".courses");
if (coursesCarousel) {
  let coursesWidth = 420;
  let coursesCount = 1;
  let coursesList = coursesCarousel.querySelector(".courses__list");
  let coursesListElems = coursesCarousel.querySelectorAll(".courses__item");
  let coursesPosition = 0;

  coursesCarousel.querySelector(
    ".courses__arrow.slider-arrow--prev"
  ).onclick = function() {
    coursesPosition += coursesWidth * coursesCount;
    coursesPosition = Math.min(coursesPosition, 0);
    coursesList.style.marginLeft = coursesPosition + "px";
  };

  coursesCarousel.querySelector(
    ".courses__arrow.slider-arrow--next"
  ).onclick = function() {
    coursesPosition -= coursesWidth * coursesCount;
    coursesPosition = Math.max(
      coursesPosition,
      -coursesWidth * (coursesListElems.length - coursesCount)
    );
    coursesList.style.marginLeft = coursesPosition + "px";
  };
}
