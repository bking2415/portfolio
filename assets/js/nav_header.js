// https://stackoverflow.com/questions/8755887/jquery-change-background-color-user-scroll

$(document).ready(function(){       
            var scroll_pos = $(document).scrollTop();
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 48) {
                    $("#scrollHeader h1 a").css("font-weight", "900");
                } else {
                    $("#scrollHeader h1 a").css("font-weight", "normal");
                }
            });
        });
