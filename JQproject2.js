$.fn.imgSlider = function () {
    var images = $(this);
    var currentImg = 0;
    function showSlider(index) {
        if (index < 0) {
            currentImg = images.length - 1;
        }
        else if (index >= images.length) {
            currentImg = 0;
        } else {
            currentImg = index;
        }
        var imgScrc = images.eq(currentImg).attr('src');
        $('#slider_img').attr('src', imgScrc);
        $('#counter').text((currentImg + 1) + ' / ' + images.length);
        $('#slider').show();
    }
    $(this).on('click', function () {
        currentImg = images.index(this);
        showSlider(currentImg);
    });
    $('#slider').on('click', '#next_btn', function () {
        currentImg++;
        showSlider(currentImg);
    });
    $('#slider').on('click', '#prev_btn', function () {
        currentImg--;
        showSlider(currentImg);
    });
    $('#slider').on('click', '#close_btn', function () {
        $('#slider').hide();
    });
    return this;
};


