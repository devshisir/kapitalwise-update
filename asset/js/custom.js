$(document).ready(function () {
    // testmonial slider active
    $('.testmonial__slider__active').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
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

    // pricing__banner__slider__active
    // $('.pricing__banner__slider__active').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     autoplayTimeout: 7000,
    //     // smartSpeed: 1000,
    //     animateIn: 'fadeIn',
    //     animateOut: 'fadeOut',
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })

    // activate input range slider
    const slider = document.querySelector('.slider');
    const sliderThumb = document.querySelector('.slider__thumb');
    const TolTipSlider = document.querySelector('.toltip__range');
    const SliderProgress = document.querySelector('.rangeProgress');
    const toltipValue = document.querySelector('.toltipValue');

    slider.addEventListener('input',customRangeSlider);
    function customRangeSlider(){
        const valueMain = (slider.value);
        const value = (slider.value / slider.max) * 100 + '%';
        toltipValue.innerHTML = valueMain;
        SliderProgress.style.width = value;
        sliderThumb.style.cssText = `left: ${value}; transform: translate(${value},-50%);`;
    }

    customRangeSlider();

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