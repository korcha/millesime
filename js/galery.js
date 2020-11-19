$(document).ready(function() {

    var array_img=[], img_view, number_img=0;

    function createGalery(){
        $('.galery__foto .item_img').each(function() {
            var img_src= $(this).attr('src');
            array_img.push(img_src);

            return array_img;
        });
    }

    createGalery();

    function nextViewImg(){
        number_img+=1;

        if(number_img>array_img.length){
            number_img=0;
        }

        $('.carousel__img img').attr('src', array_img[number_img]);
    }

    function prevViewImg(){
        number_img-=1;

        if(number_img<0){
            number_img=array_img.length;
        }

        $('.carousel__img img').attr('src', array_img[number_img]);
    }

    $('.carousel__arrow.slider-arrow--next').bind('click', function() {
        nextViewImg();
    });

    $('.carousel__arrow.slider-arrow--prev').bind('click', function() {
        prevViewImg();
    });

    $('.carousel__close').bind('click', function() {
        $('.carousel__view').css('display', 'none');
    });

    $('.galery__foto .item_img').bind('click', function() {
        img_view=$(this).attr('src');
        $('.carousel__view').css('display', 'flex')
        $('.carousel__img img').attr('src', img_view);
    });

});