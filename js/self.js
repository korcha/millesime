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

    function iframeWidth(block){
        var iframe, url_iframe, str;

        iframe = block.find('iframe');
        url_iframe= iframe.attr('src');
        str=url_iframe.split('&width=').pop().split('&appId')[0];
        url_iframe=url_iframe.replace(str, 'auto');

        iframe.css({'width': '100%', 'height': '100%'});
        iframe.attr('src', url_iframe);
    }

    if($('.reviews__iframe').length){

        $('.reviews__iframe').each(function(){
            iframeWidth($(this));
        });
    }

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


    $('.show_link').on('click', function(){
        $(this).parents('.reviews__item').toggleClass('open');
    });

    $(".form input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "").substr(0, 20);
        $(this).siblings(".filename").text(filename);
        $(this).siblings(".filename").addClass('dwld');
    });

    $(".degustation__viewbox").on("click", ".bx-viewport", function () {

        var index, link;

        $('.bx-pager-link').each(function(){
            if($(this).hasClass('active')) {
                index=$(this).data('slide-index') + 1;
            }

            link=$('.degustation_item:eq('+ index +')').find('a').attr('href');
        });

        $(location).attr('href', link);
    });
});




