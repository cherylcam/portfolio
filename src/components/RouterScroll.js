import { Component } from 'react';
import { withRouter } from "react-router-dom";
import $ from "jquery";

class RouterScroll extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location && this.props.location.pathname !== '/about/') {
      window.scrollTo(0, 0);
    } else if (this.props.location.pathname === '/about/'){
      window.scrollTo(0,document.body.scrollHeight);
    }

    if( this.props.location.pathname === '/' ){
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
    }else{
      $(function() {
        
        $('#hamburger span:first-child').css({
          'background-color': '#262626',
        });

        $('#hamburger span:last-child').css({
          'background-color': '#262626',
        });

        $('.line1, .line2').css({
          'stroke' : '#262626',
        });

        $('.svg-fill').css({
          'fill' : '#262626',
        });

        $('header .contact-wrap a svg').css({
          'border': '1px solid #262626',
        });

        $('#hamburger').click(function () {
          const open = $('#hamburger').hasClass("open");

          if(!open){
            $('#hamburger span:first-child').css({
              'background-color': '#262626',
            });
    
            $('#hamburger span:last-child').css({
              'background-color': '#262626',
            });

            $('body').css({
              'overflow' : 'auto',
            });

            $('#light-logo').css({
              'display': 'none',
            });

            $('#dark-logo').css({
              'display': 'block',
            });

            $('.line1, .line2').css({
              'stroke' : '#262626',
            });
        
            $('.svg-fill').css({
              'fill' : '#262626',
            });
        
            $('header .contact-wrap a svg').css({
              'border': '1px solid #262626',
            });

          }else{
            $('#hamburger span:first-child').css({
              'background-color': 'white',
            });
    
            $('#hamburger span:last-child').css({
              'background-color': 'white',
            });

            $('body').css({
              'overflow' : 'hidden',
            });

            $('#light-logo').css({
              'display': 'block',
            });

            $('#dark-logo').css({
              'display': 'none',
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

        $('li a').click(function(){
          $('#hamburger span:first-child').css({
            'background-color': '#262626',
          });
  
          $('#hamburger span:last-child').css({
            'background-color': '#262626',
          });

          $('body').css({
            'overflow' : 'auto',
          });
        
          $('#light-logo').css({
            'display': 'none',
          });
        
          $('#dark-logo').css({
            'display': 'block',
          });
        
          $('.line1, .line2').css({
            'stroke' : '#262626',
          });
        
          $('.svg-fill').css({
            'fill' : '#262626',
          });
        
          $('header .contact-wrap a svg').css({
            'border': '1px solid #262626',
          });
        });
        
        $('#homelink').click(function(){
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
        });
      });
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(RouterScroll)