$(document).ready(function () {
    $('.FAQ__item').on('click', function () {
        console.log('click');
        $(this).find('.FAQ__answer').slideToggle(300);
    })
})

