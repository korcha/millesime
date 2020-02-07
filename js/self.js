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

    if($('.degustationpage, .meetingpage').length){
        var $container = $('.galery__foto');
        $container.masonry({
            columnWidth: 200,
            itemSelector: '.item_img',
            percentPosition: true,
            gutter: 20,
            isFitWidth: true
        });
        $container.imagesLoaded().progress( function() {
            $container.masonry('layout');
        });
    }

    $(function(){
        $('a[href*="#"]').on('click', function(event) {
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

    $('.timetable__item').on('mouseover', function() {
        $(this).addClass('active');
        $(this).siblings(".timetable__item").addClass('hide');
    });

    $('.timetable__item').on('mouseleave', function() {
        $(this).removeClass('active');
        $(this).siblings(".timetable__item").removeClass('hide');
    });


    $('.select_list a').bind('click', function(){
        $(this).parents('.select_list').toggleClass('active');
    });
});




