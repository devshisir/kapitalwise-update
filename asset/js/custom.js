$(document).ready(function () {

    // mobile menu toggle
    $('.mobileMenuToggle button').on('click',function(){
        $('#mobileMenuContent').toggleClass('toggle');
    })
    $('.menuClose').on('click',function(){
        $('#mobileMenuContent').toggleClass('toggle');
    })


    // testmonial slider active
    $('.testmonial__slider__active').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    // calencer js active
    // script link https://www.jqueryscript.net/demo/powerful-calendar/
    function selectDate(date) {
        $('.calendar-container').updateCalendarOptions({
          date: date
        });
    }
    $('.calendar-container').calendar({
        weekDayLength: 1,
        date: new Date(),
        onClickDate: selectDate,
        showYearDropdown: true,
        showTodayButton:false,
    });






});