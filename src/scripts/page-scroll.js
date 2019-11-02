import $ from 'jquery';
import 'jquery-scrollify';

$(function() {
    $.scrollify({
        section : ".scroll",
        sectionName : "section-name",
        scrollSpeed: 500,
        afterResize:function() {
            if( $(window).width() > 700 ) {
                // $.scrollify.destroy();
                $.scrollify.disable()

                $('.welcome').css({
                    'height': '100vh',
                });

                $('.intro').css({
                    'height': '100%',
                });

                $('.contact').css({
                    'height': '100%',
                });
            }
        },
    });
});

if( $(window).width() > 700 ){
    $.scrollify.disable()
}