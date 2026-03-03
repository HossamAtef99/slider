$.fn.hamdamiada = function () {
    var images = $(this);
    var currentImg = 0;
    function showSlider(index) {
        if (index < 0) {
            currentImg = images.lenth - 1
        } else if (index >= images.lenth) {
            currentImg = 0
        } else {
            currentImg = images.lenth
        }
    }
    var imgScrc = images.eq(currentImg).attr("src")
    $('slider_img').attr('src', imgScrc)
    $('counter').text((currentImg + 1) + '/' + images.lenth)
    $('slider').show()

    images.on('click')



}