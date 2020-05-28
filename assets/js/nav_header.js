$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 3em) {
                    $("#scrollHeader h1 a").css("font-weight", "900");
                    $("#scrollHeader h1 a").css("color", "red");
                } else {
                    $("#scrollHeader h1 a").css("font-weight", "normal");
                    $("#scrollHeader h1 a").css("color", "yellow");
                }
            });
        });
