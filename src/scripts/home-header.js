import $ from "jquery";

$(function() {
   $('#hamburger span:first-child').css({
      'background-color': 'white',
   });

   $('#hamburger span:last-child').css({
      'background-color': 'white',
   });

   $('body').css({
      'overflow' : 'hidden',
   });

   $('.line1, .line2').css({
      'stroke' : 'white',
   });

   $('.svg-fill').css({
      'fill' : 'white',
   });

   $('header .contact-wrap a svg').css({
      'border': '1px solid white',
   });

   $('#hamburger').click(function () {
      const open = $('#hamburger').hasClass("open");

      if(!open){
         $('#hamburger span:first-child').css({
            'background-color': 'white',
         });

         $('#hamburger span:last-child').css({
            'background-color': 'white',
         });

         $('.line1, .line2').css({
            'stroke' : 'white',
         });
      
         $('.svg-fill').css({
            'fill' : 'white',
         });
      
         $('header .contact-wrap a svg').css({
            'border': '1px solid white',
         });

      }else{
         $('#hamburger span:first-child').css({
            'background-color': 'white',
         });

         $('#hamburger span:last-child').css({
            'background-color': 'white',
         });

         $('.line1, .line2').css({
            'stroke' : 'white',
         });
      
         $('.svg-fill').css({
            'fill' : 'white',
         });
      
         $('header .contact-wrap a svg').css({
            'border': '1px solid white',
         });
      }
   });
});