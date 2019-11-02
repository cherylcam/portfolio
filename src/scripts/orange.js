import $ from "jquery";


$(function() {
    $('body').mousemove(function(e){
      let amountMovedX = (e.pageX* -1/50);
      let amountMovedY = (e.pageY* -1/50);

      $('.orange').css('top', 'calc(55% + '+amountMovedY+'%)');
      $('.orange').css('left', 'calc(65% + '+amountMovedX+'%)');
    });
})