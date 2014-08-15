(function ($) {
    $(document).ready(function () {


//        /* Dynamic top menu positioning
//         *
//         */
//
//        var num = 70; //number of pixels before modifying styles
//
//        $(window).bind('scroll', function () {
//            if ($(window).scrollTop() > num) {
//                $('nav').addClass('fixed');
//            } else {
//                $('nav').removeClass('fixed');
//            }
//        });
//        /*************************************/
        var nav = $('.menu');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 95) {
                nav.addClass("f-nav");
               

            } else {
                nav.removeClass("f-nav");
            }
        });

        $(window).stellar();

        $('#frm-first form').validate();
        $('#frm-second form').validate();

        $('.feedback form').validate();

        $(".fancybox").fancybox();
        //$(".iframe").fancybox();


        // Grab the current date
        var currentDate = new Date();

        // Set some date in the future

        var futureDate = new Date(2014, 06, 29, 00, 00, 00);

        // Calculate the difference in seconds between the future and current date
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        if (diff < 0) diff = 0;

        //Instantiate a coutdown FlipClock

    });
})(jQuery);



(function ($) {
    // Counter

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var now = new Date();
    var timer;
    var startDay = 4;
    var start = new Date(2013, 1, startDay, 23, 59, 59);
    var distance = now - start;
    var day = Math.floor(distance / _day);
    day = day - Math.floor(day / 3) * 3;
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + day, 23, 59, 59);

    function showRemaining() {
        var now = new Date();
        now.setMinutes(1);
        var distance = end - now;
        var days = Math.floor(distance / _day);
        if (days < 10) days = '0' + days;
        var hours = Math.floor((distance % _day) / _hour);
        if (hours < 10) hours = '0' + hours;
        var minutes = Math.floor((distance % _hour) / _minute);
        if (minutes < 10) minutes = '0' + minutes;
        var seconds = Math.floor((distance % _minute) / _second);
        if (seconds < 10) seconds = '0' + seconds;

//        $(".count_line .d").html(days);
        $(".count_line .h").html(hours);
        $(".count_line .m").html(minutes);
        $(".count_line .s").html(seconds);
    }
    showRemaining();
    timer = setInterval(showRemaining, 1000);

})(jQuery);
(function ($) {
    $(document).ready(function(){
        $('a[href*=youtube]').each(function () {
            // convert youtube swf href to embed for iframe
            var thisHref = this.href.replace(new RegExp("watch\\?v=", "i"), 'embed/').replace(new RegExp("&", "i"), '?');
            // bind fancybox to each anchor
            $(this).fancybox({
                "padding": 0,
                "type": 'iframe',
                // add trailing parameters to href (wmode)
                "href" : thisHref+"&amp;wmode=opaque"
            }); // fancybox
        }); // each
    }); // ready
})(jQuery);



