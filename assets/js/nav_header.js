$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("nav").css('background-color', 'blue');
                    $("nav a").css('color', 'black');
                } else {
                    $("nav").css('background-color', 'red');
                    $("nav a").css('color', 'white');
                }
            });
        });
